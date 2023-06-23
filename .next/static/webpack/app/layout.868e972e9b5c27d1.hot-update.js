/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4f10c19c10f2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/N2VmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRmMTBjMTljMTBmMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navigation/Navigation.tsx":
/*!**********************************************!*\
  !*** ./components/Navigation/Navigation.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar */ \"(app-client)/./components/Navigation/TopBar.tsx\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ \"(app-client)/./components/Navigation/SideBar.tsx\");\n/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNavigation */ \"(app-client)/./components/Navigation/MainNavigation.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Navigation = ()=>{\n    var _session_user;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/Navigation.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_SideBar__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/Navigation.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNavigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Navigation/Navigation.tsx\",\n            lineNumber: 20,\n            columnNumber: 10\n        }, undefined);\n    }\n};\n_s(Navigation, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUNjO0FBRUQ7QUFFNUMsTUFBTUksYUFBYTtRQUdkQzs7SUFGSixNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHRiwyREFBVUE7SUFFcEMsSUFBSUUsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxnQkFBQUEsUUFBU0Usa0JBQVRGLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRyxNQUFNO1FBQ3hCLHFCQUNDOzs4QkFDQyw4REFBQ1IsK0NBQU1BOzs7Ozs4QkFDUCw4REFBQ0MsaURBQU9BOzs7Ozs7O0lBR1gsT0FBTztRQUNOLHFCQUFPLDhEQUFDQyx1REFBY0E7Ozs7O0lBQ3ZCO0FBQ0Q7R0FiTUU7O1FBQ3FCRCx1REFBVUE7OztLQUQvQkM7QUFlTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3g/MmQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFRvcEJhciBmcm9tICcuL1RvcEJhcidcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhcidcbmltcG9ydCBNYWluTmF2aWdhdGlvbiBmcm9tICcuL01haW5OYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXG5cdGlmIChzZXNzaW9uPy51c2VyPy5uYW1lKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxUb3BCYXIgLz5cblx0XHRcdFx0PFNpZGVCYXIgLz5cblx0XHRcdDwvPlxuXHRcdClcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gPE1haW5OYXZpZ2F0aW9uIC8+XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sIm5hbWVzIjpbIlRvcEJhciIsIlNpZGVCYXIiLCJNYWluTmF2aWdhdGlvbiIsInVzZVNlc3Npb24iLCJOYXZpZ2F0aW9uIiwic2Vzc2lvbiIsImRhdGEiLCJ1c2VyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Navigation/Navigation.tsx\n"));

/***/ }),

/***/ "(app-client)/./components/Navigation/SideBar.tsx":
/*!*******************************************!*\
  !*** ./components/Navigation/SideBar.tsx ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});