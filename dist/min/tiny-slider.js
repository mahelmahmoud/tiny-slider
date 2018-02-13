var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=M.style.overflow,e.style.background="",e.style.overflow=M.style.overflow="hidden",M.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),M.style.overflow=t,M.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t){return e.className.indexOf(t)>=0}function v(e,t){d(e,t)||(e.className+=" "+t)}function h(e,t){d(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function b(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function x(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&b(e,"hidden")}function E(e){return e.offsetWidth>0&&e.offsetHeight>0}function C(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function w(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function N(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function O(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&S;e.addEventListener(n,t[n],i)}}function D(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&S;e.removeEventListener(n,t[n],i)}}function k(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function A(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var M=document.documentElement,P=!1;try{var I=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,I)}catch(e){}var S=!!P&&{passive:!0},W=navigator.userAgent,H=!0,L={};try{L=localStorage,L.tnsApp&&L.tnsApp!==W&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){L.removeItem(e)}),L.tnsApp=W}catch(e){H=!1}localStorage||(L={});var z=document,B=window,R={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},j=t(L.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),H),q=t(L.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),H),G=t(L.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),H),F=t(L.tTf)||n("tTf",w(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),H),U=t(L.tTDu)||n("tTDu",w(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),H),X=t(L.tTDe)||n("tTDe",w(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),H),V=t(L.tADu)||n("tADu",w(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),H),Y=t(L.tADe)||n("tADe",w(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),H),K=t(L.tTE)||n("tTE",N(U,"Transition"),H),Q=t(L.tAE)||n("tAE",N(V,"Animation"),H);return G||(q=!1),function(t){function n(){return B.innerWidth||z.documentElement.clientWidth||z.body.clientWidth}function a(e){var t;do{t=e.clientWidth,e=e.parentNode}while(!t);return t}function r(e){var n=t[e];return!n&&mt&&pt.indexOf(e)>=0&&mt.forEach(function(t){ht[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:gt;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!_e&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(vt/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===Ot)i=!0;else if(i=t[e],mt&&pt.indexOf(e)>=0)for(var r=0,s=mt.length;r<s;r++){var l=mt[r];if(!(n>=l))break;e in ht[l]&&(i=ht[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function y(e){return j?j+"("+100*e+"% / "+Rt+")":100*e/Rt+"%"}function w(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(vt%(n+t)+t)/2+"px":ot?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=ot?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function N(e,t,n){return e?(e+t)*Rt+"px":j?j+"("+100*Rt+"% / "+n+")":100*Rt/n+"%"}function M(e,t,n){var i="";if(ot){if(i="width:",e)i+=e+t+"px";else{var a=_e?Rt:n;i+=j?j+"(100% / "+a+")":100/a+"%"}i+=on+";"}return i}function P(e){var t="";if(e!==!1){t=(ot?"padding-":"margin-")+(ot?"right":"bottom")+": "+e+"px;"}return t}function I(e){e=e||B.event,clearTimeout(Tt),Tt=setTimeout(function(){if(rt){var t=n();gt!==t&&(gt=t,S(),"outer"===Ot&&$t.emit("outerResized",Ye(e)))}},100)}function S(){var e=yt,t=Vt,n=wt,i=rn;if(vt=a(st),at=a(lt),mt&&W(),e!==yt||At){var r=Mt,s=Wt,u=At,f=kt,d=Dt,v=nn;if(wt=o("items"),Nt=o("slideBy"),nn=o("disable"),rn=!!nn||!!an&&dt<=wt,wt!==n&&(Qt=Rt-wt,ri()),nn!==v&&J(nn),rn!==i&&(rn&&(Vt=_e?Bt:0),H()),e!==yt&&(Pt=o("speed"),kt=o("edgePadding"),Dt=o("gutter"),At=o("fixedWidth"),nn||At===u||ve(),(Wt=o("autoHeight"))!==s&&(Wt||(lt.style.height=""))),Mt=!rn&&o("arrowKeys"),Mt!==r&&(Mt?O(z,fn):D(z,fn)),hn){var h=Nn,p=On;Nn=!rn&&o("controls"),On=o("controlsText"),Nn!==h&&(Nn?T(Dn):x(Dn)),On!==p&&(Tn.innerHTML=On[0],En.innerHTML=On[1])}if(pn){var m=An;An=!rn&&o("nav"),An!==m&&(An?(T(Mn),Ve()):x(Mn))}if(gn){var y=_n;_n=!rn&&o("touch"),_n!==y&&_e&&(_n?O(ct,dn):D(ct,dn))}if(bn){var g=ii;ii=!rn&&o("mouseDrag"),ii!==g&&_e&&(ii?O(ct,vn):D(ct,vn))}if(yn){var b=Gn,E=Vn,C=Kn,k=Xn;if(rn?Gn=Vn=Kn=!1:(Gn=o("autoplay"),Gn?(Vn=o("autoplayHoverPause"),Kn=o("autoplayResetOnVisibility")):Vn=Kn=!1),Xn=o("autoplayText"),Fn=o("autoplayTimeout"),Gn!==b&&(Gn?(Yn&&T(Yn),Bn||jn||Ne()):(Yn&&x(Yn),Bn&&Oe())),Vn!==E&&(Vn?O(ct,cn):D(ct,cn)),Kn!==C&&(Kn?O(z,un):D(z,un)),Yn&&Xn!==k){var A=Gn?1:0,I=Yn.innerHTML,S=I.length-k[A].length;I.substring(S)===k[A]&&(Yn.innerHTML=I.substring(0,S)+Xn[A])}}if(!G){if(rn||kt===f&&Dt===d||(lt.style.cssText=w(kt,Dt,At)),_e&&ot&&(At!==u||Dt!==d||wt!==n)&&(ct.style.width=N(At,Dt,wt)),ot&&(wt!==n||Dt!==d||At!=u)){var B=M(At,Dt,wt)+P(Dt);Ht.removeRule(c(Ht)-1),l(Ht,"#"+tn+" > .tns-item",B,c(Ht))}At||Vt!==t||pe(0)}Vt!==t&&($t.emit("indexChanged",Ye()),pe(0),Yt=Vt),wt!==n&&(ee(),re(),$(),navigator.msMaxTouchPoints&&ie())}ot||nn||(ne(),Ue(),ve()),L(!0),$()}function W(){yt=0,mt.forEach(function(e,t){gt>=e&&(yt=t+1)})}function H(){var e="tns-transparent";if(rn){if(!Ct){if(kt&&(lt.style.margin="0px"),Bt)for(var t=Bt;t--;)_e&&v(ft[t],e),v(ft[Rt-t-1],e);Ct=!0}}else if(Ct){if(kt&&!At&&G&&(lt.style.margin=""),Bt)for(var t=Bt;t--;)_e&&h(ft[t],e),h(ft[Rt-t-1],e);Ct=!1}}function L(e){At&&kt&&(rn||vt<=At+Dt?"0px"!==lt.style.margin&&(lt.style.margin="0px"):e&&(lt.style.cssText=w(kt,Dt,At)))}function J(e){var t=ft.length;if(e){if(Ht.disabled=!0,ct.className=ct.className.replace(en.substring(1),""),ct.style="",St)for(var n=Bt;n--;)_e&&x(ft[n]),x(ft[t-n-1]);if(ot&&_e||(lt.style=""),!_e)for(var i=Vt,a=Vt+dt;i<a;i++){var r=ft[i];r.style="",h(r,et),h(r,it)}}else{if(Ht.disabled=!1,ct.className+=en,ot||ne(),ve(),St)for(var n=Bt;n--;)_e&&T(ft[n]),T(ft[t-n-1]);if(!_e)for(var i=Vt,a=Vt+dt;i<a;i++){var r=ft[i],o=i<Vt+wt?et:it;r.style.left=100*(i-Vt)/wt+"%",v(r,o)}}}function Z(){if(Lt&&!nn){var e=Vt,t=Vt+wt;for(kt&&(e-=1,t+=1);e<t;e++)[].forEach.call(ft[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[K]=function(e){e.stopPropagation()},O(e,t),d(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function $(){if(Wt&&!nn){for(var e=[],t=Vt,n=Vt+wt;t<n;t++)[].forEach.call(ft[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?te():_(e)}}function _(e){e.forEach(function(t,n){C(t)&&e.splice(n,1)}),0===e.length?te():setTimeout(function(){_(e)},16)}function ee(){Z(),ae(),ue(),Ve(),oe()}function te(){for(var e,t=[],n=Vt,i=Vt+wt;n<i;n++)t.push(ft[n].offsetHeight);e=Math.max.apply(null,t),lt.style.height!==e&&(U&&fe(Pt),lt.style.height=e+"px")}function ne(){xt=[0];for(var e,t=ft[0].getBoundingClientRect().top,n=1;n<Rt;n++)e=ft[n].getBoundingClientRect().top,xt.push(e-t)}function ie(){st.style.msScrollSnapPointsX="snapInterval(0%, "+100/wt+"%)"}function ae(){for(var e=Vt+Math.min(dt,wt),t=Rt;t--;){var n=ft[t];t>=Vt&&t<e?p(n,"tabindex")&&(g(n,{"aria-hidden":"false"}),b(n,["tabindex"]),v(n,xn)):(p(n,"tabindex")||g(n,{"aria-hidden":"true",tabindex:"-1"}),d(n,xn)&&h(n,xn))}}function re(){if(!_e){for(var e=Vt+Math.min(dt,wt),t=Rt;t--;){var n=ft[t];t>=Vt&&t<e?(v(n,"tns-moving"),n.style.left=100*(t-Vt)/wt+"%",v(n,et),h(n,it)):n.style.left&&(n.style.left="",v(n,it),h(n,et)),h(n,tt)}setTimeout(function(){[].forEach.call(ft,function(e){h(e,"tns-moving")})},300)}}function oe(){if(An&&(Wn=Sn!==-1?Sn:Vt%dt,Sn=-1,Wn!==Hn)){var e=kn[Hn],t=kn[Wn];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Ln),v(t,Ln)}}function se(e){return"button"===e.nodeName.toLowerCase()}function le(e){return"true"===e.getAttribute("aria-disabled")}function ce(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function ue(){if(Nn&&!It&&!St){var e=Cn?Tn.disabled:le(Tn),t=wn?En.disabled:le(En),n=Vt===Kt,i=!It&&Vt===Qt;n&&!e&&ce(Cn,Tn,!0),!n&&e&&ce(Cn,Tn,!1),i&&!t&&ce(wn,En,!0),!i&&t&&ce(wn,En,!1)}}function fe(e,t){e=e?e/1e3+"s":"",t=t||ct,t.style[U]=e,_e||(t.style[V]=e),ot||(lt.style[U]=e)}function de(){var e;if(ot)if(At)e=-(At+Dt)*Vt+"px";else{var t=F?Rt:wt;e=100*-Vt/t+"%"}else e=-xt[Vt]+"px";return e}function ve(e){e||(e=de()),ct.style[Gt]=Ft+e+Ut}function he(e,t,n,i){for(var a=e,r=e+wt;a<r;a++){var o=ft[a];i||(o.style.left=100*(a-Vt)/wt+"%"),U&&fe(Pt,o),nt&&X&&(o.style[X]=o.style[Y]=nt*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&zt.push(o)}}function pe(e,t){isNaN(e)&&(e=Pt),Bn&&!E(ct)&&(e=0),U&&fe(e),oi(e,t)}function me(e,t){qt&&ri(),(Vt!==Yt||t)&&($t.emit("indexChanged",Ye()),$t.emit("transitionStart",Ye()),Bn&&e&&["click","keydown"].indexOf(e.type)>=0&&Oe(),Jt=!0,pe())}function ye(e){return e.toLowerCase().replace(/-/g,"")}function ge(e){if(_e||Jt){if($t.emit("transitionEnd",Ye(e)),!_e&&zt.length>0)for(var t=0;t<wt;t++){var n=zt[t];n.style.left="",U&&fe(0,n),nt&&X&&(n.style[X]=n.style[Y]=""),h(n,tt),v(n,it)}if(!e||!_e&&e.target.parentNode===ct||e.target===ct&&ye(e.propertyName)===ye(Gt)){if(!qt){var i=Vt;ri(),Vt!==i&&($t.emit("indexChanged",Ye()),U&&fe(0),ve())}$(),"inner"===Ot&&$t.emit("innerLoaded",Ye()),Jt=!1,Hn=Wn,Yt=Vt}}}function be(e,t){if(!rn)if("prev"===e)xe(t,-1);else if("next"===e)xe(t,1);else if(!Jt){var n=Vt%dt,i=0;if(n<0&&(n+=dt),"first"===e)i=-n;else if("last"===e)i=dt-wt-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%dt;a<0&&(a+=dt),i=a-n}Vt+=i,Vt%dt!=Yt%dt&&me(t)}}function xe(e,t){if(!Jt){var n;if(!t){e=e||B.event;for(var i=e.target||e.srcElement;i!==Dn&&[Tn,En].indexOf(i)<0;)i=i.parentNode;var a=[Tn,En].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(It){if(Vt===Kt&&t===-1)return void be("last",e);if(Vt===Qt&&1===t)return void be(0,e)}t&&(Vt+=Nt*t,me(n||e&&"keydown"===e.type?e:null))}}function Te(e){if(!Jt){e=e||B.event;for(var t,n=e.target||e.srcElement;n!==Mn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=Sn=[].indexOf.call(kn,n),be(t,e))}}function Ee(){zn=setInterval(function(){xe(null,Un)},Fn),Bn=!0}function Ce(){clearInterval(zn),Bn=!1}function we(e,t){g(Yn,{"data-action":e}),Yn.innerHTML=Qn[0]+e+Qn[1]+t}function Ne(){Ee(),Yn&&we("stop",Xn[1])}function Oe(){Ce(),Yn&&we("start",Xn[0])}function De(){Gn&&!Bn&&(Ne(),jn=!1)}function ke(){Bn&&(Oe(),jn=!0)}function Ae(){Bn?(Oe(),jn=!0):(Ne(),jn=!1)}function Me(){z.hidden?Bn&&(Ce(),qn=!0):qn&&(Ee(),qn=!1)}function Pe(){Bn&&(Ce(),Rn=!0)}function Ie(){Rn&&(Ee(),Rn=!1)}function Se(e){switch(e=e||B.event,e.keyCode){case R.LEFT:xe(e,-1);break;case R.RIGHT:xe(e,1)}}function We(e){switch(e=e||B.event,e.keyCode){case R.LEFT:case R.UP:case R.PAGEUP:Tn.disabled||xe(e,-1);break;case R.RIGHT:case R.DOWN:case R.PAGEDOWN:En.disabled||xe(e,1);break;case R.HOME:be(0,e);break;case R.END:be(dt-1,e)}}function He(e){e.focus()}function Le(e){function n(e){return t.navContainer?e:Pn[e]}var i=z.activeElement;if(p(i,"data-nav")){e=e||B.event;var a=e.keyCode,r=[].indexOf.call(kn,i),o=Pn.length,s=Pn.indexOf(r);switch(t.navContainer&&(o=dt,s=r),a){case R.LEFT:case R.PAGEUP:s>0&&He(kn[n(s-1)]);break;case R.UP:case R.HOME:s>0&&He(kn[n(0)]);break;case R.RIGHT:case R.PAGEDOWN:s<o-1&&He(kn[n(s+1)]);break;case R.DOWN:case R.END:s<o-1&&He(kn[n(o-1)]);break;case R.ENTER:case R.SPACE:Sn=r,be(r,e)}}}function ze(){pe(0,ct.scrollLeft()),Yt=Vt}function Be(e){return e.target||e.srcElement}function Re(e){return e.type.indexOf("touch")>=0}function je(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function qe(e){if(ni=0,Et=!1,ei=ti=null,!Jt){e=e||B.event;var t;Re(e)?(t=e.changedTouches[0],$t.emit("touchStart",Ye(e))):(t=e,je(e),$t.emit("dragStart",Ye(e))),ei=parseInt(t.clientX),ti=parseInt(t.clientY),Jn=parseFloat(ct.style[Gt].replace(Ft,"").replace(Ut,""))}}function Ge(e){if(!Jt&&null!==ei){e=e||B.event;var n;if(Re(e)?n=e.changedTouches[0]:(n=e,je(e)),Zn=parseInt(n.clientX)-ei,$n=parseInt(n.clientY)-ti,0===ni&&(ni=f(u($n,Zn),15)===t.axis),ni){Re(e)?$t.emit("touchMove",Ye(e)):(ai||(ai=!0),$t.emit("dragMove",Ye(e))),Et||(Et=!0);var i=Jn;if(ot)if(At)i+=Zn,i+="px";else{var a=F?Zn*wt*100/(at*Rt):100*Zn/at;i+=a,i+="%"}else i+=$n,i+="px";F&&fe(0),ct.style[Gt]=Ft+i+Ut}}}function Fe(e){if(!Jt&&Et){e=e||B.event;var t;Re(e)?(t=e.changedTouches[0],$t.emit("touchEnd",Ye(e))):(t=e,$t.emit("dragEnd",Ye(e))),Zn=parseInt(t.clientX)-ei,$n=parseInt(t.clientY)-ti;var n=Boolean(ot?Zn:$n);if(ni=0,Et=!1,ei=ti=null,ot){var i=-Zn*wt/at;i=Zn>0?Math.floor(i):Math.ceil(i),Vt+=i}else{var a=-(Jn+$n);if(a<=0)Vt=Kt;else if(a>=xt[xt.length-1])Vt=Qt;else{var r=0;do{r++,Vt=$n<0?r+1:r}while(r<Rt&&a>=xt[r+1])}}if(me(e,n),ai){ai=!1;var o=Be(e);O(o,{click:function e(t){je(t),D(o,{click:e})}})}}}function Ue(){lt.style.height=xt[Vt+wt]-xt[Vt]+"px"}function Xe(){Pn=[];for(var e=Vt%dt%wt;e<dt;)!St&&e+wt>dt&&(e=dt-wt),Pn.push(e),e+=wt;(St&&Pn.length*wt<dt||!St&&Pn[0]>0)&&Pn.unshift(0)}function Ve(){An&&!mn&&(Xe(),Pn!==In&&([].forEach.call(kn,function(e,t){Pn.indexOf(t)<0?x(e):T(e)}),In=Pn))}function Ye(e){return{container:ct,slideItems:ft,navContainer:Mn,navItems:kn,controlsContainer:Dn,hasControls:hn,prevButton:Tn,nextButton:En,items:wt,slideBy:Nt,cloneCount:Bt,slideCount:dt,slideCountNew:Rt,index:Vt,indexCached:Yt,navCurrentIndex:Wn,navCurrentIndexCached:Hn,visibleNavIndexes:Pn,visibleNavIndexesCached:In,event:e||{}}}t=e({container:z.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=z.querySelector(t[e]))});var Ke=B.console&&"function"==typeof B.console.warn;if(!t.container||!t.container.nodeName)return void(Ke&&console.warn("Can't find container element."));if(t.container.children.length<2)return void(Ke&&console.warn("Slides less than 2."));if(t.responsive){var Qe={},Je=t.responsive;for(var Ze in Je){var $e=Je[Ze];Qe[Ze]="number"==typeof $e?{items:$e}:$e}t.responsive=Qe,Qe=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var _e="carousel"===t.mode;if(!_e){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var et="tns-fadeIn",tt="tns-fadeOut",nt=!1,it=t.animateNormal||"tns-normal";K&&Q&&(et=t.animateIn||et,tt=t.animateOut||tt,nt=t.animateDelay||nt)}var at,rt,ot="horizontal"===t.axis,st=z.createElement("div"),lt=z.createElement("div"),ct=t.container,ut=ct.parentNode,ft=ct.children,dt=ft.length,vt=a(ut),ht=t.responsive,pt=[],mt=!1,yt=0,gt=n();if(ht){mt=Object.keys(ht).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),mt.forEach(function(e){pt=pt.concat(Object.keys(ht[e]))});var bt=[];pt.forEach(function(e){bt.indexOf(e)<0&&bt.push(e)}),pt=bt,W()}var xt,Tt,Et,Ct,wt=o("items"),Nt="page"===o("slideBy")?wt:o("slideBy"),Ot=t.nested,Dt=o("gutter"),kt=o("edgePadding"),At=o("fixedWidth"),Mt=o("arrowKeys"),Pt=o("speed"),It=t.rewind,St=!It&&t.loop,Wt=o("autoHeight"),Ht=s(),Lt=t.lazyload,zt=[],Bt=St?2*dt:0,Rt=_e?dt+2*Bt:dt+Bt,jt=!(!At||St||kt),qt=!_e||!St,Gt=ot?"left":"top",Ft="",Ut="",Xt=o("startIndex"),Vt=Xt?function(e){return e%=dt,e<0&&(e+=dt),e=Math.min(e,Rt-wt)}(Xt):_e?Bt:0,Yt=Vt,Kt=0,Qt=Rt-wt,Jt=!1,Zt=t.onInit,$t=new k,_t=ct.id,en=" tns-slider tns-"+t.mode,tn=ct.id||i(),nn=o("disable"),an=t.freezable,rn=!!nn||!!an&&dt<=wt,on="inner"===Ot?" !important":"",sn={click:xe,keydown:We},ln={click:Te,keydown:Le},cn={mouseover:Pe,mouseout:Ie},un={visibilitychange:Me},fn={keydown:Se},dn={touchstart:qe,touchmove:Ge,touchend:Fe,touchcancel:Fe},vn={mousedown:qe,mousemove:Ge,mouseup:Fe,mouseleave:Fe},hn=r("controls"),pn=r("nav"),mn=t.navAsThumbnails,yn=r("autoplay"),gn=r("touch"),bn=r("mouseDrag"),xn="tns-slide-active";if(hn)var Tn,En,Cn,wn,Nn=o("controls"),On=o("controlsText"),Dn=t.controlsContainer;if(pn)var kn,An=o("nav"),Mn=t.navContainer,Pn=[],In=Pn,Sn=-1,Wn=Vt%dt,Hn=Wn,Ln="tns-nav-active";if(yn)var zn,Bn,Rn,jn,qn,Gn=o("autoplay"),Fn=o("autoplayTimeout"),Un="forward"===t.autoplayDirection?1:-1,Xn=o("autoplayText"),Vn=o("autoplayHoverPause"),Yn=t.autoplayButton,Kn=o("autoplayResetOnVisibility"),Qn=["<span class='tns-visually-hidden'>"," animation</span>"];if(gn)var Jn,Zn,$n,_n=o("touch"),ei=null,ti=null,ni=0;if(bn)var ii=o("mouseDrag"),ai=!1;rn&&(Nn=An=_n=ii=Mt=Gn=Vn=Kn=!1),F&&(Gt=F,Ft="translate",Ft+=ot?"X(":"Y(",Ut=")"),function(){st.appendChild(lt),ut.insertBefore(st,ct),lt.appendChild(ct),at=a(lt);var e="tns-outer",n="tns-inner",i=r("gutter");if(_e?ot&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),st.className=e,lt.className=n,lt.id=tn+"-iw",Wt&&(lt.className+=" tns-ah",lt.style[U]=Pt/1e3+"s"),""===ct.id&&(ct.id=tn),en+=q?" tns-subpixel":" tns-no-subpixel",en+=j?" tns-calc":" tns-no-calc",_e&&(en+=" tns-"+t.axis),ct.className+=en,_e&&K){var s={};s[K]=ge,O(ct,s)}e=n=null;for(var u=0;u<dt;u++){var f=ft[u];f.id||(f.id=tn+"-item"+u),v(f,"tns-item"),!_e&&it&&v(f,it),g(f,{"aria-hidden":"true",tabindex:"-1"})}if(St||kt){for(var d=z.createDocumentFragment(),p=z.createDocumentFragment(),m=Bt;m--;){var T=m%dt,E=ft[T].cloneNode(!0);if(b(E,"id"),p.insertBefore(E,p.firstChild),_e){var C=ft[dt-1-T].cloneNode(!0);b(C,"id"),d.appendChild(C)}}ct.insertBefore(d,ct.firstChild),ct.appendChild(p),ft=ct.children}for(var D=Vt,k=Vt+Math.min(dt,wt);D<k;D++){var f=ft[D];g(f,{"aria-hidden":"false"}),b(f,["tabindex"]),v(f,xn),_e||(f.style.left=100*(D-Vt)/wt+"%",v(f,et),h(f,it))}if(_e&&ot&&(q?(l(Ht,"#"+tn+" > .tns-item","font-size:"+B.getComputedStyle(ft[0]).fontSize+";",c(Ht)),l(Ht,"#"+tn,"font-size:0;",c(Ht))):[].forEach.call(ft,function(e,t){e.style.marginLeft=y(t)})),G){var A=w(t.edgePadding,t.gutter,t.fixedWidth);l(Ht,"#"+tn+"-iw",A,c(Ht)),_e&&ot&&(A="width:"+N(t.fixedWidth,t.gutter,t.items),l(Ht,"#"+tn,A,c(Ht))),(ot||t.gutter)&&(A=M(t.fixedWidth,t.gutter,t.items)+P(t.gutter),l(Ht,"#"+tn+" > .tns-item",A,c(Ht)))}else if(lt.style.cssText=w(kt,Dt,At),_e&&ot&&(ct.style.width=N(At,Dt,wt)),ot||Dt){var A=M(At,Dt,wt)+P(Dt);l(Ht,"#"+tn+" > .tns-item",A,c(Ht))}if(ot||nn||(ne(),Ue()),ht&&G&&mt.forEach(function(e){var t=ht[e],n="",i="",a="",s="",l=o("items",e),c=o("fixedWidth",e),u=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+tn+"-iw{"+w(u,f,c)+"}"),_e&&ot&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+tn+"{width:"+N(c,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!_e&&"items"in t)&&(s+=M(c,f,l)),"gutter"in t&&(s+=P(f)),s.length>0&&(s="#"+tn+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&Ht.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Ht.cssRules.length)}),_e&&!nn&&ve(),navigator.msMaxTouchPoints&&(v(st,"ms-touch"),O(st,{scroll:ze}),ie()),pn){var W=_e?Bt:0;if(Mn)g(Mn,{"aria-label":"Carousel Pagination"}),kn=Mn.children,[].forEach.call(kn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":ft[W+t].id})});else{for(var R="",F=mn?"":" hidden",D=0;D<dt;D++)R+='<button data-nav="'+D+'" tabindex="-1" aria-selected="false" aria-controls="'+ft[W+D].id+F+'" type="button"></button>';R='<div class="tns-nav" aria-label="Carousel Pagination">'+R+"</div>",st.insertAdjacentHTML("afterbegin",R),Mn=st.querySelector(".tns-nav"),kn=Mn.children}if(Ve(),U){var X=U.substring(0,U.length-18).toLowerCase(),A="transition: all "+Pt/1e3+"s";X&&(A="-"+X+"-"+A),l(Ht,"[aria-controls^="+tn+"-item]",A,c(Ht))}g(kn[Wn],{tabindex:"0","aria-selected":"true"}),v(kn[Wn],Ln),O(Mn,ln),An||x(Mn)}if(yn){var V=Gn?"stop":"start";Yn?g(Yn,{"data-action":V}):t.autoplayButtonOutput&&(lt.insertAdjacentHTML("beforebegin",'<button data-action="'+V+'" type="button">'+Qn[0]+V+Qn[1]+Xn[0]+"</button>"),Yn=st.querySelector("[data-action]")),Yn&&O(Yn,{click:Ae}),Gn?(Ne(),Vn&&O(ct,cn),Kn&&O(ct,un)):Yn&&x(Yn)}hn&&(Dn?(Tn=Dn.children[0],En=Dn.children[1],g(Dn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(Tn,{"data-controls":"prev"}),g(En,{"data-controls":"next"}),g(Dn.children,{"aria-controls":tn,tabindex:"-1"})):(st.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+tn+'" type="button">'+On[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+tn+'" type="button">'+On[1]+"</button></div>"),Dn=st.querySelector(".tns-controls"),Tn=Dn.children[0],En=Dn.children[1]),Cn=se(Tn),wn=se(En),ue(),O(Dn,sn),Nn||x(Dn)),_n&&O(ct,dn),ii&&O(ct,vn),Mt&&O(z,fn),"inner"===Ot?$t.on("outerResized",function(){S(),$t.emit("innerLoaded",Ye())}):(O(B,{resize:I}),"outer"===Ot&&$t.on("innerLoaded",$)),Z(),$(),H(),L(),$t.on("indexChanged",ee),"function"==typeof Zt&&Zt(Ye()),"inner"===Ot&&$t.emit("innerLoaded",Ye()),nn&&J(!0),rt=!0}();var ri=function(){return St?function(){var e=Kt,t=Qt;if(_e)if(e+=Nt,t-=Nt,kt)e+=1,t-=1;else if(At){var n=Dt?Dt:0;vt%(At+n)>n&&(t-=1)}if(Vt>t)for(;Vt>=e+dt;)Vt-=dt;else if(Vt<e)for(;Vt<=t-dt;)Vt+=dt}:function(){Vt=Math.max(Kt,Math.min(Qt,Vt))}}(),oi=function(){return _e?function(e,t){t||(t=de()),jt&&Vt===Qt&&(t=-((At+Dt)*Rt-at)+"px"),U||!e?(ve(t),e&&E(ct)||ge()):A(ct,Gt,Ft,Ut,t,Pt,ge),ot||Ue()}:function(e){zt=[];var t={};t[K]=t[Q]=ge,D(ft[Yt],t),O(ft[Vt],t),he(Yt,et,tt,!0),he(Vt,it,et),K&&Q&&e||ge()}}();return{getInfo:Ye,events:$t,goTo:be,play:De,pause:ke,isOn:rt,destroy:function(){if(D(B,{resize:I}),D(z,fn),Ht.disabled=!0,St)for(var e=Bt;e--;)_e&&ft[0].remove(),ft[ft.length-1].remove();var n=["tns-item",xn];_e||(n=n.concat("tns-normal",et));for(var i=dt;i--;){var a=ft[i];a.id.indexOf(tn+"-item")>=0&&(a.id=""),n.forEach(function(e){h(a,e)})}if(b(ft,["style","aria-hidden","tabindex"]),ft=tn=dt=Rt=Bt=null,Nn&&(D(Dn,sn),t.controlsContainer&&(b(Dn,["aria-label","tabindex"]),b(Dn.children,["aria-controls","aria-disabled","tabindex"])),Dn=Tn=En=null),An&&(D(Mn,ln),t.navContainer&&(b(Mn,["aria-label"]),b(kn,["aria-selected","aria-controls","tabindex"])),Mn=kn=null),Gn&&(clearInterval(zn),Yn&&D(Yn,{click:Ae}),D(ct,cn),D(ct,un),t.autoplayButton&&b(Yn,["data-action"])),ct.id=_t||"",ct.className=ct.className.replace(en,""),ct.style="",_e&&K){var r={};r[K]=ge,D(ct,r)}D(ct,dn),D(ct,vn),ut.insertBefore(ct,st),st.remove(),st=lt=ct=Vt=Yt=wt=Nt=Wn=Hn=hn=Pn=In=rt=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=!1}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
