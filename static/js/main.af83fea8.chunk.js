(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(12),r=n.n(c),i=(n(18),n(2)),o=n(5),s=n(3),l=n.n(s);function d(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({startLeft:0,startTop:0,startX:0,startY:0}),l=Object(i.a)(s,2),d=l[0],u=l[1],_=Object(a.useCallback)((function(e){if(e){var t=e.closest(".big-card"),n=document.createElement("div"),a=document.querySelector(".big-card--empty");if(n.classList.add("big-card--empty"),e.closest(".big-card__header")&&t.before(n),e.closest(".big-card__content")&&t.after(n),!e.classList.contains("big-card--empty")){if(e.classList.contains("cards__big-cards")||e.classList.contains("cards__help")){var c=document.querySelector(".cards__big-cards");null===c||void 0===c||c.append(n)}a&&a.remove()}}}),[]),E=Object(a.useCallback)((function(t){var n;if(0===(null===(n=e.favourites)||void 0===n?void 0:n.length))e.onChangeFavourites([e.city]);else{var a=Object(o.a)(e.favourites);a.splice(t,0,e.city),e.onChangeFavourites(a)}}),[e]),O=Object(a.useCallback)((function(){var t=e.favourites,n=t.findIndex((function(t){return t.id===e.city.id}));t.splice(n,1),e.onChangeFavourites(t)}),[e]),A=Object(a.useCallback)((function(t){var n=Object(o.a)(e.favourites),a=n.findIndex((function(t){return t.id===e.city.id})),c=a>t?a+1:a;n.splice(t,0,e.city),n.splice(c,1),e.onChangeFavourites(n)}),[e]),b=Object(a.useCallback)((function(){var t,n=null===(t=document.querySelector(".cards__big-cards"))||void 0===t?void 0:t.children,a=document.querySelector(".big-card--empty");if(n){var c=Array.from(n).findIndex((function(e){return e.classList.contains("big-card--empty")}));a&&("small-card"===e.type?E(c):A(c),null===a||void 0===a||a.remove())}}),[E,A,e.type]),m=Object(a.useCallback)((function(t){var n=e.card;if(!n)return null;n.style.visibility="hidden";var a=document.elementFromPoint(t.clientX,t.clientY);return n.style.visibility="visible",a}),[e]),T=Object(a.useCallback)((function(t){var n=e.card;if(n&&n===e.draggable&&c){n.style.left="".concat(d.startLeft+(t.clientX-d.startX),"px"),n.style.top="".concat(d.startTop+(t.clientY-d.startY),"px");var a=m(t);_(a)}}),[e,c,d,m,_]),R=Object(a.useCallback)((function(t){var n=e.card;if(c&&n){if("small-card"===e.type){var a=n.cloneNode(!0);n.after(a),a.classList.add("".concat(e.type,"_active"))}var r=n.getBoundingClientRect().top,i=n.getBoundingClientRect().left;if(n.classList.add("".concat(e.type,"_draggable")),n.style.top="".concat(r,"px"),n.style.left="".concat(i,"px"),"big-card"===e.type){var o=m(t);_(o)}u({startLeft:n.getBoundingClientRect().left,startTop:n.getBoundingClientRect().top,startX:t.clientX,startY:t.clientY}),e.onChangeDraggable(n)}}),[m,_,c,e]),v=Object(a.useCallback)((function(t){var n=document.querySelector(".small-card_active");null===n||void 0===n||n.remove();var a=e.card;if(a&&(a.classList.remove("".concat(e.type,"_draggable")),a.style.top="".concat(d.startTop,"px"),a.style.left="".concat(d.startLeft,"px"),b(),e.onChangeDraggable(null),"small-card"!==e.type)){var c=m(t);c&&c.closest(".cards__small-cards")&&O()}}),[b,m,O,d.startLeft,d.startTop,e]);Object(a.useEffect)((function(){var t,n;return null===(t=e.card)||void 0===t||t.addEventListener("mousedown",R),null===(n=e.card)||void 0===n||n.addEventListener("mouseup",v),function(){var t,n;null===(t=e.card)||void 0===t||t.removeEventListener("mousedown",R),null===(n=e.card)||void 0===n||n.removeEventListener("mouseup",v),document.removeEventListener("mousemove",T)}}),[R,T,v,e.card]),Object(a.useLayoutEffect)((function(){var e=document.querySelector(".cards__big-cards");r(e)}),[]),Object(a.useEffect)((function(){e.draggable===e.card&&document.addEventListener("mousemove",T)}),[e.draggable,T,e.card])}n(19);var u,_=n(0),E=function(e){return Object(_.jsx)("span",{className:l()("icon","icon--".concat(e.name))})},O=(n(21),function(e){var t=Object(a.useRef)(null);d({draggable:e.draggable,onChangeDraggable:e.onChangeDraggable,city:e.city,favourites:e.favourites,onChangeFavourites:e.onChangeFavourites,card:t.current,type:"small-card"});var n=Object(a.useMemo)((function(){var t,n=null===(t=e.weather)||void 0===t?void 0:t.temp;return n&&n>0?"+".concat(n):n}),[e.weather]);return Object(_.jsxs)("div",{className:l()("small-card",{"small-card_draggable":e.draggable===t.current}),ref:t,children:[Object(_.jsx)("span",{className:"small-card__city",children:e.city.name}),Object(_.jsxs)("span",{className:"small-card__temperature",children:[n,"\xb0"]}),Object(_.jsx)(E,{name:"strips-small"})]})});!function(e){e[e.SUNNY=1e3]="SUNNY",e[e.PARTLY_CLOUDY=1003]="PARTLY_CLOUDY",e[e.CLOUDY=1006]="CLOUDY",e[e.OVERCAST=1009]="OVERCAST",e[e.MIST=1030]="MIST",e[e.PATCHY_RAIN_POSSIBLE=1063]="PATCHY_RAIN_POSSIBLE",e[e.PATCHY_SNOW_POSSIBLE=1066]="PATCHY_SNOW_POSSIBLE",e[e.PATCHY_SLEET_POSSIBLE=1069]="PATCHY_SLEET_POSSIBLE",e[e.PATCHY_FREEZING_DRIZZLE_POSSIBLE=1072]="PATCHY_FREEZING_DRIZZLE_POSSIBLE",e[e.THUNDERY_OUTBREAKS_POSSIBLE=1087]="THUNDERY_OUTBREAKS_POSSIBLE",e[e.BLOWING_SNOW=1114]="BLOWING_SNOW",e[e.BLIZZARD=1117]="BLIZZARD",e[e.FOG=1135]="FOG",e[e.FREEZING_FOG=1147]="FREEZING_FOG",e[e.PATCHY_LIGHT_DRIZZLE=1150]="PATCHY_LIGHT_DRIZZLE",e[e.LIGHT_DRIZZLE=1153]="LIGHT_DRIZZLE",e[e.FREEZING_DRIZZLE=1168]="FREEZING_DRIZZLE",e[e.HEAVY_FREEZING_DRIZZLE=1171]="HEAVY_FREEZING_DRIZZLE",e[e.PATCHY_LIGHT_RAIN=1180]="PATCHY_LIGHT_RAIN",e[e.LIGHT_RAIN=1183]="LIGHT_RAIN",e[e.MODERATE_RAIN_AT_TIMES=1186]="MODERATE_RAIN_AT_TIMES",e[e.MODERATE_RAIN=1189]="MODERATE_RAIN",e[e.HEAVY_RAIN_AT_TIMES=1192]="HEAVY_RAIN_AT_TIMES",e[e.HEAVY_RAIN=1195]="HEAVY_RAIN",e[e.LIGHT_FREEZING_RAIN=1198]="LIGHT_FREEZING_RAIN",e[e.MODERATE_OR_HEAVY_FREEZING_RAIN=1201]="MODERATE_OR_HEAVY_FREEZING_RAIN",e[e.LIGHT_SLEET=1204]="LIGHT_SLEET",e[e.MODERATE_OR_HEAVY_SLEET=1207]="MODERATE_OR_HEAVY_SLEET",e[e.PATCHY_LIGHT_SNOW=1210]="PATCHY_LIGHT_SNOW",e[e.LIGHT_SNOW=1213]="LIGHT_SNOW",e[e.PATCHY_MODERATE_SNOW=1216]="PATCHY_MODERATE_SNOW",e[e.MODERATE_SNOW=1219]="MODERATE_SNOW",e[e.PATCHY_HEAVY_SNOW=1222]="PATCHY_HEAVY_SNOW",e[e.HEAVY_SNOW=1225]="HEAVY_SNOW",e[e.ICE_PELLETS=1237]="ICE_PELLETS",e[e.LIGHT_RAIN_SHOWER=1240]="LIGHT_RAIN_SHOWER",e[e.MODERATE_OR_HEAVY_RAIN_SHOWER=1243]="MODERATE_OR_HEAVY_RAIN_SHOWER",e[e.TORRENTIAL_RAIN_SHOWER=1246]="TORRENTIAL_RAIN_SHOWER",e[e.LIGHT_SLEET_SHOWERS=1249]="LIGHT_SLEET_SHOWERS",e[e.MODERATE_OR_HEAVY_SLEET_SHOWERS=1252]="MODERATE_OR_HEAVY_SLEET_SHOWERS",e[e.LIGHT_SNOW_SHOWERS=1255]="LIGHT_SNOW_SHOWERS",e[e.MODERATE_OR_HEAVY_SNOW_SHOWERS=1258]="MODERATE_OR_HEAVY_SNOW_SHOWERS",e[e.LIGHT_SHOWERS_OF_ICE_PELLETS=1261]="LIGHT_SHOWERS_OF_ICE_PELLETS",e[e.MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS=1264]="MODERATE_OR_HEAVY_SHOWERS_OF_ICE_PELLETS",e[e.PATCHY_LIGHT_RAIN_WITH_THUNDER=1273]="PATCHY_LIGHT_RAIN_WITH_THUNDER",e[e.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER=1276]="MODERATE_OR_HEAVY_RAIN_WITH_THUNDER",e[e.PATCHY_LIGHT_SNOW_WITH_THUNDER=1279]="PATCHY_LIGHT_SNOW_WITH_THUNDER",e[e.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER=1282]="MODERATE_OR_HEAVY_SNOW_WITH_THUNDER"}(u||(u={}));var A={translateWindDir:function(e){switch(e){case"N":return"\u0421";case"NNE":return"\u0421-\u0421\u0412";case"NE":return"\u0421\u0412";case"ENE":return"\u0412-\u0421\u0412";case"E":return"\u0412";case"ESE":return"\u0412-\u042e\u0412";case"SE":return"\u042e\u0412";case"SSE":return"\u042e-\u042e\u0412";case"S":return"\u042e";case"SSW":return"\u042e-\u042e\u0417";case"SW":return"\u042e\u0417";case"WSW":return"\u0417-\u042e\u0417";case"W":return"\u0417";case"WNW":return"\u0417-\u0421\u0417";case"NW":return"\u0421\u0417";case"NNW":return"\u0421-\u0421\u0417";default:return""}},getConditionText:function(e){var t=[u.PATCHY_RAIN_POSSIBLE,u.PATCHY_LIGHT_DRIZZLE,u.LIGHT_DRIZZLE,u.PATCHY_LIGHT_RAIN,u.LIGHT_RAIN,u.MODERATE_RAIN_AT_TIMES,u.MODERATE_RAIN,u.HEAVY_RAIN_AT_TIMES,u.HEAVY_RAIN,u.LIGHT_FREEZING_RAIN,u.MODERATE_OR_HEAVY_FREEZING_RAIN,u.LIGHT_RAIN_SHOWER,u.MODERATE_OR_HEAVY_RAIN_SHOWER,u.TORRENTIAL_RAIN_SHOWER,u.LIGHT_SLEET_SHOWERS,u.MODERATE_OR_HEAVY_SLEET_SHOWERS,u.PATCHY_LIGHT_RAIN_WITH_THUNDER,u.MODERATE_OR_HEAVY_RAIN_WITH_THUNDER],n=[u.SUNNY],a=[u.PARTLY_CLOUDY,u.CLOUDY,u.OVERCAST],c=[u.PATCHY_SLEET_POSSIBLE,u.BLOWING_SNOW,u.LIGHT_SLEET,u.MODERATE_OR_HEAVY_SLEET,u.PATCHY_LIGHT_SNOW,u.LIGHT_SNOW,u.PATCHY_MODERATE_SNOW,u.MODERATE_SNOW,u.PATCHY_HEAVY_SNOW,u.HEAVY_SNOW,u.ICE_PELLETS,u.LIGHT_SNOW_SHOWERS,u.MODERATE_OR_HEAVY_SNOW_SHOWERS,u.PATCHY_LIGHT_SNOW_WITH_THUNDER,u.MODERATE_OR_HEAVY_SNOW_WITH_THUNDER],r=[u.BLIZZARD];return t.includes(e)?"rainy":n.includes(e)?"sunny":a.includes(e)?"cloudy":c.includes(e)?"snowy":r.includes(e)?"blizzard":"none"}},b={current:function(e,t){var n=this,a=Date.now(),c=localStorage.getItem("date")?Number(localStorage.getItem("date")):0,r=a-c;if((null===t||void 0===t?void 0:t.cacheMs)&&r<(null===t||void 0===t?void 0:t.cacheMs)){var i=localStorage.getItem("weather");if(!i)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u043e");return Promise.resolve(JSON.parse(i))}return(null===t||void 0===t?void 0:t.cacheMs)?Promise.all(e.map((function(e){return n.cityWeather(e)}))).then((function(e){return localStorage.setItem("date",a.toString()),localStorage.setItem("weather",JSON.stringify(e)),e})):Promise.all(e.map((function(e){return n.cityWeather(e).then((function(e){return e}))})))},cityWeather:function(e){return fetch("https://api.weatherapi.com/v1/current.json?key=".concat("224a9ddf50ca4605895185357212312","&q=").concat(e.lat,",").concat(e.lon)).then((function(e){return e.json()})).then((function(t){var n=1e3*t.current.wind_kph/3600,a=A.translateWindDir(t.current.wind_dir);return{name:e.name,id:e.id,temp:t.current.temp_c,condition:t.current.condition.code,wind:n,windDir:a}}))}},m=(n(22),n(10),n(23),function(e){var t,n,c,r,i,o=Object(a.useRef)(null);d({draggable:e.draggable,onChangeDraggable:e.onChangeDraggable,onChangeFavourites:e.onChangeFavourites,city:e.city,card:o.current,favourites:e.favourites,type:"big-card"});var s=Object(a.useCallback)((function(){e.onWantSelectCity(null)}),[e]),u=Object(a.useCallback)((function(){e.onWantSelectCity(e.city)}),[e]),O=Object(a.useCallback)((function(){e.onChangeSelectedCity(e.city)}),[e]),b=Object(a.useMemo)((function(){var t,n=null===(t=e.weather)||void 0===t?void 0:t.temp;return n&&n>0?"+".concat(n):n}),[null===(t=e.weather)||void 0===t?void 0:t.temp]);return Object(_.jsxs)("div",{ref:o,className:l()("big-card",{"big-card_selected":(null===(n=e.selectedCity)||void 0===n?void 0:n.id)===e.city.id,"big-card_desired":(null===(c=e.desiredCity)||void 0===c?void 0:c.id)===e.city.id,"big-card_draggable":e.draggable===o.current&&null!==e.draggable}),onMouseEnter:u,onMouseLeave:s,onClick:O,children:[Object(_.jsxs)("div",{className:"big-card__header",children:[Object(_.jsx)("span",{className:"icon icon--strips-big"}),Object(_.jsx)("span",{className:"big-card__city",children:e.city.name})]}),Object(_.jsxs)("div",{className:"big-card__content",children:[Object(_.jsxs)("div",{className:"big-card__content-wrapper",children:[Object(_.jsx)("div",{className:"big-card__weather-conditions",children:e.weather&&Object(_.jsx)(E,{name:A.getConditionText(null===(r=e.weather)||void 0===r?void 0:r.condition)})}),(null===(i=e.weather)||void 0===i?void 0:i.windDir)&&Object(_.jsxs)("div",{className:"big-card__wind",children:[Object(_.jsx)("span",{className:"icon icon--wind"}),Object(_.jsxs)("span",{className:"big-card__info",children:["\u0412\u0435\u0442\u0435\u0440 ",e.weather.windDir,","," ",e.weather.wind%1===0?e.weather.wind:Number(e.weather.wind.toFixed(1))," ","\u043c/\u0441"]})]})]}),Object(_.jsxs)("span",{className:"big-card__temperature",children:[b,"\xb0"]})]})]})}),T=[{name:"\u041c\u043e\u0441\u043a\u0432\u0430",id:"1",lat:55.76319879044565,lon:37.589805265771865},{name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",id:"2",lat:59.97665957310762,lon:30.42978408718145},{name:"\u041a\u0438\u0435\u0432",id:"3",lat:50.472765961596984,lon:30.54041837637176},{name:"\u041c\u0438\u043d\u0441\u043a",id:"4",lat:54.000574708273724,lon:27.843248508740455},{name:"\u0412\u0438\u043b\u044c\u043d\u044e\u0441",id:"5",lat:54.881373316788945,lon:25.23097465358437},{name:"\u0412\u0430\u0440\u0448\u0430\u0432\u0430",id:"6",lat:52.22478752780553,lon:20.97054950114021},{name:"\u0412\u0435\u043d\u0430",id:"7",lat:48.39325606587112,lon:16.43859266424972},{name:"\u0420\u0438\u043c",id:"8",lat:41.884810112266834,lon:12.63653521239818},{name:"\u0421\u043e\u0444\u0438\u044f",id:"9",lat:42.616071327067154,lon:23.277818771680113},{name:"\u041f\u0430\u0440\u0438\u0436",id:"10",lat:48.89302302108258,lon:2.2298207473739624},{name:"\u0410\u043d\u043a\u0430\u0440\u0430",id:"11",lat:39.844293562280036,lon:32.64463427492055},{name:"\u041c\u0430\u0434\u0440\u0438\u0434",id:"12",lat:40.81859690239377,lon:-3.7360928242716325},{name:"\u041e\u0441\u043b\u043e",id:"13",lat:60.242004455108415,lon:11.014613802728068},{name:"\u0411\u0435\u0440\u043b\u0438\u043d",id:"14",lat:52.85420357145985,lon:13.391938319194505},{name:"\u041f\u0440\u0430\u0433\u0430",id:"15",lat:50.22744331088483,lon:14.420600333352798},{name:"\u0422\u0430\u043b\u043b\u0438\u043d",id:"16",lat:59.60307084121461,lon:24.908323337417723},{name:"\u0425\u0435\u043b\u044c\u0441\u0438\u043d\u043a\u0438",id:"17",lat:60.507105953000675,lon:25.15710408929567}],R=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),d=l[0],u=l[1],E=Object(a.useCallback)((function(t){e.onChangeFavourites(Object(o.a)(t))}),[e]),R=Object(a.useCallback)((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}),[]),v=Object(a.useCallback)((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}),[]),g=Object(a.useMemo)((function(){var t="asc"===e.sortType?R:v;return e.cities.sort(t)}),[R,v,e.cities,e.sortType]),S=Object(a.useMemo)((function(){return d.length<e.cities.length+1?[]:e.favourites.map((function(e){var t=d.find((function(t){return t.id===e.id}));if(!t)throw new Error("\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u043e");var n=A.getConditionText(t.condition);return{city:e,weather:t,condition:n}}))}),[e.cities.length,e.favourites,d]);return Object(a.useEffect)((function(){b.current(g,{cacheMs:36e5}).then((function(e){u((function(t){return 0===t.length?e:t.length===T.length?t.map((function(t){var n=e.find((function(e){return e.id===t.id}));return n||t})):t.concat(e)}))})),b.current(e.favourites).then((function(e){u((function(t){return 0===t.length?e:t.length===T.length?t.map((function(t){var n=e.find((function(e){return e.id===t.id}));return n||t})):t.concat(e)}))}))}),[g,e.favourites]),Object(_.jsxs)("section",{className:"cards",children:[Object(_.jsx)("h2",{className:"visually-hidden",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(_.jsx)("div",{className:"cards__small-cards",children:g.map((function(t){return Object(_.jsx)(O,{draggable:c,onChangeDraggable:r,city:t,weather:d.find((function(e){return t.id===e.id})),favourites:e.favourites,onChangeFavourites:E},t.id)}))}),Object(_.jsxs)("div",{className:"cards__big-cards",children:[null===S||void 0===S?void 0:S.map((function(t){return(e.conditions.includes(t.condition)||0===e.conditions.length)&&Object(_.jsx)(m,{city:t.city,favourites:e.favourites,draggable:c,onChangeDraggable:r,weather:t.weather,onChangeFavourites:E,onChangeSelectedCity:e.onChangeSelectedCity,onWantSelectCity:e.onWantSelectCity,selectedCity:e.selectedCity,desiredCity:e.desiredCity},t.city.id)})),Object(_.jsx)("div",{className:"cards__help",children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0433\u043e\u0440\u043e\u0434\u0430, \u043f\u043e\u0433\u043e\u0434\u0430 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u0430\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430"})]})]})},v=(n(24),function(e){return Object(_.jsxs)("div",{className:l()(e.className,"input-wrapper",{"input-wrapper--radio":"radio"===e.type,"input-wrapper--checkbox":"checkbox"===e.type,"input-wrapper--search":"search"===e.type}),children:[Object(_.jsx)("input",{id:e.id,type:e.type,name:e.name,value:e.value,defaultChecked:e.checked,onChange:e.onChange,placeholder:e.placeholder}),Object(_.jsx)("label",{htmlFor:e.id,"aria-label":e.label,children:e.iconName&&Object(_.jsx)(E,{name:e.iconName})})]})}),g=(n(6),function(e){var t=Object(a.useCallback)((function(){var t="asc"===e.sortType?"desc":"asc";e.onChangeSortType(t)}),[e]);return Object(_.jsxs)("div",{className:"sort-form__group",children:[Object(_.jsx)(v,{className:"sort-form__input-wrapper",type:"radio",id:"alphabet-sort",name:"alphabet-sort",value:"alphabet-sort",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",iconName:"arrow-down",onChange:t,checked:!0}),Object(_.jsx)(v,{className:"sort-form__input-wrapper",type:"radio",id:"alphabet-sort-reverse",name:"alphabet-sort",value:"alphabet-sort-reverse",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438",iconName:"arrow-up",onChange:t})]})}),S=function(e){var t=Object(a.useCallback)((function(t){e.onChangeQuery(t.target.value)}),[e]);return Object(_.jsx)("div",{className:"sort-form__group",children:Object(_.jsx)(v,{className:"sort-form__input-wrapper",type:"search",name:"search-city",value:e.query,id:"search",label:"\u041f\u043e\u0438\u0441\u043a \u0433\u043e\u0440\u043e\u0434\u043e\u0432",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",onChange:t})})},f=[{name:"rainy",desc:"\u0414\u043e\u0436\u0434\u043b\u0438\u0432\u043e"},{name:"sunny",desc:"\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e"},{name:"cloudy",desc:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e"},{name:"snowy",desc:"\u0421\u043d\u0435\u0436\u043d\u043e"},{name:"stormy",desc:"\u0422\u043e\u0440\u043d\u0430\u0434\u043e"},{name:"blizzard",desc:"\u0413\u0440\u043e\u0437\u0430"},{name:"metorite",desc:"\u041c\u0435\u0442\u0435\u043e\u0440\u0438\u0442\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c"}],h=function(e){var t=Object(a.useCallback)((function(t){var n=t.target.value,a=new Set(e.conditions);a.has(n)?a.delete(n):a.add(n),e.onChangeCondition(Array.from(a))}),[e]);return Object(_.jsx)("div",{className:"sort-form__group",children:f.map((function(e){return Object(_.jsx)(v,{className:"sort-form__input-wrapper",type:"checkbox",id:e.name,name:"weather-conditions",value:e.name,label:e.desc,iconName:e.name,onChange:t},e.name)}))})},C=function(e){return Object(_.jsxs)("section",{className:l()("sort-form",e.className),children:[Object(_.jsx)("h2",{className:"visually-hidden",children:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(_.jsxs)("form",{action:"#",method:"GET",children:[Object(_.jsx)(g,{sortType:e.sortType,onChangeSortType:e.onChangeSortType}),Object(_.jsx)(S,{query:e.searchQuery,onChangeQuery:e.onChangeSearchQuery}),Object(_.jsx)(h,{onChangeCondition:e.onChangeCondition,conditions:e.conditions})]})]})},I=function(e){var t=Object(a.useState)("asc"),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)([]),E=Object(i.a)(u,2),O=E[0],A=E[1],b=Object(a.useMemo)((function(){return T.filter((function(t){return!e.favourites.find((function(e){return e.id===t.id}))&&t.name.toLowerCase().includes(l.toLowerCase())}))}),[e.favourites,l]);return Object(_.jsxs)("div",{className:"weather-content",children:[Object(_.jsx)(C,{className:"weather-content__sort",sortType:c,searchQuery:l,conditions:O,onChangeSortType:r,onChangeSearchQuery:d,onChangeCondition:A}),Object(_.jsx)(R,{cities:b,conditions:O,favourites:e.favourites,onChangeFavourites:e.onChangeFavourites,onChangeSelectedCity:e.onChangeSelectedCity,onWantSelectCity:e.onWantSelectCity,sortType:c,selectedCity:e.selectedCity,desiredCity:e.desiredCity})]})},N=n(9),H=n(13),j=(n(11),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2)[1];return Object(a.useEffect)((function(){var t=e.cities.map((function(t){var n,a,c=new google.maps.Marker({position:{lat:t.lat,lng:t.lon},map:e.map});return c.addListener("mouseover",(function(){return e.onWantSelectCity(t)})),c.addListener("mouseout",(function(){return e.onWantSelectCity(null)})),t.id===(null===(n=e.selectedCity)||void 0===n?void 0:n.id)&&c.setIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEWklEQVR4nK2XX2hbVRzHv9u9TXPt3Zb+cSZL3NDFWWecg8XQwdA9CFaf5tMG68tA9MEqioyKRdbabdL5sCEIZTgYA0XxocwHmbDRKpV1ozBnO6lrmtE2te2aZGlz07Rdburvd9KmTXNvmqZ+4cLN+Z3zOef+fr/zOyeyFgvBSOqZQTtiD49Bn3+DftZw06JJo6cbkuVXbNn+g9a4e9xovJwD/Hp6K0b/OoOU/g5sLisqdgLb7FCktD2hw4ap8VpEhmsRDX6pNox9C+e+Ru3DrdOmYLXlvhvTY+0E9EjP+jKwrD48otIunoTus+qB2/UYuXNYbXG8rX2+x58DVpv6XIiHO2h2l7rDbeie1RITP+eD9m+Fh76yQ22aP6g1eYIZsHrh0RNIRNvheNGlONzQFwriLk9AYxLJeRcmB9qJ9Zr2UflMesXj/e9CsXkV5/PrI66EP70Xiekxr2Dh4AWZZrBR5FvgPlQ0NKM9h4G7V1uIeVnG2L0jlDaqJEmYT22MywydWMyUKa2OonynaeeFx7NY+PMqMPgHoCcBxwvY9MoxbNrypPEAmxOU/0fZxzWcp6YB6/2FPu/n5d+BbixIFuDV98zBI3dqGKxis0HCsoJ3gfu/G7fz43o515ZmiXTP2X1Z0udz21J63iHMZOgsdbQamlMUzRIFmIlmt7Mr2GY0QbptlsF+2vselDtzO7n2AdOvA7e/z4bsOpC2GWlK1CS/TD7pxEzEGMyqJnByDujvIDhlhdMD7D9i3Jc1E2E/d8ooVb9DZKgejr3mnT1vpZ+VMvNzZAjMlLUv9nerJ3/rQeiBF1XPmMMLUegBT9jDzHRGlCgnMUHfyrXXLPXWEn/BRH+ahcVU0876OmnV1zDxTy2eKrIQjf3N8Gtaq68zAxYqVT9AKNBLq7aKFFuPHifYt7OCsagMWDt9wK9+erMVo72nRDqtR0M9nNutzMgBC9mrz9FJcBzhYTcqzQtTlsLDwJzmp5Pn3MrmLDBXfvUz5QSdBB1UmGTIlvzQJG33yYEkue4EjzUFC/hZX5fa0NVGwaiH86X8YA4Y0MZjVpuMC5Bia6aaWod4xIayCmNobJLrbhRllc1GZkMwnbQhCmQzHg6cxy6vMTgU4IA1c9+CwUL26osUyE+QmHJRGmXbElMcsCAF7KLZcFOwCGSDdIluPKdy6kh0lHfopdUBK2zFrFL1Cl1iGnP6xcNJKNuu5BuaF0zFJCAKVGyyBkuHJ68W4EITKBosJFl+hEbgpexg/3LbGlobvFm6Ttev5frL75Ll+obBlPx95I4gZYFLwFN6kCpY38ZXzOLjKx6py7wXoMLAwA3MxeoW3XHj/wOXKF3kivR7qZpTF4oCx/2D6MFPfi/eFJcLfo/7qYS4dxcPZmjfx+9jh8vOF7FubisbDYo2z/lv8sLzgkcutwloVZWd70vidLAhiaRVFrbq018VB3506yacNYeQDNLfiu1SeKndZlXRT7Z8+g+B1qknuwWABwAAAABJRU5ErkJggg=="),t.id===(null===(a=e.desiredCity)||void 0===a?void 0:a.id)&&c.setIcon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADlElEQVR4nK2WbUhTURjH/9d7nS6vubSX2ZZhrBKzviRiEBQEpd/qk0F+CSIQrS8VUgYi9oIRJUIgUhBBUF+UoA8GigZCIoL0YhiOiTqb5jbm69S83p5zNpe6u7m3P9xxt3PO7zx7nuf+z5VUVYWWhLt9Rsz9uQxl5QJ9LaZL9g/N09ULUfcJ6XvfqY+LJrXWS0HARyM7MfHtIdaUazCYU5GZA2QYoRd9414FBsxMlsA9VgKP/bFQ6XgJ04ka9V7ubEiwUP3FgllHGwELxENFAdhGyWxFlpFfXqUoVbH1VWF84KxQPXlJbThlDQILtz+bseDqot3N8n6LZnq2im98uAjzvzML6F92EeOU+vSMPQAWHlh3wOtpQ/Yxsz7bAkU77aE3oDXe1RUzpofbiHVGvW9Z9EU8OXQdekOh3nQ0OuJG+IF8eGcdhZwFS6NEOxio8vWwnI4ZGtCRs8DXD/XEfC3BMXiR2kYWRREra/FxGUMhFmNK1FZl2JUTf7TrMphA/V/GclzM+jTagoUFjw8UM7CMJI2GjVU+Fm/3oKcvAZIYdInynJow5JrCPpcY2ErPfgF2mRIDnuGeZJUoJ91YdCcOvOhmee6WkCK/hXu0Ctn5iQG7R8GYkvrsXK9Q0doP50ghdufGB3WOsBz3M6avI5L1dzA11MW9N9bWY0WbGvKx4G81tam0m6Jux9SvEuyL0YgcPxm8XX1R2h0Ac6XIN+C0faeoU2nX6KB/vSy3S5zhVwCsNp63ClUfGzDxvRYHT0YHHu0nB9I1MEYQmMuY94ROgitwjVmQFaExucaA5XkrnTxPNv68CcycX7g5fJVOgi4yJgmSLjx0dQU0d5VSd5WtDQnm8KbSHqHyQzMVowqm4+HBrGBAM1uzdUjbgPSGOvLUciy4DUjL1IbOTTPf9SAtq05rWBNMJ62TClmHP8PPcbBQG+y0sYLVsbkRg7mMeS1UyFvwzpipjTaPeWdYwexUsJZQy0OCeSErB1/RG09tkI94JtgT+mprwSKLmClFfkMvMTVB8xZcq9BnvAm3NCyYzMTGDWpuuhjpe/5HCzCjscUM5hJ17zFP4PXuYPllv22j7cFJYge9fq0fOeD3oq4jbjA1/w9Kh526wMzha4qdHOxH/BEzseNrwV0euI9AkR79nVieK/enozNx4GR9D6XCd58iB/lCzGDu1RWtnvX7hIH96o1iblTgiCKNHpwkuqIB/wPnmlsEaY1c0wAAAABJRU5ErkJggg=="),c}));n((function(e){return e.forEach((function(e){return e.setMap(null)})),t}))}),[e]),Object(a.useEffect)((function(){var t,n,a,c=(null===(t=e.selectedCity)||void 0===t?void 0:t.lat)||59.97665957310762,r=(null===(n=e.selectedCity)||void 0===n?void 0:n.lon)||30.42978408718145;null===(a=e.map)||void 0===a||a.setCenter({lat:c,lng:r}),e.map.panBy(c,r)}),[e.map,e.selectedCity]),null}),p=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){new H.a({apiKey:"".concat("AIzaSyClBiMqRBD5c8F24E3pHI4BK6RDxgF-hpQ"),version:"weekly"}).load().then((function(){r(new google.maps.Map(document.getElementById("map"),{center:{lat:59.97665957310762,lng:30.42978408718145},zoom:8}))}))}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{id:"map"}),c&&Object(_.jsx)(j,Object(N.a)(Object(N.a)({},e),{},{map:c}))]})},L=function(){var e=Object(a.useState)((function(){var e=localStorage.getItem("favourites");return e?JSON.parse(e):[]})),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(null),u=Object(i.a)(d,2),E=u[0],O=u[1],A=Object(a.useCallback)((function(e){c(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]);return Object(_.jsxs)("div",{className:"weather-app",children:[Object(_.jsx)(I,{favourites:n,selectedCity:s,desiredCity:E,onChangeFavourites:A,onChangeSelectedCity:l,onWantSelectCity:O}),Object(_.jsx)(p,{cities:n,selectedCity:s,desiredCity:E,onChangeSelectedCity:l,onWantSelectCity:O})]})};r.a.render(Object(_.jsx)(a.StrictMode,{children:Object(_.jsx)(L,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.af83fea8.chunk.js.map