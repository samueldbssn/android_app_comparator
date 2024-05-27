var a={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}};function e(a){return function(e){var t=e||{},n=t.width?String(t.width):a.defaultWidth;return a.formats[n]||a.formats[a.defaultWidth]}}var t={date:e({formats:{full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:e({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},n={lastWeek:"'geçen hafta' eeee 'saat' p",yesterday:"'dün saat' p",today:"'bugün saat' p",tomorrow:"'yarın saat' p",nextWeek:"eeee 'saat' p",other:"P"};function i(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,o=i.width?String(i.width):r;n=a.formattingValues[o]||a.formattingValues[r]}else{var s=a.defaultWidth,l=i.width?String(i.width):a.defaultWidth;n=a.values[l]||a.values[s]}return n[a.argumentCallback?a.argumentCallback(e):e]}}function r(a){return function(e,t){var n=String(e),i=t||{},r=i.width,o=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],s=n.match(o);if(!s)return null;var l,u=s[0],d=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}(d,(function(a){return a.test(u)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}(d,(function(a){return a.test(u)})),l=a.valueCallback?a.valueCallback(l):l,{value:l=i.valueCallback?i.valueCallback(l):l,rest:n.slice(u.length)}}}var o,s={code:"tr",formatDistance:function(e,t,n){var i;return n=n||{},i="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?i+" sonra":i+" önce":i},formatLong:t,formatRelative:function(a,e,t,i){return n[a]},localize:{ordinalNumber:function(a,e){return Number(a)+"."},era:i({values:{abbreviated:["MÖ","MS"],narrow:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:i({values:{narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},defaultWidth:"wide"}),day:i({values:{narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},defaulFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a,e){var t=String(a),n=e||{},i=t.match(o.matchPattern);if(!i)return null;var r=i[0],s=t.match(o.parsePattern);if(!s)return null;var l=o.valueCallback?o.valueCallback(s[0]):s[0];return{value:l=n.valueCallback?n.valueCallback(l):l,rest:t.slice(r.length)}}),era:r({matchPatterns:{narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:r({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:r({matchPatterns:{narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:r({matchPatterns:{narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pts|sal|çar|per|cum|cts)/i,wide:/^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma/i,/cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:{narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};export default s;
