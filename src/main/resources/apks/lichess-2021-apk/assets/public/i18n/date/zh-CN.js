var t={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}};function e(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var n={date:e({formats:{full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:e({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t,e){r(1,arguments);var n=e||{},o=n.locale,u=o&&o.options&&o.options.weekStartsOn,d=null==u?0:a(u),l=null==n.weekStartsOn?d:a(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=i(t),h=s.getUTCDay(),c=(h<l?7:0)+h-l;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function u(t,e,n,a){return function(t,e,n){r(2,arguments);var a=o(t,n),i=o(e,n);return a.getTime()===i.getTime()}(t,e,n)?a:t.getTime()>e.getTime()?"'下个'"+a:"'上个'"+a}var d={lastWeek:u,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:u,other:"PP p"};function l(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;a=t.values[d]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=a.match(o);if(!u)return null;var d,l=u[0],s=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(s,(function(t){return t.test(l)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(s,(function(t){return t.test(l)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(l.length)}}}var h,c={code:"zh-CN",formatDistance:function(e,n,a){var r;return a=a||{},r="string"==typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),a.addSuffix?a.comparison>0?r+"内":r+"前":r},formatLong:n,formatRelative:function(t,e,n,a){var r=d[t];return"function"==typeof r?r(e,n,a,"eeee p"):r},localize:{ordinalNumber:function(t,e){var n=Number(t);switch(String((e||{}).unit)){case"date":return n.toString()+"日";case"hour":return n.toString()+"时";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}},era:l({values:{narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻钟","第二刻钟","第三刻钟","第四刻钟"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:l({values:{narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},defaultWidth:"wide"}),day:l({values:{narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},defaultWidth:"wide",formattingValues:{narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(第\s*)?\d+(日|时|分|秒)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(h.matchPattern);if(!r)return null;var i=r[0],o=n.match(h.parsePattern);if(!o)return null;var u=h.valueCallback?h.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(i.length)}}),era:s({matchPatterns:{narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(前)/i,/^(公元)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};export default c;
