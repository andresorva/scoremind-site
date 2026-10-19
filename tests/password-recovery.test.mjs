import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../auth/reset/index.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]).filter(x=>x.trim());
function page({hash='',search='',valid=true,sdk=true,fetchStatus=202,fetchError=false}={}) {
 const elements=new Map(); const get=id=>{if(!elements.has(id))elements.set(id,{value:'',disabled:true,textContent:'',className:'',classList:{add(){},toggle(){}},addEventListener(type,fn){this[type]=fn;}});return elements.get(id);};
 const calls=[]; const context={URL,URLSearchParams,Promise,setTimeout,clearTimeout,AbortController,fetch:async(url,options)=>{calls.push(['fetch',url,options]);if(fetchError)throw Error('synthetic transport');return {status:fetchStatus};},navigator:{language:'es'},document:{documentElement:{},getElementById:get,querySelectorAll:()=>[]},history:{replaceState(...args){calls.push(['history',args[2]]);}},window:{location:{hash,search,pathname:'/auth/reset/',href:'https://scoremind.ai/auth/reset/'+search+hash}}};
 if(sdk) context.window.supabase={createClient(_url,_key,options){calls.push(['client',options]);return {auth:{setSession:async()=>{calls.push(['session']);return valid?{data:{session:{}}}:{error:{code:'bad_jwt'}};},getUser:async()=>({data:{user:{id:'fixture'}}}),updateUser:async()=>{calls.push(['update']);return {};},signOut:async()=>{calls.push(['signout']);}}};}};
 vm.createContext(context);scripts.forEach(script=>vm.runInContext(script,context));
 return {elements,get,calls,context};
}
const tick=()=>new Promise(resolve=>setTimeout(resolve,0));
test('removes sensitive URL before SDK, validates before enabling; no automatic password write',async()=>{
 const p=page({hash:'#access_token=synthetic&refresh_token=synthetic&type=recovery'});
 assert.equal(p.calls[0][0],'history'); assert.equal(p.calls[0][1],'/auth/reset/');
 assert.equal(p.get('submit-btn').disabled,true); await tick();
 assert.equal(p.get('submit-btn').disabled,false); assert.equal(p.calls.filter(x=>x[0]==='update').length,0);
 assert.equal(p.context.window.__scoremindRecovery,undefined);
 const options=p.calls.find(x=>x[0]==='client')[1].auth;
 assert.equal(options.persistSession,false);assert.equal(options.detectSessionInUrl,false);
});
test('invalid, PKCE, expired and missing SDK never enable password change',async()=>{
 for(const options of [{},{search:'?code=synthetic'},{hash:'#access_token=a&refresh_token=b&type=recovery',valid:false},{hash:'#access_token=a&refresh_token=b&type=recovery',sdk:false}]) {
 const p=page(options);await tick();assert.equal(p.get('submit-btn').disabled,true);assert.ok(p.get('msg').textContent);assert.equal(p.calls.some(x=>x[0]==='update'),false);
 }
});
test('explicit matching password submits once and clears inputs, language retains errors',async()=>{
 const p=page({hash:'#access_token=a&refresh_token=b&type=recovery'});await tick();
 p.get('pwd1').value='synthetic-test-only';p.get('pwd2').value='synthetic-test-only';
 const event={preventDefault(){}}; const first=p.get('reset-form').submit(event);await p.get('reset-form').submit(event);await first;
 assert.equal(p.calls.filter(x=>x[0]==='update').length,1);assert.equal(p.get('pwd1').value,'');assert.equal(p.get('pwd2').value,'');assert.equal(p.get('submit-btn').disabled,true);
});
test('five locales and Arabic RTL are present; code is removed without losing locale',async()=>{
 const p=page({search:'?lang=ar&code=synthetic'});await tick();assert.equal(p.context.document.documentElement.dir,'rtl');assert.equal(p.calls[0][1],'/auth/reset/?lang=ar');
 for(const locale of ['en','es','pt','fr','ar'])assert.ok(html.includes('      '+locale+': {'));
});

// No real recovery request: fetch is a local in-memory stub.
test('legacy PKCE offers explicit re-request, never automatically sends',async()=>{
 const p=page({search:'?code=synthetic'});await tick();
 assert.equal(p.get('recovery-request-form').hidden,false);
 assert.equal(p.calls.some(x=>x[0]==='fetch'),false);
 p.get('recovery-email').value=' qa@example.com ';
 await p.get('recovery-request-form').submit({preventDefault(){}});
 const request=p.calls.find(x=>x[0]==='fetch');
 assert.equal(request[1],'https://migration-production-dc6e.up.railway.app/api/mobile/session/password-reset');
 assert.deepEqual(JSON.parse(request[2].body),{email:'qa@example.com',locale:'es'});
 assert.equal(request[2].credentials,'omit');assert.equal(p.get('recovery-email').value,'');
 assert.match(p.get('request-msg').textContent,/no confirma la entrega/);
});
test('re-request validates and suppresses duplicate user submissions',async()=>{
 const p=page();await tick();const event={preventDefault(){}};
 p.get('recovery-email').value='invalid';await p.get('recovery-request-form').submit(event);
 assert.equal(p.calls.some(x=>x[0]==='fetch'),false);
 p.get('recovery-email').value='qa@example.com';
 const first=p.get('recovery-request-form').submit(event);await p.get('recovery-request-form').submit(event);await first;
 assert.equal(p.calls.filter(x=>x[0]==='fetch').length,1);
 assert.equal(p.calls.some(x=>x[0]==='update'),false);
});
test('throttled and failed re-request stay neutral, clear email and allow retry',async()=>{
 for(const options of [{fetchStatus:429},{fetchStatus:503},{fetchError:true}]) {
  const p=page(options);await tick();p.get('recovery-email').value='qa@example.com';
  await p.get('recovery-request-form').submit({preventDefault(){}});
  assert.equal(p.get('recovery-email').value,'');assert.equal(p.get('request-link-btn').disabled,false);
  assert.ok(p.get('request-msg').textContent);assert.doesNotMatch(p.get('request-msg').textContent,/synthetic/);
 }
});
test('expired recovery exposes re-request; valid recovery keeps fallback hidden',async()=>{
 const expired=page({hash:'#access_token=a&refresh_token=b&type=recovery',valid:false});await tick();
 assert.equal(expired.get('recovery-request-form').hidden,false);
 const valid=page({hash:'#access_token=a&refresh_token=b&type=recovery'});await tick();
 assert.equal(valid.get('recovery-request-form').hidden,true);
});
