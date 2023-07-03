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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PointOfSaleItem = (props)=>{\n    const latitude = 51.39920065708797 // Szerokość geograficzna\n    ;\n    const longitude = 21.18576542850925 // Długość geograficzna\n    ;\n    const marker = \"markers=\".concat(latitude, \",\").concat(longitude);\n    const iframeSrc = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d\".concat(longitude, \"!3d\").concat(latitude, \"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z\").concat(latitude, \"%2C\").concat(longitude, \"!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&\").concat(marker);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-2 bg-white rounded-sm ring-1 ring-zinc-200 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold\",\n                        children: '\"Rolno-Spożywczy Rynek Hurtowy\" S.A.'\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-thin\",\n                        children: \"Adres: Lubelska 65, 26-600 Radom\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-thin\",\n                        children: \"Typ plac\\xf3wki: Rynek hurtowy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"Mapa dojazdu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: iframeSrc,\n                        width: \"auto\",\n                        height: \"auto\",\n                        style: {\n                            border: \"1px solid black\"\n                        },\n                        allowFullScreen: true,\n                        loading: \"lazy\",\n                        referrerPolicy: \"no-referrer-when-downgrade\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"Point of Sale\",\n                            style: {\n                                width: \"32px\",\n                                height: \"32px\",\n                                backgroundColor: \"red\",\n                                borderRadius: \"50%\",\n                                position: \"absolute\",\n                                top: \"50%\",\n                                left: \"50%\",\n                                transform: \"translate(-50%, -50%)\",\n                                zIndex\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 3\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c = PointOfSaleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointOfSaleItem);\nvar _c;\n$RefreshReg$(_c, \"PointOfSaleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLGtCQUFnQ0MsQ0FBQUE7SUFDckMsTUFBTUMsV0FBVyxrQkFBa0IseUJBQXlCOztJQUM1RCxNQUFNQyxZQUFZLGtCQUFrQix1QkFBdUI7O0lBRTNELE1BQU1DLFNBQVMsV0FBdUJELE9BQVpELFVBQVMsS0FBYSxPQUFWQztJQUV0QyxNQUFNRSxZQUFZLDhFQUE2RkgsT0FBZkMsV0FBVSxPQUErRUQsT0FBMUVBLFVBQVMsbUVBQStFQyxPQUFkRCxVQUFTLE9BQWtFRSxPQUE3REQsV0FBVSxxREFBMEQsT0FBUEM7SUFFcFEscUJBQ0MsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDs7a0NBQ0EsOERBQUNFO3dCQUFHRCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUN0Qyw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQVk7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFZOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNFO3dCQUFFRixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUNyQyw4REFBQ0c7d0JBQ0hDLEtBQUtOO3dCQUNMTyxPQUFNO3dCQUNOQyxRQUFPO3dCQUNQQyxPQUFPOzRCQUFFQyxRQUFRO3dCQUFrQjt3QkFDbkNDLGVBQWU7d0JBQ2ZDLFNBQVE7d0JBQ1JDLGdCQUFlO2tDQUVmLDRFQUFDWjs0QkFDQ2EsT0FBTTs0QkFDTkwsT0FBTztnQ0FDTEYsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUk8saUJBQWlCO2dDQUNqQkMsY0FBYztnQ0FDZEMsVUFBVTtnQ0FDVkMsS0FBSztnQ0FDTEMsTUFBTTtnQ0FDTkMsV0FBVztnQ0FDWEM7NEJBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0o7S0E3Q00xQjtBQStDTiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW1zL1BvaW50T2ZTYWxlSXRlbS50c3g/NTEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBvaW50T2ZTYWxlSXRlbTogUmVhY3QuRkM8e30+ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBsYXRpdHVkZSA9IDUxLjM5OTIwMDY1NzA4Nzk3IC8vIFN6ZXJva2/Fm8SHIGdlb2dyYWZpY3puYVxuXHRjb25zdCBsb25naXR1ZGUgPSAyMS4xODU3NjU0Mjg1MDkyNSAvLyBExYJ1Z2/Fm8SHIGdlb2dyYWZpY3puYVxuXG5cdGNvbnN0IG1hcmtlciA9IGBtYXJrZXJzPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWBcblxuXHRjb25zdCBpZnJhbWVTcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjQ4Mi4yMzI2MjAzODA5MTUzITJkJHtsb25naXR1ZGV9ITNkJHtsYXRpdHVkZX0hMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDAhMnoke2xhdGl0dWRlfSUyQyR7bG9uZ2l0dWRlfSE1ZTAhM20yITFzZW4hMnN1cyE0djE2ODc0NDgxMTk5MzUhNW0yITFzZW4hMnN1cyYke21hcmtlcn1gXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBwLTIgYmctd2hpdGUgcm91bmRlZC1zbSByaW5nLTEgcmluZy16aW5jLTIwMCB0ZXh0LWJsYWNrJz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+XCJSb2xuby1TcG/FvHl3Y3p5IFJ5bmVrIEh1cnRvd3lcIiBTLkEuPC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdmb250LXRoaW4nPkFkcmVzOiBMdWJlbHNrYSA2NSwgMjYtNjAwIFJhZG9tPC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbic+VHlwIHBsYWPDs3draTogUnluZWsgaHVydG93eTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTMnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+TWFwYSBkb2phemR1PC9wPlxuXHRcdFx0XHQ8aWZyYW1lXG4gIHNyYz17aWZyYW1lU3JjfVxuICB3aWR0aD0nYXV0bydcbiAgaGVpZ2h0PSdhdXRvJ1xuICBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19XG4gIGFsbG93RnVsbFNjcmVlblxuICBsb2FkaW5nPSdsYXp5J1xuICByZWZlcnJlclBvbGljeT0nbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnXG4+XG4gIDxkaXZcbiAgICB0aXRsZT0nUG9pbnQgb2YgU2FsZSdcbiAgICBzdHlsZT17e1xuICAgICAgd2lkdGg6ICczMnB4JyxcbiAgICAgIGhlaWdodDogJzMycHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICB6SW5kZXhcbiAgICB9fVxuICA+PC9kaXY+XG48L2lmcmFtZT5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZlNhbGVJdGVtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb2ludE9mU2FsZUl0ZW0iLCJwcm9wcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VyIiwiaWZyYW1lU3JjIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSIsInRpdGxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiekluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Items/PointOfSaleItem.tsx\n"));

/***/ })

});