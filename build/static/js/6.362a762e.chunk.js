(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{201:function(e,t,n){e.exports={UsersList_container:"UsersList_UsersList_container__1owHo",UsersList_filters:"UsersList_UsersList_filters__2TW8o",UsersList_list:"UsersList_UsersList_list__2fTzf"}},205:function(e,t,n){"use strict";n.r(t);var a=n(118),r=n(0),s=n.n(r),o=n(88),i=n(86),c=n(204),u=Object(r.memo)(function(e){var t=e.onChange,n=e.defaultSelection,a=e.options,o=Object(r.useCallback)(function(e){a.includes(e)&&t(e)},[t,a]);return s.a.createElement(c.a,{dataSource:a,defaultValue:n,onChange:o,placeholder:"Select a language"})});u.defaultProps={defaultSelection:void 0};var l=u,p=n(201),f=n(107),m=n.n(f),d={"C#":"Csharp","C++":"Cplusplus",Cplusplus:"C++",Csharp:"C#"},_=function(e){return e&&d[e]||e},L=Object(r.memo)(function(e){var t=e.reposList,n=e.onLoad,i=e.location,c=e.history,u=Object(r.useCallback)(function(e){c.push("?".concat("language","=").concat(_(e)))},[c]),f=m.a.parse(i.search),d=_(f.language),L=Object(r.useMemo)(function(){return t.filter(function(e){return!(d&&d.length>0)||e.owner&&e.languages.includes(d)}).map(function(e){return Object(a.a)({},e,{languages:e.languages.join(", ")})})},[t,d]),g=Object(r.useMemo)(function(){return Object.keys(t.reduce(function(e,t){return t.languages.forEach(function(t){e[t]=!0}),e},{}))},[t]);return s.a.createElement("div",{className:p.UsersList_container},s.a.createElement("div",{className:p.UsersList_filters},s.a.createElement(l,{defaultSelection:d,options:g,onChange:u})),s.a.createElement("div",{className:p.UsersList_list},s.a.createElement(o.a,{list:L,onLoad:n,groupBy:"owner",columns:["name","languages"]})))});L.defaultName="UsersList",L.defaultProps={reposList:[]};t.default=Object(i.a)(L)},70:function(e,t,n){e.exports={ReposList_container:"ReposList_ReposList_container__366Dp",ReposList_group_by:"ReposList_ReposList_group_by__1fu9c",ReposList_header:"ReposList_ReposList_header__n0MUt",ReposList_row:"ReposList_ReposList_row__151Hk",ReposList_cell:"ReposList_ReposList_cell__1sA-k"}},86:function(e,t,n){"use strict";var a=n(22),r=n(89),s=n.n(r),o=n(90),i=n(14),c=n(0),u=n.n(c),l=function(e){return{isLoading:e.repos.isLoading,reposList:e.repos&&e.repos.data}},p=function(e){return{onLoad:function(){return e(function(){var e=Object(o.a)(s.a.mark(function e(t,n){var a,r,o,c,u,l=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>2&&void 0!==l[2]?l[2]:window.localStorage,e.prev=1,!n().data){e.next=5;break}return e.abrupt("return");case 5:if(!(r=a.getItem("repos-local-storage"))){e.next=10;break}t({type:i.b,payload:JSON.parse(r)}),e.next=24;break;case 10:return t({type:i.c}),e.next=13,fetch("/api/repos",{headers:{"Content-Type":"application/json"}});case 13:if(200===(o=e.sent).status){e.next=17;break}return t({type:i.a}),e.abrupt("return");case 17:return e.next=19,o.json();case 19:return c=e.sent,u=c.repositories,a.setItem("repos-local-storage",JSON.stringify(u)),t({type:i.b,payload:u}),e.abrupt("return");case 24:e.next=30;break;case 26:return e.prev=26,e.t0=e.catch(1),t({type:i.a}),e.abrupt("return",e.t0);case 30:case"end":return e.stop()}},e,null,[[1,26]])}));return function(t,n){return e.apply(this,arguments)}}())}}},f=function(e){var t=function(e){return function(t){return u.a.createElement(c.Fragment,null,!t.data&&t.isLoading&&"loading data...",u.a.createElement(e,t))}}(e);return Object(a.b)(l,p)(t)};n.d(t,"a",function(){return f})},88:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(70),o=function(e){return r.a.createElement("div",{className:s.ReposList_header},e.map(function(e,t){return r.a.createElement("div",{key:t,className:s.ReposList_cell},"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)))}))},i=function(e,t){return r.a.createElement(a.Fragment,null,t&&t.length>0&&t.map(function(t,n){return r.a.createElement("div",{className:s.ReposList_row,key:n},e.map(function(e,n){return r.a.createElement("div",{key:n,className:s.ReposList_cell},t[e])}))})||r.a.createElement("div",{className:s.ReposList_row},"No Items to display"))},c=Object(a.memo)(function(e){var t=e.list,n=e.onLoad,c=e.groupBy,u=e.columns;Object(a.useEffect)(function(){n()},[n]);var l=Object(a.useMemo)(function(){return c?Object.values(t.reduce(function(e,n){var a=n[c]||"Not defined";return e[a]||(e[a]={groupBy:n[c],list:t.filter(function(e){return n[c]===e[c]})}),e},{})):t},[t,c]);return u&&0===u.length?null:r.a.createElement("div",{className:s.ReposList_container},!!c&&r.a.createElement(a.Fragment,null,l&&l.length>0&&l.map(function(e,t){return r.a.createElement(a.Fragment,{key:t},r.a.createElement("div",{className:s.ReposList_group_by},e.groupBy),o(u),i(u,e.list))})||r.a.createElement("div",{className:s.ReposList_row},"No Items to display")),!c&&r.a.createElement(a.Fragment,null,o(u),i(u,l)))});c.defaultProps={list:[],onLoad:function(){},groupBy:void 0};var u=c;n.d(t,"a",function(){return u})}}]);
//# sourceMappingURL=6.362a762e.chunk.js.map