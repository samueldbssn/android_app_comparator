import{r as e,w as a,h as t,a7 as s,b as n,aN as r,m as o,q as i,C as c,g as l,cw as h,cx as u,o as m,E as d,D as b,s as p,F as g,G as T}from"./main.js";import{l as f}from"./layout-e08f9316.js";import{T as v,a as _}from"./TabView-de024605.js";import{s as w,g as S,a as y}from"./teamsXhr-eae1a797.js";class k{constructor(r){this.isSearchOpen=!1,this.onTabChange=a=>{const t=window.location.search.replace(/\?tab=\w+$/,"");try{window.history.replaceState(window.history.state,"",t+"?tab="+a)}catch(e){}this.currentTab=a,e()},this.closeSearch=e=>{"backbutton"!==e&&this.isSearchOpen&&a.backbutton.stack.pop(),this.isSearchOpen=!1},this.onInput=t((a=>{const t=a.target.value.trim();t.length>=3&&w(t).then((a=>{this.searchResults=a,e()}))}),1e3),this.goSearch=()=>{a.backbutton.stack.push(this.closeSearch),this.isSearchOpen=!0},this.goToTeam=e=>{a.set("/teams/"+e.id)},this.currentTab=r||0,S().then((a=>{this.allTeams=a,e()})).catch(s);const o=n.getUserId();o&&y(o).then((a=>{this.myTeams=a,e()})).catch(s)}}function C(e){const a=[{id:"allTeams",f:()=>function(e){if(!e.allTeams)return o("div.loader_container",[b.getVdom("monochrome")]);return o("ul.teamsSuggestion.native_scroller.page",{oncreate:m(j,void 0,d)},[e.allTeams.currentPageResults.map(I)])}(e)},{id:"myTeams",f:()=>function(e){if(!e.myTeams)return o("div.loader_container",[b.getVdom("monochrome")]);return o("ul.teamsSuggestion.native_scroller.page",{oncreate:m(j,void 0,d)},[e.myTeams.map(I)])}(e)}];return[o("div.tabs-nav-header.subHeader",o(v,{buttons:[{label:i("allTeams")},{label:i("myTeams")}],selectedIndex:e.currentTab,onTabChange:e.onTabChange})),o(_,{selectedIndex:e.currentTab,tabs:a,onTabChange:e.onTabChange})]}function j(e){const t=d(e),s=null==t?void 0:t.dataset;s.id&&a.set("/teams/"+s.id)}function I(e,a){return o("li.list_item.teamSuggestion.nav."+(a%2==0?"even":"odd"),{"data-id":e.id},[e.name,o("span.nbMembers",[e.nbMembers])])}var O={oninit({attrs:e}){p.createDefault(),this.ctrl=new k(g(e.tab))},oncreate:T,view(){const e=this.ctrl,a=function(e){return r(o("div.teams_main_header",[o("div.main_header_title",i("teams")),o("button.main_header_button[data-icon=y]",{oncreate:c(e.goSearch)})]))}(e),t=C(e),s=function(e){if(!e.isSearchOpen)return null;const a=["modal","show",l.general.theme.background()].join(" ");return o("div."+a,{id:"searchTeamsModal"},[o("header.main_header",[o("button.main_header_button",{oncreate:c((()=>e.closeSearch()))},[h]),o("div.search_input.allow_select",[o("input",{id:"searchTeams",type:"search",placeholder:i("search"),oninput:e.onInput,autocapitalize:"off",autocomplete:"off",oncreate:u})])]),o("ul.modal_content.native_scroller",{oncreate:m(j,void 0,d)},[e.searchResults?e.searchResults.currentPageResults.map(I):null])])}(e);return f.free(a,t,void 0,s)}};export default O;
