import{m as e,r as a,ce as i,q as t,cz as s,H as n,am as l,g as r,a8 as o}from"./main.js";import{l as c}from"./layout-e08f9316.js";import{v as m}from"./vibrate-5137c134.js";var u={oninit({attrs:e}){this.value=e.prop()},view({attrs:i}){return e("div.check_container",{className:i.disabled?"disabled":""},[e("label",{for:i.name},i.label),e("input[type=checkbox]",{id:i.name,name:i.name,disabled:i.disabled,checked:this.value,onchange:()=>{this.value=!this.value,i.prop(this.value),i.callback&&i.callback(this.value),a()}})])}};var b={oncreate:i,view(){const a=t("sound")+(s.isStub?"":" | "+t("notifications")),i=n(null,l(a));return c.free(i,e("ul.native_scroller.page.settings_list.game",[e("li.list_item",e(u,{label:t("toggleSound"),name:"sound",prop:r.general.sound})),e("li.list_item",{},o.renderCheckbox(t("vibrateOnGameEvents"),"vibrate",r.general.vibrateOnGameEvents,m.onSettingChange)),...s.isStub?[]:[e("li.list_item",o.renderCheckbox(t("notifications"),"notifications",r.general.notifications.enable,(e=>{e?s.register():s.unregister()})))]]))}};export default b;
