(this["webpackJsonpfun-app"]=this["webpackJsonpfun-app"]||[]).push([[0],{137:function(e,t,n){e.exports=n(281)},142:function(e,t,n){},160:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(24),i=n.n(o),r=(n(142),n(113)),s=n(114),l=n(127),u=n(126),d=n(115),h=n.n(d),m=n(30),p=(n(160),n(285)),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){h.a.get("https://api.adviceslip.com/advice").then((function(t){var n=t.data.slip.advice;e.setState({advice:n})})).catch((function(e){console.log(e)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{style:{marginBottom:50,padding:20,color:"white"}},this.state.advice),c.a.createElement(p.a,{style:{padding:16,marginBottom:10},onClick:this.fetchAdvice,color:"orange"},c.a.createElement(m.a,{name:"sun"})," PUSH ME!")))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.a0c86111.chunk.js.map