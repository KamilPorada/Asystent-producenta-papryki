"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/edit-point-of-sale/page",{

/***/ "(app-client)/./app/edit-point-of-sale/page.tsx":
/*!*****************************************!*\
  !*** ./app/edit-point-of-sale/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Forms/NewPointOfSaleForm */ \"(app-client)/./components/Forms/NewPointOfSaleForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditPointOfSale() {\n    _s();\n    const [pointOfSale, setPointOfSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        type: 0,\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pointId = searchParams.get(\"id\");\n    const addPointOfSale = async (e)=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPromptDetails = async ()=>{\n            const response = await fetch(\"/api/point-of-sale/\".concat(pointId));\n            const data = await response.json();\n            setPoin({\n                prompt: data.prompt,\n                tag: data.tag\n            });\n        };\n        if (promptId) getPromptDetails();\n    }, [\n        promptId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_NewPointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pointOfSale: pointOfSale,\n                setPointOfSale: setPointOfSale,\n                submitting: submitting,\n                handleSubmit: addPointOfSale,\n                error: error\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-black\",\n                onClick: ()=>{\n                    console.log(pointOfSale);\n                },\n                children: \"Butonik\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this);\n}\n_s(EditPointOfSale, \"KW++sip9esImBeSa3Aa1A87A8R0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditPointOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPointOfSale);\nvar _c;\n$RefreshReg$(_c, \"EditPointOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtcG9pbnQtb2Ytc2FsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNTO0FBRXJFLFNBQVNLOztJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM5Q1EsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxXQUFXO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1pQixTQUFTZiwwREFBU0E7SUFDeEIsTUFBTWdCLGVBQWVmLGdFQUFlQTtJQUNwQyxNQUFNZ0IsVUFBVUQsYUFBYUUsSUFBSTtJQUVqQyxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBbUM7SUFFakVyQixnREFBU0EsQ0FBQztRQUNQLE1BQU1zQixtQkFBbUI7WUFDdkIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHNCQUE4QixPQUFSTjtZQUNuRCxNQUFNTyxPQUFPLE1BQU1GLFNBQVNHO1lBRTVCQyxRQUFRO2dCQUNOQyxRQUFRSCxLQUFLRztnQkFDYkMsS0FBS0osS0FBS0k7WUFDWjtRQUNGO1FBRUEsSUFBSUMsVUFBVVI7SUFDaEIsR0FBRztRQUFDUTtLQUFTO0lBRWQscUJBQ0MsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQzdCLDRFQUFrQkE7Z0JBQ2xCRSxhQUFhQTtnQkFDYkMsZ0JBQWdCQTtnQkFDaEJNLFlBQVlBO2dCQUNacUIsY0FBY2I7Z0JBQ2ROLE9BQU9BOzs7Ozs7MEJBRVIsOERBQUNvQjtnQkFDQUYsV0FBVTtnQkFDVkcsU0FBUztvQkFDUkMsUUFBUUMsSUFBSWhDO2dCQUNiOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLUDtHQWhEU0Q7O1FBVU9ILHNEQUFTQTtRQUNIQyw0REFBZUE7OztLQVg1QkU7QUFrRFQsK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VkaXQtcG9pbnQtb2Ytc2FsZS9wYWdlLnRzeD85MTBkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBOZXdQb2ludE9mU2FsZUZvcm0gZnJvbSAnQGNvbXBvbmVudHMvRm9ybXMvTmV3UG9pbnRPZlNhbGVGb3JtJ1xuXG5mdW5jdGlvbiBFZGl0UG9pbnRPZlNhbGUoKSB7XG5cdGNvbnN0IFtwb2ludE9mU2FsZSwgc2V0UG9pbnRPZlNhbGVdID0gdXNlU3RhdGUoe1xuXHRcdG5hbWU6ICcnLFxuXHRcdGFkZHJlc3M6ICcnLFxuXHRcdHR5cGU6IDAsXG5cdFx0bGF0aXR1ZGU6ICcnLFxuXHRcdGxvbmdpdHVkZTogJycsXG5cdH0pXG5cdGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG5cdGNvbnN0IHBvaW50SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpXG5cblx0Y29uc3QgYWRkUG9pbnRPZlNhbGUgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHt9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRQcm9tcHREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb2ludC1vZi1zYWxlLyR7cG9pbnRJZH1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHNldFBvaW4oe1xuICAgICAgICBwcm9tcHQ6IGRhdGEucHJvbXB0LFxuICAgICAgICB0YWc6IGRhdGEudGFnLFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9tcHRJZCkgZ2V0UHJvbXB0RGV0YWlscygpO1xuICB9LCBbcHJvbXB0SWRdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxOZXdQb2ludE9mU2FsZUZvcm1cblx0XHRcdFx0cG9pbnRPZlNhbGU9e3BvaW50T2ZTYWxlfVxuXHRcdFx0XHRzZXRQb2ludE9mU2FsZT17c2V0UG9pbnRPZlNhbGV9XG5cdFx0XHRcdHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG5cdFx0XHRcdGhhbmRsZVN1Ym1pdD17YWRkUG9pbnRPZlNhbGV9XG5cdFx0XHRcdGVycm9yPXtlcnJvcn1cblx0XHRcdC8+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT0ndGV4dC1ibGFjaydcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBvaW50T2ZTYWxlKVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0QnV0b25pa1xuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQb2ludE9mU2FsZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiTmV3UG9pbnRPZlNhbGVGb3JtIiwiRWRpdFBvaW50T2ZTYWxlIiwicG9pbnRPZlNhbGUiLCJzZXRQb2ludE9mU2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJwb2ludElkIiwiZ2V0IiwiYWRkUG9pbnRPZlNhbGUiLCJlIiwiZ2V0UHJvbXB0RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNldFBvaW4iLCJwcm9tcHQiLCJ0YWciLCJwcm9tcHRJZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoYW5kbGVTdWJtaXQiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-point-of-sale/page.tsx\n"));

/***/ })

});