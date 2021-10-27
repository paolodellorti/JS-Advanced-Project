(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([t.id,'* {\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    font-family: tahoma;\r\n}\r\nbody {\r\n    overflow: hidden;\r\n}\r\n\r\n#map {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 25vw;\r\n    background-color: #404040;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: #fff;\r\n}\r\n\r\n#datasContainer {\r\n    padding: 5px;\r\n}\r\n\r\n#savedPosition {\r\n    width: 100%;\r\n    height: 25vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 3px;\r\n}\r\n\r\n#aqi {\r\n    font-size: 2rem;\r\n}\r\n\r\n#map {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-image: url("https://www.pixblick.de/images/product_images/original_images/fototapete_chicago%20(1).jpg");\r\n    background-repeat: no-repeat;\r\n    background-position: left;\r\n    background-size: cover;\r\n    height: 90vh;\r\n    width: 75vw;\r\n}\r\n\r\n#form {\r\n    height: 10vh;\r\n    width: 75vw;\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    color: #fff;\r\n}\r\n\r\n#positionButton,\r\n#saveButton,\r\n#uploadButton,\r\n#homeButton,\r\n#inputContainer {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: none;\r\n    text-decoration: none;\r\n    cursor: default;\r\n}\r\n\r\n#containerSavedPosition {\r\n    background-color: #202020;\r\n    position: relative;\r\n    cursor: default;\r\n    width: 100%;\r\n}\r\n\r\n#savedPosition {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#deleteButton {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    color: #606060;\r\n    font-size: 1.2rem;\r\n    display: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#deleteButton:hover {\r\n    color: #fff;\r\n}\r\n\r\n#searchInput,\r\n#searchButton {\r\n    height: 50%;\r\n    width: 100%;\r\n    border: none;\r\n    text-decoration: none;\r\n    cursor: default;\r\n}\r\n\r\n#homeButton {\r\n    font-size: 2.5rem;\r\n    width: 60%;\r\n}\r\n\r\n#homeButton:hover {\r\n    color: #202020;\r\n}\r\n\r\n#positionButton,\r\n#homeButton,\r\n#uploadButton {\r\n    background-color: #202020;\r\n    color: #fff;\r\n}\r\n\r\n#positionButton:hover,\r\n#homeButton:hover,\r\n#uploadButton:hover,\r\n#saveButton:hover,\r\n#searchButton:hover {\r\n    background-color: #606060;\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n#saveButton,\r\n#searchButton {\r\n    color: #fff;\r\n    background-color: #404040;\r\n}\r\n\r\n#homePage {\r\n    color: #fff;\r\n    width: 70%;\r\n    background-color: rgba(54,54,54,0.85);\r\n    border: 4px solid #202020;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    padding-left: 35px;\r\n    padding-bottom: 30px;\r\n    text-align: left;\r\n}\r\n\r\nul { \r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    text-align: left;\r\n}\r\n\r\na {\r\n    transition: all 0.2s;\r\n}\r\n\r\na:link {\r\n    color: #59cd90;\r\n    text-decoration: none;\r\n  }\r\n\r\na:visited {\r\n    color: #59cd90;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: #2C925C;\r\n    text-decoration: none;\r\n}\r\n\r\na:active {\r\n    color: #59cd90;\r\n    text-decoration: none;\r\n}',""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);r&&s[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],a=0;a<t.length;a++){var l=t[a],c=r.base?l[0]+r.base:l[0],h=o[c]||0,u="".concat(c," ").concat(h);o[c]=h+1;var d=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var f=i(p,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var l=r(t,i),c=0;c<o.length;c++){var h=n(o[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),o=n(569),s=n.n(o),a=n(565),l=n.n(a),c=n(216),h=n.n(c),u=n(589),d=n.n(u),p=n(890),f={};f.styleTagTransform=d(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=h(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var g=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(i=r;0!=i--;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var s=o[i];if(!t(e[s],n[s]))return!1}return!0}return e!=e&&n!=n};const m="__googleMapsScriptId";class y{constructor({apiKey:t,channel:e,client:n,id:r=m,libraries:i=[],language:o,region:s,version:a,mapIds:l,nonce:c,retries:h=3,url:u="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=a,this.apiKey=t,this.channel=e,this.client=n,this.id=r||m,this.libraries=i,this.language=o,this.region=s,this.mapIds=l,this.nonce=c,this.retries=h,this.url=u,y.instance){if(!g(this.options,y.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(y.instance.options)}`);return y.instance}y.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+=`?callback=${this.CALLBACK}`,this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),t}load(){return this.loadPromise()}loadPromise(){return new Promise(((t,e)=>{this.loadCallback((n=>{n?e(n.error):t(window.google)}))}))}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),t)}else this.onerrorEvent=t,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((t=>{t(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}new class{constructor(){this.$city=document.querySelector("#city"),this.$aqi=document.querySelector("#aqi"),this.$aqiDescription=document.querySelector("#aqiDescription"),this.$aqiTitleDescription=document.querySelector("#aqiTitleDescription"),this.$lastUpdate=document.querySelector("#lastUpdate"),this.$homeButton=document.querySelector("#homeButton"),this.$searchButton=document.querySelector("#searchButton"),this.$searchInput=document.querySelector("#searchInput"),this.$positionButton=document.querySelector("#positionButton"),this.$saveButton=document.querySelector("#saveButton"),this.$savedPosition=document.querySelector("#savedPosition"),this.$deleteButton=document.querySelector("#deleteButton"),this.$uploadButton=document.querySelector("#uploadButton"),this.$map=document.querySelector("#map"),this.$form=document.forms[0],this.currentDatas,this.addEventListeners(),this.loadLocalStorage()}addEventListeners(){this.$homeButton.addEventListener("click",(()=>this.backToHome())),this.$form.addEventListener("submit",(t=>this.submitForm(t))),this.$positionButton.addEventListener("click",(()=>this.searchByCoordinates())),this.$saveButton.addEventListener("click",(()=>this.savePosition(this.currentDatas))),this.$uploadButton.addEventListener("click",(()=>this.uploadPosition())),this.$deleteButton.addEventListener("click",(()=>this.deletePosition()))}createMap(t){const e={lat:t.data.city.geo[0],lng:t.data.city.geo[1]},n=new y({apiKey:"AIzaSyBGIB2DTt9s_HsZmOfxDimB9FkA_f_b5ws",version:"weekly",libraries:["places"]}),r={center:e,zoom:15};n.load().then((n=>{const i=new n.maps.Map(this.$map,r);new n.maps.Marker({position:e,map:i,title:t.data.city.name})})).catch((t=>{alert(t)}))}loadLocalStorage(){if(localStorage.getItem("savedPosition")){const t=JSON.parse(localStorage.getItem("savedPosition"));this.$savedPosition.innerHTML="💾 "+t.name,this.$deleteButton.style.display="block"}}submitForm(t){t.preventDefault();const e=this.$searchInput.value;e.trim().length?(this.callLambdaFunction(`city=${e}`),this.$searchButton.value="Searching..."):this.displayMessageButton(this.$searchButton,"First type a city!","#ee6352")}backToHome(){this.currentDatas="",this.$city.innerHTML="-",this.$aqi.innerHTML="-",this.$aqiTitleDescription.innerHTML="",this.$aqiDescription.innerHTML="",this.$lastUpdate.innerHTML="",this.$searchInput.value="",this.$city.style.color="#fff",this.$aqi.style.color="#fff",this.$aqiTitleDescription.style.color="#fff",this.$aqiDescription.style.color="#fff",this.$map.innerHTML='\n            <div id="homePage">\n                <h1>Air Quality Index Tracker</h1>\n                With this application you can check the <a href="https://aqicn.org/faq/" target="_blank">AQI</a> of the place you prefer:\n                <br><br>\n                <ul>\n                    <li>You can search for a specific city by typing it in the input text.</li>\n                    <br>\n                    <li>You can look for your nearest station, with the specific button and allowing geolocation on your browser.</li>\n                    <br>\n                    <li>You can save the current position. If you do that, datas will be saved just on your browser, and they will be available also refreshing the page. Delete them by clicking on &#9249; button.</li>\n                    <br>\n                    <li>You can upload a saved position.</li>\n                </ul>\n                <br>\n                This is a project for the <a href="https://www.start2impact.it/">start2impact</a> Web Development course.\n                <br><br>\n                Full code on <a href="https://github.com/paolodellorti/JS-Advanced" target="_blank">GitHub</a>.\n                <br><br>\n                Made by Paolo Dell\'Orti. \n            </div>\n        '}callLambdaFunction(t){fetch(`/.netlify/functions/lambda?${t}`).then((t=>t.json())).then((t=>{this.updateDatas(t),this.$searchButton.value="Search"})).catch((t=>{"TypeError"===t.name?(this.$searchButton.value="Search",this.displayMessageButton(this.$searchButton,"Not found, try another one!","#ee6352")):alert(t)})).finally(this.$searchInput.value="")}displayMessageButton(t,e,n){let r=t.value;t.style.color=n,t.value=e,setTimeout((()=>{t.style.color="#fff",t.value=r}),1500)}searchByCoordinates(){navigator.geolocation?new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e))).then((t=>{const e=t.coords.latitude,n=t.coords.longitude;this.callLambdaFunction(`lat=${e}&lon=${n}`)})).then(this.displayMessageButton(this.$positionButton,"Done!","#59cd90")).catch((t=>{t.code==t.PERMISSION_DENIED?this.displayMessageButton(this.$positionButton,"Allow geolocation to use it!","#ee6352"):alert(t)})):(this.$positionButton.value="Geolocation not available!",this.$positionButton.style.color="#ee6352")}savePosition(t){const e=JSON.parse(localStorage.getItem("savedPosition"));if(this.currentDatas)if(t.data.idx==e.idx)this.displayMessageButton(this.$saveButton,"Position already saved!","#ee6352");else{this.$deleteButton.style.display="block";const e={name:t.data.city.name,idx:t.data.idx};localStorage.setItem("savedPosition",JSON.stringify(e)),this.$savedPosition.innerHTML="💾 "+e.name,this.displayMessageButton(this.$saveButton,"Saved successfully!","#59cd90")}else this.displayMessageButton(this.$saveButton,"First choose a position!","#ee6352")}uploadPosition(){if(localStorage.getItem("savedPosition")){const t=`@${JSON.parse(localStorage.getItem("savedPosition")).idx}`;this.callLambdaFunction(`city=${t}`),this.displayMessageButton(this.$uploadButton,"Uploaded successfully!","#59cd90")}else this.displayMessageButton(this.$uploadButton,"First save a position!","#ee6352")}deletePosition(){this.$deleteButton.style.display="none",this.$savedPosition.innerHTML="💾",localStorage.removeItem("savedPosition")}updateDatas(t){this.$city.innerHTML=t.data.city.name,this.$aqi.innerHTML=t.data.aqi,this.$searchInput.value="",this.$lastUpdate.innerHTML=`Last update: ${t.data.time.s}`,this.currentDatas=t,this.modifyByDanger(t.data.aqi),this.createMap(t)}modifyByDanger(t){t>=0&&t<=50?(this.selectTextColor("#009966"),this.$aqiTitleDescription.innerHTML="Good",this.$aqiDescription.innerHTML="Air quality is considered satisfactory, \n                                            and air pollution poses little or no risk."):t>=51&&t<=100?(this.selectTextColor("#FFDE33"),this.$aqiTitleDescription.innerHTML="Moderate",this.$aqiDescription.innerHTML="Air quality is acceptable; however, for some pollutants \n                                            there may be a moderate health concern for a very small \n                                            number of people who are unusually sensitive to air pollution."):t>=101&&t<=150?(this.selectTextColor("#FF9933"),this.$aqiTitleDescription.innerHTML="Unhealthy for Sensitive Groups",this.$aqiDescription.innerHTML="Members of sensitive groups may experience health effects. \n                                            The general public is not likely to be affected."):t>=151&&t<=200?(this.selectTextColor("#CC0033"),this.$aqiTitleDescription.innerHTML="Unhealthy",this.$aqiDescription.innerHTML="Everyone may begin to experience health effects; \n                                            members of sensitive groups may experience more serious health effects"):t>=201&&t<=300?(this.selectTextColor("#660099"),this.$aqiTitleDescription.innerHTML="Very Unhealthy",this.$aqiDescription.innerHTML="Health warnings of emergency conditions. \n                                            The entire population is more likely to be affected."):t>300&&(this.selectTextColor("#7E0023"),this.$aqiTitleDescription.innerHTML="Hazardous",this.$aqiDescription.innerHTML="Health alert: everyone may experience more serious health effects.")}selectTextColor(t){this.$aqi.style.color=t,this.$city.style.color=t,this.$aqiDescription.style.color=t,this.$aqiTitleDescription.style.color=t}}})()})();