import{r as a,g as e,f as t,ax as n,T as s,w as o,a7 as r,ag as i}from"./main.js";function p(){const p=i(!1);return{importGame(i){p(!0),a(),function(a,e){const o={pgn:a};return e&&(o.analyse="1"),t("/import",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest",Accept:"application/vnd.lichess.v"+n.apiVersion+"+json"},body:s(o)},!0)}(i,e.importer.analyse()).then((a=>{o.set(`/analyse/online${a.url.round}`)})).catch((e=>{p(!1),a(),r(e)}))},importing:p}}export{p as I};
