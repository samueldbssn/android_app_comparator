var t={lessThanXSeconds:{one:{default:"ஒரு வினாடிக்கு குறைவாக",in:"ஒரு வினாடிக்குள்",ago:"ஒரு வினாடிக்கு முன்பு"},other:{default:"{{count}} வினாடிகளுக்கு குறைவாக",in:"{{count}} வினாடிகளுக்குள்",ago:"{{count}} வினாடிகளுக்கு முன்பு"}},xSeconds:{one:{default:"1 வினாடி",in:"1 வினாடியில்",ago:"1 வினாடி முன்பு"},other:{default:"{{count}} விநாடிகள்",in:"{{count}} வினாடிகளில்",ago:"{{count}} விநாடிகளுக்கு முன்பு"}},halfAMinute:{default:"அரை நிமிடம்",in:"அரை நிமிடத்தில்",ago:"அரை நிமிடம் முன்பு"},lessThanXMinutes:{one:{default:"ஒரு நிமிடத்திற்கும் குறைவாக",in:"ஒரு நிமிடத்திற்குள்",ago:"ஒரு நிமிடத்திற்கு முன்பு"},other:{default:"{{count}} நிமிடங்களுக்கும் குறைவாக",in:"{{count}} நிமிடங்களுக்குள்",ago:"{{count}} நிமிடங்களுக்கு முன்பு"}},xMinutes:{one:{default:"1 நிமிடம்",in:"1 நிமிடத்தில்",ago:"1 நிமிடம் முன்பு"},other:{default:"{{count}} நிமிடங்கள்",in:"{{count}} நிமிடங்களில்",ago:"{{count}} நிமிடங்களுக்கு முன்பு"}},aboutXHours:{one:{default:"சுமார் 1 மணி நேரம்",in:"சுமார் 1 மணி நேரத்தில்",ago:"சுமார் 1 மணி நேரத்திற்கு முன்பு"},other:{default:"சுமார் {{count}} மணி நேரம்",in:"சுமார் {{count}} மணி நேரத்திற்கு முன்பு",ago:"சுமார் {{count}} மணி நேரத்தில்"}},xHours:{one:{default:"1 மணி நேரம்",in:"1 மணி நேரத்தில்",ago:"1 மணி நேரத்திற்கு முன்பு"},other:{default:"{{count}} மணி நேரம்",in:"{{count}} மணி நேரத்தில்",ago:"{{count}} மணி நேரத்திற்கு முன்பு"}},xDays:{one:{default:"1 நாள்",in:"1 நாளில்",ago:"1 நாள் முன்பு"},other:{default:"{{count}} நாட்கள்",in:"{{count}} நாட்களில்",ago:"{{count}} நாட்களுக்கு முன்பு"}},aboutXWeeks:{one:{default:"சுமார் 1 வாரம்",in:"சுமார் 1 வாரத்தில்",ago:"சுமார் 1 வாரம் முன்பு"},other:{default:"சுமார் {{count}} வாரங்கள்",in:"சுமார் {{count}} வாரங்களில்",ago:"சுமார் {{count}} வாரங்களுக்கு முன்பு"}},xWeeks:{one:{default:"1 வாரம்",in:"1 வாரத்தில்",ago:"1 வாரம் முன்பு"},other:{default:"{{count}} வாரங்கள்",in:"{{count}} வாரங்களில்",ago:"{{count}} வாரங்களுக்கு முன்பு"}},aboutXMonths:{one:{default:"சுமார் 1 மாதம்",in:"சுமார் 1 மாதத்தில்",ago:"சுமார் 1 மாதத்திற்கு முன்பு"},other:{default:"சுமார் {{count}} மாதங்கள்",in:"சுமார் {{count}} மாதங்களில்",ago:"சுமார் {{count}} மாதங்களுக்கு முன்பு"}},xMonths:{one:{default:"1 மாதம்",in:"1 மாதத்தில்",ago:"1 மாதம் முன்பு"},other:{default:"{{count}} மாதங்கள்",in:"{{count}} மாதங்களில்",ago:"{{count}} மாதங்களுக்கு முன்பு"}},aboutXYears:{one:{default:"சுமார் 1 வருடம்",in:"சுமார் 1 ஆண்டில்",ago:"சுமார் 1 வருடம் முன்பு"},other:{default:"சுமார் {{count}} ஆண்டுகள்",in:"சுமார் {{count}} ஆண்டுகளில்",ago:"சுமார் {{count}} ஆண்டுகளுக்கு முன்பு"}},xYears:{one:{default:"1 வருடம்",in:"1 ஆண்டில்",ago:"1 வருடம் முன்பு"},other:{default:"{{count}} ஆண்டுகள்",in:"{{count}} ஆண்டுகளில்",ago:"{{count}} ஆண்டுகளுக்கு முன்பு"}},overXYears:{one:{default:"1 வருடத்திற்கு மேல்",in:"1 வருடத்திற்கும் மேலாக",ago:"1 வருடம் முன்பு"},other:{default:"{{count}} ஆண்டுகளுக்கும் மேலாக",in:"{{count}} ஆண்டுகளில்",ago:"{{count}} ஆண்டுகளுக்கு முன்பு"}},almostXYears:{one:{default:"கிட்டத்தட்ட 1 வருடம்",in:"கிட்டத்தட்ட 1 ஆண்டில்",ago:"கிட்டத்தட்ட 1 வருடம் முன்பு"},other:{default:"கிட்டத்தட்ட {{count}} ஆண்டுகள்",in:"கிட்டத்தட்ட {{count}} ஆண்டுகளில்",ago:"கிட்டத்தட்ட {{count}} ஆண்டுகளுக்கு முன்பு"}}};function a(t,a){return a.addSuffix?a.comparison>0?t.in:t.ago:t.default}function e(t){return function(a){var e=a||{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var n={date:e({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:e({formats:{full:"a h:mm:ss zzzz",long:"a h:mm:ss z",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'கடந்த' eeee p 'மணிக்கு'",yesterday:"'நேற்று ' p 'மணிக்கு'",today:"'இன்று ' p 'மணிக்கு'",tomorrow:"'நாளை ' p 'மணிக்கு'",nextWeek:"eeee p 'மணிக்கு'",other:"P"};function o(t){return function(a,e){var n,i=e||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):o;n=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(a):a]}}function r(t){return function(a,e){var n=String(a),i=e||{},o=i.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=n.match(r);if(!u)return null;var d,l=u[0],f=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?function(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}(f,(function(t){return t.test(l)})):function(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}(f,(function(t){return t.test(l)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:n.slice(l.length)}}}var u,d={code:"ta",formatDistance:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(t[e].default?a(t[e],i):a(1===n?t[e].one:t[e].other,i)).replace("{{count}}",n)},formatLong:n,formatRelative:function(t,a,e,n){return i[t]},localize:{ordinalNumber:function(t,a){return Number(t)},era:o({values:{narrow:["கி.மு.","கி.பி."],abbreviated:["கி.மு.","கி.பி."],wide:["கிறிஸ்துவுக்கு முன்","அன்னோ டோமினி"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["1","2","3","4"],abbreviated:["காலா.1","காலா.2","காலா.3","காலா.4"],wide:["ஒன்றாம் காலாண்டு","இரண்டாம் காலாண்டு","மூன்றாம் காலாண்டு","நான்காம் காலாண்டு"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:o({values:{narrow:["ஜ","பி","மா","ஏ","மே","ஜூ","ஜூ","ஆ","செ","அ","ந","டி"],abbreviated:["ஜன.","பிப்.","மார்.","ஏப்.","மே","ஜூன்","ஜூலை","ஆக.","செப்.","அக்.","நவ.","டிச."],wide:["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்"]},defaultWidth:"wide"}),day:o({values:{narrow:["ஞா","தி","செ","பு","வி","வெ","ச"],short:["ஞா","தி","செ","பு","வி","வெ","ச"],abbreviated:["ஞாயி.","திங்.","செவ்.","புத.","வியா.","வெள்.","சனி"],wide:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"]},defaultWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}},defaultWidth:"wide",formattingValues:{narrow:{am:"மு.ப",pm:"பி.ப",midnight:"நள்.",noon:"நண்.",morning:"கா.",afternoon:"மதி.",evening:"மா.",night:"இர."},abbreviated:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"},wide:{am:"முற்பகல்",pm:"பிற்பகல்",midnight:"நள்ளிரவு",noon:"நண்பகல்",morning:"காலை",afternoon:"மதியம்",evening:"மாலை",night:"இரவு"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(u={matchPattern:/^(\d+)(வது)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,a){var e=String(t),n=a||{},i=e.match(u.matchPattern);if(!i)return null;var o=i[0],r=e.match(u.parsePattern);if(!r)return null;var d=u.valueCallback?u.valueCallback(r[0]):r[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:e.slice(o.length)}}),era:r({matchPatterns:{narrow:/^(கி.மு.|கி.பி.)/i,abbreviated:/^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,wide:/^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/கி\.?\s?மு\.?/,/கி\.?\s?பி\.?/]},defaultParseWidth:"any"}),quarter:r({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^காலா.[1234]/i,wide:/^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/(1|காலா.1|ஒன்றாம்)/i,/(2|காலா.2|இரண்டாம்)/i,/(3|காலா.3|மூன்றாம்)/i,/(4|காலா.4|நான்காம்)/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:r({matchPatterns:{narrow:/^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,abbreviated:/^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,wide:/^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ஜ$/i,/^பி/i,/^மா/i,/^ஏ/i,/^மே/i,/^ஜூ/i,/^ஜூ/i,/^ஆ/i,/^செ/i,/^அ/i,/^ந/i,/^டி/i],any:[/^ஜன/i,/^பி/i,/^மா/i,/^ஏ/i,/^மே/i,/^ஜூன்/i,/^ஜூலை/i,/^ஆ/i,/^செ/i,/^அ/i,/^ந/i,/^டி/i]},defaultParseWidth:"any"}),day:r({matchPatterns:{narrow:/^(ஞா|தி|செ|பு|வி|வெ|ச)/i,short:/^(ஞா|தி|செ|பு|வி|வெ|ச)/i,abbreviated:/^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,wide:/^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ஞா/i,/^தி/i,/^செ/i,/^பு/i,/^வி/i,/^வெ/i,/^ச/i],any:[/^ஞா/i,/^தி/i,/^செ/i,/^பு/i,/^வி/i,/^வெ/i,/^ச/i]},defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:{narrow:/^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,any:/^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^மு/i,pm:/^பி/i,midnight:/^நள்/i,noon:/^நண்/i,morning:/காலை/i,afternoon:/மதியம்/i,evening:/மாலை/i,night:/இரவு/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};export default d;
