"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/points-of-sale/page",{

/***/ "(app-client)/./components/Items/PointOfSaleItem.tsx":
/*!**********************************************!*\
  !*** ./components/Items/PointOfSaleItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n\n\n\nconst PointOfSaleItem = (props)=>{\n    const latitude = Number(props.latitude);\n    const longitude = Number(props.longitude);\n    const marker = \"markers=\".concat(latitude, \",\").concat(longitude);\n    const iframeSrc = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d\".concat(longitude, \"!3d\").concat(latitude, \"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z\").concat(latitude, \"%2C\").concat(longitude, \"!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&\").concat(marker);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-5 mt-4 bg-white rounded-sm ring-1 ring-zinc-200 shadow-lg text-black \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-1/2 lg:w-1/5 lg:mr-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg lg:text-xl font-semibold\",\n                                children: props.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: [\n                                    \"Adres: \",\n                                    props.address\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: [\n                                    \"Typ plac\\xf3wki: \",\n                                    props.type\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-0 md:w-1/2 lg:w-4/5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold mb-2\",\n                                children: \"Mapa dojazdu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: iframeSrc,\n                                allowFullScreen: true,\n                                loading: \"lazy\",\n                                referrerPolicy: \"no-referrer-when-downgrade\",\n                                className: \"w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div3 flex flex-row justify-start w-auto text-white mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-0\",\n                        children: \"Edytuj\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClick: ()=>{\n                            console.log(latitude, longitude);\n                        },\n                        children: \"Usuń\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PointOfSaleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointOfSaleItem);\nvar _c;\n$RefreshReg$(_c, \"PointOfSaleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUNpQjtBQUUxQyxNQUFNRSxrQkFPREMsQ0FBQUE7SUFDSixNQUFNQyxXQUFXQyxPQUFPRixNQUFNQztJQUM5QixNQUFNRSxZQUFZRCxPQUFPRixNQUFNRztJQUMvQixNQUFNQyxTQUFTLFdBQXVCRCxPQUFaRixVQUFTLEtBQWEsT0FBVkU7SUFDdEMsTUFBTUUsWUFBWSw4RUFBNkZKLE9BQWZFLFdBQVUsT0FBK0VGLE9BQTFFQSxVQUFTLG1FQUErRUUsT0FBZEYsVUFBUyxPQUFrRUcsT0FBN0RELFdBQVUscURBQTBELE9BQVBDO0lBRXBRLHFCQUNDLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFvQ1AsTUFBTVM7Ozs7OzswQ0FDeEQsOERBQUNDO2dDQUFFSCxXQUFVOztvQ0FBWTtvQ0FBUVAsTUFBTVc7Ozs7Ozs7MENBQ3ZDLDhEQUFDRDtnQ0FBRUgsV0FBVTs7b0NBQVk7b0NBQWVQLE1BQU1ZOzs7Ozs7Ozs7Ozs7O2tDQUUvQyw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRztnQ0FBRUgsV0FBVTswQ0FBNkI7Ozs7OzswQ0FDMUMsOERBQUNNO2dDQUNBQyxLQUFLVDtnQ0FDTFUsZUFBZTtnQ0FDZkMsU0FBUTtnQ0FDUkMsZ0JBQWU7Z0NBQ2ZWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDVCw2REFBTUE7d0JBQUNTLFdBQVU7a0NBQU87Ozs7OztrQ0FDekIsOERBQUNULDZEQUFNQTt3QkFDTm9CLFNBQVM7NEJBQ1JDLFFBQVFDLElBQUluQixVQUFVRTt3QkFDdkI7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1SO0tBMUNNSjtBQTRDTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW1zL1BvaW50T2ZTYWxlSXRlbS50c3g/NTEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL1VJL0J1dHRvbidcblxuY29uc3QgUG9pbnRPZlNhbGVJdGVtOiBSZWFjdC5GQzx7XG5cdG5hbWU6IHN0cmluZ1xuXHRhZGRyZXNzOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG5cdGxhdGl0dWRlOiBzdHJpbmdcblx0bG9uZ2l0dWRlOiBzdHJpbmdcblx0aGFuZGxlRGVsZXRlOiAoKSA9PiBQcm9taXNlPHZvaWQ+XG59PiA9IHByb3BzID0+IHtcblx0Y29uc3QgbGF0aXR1ZGUgPSBOdW1iZXIocHJvcHMubGF0aXR1ZGUpXG5cdGNvbnN0IGxvbmdpdHVkZSA9IE51bWJlcihwcm9wcy5sb25naXR1ZGUpXG5cdGNvbnN0IG1hcmtlciA9IGBtYXJrZXJzPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWBcblx0Y29uc3QgaWZyYW1lU3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI0ODIuMjMyNjIwMzgwOTE1MyEyZCR7bG9uZ2l0dWRlfSEzZCR7bGF0aXR1ZGV9ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHgwITJ6JHtsYXRpdHVkZX0lMkMke2xvbmdpdHVkZX0hNWUwITNtMiExc2VuITJzdXMhNHYxNjg3NDQ4MTE5OTM1ITVtMiExc2VuITJzdXMmJHttYXJrZXJ9YFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcC01IG10LTQgYmctd2hpdGUgcm91bmRlZC1zbSByaW5nLTEgcmluZy16aW5jLTIwMCBzaGFkb3ctbGcgdGV4dC1ibGFjayAnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1iZXR3ZWVuJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21kOnctMS8yIGxnOnctMS81IGxnOm1yLTUnPlxuXHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RleHQtbGcgbGc6dGV4dC14bCBmb250LXNlbWlib2xkJz57cHJvcHMubmFtZX08L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5BZHJlczoge3Byb3BzLmFkZHJlc3N9PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5UeXAgcGxhY8Ozd2tpOiB7cHJvcHMudHlwZX08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXQtMyBtZDptdC0wIG1kOnctMS8yIGxnOnctNC81Jz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yJz5NYXBhIGRvamF6ZHU8L3A+XG5cdFx0XHRcdFx0PGlmcmFtZVxuXHRcdFx0XHRcdFx0c3JjPXtpZnJhbWVTcmN9XG5cdFx0XHRcdFx0XHRhbGxvd0Z1bGxTY3JlZW5cblx0XHRcdFx0XHRcdGxvYWRpbmc9J2xhenknXG5cdFx0XHRcdFx0XHRyZWZlcnJlclBvbGljeT0nbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnPjwvaWZyYW1lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2RpdjMgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IHctYXV0byB0ZXh0LXdoaXRlIG10LTUnPlxuXHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nbXgtMCc+RWR5dHVqPC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFVzdcWEXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVJdGVtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJQb2ludE9mU2FsZUl0ZW0iLCJwcm9wcyIsImxhdGl0dWRlIiwiTnVtYmVyIiwibG9uZ2l0dWRlIiwibWFya2VyIiwiaWZyYW1lU3JjIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsImFkZHJlc3MiLCJ0eXBlIiwiaWZyYW1lIiwic3JjIiwiYWxsb3dGdWxsU2NyZWVuIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Items/PointOfSaleItem.tsx\n"));

/***/ })

});