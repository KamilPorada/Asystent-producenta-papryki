"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/operations/page",{

/***/ "(app-client)/./app/operations/page.tsx":
/*!*********************************!*\
  !*** ./app/operations/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/OperationItem */ \"(app-client)/./components/Items/OperationItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Operations = ()=>{\n    var _ref;\n    _s();\n    const [allOperations, setAllOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredOperations, setFilteredOperations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchOperations = async ()=>{\n        try {\n            const response = await fetch(\"/api/operation\");\n            const data = await response.json();\n            const filteredOperations = data.filter((operation)=>operation.creator._id.toString() === userId.toString());\n            setAllOperations(filteredOperations);\n            setFilteredOperations(filteredOperations);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchOperations();\n        console.log(filteredOperations);\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 4\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje zabiegi cheminizacyjne\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-center items-center flex-wrap gap-x-12 gap-y-2 mt-5\",\n                children: filteredOperations.length > 0 ? filteredOperations.map((operation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_OperationItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        date: operation.date,\n                        time: operation.time,\n                        pesticideType: operation.pesticideType,\n                        pesticideName: operation.pesticideName,\n                        pesticideDose: operation.pesticideDose\n                    }, operation._id, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 7\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-10 text-black text-center\",\n                    children: \"Brak zabieg\\xf3w cheminizacyjnych\"\n                }, void 0, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/operations/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Operations, \"ACq3Y+gTKKr0SdaOA3K0+YdLqNc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Operations;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Operations);\nvar _c;\n$RefreshReg$(_c, \"Operations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL29wZXJhdGlvbnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0M7QUFDRDtBQUNXO0FBQ0s7QUFzQjNELE1BQU1NLGFBQWE7UUFNSDs7SUFMZixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2xFLE1BQU0sQ0FBQ1Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBLENBQWMsRUFBRTtJQUM1RSxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTWEsU0FBU1YsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsTUFBTUMsT0FBTyxFQUFFLEdBQUdiLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1jLFNBQVMsZUFBQ0Qsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRSxrQkFBVixnQ0FBb0NDLGdCQUFwQyx1QkFBMEM7SUFFekQsTUFBTUMsa0JBQWtCO1FBQ3ZCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTVAsT0FBTyxNQUFNTSxTQUFTRTtZQUU1QixNQUFNYixxQkFBcUJLLEtBQUtTLE9BQy9CLENBQUNDLFlBQXlCQSxVQUFVQyxRQUFRQyxJQUFJQyxlQUFlWCxPQUFPVztZQUd2RW5CLGlCQUFpQkM7WUFDakJDLHNCQUFzQkQ7UUFDdkIsRUFBRSxPQUFPbUIsT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiLFNBQVU7WUFDVGhCLFdBQVc7UUFDWjtJQUNEO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1RrQjtRQUNBVSxRQUFRQyxJQUFJckI7SUFDYixHQUFHO1FBQUNFO0tBQVE7SUFFWixJQUFJQSxTQUFTO1FBQ1oscUJBQ0MsOERBQUNvQjtZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7OztJQUcvQztJQUVBLHFCQUNDLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUM1QixtRUFBWUE7Z0JBQUM4QixPQUFNOzs7Ozs7MEJBQ1gsOERBQUNDO2dCQUFJSCxXQUFVOzBCQUNkdkIsbUJBQW1CMkIsU0FBUyxJQUNwQzNCLG1CQUFtQjRCLElBQUliLENBQUFBLDBCQUN0Qiw4REFBQ25CLHVFQUFhQTt3QkFFUWlDLE1BQU1kLFVBQVVjO3dCQUNoQkMsTUFBTWYsVUFBVWU7d0JBQ2hCQyxlQUFlaEIsVUFBVWdCO3dCQUN6QkMsZUFBZWpCLFVBQVVpQjt3QkFDekJDLGVBQWVsQixVQUFVa0I7dUJBTHpDbEIsVUFBVUU7Ozs7bURBVWpCLDhEQUFDTztvQkFBRUQsV0FBVTs4QkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pEO0dBL0RNMUI7O1FBSVVILHNEQUFTQTtRQUNFRCx1REFBVUE7OztLQUwvQkk7QUFpRU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL29wZXJhdGlvbnMvcGFnZS50c3g/NzdlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlY3Rpb25UaXRsZSdcbmltcG9ydCBPcGVyYXRpb25JdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL09wZXJhdGlvbkl0ZW0nXG5cblxuaW50ZXJmYWNlIE9wZXJhdGlvbiB7XG5cdF9pZDogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdGRhdGU6IHN0cmluZ1xuXHR0aW1lOiBzdHJpbmdcblx0cGVzdGljaWRlVHlwZTogbnVtYmVyXG5cdHBlc3RpY2lkZU5hbWU6IHN0cmluZ1xuXHRwZXN0aWNpZGVEb3NlOiBudW1iZXJcblx0bGlxdWlkQW1vdW50OiBudW1iZXJcblx0d2FpdGluZ1RpbWU6IG51bWJlclxuXHR3YWl0aW5nVGltZURhdGU6IHN0cmluZ1xuXHRzdGF0dXM6IGJvb2xlYW5cbn1cblxuY29uc3QgT3BlcmF0aW9ucyA9ICgpID0+IHtcblx0Y29uc3QgW2FsbE9wZXJhdGlvbnMsIHNldEFsbE9wZXJhdGlvbnNdID0gdXNlU3RhdGU8T3BlcmF0aW9uW10+KFtdKVxuXHRjb25zdCBbZmlsdGVyZWRPcGVyYXRpb25zLCBzZXRGaWx0ZXJlZE9wZXJhdGlvbnNdID0gdXNlU3RhdGU8T3BlcmF0aW9uW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZldGNoT3BlcmF0aW9ucyA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vcGVyYXRpb24nKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZE9wZXJhdGlvbnMgPSBkYXRhLmZpbHRlcihcblx0XHRcdFx0KG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiBvcGVyYXRpb24uY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKClcblx0XHRcdClcblxuXHRcdFx0c2V0QWxsT3BlcmF0aW9ucyhmaWx0ZXJlZE9wZXJhdGlvbnMpXG5cdFx0XHRzZXRGaWx0ZXJlZE9wZXJhdGlvbnMoZmlsdGVyZWRPcGVyYXRpb25zKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoT3BlcmF0aW9ucygpXG5cdFx0Y29uc29sZS5sb2coZmlsdGVyZWRPcGVyYXRpb25zKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgemFiaWVnaSBjaGVtaW5pemFjeWpuZScgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLXgtMTIgZ2FwLXktMiBtdC01Jz5cbiAgICAgICAgICAgIHtmaWx0ZXJlZE9wZXJhdGlvbnMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHRmaWx0ZXJlZE9wZXJhdGlvbnMubWFwKG9wZXJhdGlvbiA9PiAoXG5cdFx0XHRcdFx0XHQ8T3BlcmF0aW9uSXRlbVxuXHRcdFx0XHRcdFx0XHRrZXk9e29wZXJhdGlvbi5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17b3BlcmF0aW9uLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17b3BlcmF0aW9uLnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVzdGljaWRlVHlwZT17b3BlcmF0aW9uLnBlc3RpY2lkZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVzdGljaWRlTmFtZT17b3BlcmF0aW9uLnBlc3RpY2lkZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVzdGljaWRlRG9zZT17b3BlcmF0aW9uLnBlc3RpY2lkZURvc2V9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayB6YWJpZWfDs3cgY2hlbWluaXphY3lqbnljaDwvcD5cblx0XHRcdFx0KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XG5cdFx0XHRcblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uc1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlNlY3Rpb25UaXRsZSIsIk9wZXJhdGlvbkl0ZW0iLCJPcGVyYXRpb25zIiwiYWxsT3BlcmF0aW9ucyIsInNldEFsbE9wZXJhdGlvbnMiLCJmaWx0ZXJlZE9wZXJhdGlvbnMiLCJzZXRGaWx0ZXJlZE9wZXJhdGlvbnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZmV0Y2hPcGVyYXRpb25zIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXIiLCJvcGVyYXRpb24iLCJjcmVhdG9yIiwiX2lkIiwidG9TdHJpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicCIsInRpdGxlIiwiZGl2IiwibGVuZ3RoIiwibWFwIiwiZGF0ZSIsInRpbWUiLCJwZXN0aWNpZGVUeXBlIiwicGVzdGljaWRlTmFtZSIsInBlc3RpY2lkZURvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/operations/page.tsx\n"));

/***/ })

});