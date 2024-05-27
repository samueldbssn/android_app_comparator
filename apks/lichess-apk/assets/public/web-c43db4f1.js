import{W as e}from"./main.js";class t extends e{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"==typeof e&&(this.group=e)}async get(e){return{value:this.impl.getItem(this.applyPrefix(e.key))}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){return{keys:this.rawKeys().map((e=>e.substring(this.prefix.length)))}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],i=[],s="_cap_",r=Object.keys(this.impl).filter((e=>0===e.indexOf(s)));for(const a of r){const r=a.substring(s.length),p=null!==(e=this.impl.getItem(a))&&void 0!==e?e:"",{value:n}=await this.get({key:r});"string"==typeof n?i.push(r):(await this.set({key:r,value:p}),t.push(r))}return{migrated:t,existing:i}}async removeOld(){const e=Object.keys(this.impl).filter((e=>0===e.indexOf("_cap_")));for(const t of e)this.impl.removeItem(t)}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter((e=>0===e.indexOf(this.prefix)))}applyPrefix(e){return this.prefix+e}}export{t as PreferencesWeb};
