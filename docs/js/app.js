(function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],f=0,v=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0673":function(t,e,a){"use strict";var n=a("c0e1"),r=a.n(n);r.a},"21bb":function(t,e,a){"use strict";var n=a("38b0"),r=a.n(n);r.a},"38a3":function(t,e,a){t.exports=a.p+"img/me1.png"},"38b0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-content",{staticClass:"grey lighten-3"},[a("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{staticClass:"grey darken-4",attrs:{flat:"",dark:""}},[a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.items,(function(e){return a("v-btn",{key:e.title,attrs:{text:"",to:e.link}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),1),a("v-spacer"),a("v-toolbar-items",{staticClass:"d-sm-none"},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1)],1),a("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{app:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{flat:"",dark:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},l=[],o={data:function(){return{drawer:!1,items:[{title:"Top",icon:"fas fa-home",link:"/"},{title:"About",icon:"fas fa-address-card",link:"/about"},{title:"Skill",icon:"fas fa-code",link:"/skill"},{title:"Contact",icon:"fas fa-envelope",link:"/contact"}]}}},c=o,u=a("2877"),f=a("6544"),v=a.n(f),d=a("5bc1"),p=a("8336"),m=a("132d"),b=a("8860"),h=a("da13"),x=a("5d23"),y=a("34c3"),C=a("f774"),_=a("2fa4"),g=a("71d9"),w=a("2a7f"),V=Object(u["a"])(c,s,l,!1,null,null,null),k=V.exports;v()(V,{VAppBarNavIcon:d["a"],VBtn:p["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemTitle:x["b"],VNavigationDrawer:C["a"],VSpacer:_["a"],VToolbar:g["a"],VToolbarItems:w["a"]});var j={name:"App",components:{Navbar:k},data:function(){return{}}},T=j,O=a("7496"),P=a("a75b"),R=Object(u["a"])(T,r,i,!1,null,null,null),S=R.exports;v()(R,{VApp:O["a"],VContent:P["a"]});var E=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home",attrs:{fluid:""}},[a("div",{staticClass:"home__wrapper text-center"},[a("h1",{staticClass:"display-3 font-weight-light mb-4"},[t._v("Takahisa Sakuma's Portfolio")]),a("p",{staticClass:"subtitle-1"},[t._v("vue cli&vuetifyの学習を兼ねて作成したポートフォリオサイトです。")])])])},L=[],N={},$=N,q=(a("21bb"),a("a523")),A=Object(u["a"])($,I,L,!1,null,null,null),M=A.exports;v()(A,{VContainer:q["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"about",attrs:{fluid:""}},[n("v-card",{staticClass:"mx-auto mt-8 px-8 py-10 text-center",attrs:{"max-width":"750"}},[n("v-card-title",{staticClass:"justify-center"},[n("h2",{staticClass:"display-2 font-weight-light mb-10"},[t._v("About")])]),n("v-avatar",{staticClass:"mb-5",attrs:{color:"cyan",size:"180"}},[n("v-img",{attrs:{src:a("38a3")}})],1),n("v-card-text",[n("h3",{staticClass:"mb-6 headline text--primary"},[t._v("佐久間 貴久")]),n("p",[t._v("1992年生まれ茨城出身の27歳。東京理科大学工学部第二部電気工学科卒。")]),n("p",[t._v("大学卒業後は音楽やりながらサービス業や音楽教室の仕事をしたりして過ごしてきました。")]),n("p",[t._v("昨年一年ほどスタートアップの会社でRailsの開発業務(アルバイトでしたが)の経験があります。")]),n("p",[t._v("はやくスキル身につけて食えるようになりたい()")])])],1)],1)},B=[],J=(a("f26d"),a("8212")),D=a("b0af"),H=a("99d9"),K=a("adda"),W={},z=Object(u["a"])(W,F,B,!1,null,null,null),G=z.exports;v()(z,{VAvatar:J["a"],VCard:D["a"],VCardText:H["a"],VCardTitle:H["b"],VContainer:q["a"],VImg:K["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"skill",attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto mt-8 px-8 py-10",attrs:{"max-width":"900"}},[a("v-card-title",{staticClass:"justify-center"},[a("h2",{staticClass:"display-2 font-weight-light mb-8"},[t._v("Skill")])]),a("v-layout",{attrs:{wrap:""}},[t._l(t.items,(function(e){return a("v-flex",{key:e.title,attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[a("v-card",{attrs:{height:"100%"}},[a("v-card-title",{staticClass:"justify-center"},[a("h3",[t._v(t._s(e.title))])]),a("v-card-text",[a("p",[t._v(t._s(e.text))])])],1)],1)})),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"","pa-6":"","align-self-center":""}},[a("p",[t._v(" PHP(WP, Laravel)とかフロントエンド周辺(Typescript, Nuxt)あたり学習して使えるようにしていきたい。"),a("br"),t._v(" Svelteてどうなんだろ🤔 ")])])],2)],1)],1)},U=[],Y={data:function(){return{items:[{title:"HTML, CSS",text:"基本的なことは大体いけると思います。フレームワークはBootstarp4が使えます。"},{title:"Javascript",text:"基本的なことはいｋ(ry。 後述のRailsと組み合わせてJQuery扱ったり、PWA化の対応なんかもかじったことがあります。"},{title:"Ruby",text:"以前勤めていたアルバイトでRailsをメインで使用していました。CRUD作ったりフォーム作ったりなどしていました。"},{title:"Vue.js",text:"Rails + Vueの組み合わせで使用していました。こちらはそこまで経験積めなかったので今後ガシガシ勉強していきたいと思ってます。"},{title:"Git",text:"Githubを利用してます。ブランチ切ってPR出したりなどの基本操作が可能です。"},{title:"PHP",text:"勉強中です＞＜"},{title:"English",text:"日常会話がギリギリ困るレベル。数年前にフロリダ一人旅してなんとか帰ってこれた経験があります。"}]}}},Z=Y,X=a("0e8f"),tt=a("a722"),et=Object(u["a"])(Z,Q,U,!1,null,null,null),at=et.exports;v()(et,{VCard:D["a"],VCardText:H["a"],VCardTitle:H["b"],VContainer:q["a"],VFlex:X["a"],VLayout:tt["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"contact",attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto mt-8 px-8 py-10 text-center",attrs:{"max-width":"750"}},[a("v-card-title",{staticClass:"justify-center"},[a("h2",{staticClass:"display-2 font-weight-light mb-10"},[t._v("Contact")])]),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"mb-2",attrs:{label:"Name",required:"",rules:t.nameRules,outlined:"",color:"cyan"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{staticClass:"mb-2",attrs:{label:"Email",required:"",rules:t.emailRules,outlined:"",color:"cyan"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{staticClass:"mb-2",attrs:{label:"Message",required:"",outlined:"",rules:t.messageRules,color:"cyan"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{attrs:{outlined:"",color:"cyan"},on:{click:t.submit}},[t._v("Send")])],1)],1)],1)],1)},rt=[],it=(a("b0c0"),a("bc3a")),st=a.n(it),lt={data:function(){return{valid:!0,name:"",email:"",message:"",nameRules:[function(t){return!!t||"Name is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],messageRules:[function(t){return!!t||"Message is required"}]}},methods:{submit:function(){var t="https://docs.google.com/forms/u/0/d/e/1FAIpQLSenehIKe5jEKctNUzPKqCECjr6kVFMWyyP7pZN9Euohqa8eFw/formResponse",e=new FormData;e.append("entry.1545138541",this.email),e.append("entry.1546633810",this.name),e.append("entry.1170533306",this.message),this.$refs.form.validate()&&st.a.post(t,e).then((function(t){console.log(t),alert("Your message was sent.")}))}}},ot=lt,ct=(a("0673"),a("4bd4")),ut=a("8654"),ft=a("a844"),vt=Object(u["a"])(ot,nt,rt,!1,null,null,null),dt=vt.exports;v()(vt,{VBtn:p["a"],VCard:D["a"],VCardText:H["a"],VCardTitle:H["b"],VContainer:q["a"],VForm:ct["a"],VTextField:ut["a"],VTextarea:ft["a"]}),n["a"].use(E["a"]);var pt=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:G},{path:"/skill",name:"skill",component:at},{path:"/contact",name:"contact",component:dt}],mt=new E["a"]({mode:"history",base:"/portfolio-vue/",routes:pt}),bt=mt,ht=a("f309");n["a"].use(ht["a"]);var xt=new ht["a"]({icons:{iconfont:"fa"}});n["a"].config.productionTip=!1,new n["a"]({router:bt,vuetify:xt,render:function(t){return t(S)}}).$mount("#app")},"927f":function(t,e,a){},c0e1:function(t,e,a){},f26d:function(t,e,a){"use strict";var n=a("927f"),r=a.n(n);r.a}});