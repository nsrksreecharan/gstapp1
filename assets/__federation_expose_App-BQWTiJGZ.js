import { importShared } from './__federation_fn_import-BTxd29eh.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

await importShared('react');

const Dashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px", backgroundColor: "#e6f7ff" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📊 Remote Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Welcome to your dashboard! All of this content, including the routing, is managed by the remote application." })
  ] });
};

await importShared('react');

const Profile = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px", backgroundColor: "#fffbe6" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "👤 Remote Profile Page" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here you can view and edit your user profile." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This component is also served entirely from the remote." })
  ] });
};

await importShared('react');

const {Routes,Route,Link,Navigate} = await importShared('react-router-dom');
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "3px dashed red", padding: "1rem", margin: "1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Remote Application Shell" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "./dashboard", style: { marginRight: "10px" }, children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "./profile", children: "Profile" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "profile", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "dashboard", replace: true }) })
    ] })
  ] });
};

export { App as default, jsxRuntimeExports as j };
