(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),i=(n(12),n(1)),s=n(2),l=n(4),u=n(3),m=(n(13),n(14),n(15)),f=["A","B","C","D","E","F","G"],d=["Bb","Eb","Ab","Db","Gb"].concat(["C#","D#","F#","G#","A#"]);function h(){return m.shuffle(f.concat(d))}var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={notes:h()},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"NotesInRandomOrder"},c.a.createElement("div",{className:"grid",onClick:function(){e.setState({notes:h()})}},this.state.notes.map((function(e,t){return c.a.createElement("div",{className:"cell",key:t},c.a.createElement("p",null,e))}))))}}]),n}(c.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.6ee287a7.chunk.js.map