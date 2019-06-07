"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var reactRedux=require("react-redux"),React=_interopDefault(require("react")),PropTypes=_interopDefault(require("prop-types")),reactRouterDom=require("react-router-dom"),get=_interopDefault(require("lodash.get"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}var QLObject=PropTypes.shape({create:PropTypes.object,mutation:PropTypes.object,query:PropTypes.object,update:PropTypes.func}),ActionHandlersObject=PropTypes.shape({onDeleteClick:PropTypes.func,onEditClick:PropTypes.func}),SmartTableColType=PropTypes.arrayOf(PropTypes.shape({classname:PropTypes.string,key:PropTypes.oneOfType([PropTypes.func,PropTypes.string]).isRequired,label:PropTypes.string.isRequired,primary:PropTypes.bool,type:PropTypes.oneOf(["bool","date","text"]),validate:PropTypes.func})),KEY_PREFIX="smart-datatable",resolveLinkDestination=function(e){for(var t=e.pathname,r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return t.split("/").filter(function(e){return e}).concat(a).join("/")},resolveColValue=function(e,t){var r="string"==typeof t.key?get(e,t.key):t.key(e);return r=t.validate?t.validate(r):r},resolveColClassname=function(e){var t=e.classname||"",r="string"==typeof e.key&&e.key,a=e.type||r||"";return"".concat(t," ").concat(a).trim()},renderValueAsIcon=function(e){return e?"check":"close"},renderActionsButton=function(e,t){return React.createElement("td",{key:"".concat(KEY_PREFIX,"::tbody::tr::").concat(e,"::actions")},React.createElement(reactRouterDom.Link,{to:"".concat(t,"/edit"),className:""},React.createElement("i",{className:"icon icon-edit"})),React.createElement(reactRouterDom.Link,{to:"".concat(t,"/delete"),className:""},React.createElement("i",{className:"icon icon-delete"})))},SmartTableRow=function(e){var t=e.cols,r=e.data,a=e.location,o=t.find(function(e){return e.primary}).key,n=r[o],c=resolveLinkDestination(a,n);return React.createElement("tr",{"data-id":n},t&&t.map(function(e){var t="bool"===e.type,a=resolveColValue(r,e),o=resolveColClassname(e);return React.createElement("td",{key:"".concat(KEY_PREFIX,"::tbody::tr::").concat(n,"::td::").concat(e.key),className:o},React.createElement(reactRouterDom.Link,{to:"".concat(c,"/edit"),className:""},!t&&React.createElement("span",null,a),t&&renderValueAsIcon(a)))}),renderActionsButton(n,c))};SmartTableRow.propTypes={cols:SmartTableColType.isRequired,data:PropTypes.object.isRequired,location:PropTypes.object.isRequired};var SmartTableRow$1=reactRouterDom.withRouter(SmartTableRow),SmartTableTbody=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.PureComponent),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.cols,r=e.provider,a=t.length&&t.find(function(e){return e.primary})||t[0];return a?React.createElement("tbody",null,r&&r.map(function(e,r){var o=e[a.key];return React.createElement(SmartTableRow$1,{key:"".concat(KEY_PREFIX,"::tbody::tr::").concat(o),data:e,cols:t,index:r})})):null}}]),t}();SmartTableTbody.defaultProps={},SmartTableTbody.propTypes={cols:SmartTableColType.isRequired,provider:PropTypes.array.isRequired};var SmartTableThead=function(e){var t=e.cols;return React.createElement("thead",null,React.createElement("tr",null,t&&t.map(function(e,t){var r=e.index||t;return r="".concat(KEY_PREFIX,"::thead::th::").concat(r),React.createElement("th",{key:r},React.createElement("span",null,e.label))}),React.createElement("th",{key:"".concat(KEY_PREFIX,"::thead::th::actions")},React.createElement("span",null,"Actions"))))};SmartTableThead.propTypes={cols:SmartTableColType.isRequired};var SmartDatatableCaption=function(e){var t=e.provider.length;return React.createElement("caption",{className:""},React.createElement("span",null,t," élément(s)"))};SmartDatatableCaption.propTypes={provider:PropTypes.array.isRequired};var SmartTableColGroup=function(e){var t=e.cols;return React.createElement("colgroup",null,t&&t.map(function(e){var t="".concat(KEY_PREFIX,"::colgroup::col::").concat(e.key);return React.createElement("col",{key:t})}),React.createElement("col",{key:"".concat(KEY_PREFIX,"::colgroup::col::actions"),className:""}))};SmartTableColGroup.defaultProps={},SmartTableColGroup.propTypes={cols:SmartTableColType.isRequired};var SmartTableComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.PureComponent),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.cols,r=e.provider;return React.createElement("div",{className:""},React.createElement("table",null,React.createElement(SmartDatatableCaption,{provider:r}),React.createElement(SmartTableColGroup,{cols:t}),React.createElement(SmartTableThead,{cols:t}),React.createElement(SmartTableTbody,{cols:t,provider:r})))}}]),t}();SmartTableComponent.propTypes={cols:SmartTableColType.isRequired,provider:PropTypes.array.isRequired};var mapStateToProps=null,mapDispatchToProps=null,SmartTable=reactRedux.connect(mapStateToProps,mapDispatchToProps)(SmartTableComponent);exports.SmartTable=SmartTable;
