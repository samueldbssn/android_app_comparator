import{cd as e,H as s,al as o,q as t,m as l,a8 as i,b as r}from"./main.js";import{l as c}from"./layout-c7d0a2f4.js";import{C as a,M as n,h as m,i as u}from"./prefs-9b684fe8.js";var p={oncreate:e,view(){const e=s(null,o(t("clock")));return c.free(e,l("ul.native_scroller.page.settings_list.game",f(d)))}};const d={clockTenths:r.lichessBackedProp("prefs.clockTenths",m.LOWTIME),clockSound:r.lichessBackedProp("prefs.clockSound",!0),moreTime:r.lichessBackedProp("prefs.moretime",u.ALWAYS)};function f(e){return[l("li.list_item",i.renderMultipleChoiceButton(t("tenthsOfSeconds"),a,e.clockTenths)),l("li.list_item",i.renderMultipleChoiceButton(t("soundWhenTimeGetsCritical"),[{label:t("no"),value:!1},{label:t("yes"),value:!0}],e.clockSound)),l("li.list_item",i.renderMultipleChoiceButton(t("giveMoreTime"),n,e.moreTime))]}export default p;export{d as prefsCtrl,f as render};
