(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"133":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=_interopRequireDefault(o(1)),a=_interopRequireDefault(o(4)),i=_interopRequireDefault(o(132)),u=o(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return n.default.createElement(u.View,{"className":"doc-header"},n.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"134":function(e,t,o){},"468":function(e,t,o){},"90":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),n=function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=_interopRequireDefault(o(1)),i=_interopRequireDefault(o(4)),u=o(131),c=o(138),l=_interopRequireDefault(o(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(468);var p=function(e){function LoadMorePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LoadMorePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(LoadMorePage.__proto__||Object.getPrototypeOf(LoadMorePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"status":"more"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(LoadMorePage,i.default.Component),r(LoadMorePage,[{"key":"handleClick","value":function handleClick(){var e=this;this.setState({"status":"loading"}),setTimeout(function(){e.setState({"status":"noMore"})},2e3)}},{"key":"render","value":function render(){return a.default.createElement(u.View,{"className":"page"},a.default.createElement(l.default,{"title":"LoadMore 页面提示"}),a.default.createElement(u.View,{"className":"doc-body"},a.default.createElement(u.View,{"className":"panel"},a.default.createElement(u.View,{"className":"panel__title"},"一般用法"),a.default.createElement(u.View,{"className":"panel__content no-padding"},a.default.createElement(c.AtLoadMore,{"onClick":this.handleClick.bind(this),"status":this.state.status})))))}},{"key":"componentDidMount","value":function componentDidMount(){n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidMount",this)&&n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidShow",this)&&n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidHide",this)&&n(LoadMorePage.prototype.__proto__||Object.getPrototypeOf(LoadMorePage.prototype),"componentDidHide",this).call(this)}}]),LoadMorePage}();t.default=p}}]);