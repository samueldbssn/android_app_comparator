import{W as s}from"./main.js";class n extends s{constructor(){super(),this._lastWindow=null}async open(s){this._lastWindow=window.open(s.url,s.windowName||"_blank")}async close(){return new Promise(((s,n)=>{null!=this._lastWindow?(this._lastWindow.close(),this._lastWindow=null,s()):n("No active window to close!")}))}}const o=new n;export{o as Browser,n as BrowserWeb};
