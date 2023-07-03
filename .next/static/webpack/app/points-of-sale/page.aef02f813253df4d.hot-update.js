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

/***/ "(app-client)/./app/points-of-sale/page.tsx":
/*!*************************************!*\
  !*** ./app/points-of-sale/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchPosts = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() == userId.toString());\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"hQecclCQowPUYaI3o4A4il8LbkU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyQztBQUNDO0FBRW1CO0FBaUIvRCxTQUFTSTtRQUdPOztJQUZmLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUM1RCxNQUFNLEVBQUVPLE1BQU1DLE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7UUFDckI7SUFBZixNQUFNTyxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGFBQWE7UUFDbEIsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNUCxPQUFPLE1BQU1NLFNBQVNFO1lBRTVCLE1BQU1DLGlCQUFpQlQsS0FBS1UsT0FBTyxDQUFDQyxRQUF1QkEsTUFBTUMsUUFBUUMsSUFBSUMsY0FBY1osT0FBT1k7WUFFbEdmLGFBQWFVO1FBQ2QsRUFBRSxPQUFPTSxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2I7SUFDRDtJQUVBckIsZ0RBQVNBLENBQUM7UUFDVFc7SUFDRCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ2E7UUFBUUMsV0FBVTtrQkFDZiw0RUFBQ3ZCLHlFQUFlQTs7Ozs7Ozs7OztBQUd0QjtHQTNCU0M7O1FBRWtCRix1REFBVUE7OztLQUY1QkU7QUE2QlQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4P2YxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmltcG9ydCBQb2ludE9mU2FsZUl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvUG9pbnRPZlNhbGVJdGVtJ1xuXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGUge1xuXHRfaWQ6IHN0cmluZ1xuXHRhZGRyZXNzOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bGF0aXR1ZGU6IHN0cmluZ1xuXHRsb25naXR1ZGU6IHN0cmluZ1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFBvaW50c09mU2FsZSgpIHtcblx0Y29uc3QgW2FsbFBvaW50cywgc2V0QWxsUG9pbnRzXSA9IHVzZVN0YXRlPFBvaW50T2ZTYWxlW10+KFtdKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9pbnQtb2Ytc2FsZScpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkUG9pbnRzID0gZGF0YS5maWx0ZXIoKHBvaW50OiBQb2ludE9mU2FsZSkgPT4gcG9pbnQuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoUG9zdHMoKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cbiAgICAgIDxQb2ludE9mU2FsZUl0ZW0vPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludHNPZlNhbGVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJQb2ludE9mU2FsZUl0ZW0iLCJQb2ludHNPZlNhbGUiLCJhbGxQb2ludHMiLCJzZXRBbGxQb2ludHMiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImZpbHRlcmVkUG9pbnRzIiwiZmlsdGVyIiwicG9pbnQiLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ }),

/***/ "(app-client)/./components/Items/PointOfSaleItem.tsx":
/*!**********************************************!*\
  !*** ./components/Items/PointOfSaleItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/UI/Button */ \"(app-client)/./components/UI/Button.tsx\");\n\n\n\nconst PointOfSaleItem = (props)=>{\n    const latitude = 51.39920065708797 // Szerokość geograficzna\n    ;\n    const longitude = 21.18576542850925 // Długość geograficzna\n    ;\n    const marker = \"markers=\".concat(latitude, \",\").concat(longitude);\n    const iframeSrc = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2326203809153!2d\".concat(longitude, \"!3d\").concat(latitude, \"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z\").concat(latitude, \"%2C\").concat(longitude, \"!5e0!3m2!1sen!2sus!4v1687448119935!5m2!1sen!2sus&\").concat(marker);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-white rounded-sm ring-1 ring-zinc-200 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div-1 ring-1 min-h-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"Rolno-Spożywczy Rynek Hurtowy S.A.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-thin\",\n                        children: \"Adres: Lubelska 65, 26-600 Radom\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-thin\",\n                        children: \"Typ plac\\xf3wki: Rynek hurtowy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"Mapa dojazdu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: iframeSrc,\n                        width: \"100%\",\n                        height: \"auto\",\n                        allowFullScreen: true,\n                        loading: \"lazy\",\n                        referrerPolicy: \"no-referrer-when-downgrade\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"div3 flex flex-row justify-start w-auto text-white md:flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"mx-0\",\n                        children: \"Edytuj\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"Usuń\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/Items/PointOfSaleItem.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PointOfSaleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointOfSaleItem);\nvar _c;\n$RefreshReg$(_c, \"PointOfSaleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUNpQjtBQUUxQyxNQUFNRSxrQkFBZ0NDLENBQUFBO0lBQ3BDLE1BQU1DLFdBQVcsa0JBQWtCLHlCQUF5Qjs7SUFDNUQsTUFBTUMsWUFBWSxrQkFBa0IsdUJBQXVCOztJQUUzRCxNQUFNQyxTQUFTLFdBQXVCRCxPQUFaRCxVQUFTLEtBQWEsT0FBVkM7SUFFdEMsTUFBTUUsWUFBWSw4RUFBNkZILE9BQWZDLFdBQVUsT0FBK0VELE9BQTFFQSxVQUFTLG1FQUErRUMsT0FBZEQsVUFBUyxPQUFrRUUsT0FBN0RELFdBQVUscURBQTBELE9BQVBDO0lBRXBRLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDdEMsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFZOzs7Ozs7a0NBQ3pCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBWTs7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDckMsOERBQUNHO3dCQUNDQyxLQUFLTjt3QkFDTE8sT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsZUFBZTt3QkFDZkMsU0FBUTt3QkFDUkMsZ0JBQWU7Ozs7Ozs7Ozs7OzswQkFFbkIsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1IsNkRBQU1BO3dCQUFDUSxXQUFVO2tDQUFPOzs7Ozs7a0NBQ3pCLDhEQUFDUiw2REFBTUE7a0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtLQS9CTUM7QUFpQ04sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtcy9Qb2ludE9mU2FsZUl0ZW0udHN4PzUxMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9VSS9CdXR0b24nXG5cbmNvbnN0IFBvaW50T2ZTYWxlSXRlbTogUmVhY3QuRkM8e30+ID0gcHJvcHMgPT4ge1xuICBjb25zdCBsYXRpdHVkZSA9IDUxLjM5OTIwMDY1NzA4Nzk3IC8vIFN6ZXJva2/Fm8SHIGdlb2dyYWZpY3puYVxuICBjb25zdCBsb25naXR1ZGUgPSAyMS4xODU3NjU0Mjg1MDkyNSAvLyBExYJ1Z2/Fm8SHIGdlb2dyYWZpY3puYVxuXG4gIGNvbnN0IG1hcmtlciA9IGBtYXJrZXJzPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWBcblxuICBjb25zdCBpZnJhbWVTcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjQ4Mi4yMzI2MjAzODA5MTUzITJkJHtsb25naXR1ZGV9ITNkJHtsYXRpdHVkZX0hMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDAhMnoke2xhdGl0dWRlfSUyQyR7bG9uZ2l0dWRlfSE1ZTAhM20yITFzZW4hMnN1cyE0djE2ODc0NDgxMTk5MzUhNW0yITFzZW4hMnN1cyYke21hcmtlcn1gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNSBwLTUgYmctd2hpdGUgcm91bmRlZC1zbSByaW5nLTEgcmluZy16aW5jLTIwMCB0ZXh0LWJsYWNrJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXYtMSByaW5nLTEgbWluLWgtYXV0byc+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+Um9sbm8tU3Bvxbx5d2N6eSBSeW5layBIdXJ0b3d5IFMuQS48L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtdGhpbic+QWRyZXM6IEx1YmVsc2thIDY1LCAyNi02MDAgUmFkb208L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC10aGluJz5UeXAgcGxhY8Ozd2tpOiBSeW5layBodXJ0b3d5PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2LTInPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1zZW1pYm9sZCc+TWFwYSBkb2phemR1PC9wPlxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgc3JjPXtpZnJhbWVTcmN9XG4gICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgaGVpZ2h0PSdhdXRvJ1xuICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgIGxvYWRpbmc9J2xhenknXG4gICAgICAgICAgcmVmZXJyZXJQb2xpY3k9J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJz48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdjMgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IHctYXV0byB0ZXh0LXdoaXRlIG1kOmZsZXgtY29sJz5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J214LTAnPkVkeXR1ajwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uPlVzdcWEPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludE9mU2FsZUl0ZW1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlBvaW50T2ZTYWxlSXRlbSIsInByb3BzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJtYXJrZXIiLCJpZnJhbWVTcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJpZnJhbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsbG93RnVsbFNjcmVlbiIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Items/PointOfSaleItem.tsx\n"));

/***/ }),

/***/ "(app-client)/./components/UI/Button.tsx":
/*!**********************************!*\
  !*** ./components/UI/Button.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Button = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"px-6 py-1 mx-3 sm:text-lg rounded-md font-semibold bg-mainColor \".concat(props.disabled ? \"bg-gray-500 cursor-not-allowed\" : \"hover:bg-green-700 transition duration-300\", \" \").concat(props.className),\n        onClick: props.onClick,\n        disabled: props.disabled,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/components/UI/Button.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9VSS9CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU1BLFNBS0RDLENBQUFBO0lBQ0oscUJBQ0MsOERBQUNDO1FBQ0FDLFdBQVcsbUVBRUlGLE9BREZBLE1BQU1HLFdBQVcsbUNBQW1DLDhDQUNyRCxLQUFtQixPQUFoQkgsTUFBTUU7UUFDckJFLFNBQVNKLE1BQU1JO1FBQ2ZELFVBQVVILE1BQU1HO2tCQUNmSCxNQUFNSzs7Ozs7O0FBR1Y7S0FoQk1OO0FBa0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvQnV0dG9uLnRzeD9iNDU4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8e1xuXHRjbGFzc05hbWU/OiBzdHJpbmdcblx0b25DbGljaz86ICgpID0+IHZvaWRcblx0ZGlzYWJsZWQ/OiBib29sZWFuXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0+ID0gcHJvcHMgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YHB4LTYgcHktMSBteC0zIHNtOnRleHQtbGcgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIGJnLW1haW5Db2xvciAke1xuICAgICAgICAgICAgICAgIHByb3BzLmRpc2FibGVkID8gJ2JnLWdyYXktNTAwIGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnaG92ZXI6YmctZ3JlZW4tNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwJ1xuICAgICAgICAgICAgICB9ICR7cHJvcHMuY2xhc3NOYW1lfWB9XG5cdFx0XHRvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuXHRcdFx0ZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/UI/Button.tsx\n"));

/***/ })

});