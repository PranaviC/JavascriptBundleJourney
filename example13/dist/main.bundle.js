!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return v[e]||(v[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),u=r.module.exports,a=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)u[t]=e[t];else u[e]=r;for(var n=0,a=o.importers.length;a>n;n++){var i=o.importers[n];if(!i.locked)for(var s=0;s<i.dependencies.length;++s)i.dependencies[s]===o&&i.setters[s](u)}return o.locked=!1,r},r.name);o.setters=a.setters,o.execute=a.execute;for(var i=0,f=r.normalizedDeps.length;f>i;i++){var c,d=r.normalizedDeps[i],p=l[d],m=v[d];m?c=m.exports:p&&!p.declarative?c=p.esModule:p?(n(p),m=p.module,c=m.exports):c=s(d),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[i]&&o.setters[i](c)}}}function o(e){var r={};if("object"==typeof e||"function"==typeof e){var t=e&&e.hasOwnProperty;if(c)for(var n in e)a(r,e,n)||u(r,e,n,t);else for(var n in e)u(r,e,n,t)}return r["default"]=e,p(r,"__useDefault",{value:!0}),r}function u(e,r,t,n){(!n||r.hasOwnProperty(t))&&(e[t]=r[t])}function a(e,r,t){try{var n;return(n=Object.getOwnPropertyDescriptor(r,t))&&p(e,t,n),!0}catch(o){return!1}}function i(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,u=n.normalizedDeps.length;u>o;o++){var a=n.normalizedDeps[o];-1==f.call(t,a)&&(l[a]?i(a,t):s(a))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function s(e){if(y[e])return y[e];if("@node/"==e.substr(0,6))return m(e.substr(6));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),i(e,[]),l[e]=void 0,r.declarative&&p(r.module.exports,"__esModule",{value:!0}),y[e]=r.declarative?r.module.exports:r.esModule}var l={},f=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},c=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(d){c=!1}var p;!function(){try{Object.defineProperty({},"a",{})&&(p=Object.defineProperty)}catch(e){p=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var v={},m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,y={"@empty":{}};return function(e,t,n){return function(u){u(function(u){for(var a=0;a<t.length;a++)(function(e,r){r&&r.__esModule?y[e]=r:y[e]=o(r)})(t[a],arguments[a]);n({register:r});var i=s(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)s(e[a]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", [], function($__export) {
  "use strict";
  function add(a, b) {
    return a + b;
  }
  $__export("default", add);
  return {
    setters: [],
    execute: function() {}
  };
});

$__System.register("3", ["2"], function($__export) {
  "use strict";
  var add;
  function addList(list, memo) {
    list.forEach(function(item) {
      memo = add(item, memo);
    });
    return memo;
  }
  $__export("default", addList);
  return {
    setters: [function($__m) {
      add = $__m.default;
    }],
    execute: function() {}
  };
});

$__System.register("4", ["3"], function($__export) {
  "use strict";
  var addList;
  function sum(list) {
    return addList(list, 0);
  }
  $__export("default", sum);
  return {
    setters: [function($__m) {
      addList = $__m.default;
    }],
    execute: function() {}
  };
});

$__System.register("1", ["4"], function($__export) {
  "use strict";
  var sum,
      numbers,
      result,
      outputElement;
  return {
    setters: [function($__m) {
      sum = $__m.default;
    }],
    execute: function() {
      numbers = [1, 2, 3];
      result = sum(numbers);
      outputElement = document.getElementById("output");
      outputElement.innerHTML = result;
    }
  };
});

})
(function(factory) {
  factory();
});