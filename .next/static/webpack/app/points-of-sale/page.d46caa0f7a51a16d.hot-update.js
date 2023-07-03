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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n\n\n\nconst PointOfSaleItem = (props)=>{\n    const latitude = 51.39920065708797 // Szerokość geograficzna\n    ;\n    const longitude = 21.18576542850925 // Długość geograficzna\n    ;\n    const marker = \"markers=\".concat(latitude, \",\").concat(longitude);\n    const iframeSrc = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d\".concat(longitude, \"!3d\").concat(latitude, \"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z\").concat(latitude, \"%2C\").concat(longitude, \"!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&\").concat(marker);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-5 mt-4 bg-white rounded-sm ring-1 ring-zinc-200 text-black \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg lg:text-xl font-semibold\",\n                                children: \"Rolno-Spożywczy Rynek Hurtowy S.A.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: \"Adres: Lubelska 65, 26-600 Radom\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-thin\",\n                                children: \"Typ plac\\xf3wki: Rynek hurtowy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-3 md:mt-0 md:w-1/2 lg:w-4/5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-semibold mb-2\",\n                                children: \"Mapa dojazdu\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: iframeSrc,\n                                allowFullScreen: true,\n                                loading: \"lazy\",\n                                referrerPolicy: \"no-referrer-when-downgrade\",\n                                className: \"w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div3 flex flex-row justify-start w-auto text-white mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-0\",\n                        children: \"Edytuj\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Usuń\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PointOfSaleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointOfSaleItem);\nvar _c;\n$RefreshReg$(_c, \"PointOfSaleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUNpQjtBQUUxQyxNQUFNRSxrQkFNREMsQ0FBQUE7SUFDSixNQUFNQyxXQUFXLGtCQUFrQix5QkFBeUI7O0lBQzVELE1BQU1DLFlBQVksa0JBQWtCLHVCQUF1Qjs7SUFFM0QsTUFBTUMsU0FBUyxXQUF1QkQsT0FBWkQsVUFBUyxLQUFhLE9BQVZDO0lBRXRDLE1BQU1FLFlBQVksOEVBQTZGSCxPQUFmQyxXQUFVLE9BQStFRCxPQUExRUEsVUFBUyxtRUFBK0VDLE9BQWRELFVBQVMsT0FBa0VFLE9BQTdERCxXQUFVLHFEQUEwRCxPQUFQQztJQUVwUSxxQkFDQyw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7OzBDQUNBLDhEQUFDRTtnQ0FBR0QsV0FBVTswQ0FBbUM7Ozs7OzswQ0FDakQsOERBQUNFO2dDQUFFRixXQUFVOzBDQUFZOzs7Ozs7MENBQ3pCLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBWTs7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBNkI7Ozs7OzswQ0FDMUMsOERBQUNHO2dDQUNBQyxLQUFLTjtnQ0FDTE8sZUFBZTtnQ0FDZkMsU0FBUTtnQ0FDUkMsZ0JBQWU7Z0NBQ2ZQLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDUiw2REFBTUE7d0JBQUNRLFdBQVU7a0NBQU87Ozs7OztrQ0FDekIsOERBQUNSLDZEQUFNQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVo7S0F0Q01DO0FBd0NOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSXRlbXMvUG9pbnRPZlNhbGVJdGVtLnRzeD81MTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvVUkvQnV0dG9uJ1xuXG5jb25zdCBQb2ludE9mU2FsZUl0ZW06IFJlYWN0LkZDPHtcblx0bmFtZTogc3RyaW5nXG5cdGFkZHJlc3M6IHN0cmluZ1xuXHR0eXBlOiBzdHJpbmdcblx0bGF0aXR1ZGU6IHN0cmluZ1xuXHRsb25naXR1ZGU6IHN0cmluZ1xufT4gPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGxhdGl0dWRlID0gNTEuMzk5MjAwNjU3MDg3OTcgLy8gU3plcm9rb8WbxIcgZ2VvZ3JhZmljem5hXG5cdGNvbnN0IGxvbmdpdHVkZSA9IDIxLjE4NTc2NTQyODUwOTI1IC8vIETFgnVnb8WbxIcgZ2VvZ3JhZmljem5hXG5cblx0Y29uc3QgbWFya2VyID0gYG1hcmtlcnM9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YFxuXG5cdGNvbnN0IGlmcmFtZVNyYyA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyNDgyLjIzMjYyMDM4MDkxNTMhMmQke2xvbmdpdHVkZX0hM2Qke2xhdGl0dWRlfSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MCEyeiR7bGF0aXR1ZGV9JTJDJHtsb25naXR1ZGV9ITVlMCEzbTIhMXNlbiEyc3VzITR2MTY4NzQ0ODExOTkzNSE1bTIhMXNlbiEyc3VzJiR7bWFya2VyfWBcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHAtNSBtdC00IGJnLXdoaXRlIHJvdW5kZWQtc20gcmluZy0xIHJpbmctemluYy0yMDAgdGV4dC1ibGFjayAnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1iZXR3ZWVuJz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSd0ZXh0LWxnIGxnOnRleHQteGwgZm9udC1zZW1pYm9sZCc+Um9sbm8tU3Bvxbx5d2N6eSBSeW5layBIdXJ0b3d5IFMuQS48L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5BZHJlczogTHViZWxza2EgNjUsIDI2LTYwMCBSYWRvbTwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbic+VHlwIHBsYWPDs3draTogUnluZWsgaHVydG93eTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtdC0zIG1kOm10LTAgbWQ6dy0xLzIgbGc6dy00LzUnPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTInPk1hcGEgZG9qYXpkdTwvcD5cblx0XHRcdFx0XHQ8aWZyYW1lXG5cdFx0XHRcdFx0XHRzcmM9e2lmcmFtZVNyY31cblx0XHRcdFx0XHRcdGFsbG93RnVsbFNjcmVlblxuXHRcdFx0XHRcdFx0bG9hZGluZz0nbGF6eSdcblx0XHRcdFx0XHRcdHJlZmVycmVyUG9saWN5PSduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCc+PC9pZnJhbWU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGl2MyBmbGV4IGZsZXgtcm93IGp1c3RpZnktc3RhcnQgdy1hdXRvIHRleHQtd2hpdGUgbXQtNSc+XG5cdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPSdteC0wJz5FZHl0dWo8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvbj5Vc3XFhDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVJdGVtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJQb2ludE9mU2FsZUl0ZW0iLCJwcm9wcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VyIiwiaWZyYW1lU3JjIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiaWZyYW1lIiwic3JjIiwiYWxsb3dGdWxsU2NyZWVuIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Items/PointOfSaleItem.tsx\n"));

/***/ })

});