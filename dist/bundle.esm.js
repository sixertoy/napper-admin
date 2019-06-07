import{connect as e}from"react-redux";import t from"react";import r from"prop-types";import{withRouter as n,Link as o}from"react-router-dom";import a from"lodash.get";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.shape({create:r.object,mutation:r.object,query:r.object,update:r.func}),r.shape({onDeleteClick:r.func,onEditClick:r.func});var m=r.arrayOf(r.shape({classname:r.string,key:r.oneOfType([r.func,r.string]).isRequired,label:r.string.isRequired,primary:r.bool,type:r.oneOf(["bool","date","text"]),validate:r.func})),d="smart-datatable",y=function(e){var r,n,c=e.cols,i=e.data,l=e.location,u=c.find(function(e){return e.primary}).key,s=i[u],p=function(e){for(var t=e.pathname,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t.split("/").filter(function(e){return e}).concat(n).join("/")}(l,s);return t.createElement("tr",{"data-id":s},c&&c.map(function(e){var r="bool"===e.type,n=function(e,t){var r="string"==typeof t.key?a(e,t.key):t.key(e);return r=t.validate?t.validate(r):r}(i,e),c=function(e){var t=e.classname||"",r="string"==typeof e.key&&e.key,n=e.type||r||"";return"".concat(t," ").concat(n).trim()}(e);return t.createElement("td",{key:"".concat(d,"::tbody::tr::").concat(s,"::td::").concat(e.key),className:c},t.createElement(o,{to:"".concat(p,"/edit"),className:""},!r&&t.createElement("span",null,n),r&&function(e){return e?"check":"close"}(n)))}),(r=s,n=p,t.createElement("td",{key:"".concat(d,"::tbody::tr::").concat(r,"::actions")},t.createElement(o,{to:"".concat(n,"/edit"),className:""},t.createElement("i",{className:"icon icon-edit"})),t.createElement(o,{to:"".concat(n,"/delete"),className:""},t.createElement("i",{className:"icon icon-delete"})))))};y.propTypes={cols:m.isRequired,data:r.object.isRequired,location:r.object.isRequired};var v=n(y),b=function(e){function r(){return c(this,r),f(this,s(r).apply(this,arguments))}return u(r,t.PureComponent),l(r,[{key:"render",value:function(){var e=this.props,r=e.cols,n=e.provider,o=r.length&&r.find(function(e){return e.primary})||r[0];return o?t.createElement("tbody",null,n&&n.map(function(e,n){var a=e[o.key];return t.createElement(v,{key:"".concat(d,"::tbody::tr::").concat(a),data:e,cols:r,index:n})})):null}}]),r}();b.defaultProps={},b.propTypes={cols:m.isRequired,provider:r.array.isRequired};var h=function(e){var r=e.cols;return t.createElement("thead",null,t.createElement("tr",null,r&&r.map(function(e,r){var n=e.index||r;return n="".concat(d,"::thead::th::").concat(n),t.createElement("th",{key:n},t.createElement("span",null,e.label))}),t.createElement("th",{key:"".concat(d,"::thead::th::actions")},t.createElement("span",null,"Actions"))))};h.propTypes={cols:m.isRequired};var E=function(e){var r=e.provider.length;return t.createElement("caption",{className:""},t.createElement("span",null,r," élément(s)"))};E.propTypes={provider:r.array.isRequired};var k=function(e){var r=e.cols;return t.createElement("colgroup",null,r&&r.map(function(e){var r="".concat(d,"::colgroup::col::").concat(e.key);return t.createElement("col",{key:r})}),t.createElement("col",{key:"".concat(d,"::colgroup::col::actions"),className:""}))};k.defaultProps={},k.propTypes={cols:m.isRequired};var g=function(e){function r(){return c(this,r),f(this,s(r).apply(this,arguments))}return u(r,t.PureComponent),l(r,[{key:"render",value:function(){var e=this.props,r=e.cols,n=e.provider;return t.createElement("div",{className:""},t.createElement("table",null,t.createElement(E,{provider:n}),t.createElement(k,{cols:r}),t.createElement(h,{cols:r}),t.createElement(b,{cols:r,provider:n})))}}]),r}();g.propTypes={cols:m.isRequired,provider:r.array.isRequired};var j=e(null,null)(g);export{j as SmartTable};
