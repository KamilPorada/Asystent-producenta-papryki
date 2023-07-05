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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/SearchInput */ \"(app-client)/./components/UI/SearchInput.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredPoints, setFilteredPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n            setFilteredPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleDelete = async (point)=>{\n        try {\n            await fetch(\"/api/point-of-sale/\".concat(point._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredPoints = allPoints.filter((item)=>item._id !== point._id);\n            setAllPoints(filteredPoints);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleEdit = async (point)=>{\n        router.push(\"/edit-point-of-sale?id=\".concat(point._id));\n    };\n    const handleSearch = (searchTerm)=>{\n        const filteredPoints = allPoints.filter((point)=>point.name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredPoints(filteredPoints);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 80,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 4\n            }, this),\n            filteredPoints.length > 0 ? filteredPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: point.name,\n                    address: point.address,\n                    type: point.type,\n                    latitude: point.latitude,\n                    longitude: point.longitude,\n                    handleDelete: ()=>handleDelete(point),\n                    handleEdit: ()=>handleEdit(point)\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"sxcQabBtUiXT53GaYLZhh3uRDrI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNEO0FBQ1c7QUFDRjtBQUVXO0FBaUIvRCxTQUFTTztRQU1POztJQUxmLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUM1RCxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFnQixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNYyxTQUFTWCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxNQUFNQyxPQUFPLEVBQUUsR0FBR2QsMkRBQVVBO1FBQ3JCO0lBQWYsTUFBTWUsU0FBUyxlQUFDRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLGtCQUFWLGdDQUFvQ0MsZ0JBQXBDLHVCQUEwQztJQUV6RCxNQUFNQyxvQkFBb0I7UUFDekIsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNUCxPQUFPLE1BQU1NLFNBQVNFO1lBRTVCLE1BQU1iLGlCQUFpQkssS0FBS1MsT0FBTyxDQUFDQyxRQUF1QkEsTUFBTUMsUUFBUUMsSUFBSUMsZUFBZVgsT0FBT1c7WUFFbkduQixhQUFhQztZQUNiQyxrQkFBa0JEO1FBQ25CLEVBQUUsT0FBT21CLE9BQU87WUFDZkMsUUFBUUMsSUFBSUY7UUFDYixTQUFVO1lBQ1RoQixXQUFXO1FBQ1o7SUFDRDtJQUVBLE1BQU1tQixlQUFlLE9BQU9QO1FBQzNCLElBQUk7WUFDSCxNQUFNSCxNQUFNLHNCQUEyQyxPQUFyQkcsTUFBTUUsSUFBSUMsYUFBYztnQkFDekRLLFFBQVE7WUFDVDtZQUVBLE1BQU12QixpQkFBaUJGLFVBQVVnQixPQUFPVSxDQUFBQSxPQUFRQSxLQUFLUCxRQUFRRixNQUFNRTtZQUVuRWxCLGFBQWFDO1lBQ2JHLFdBQVc7UUFDWixFQUFFLE9BQU9nQixPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2I7SUFDRDtJQUVBLE1BQU1NLGFBQWEsT0FBT1Y7UUFDekJYLE9BQU9zQixLQUFLLDBCQUFvQyxPQUFWWCxNQUFNRTtJQUM3QztJQUVBLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDckIsTUFBTTVCLGlCQUFpQkYsVUFBVWdCLE9BQU9DLENBQUFBLFFBQVNBLE1BQU1jLEtBQUtDLGNBQWNDLFNBQVNILFdBQVdFO1FBRTlGN0Isa0JBQWtCRDtJQUNuQjtJQUVBVCxnREFBU0EsQ0FBQztRQUNUbUI7SUFDRCxHQUFHO1FBQUNSO0tBQVE7SUFFWixJQUFJQSxTQUFTO1FBQ1oscUJBQ0MsOERBQUM4QjtZQUFRQyxXQUFVO3NCQUNsQiw0RUFBQ0M7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7OztJQUcvQztJQUVBLHFCQUNDLDhEQUFDRDtRQUFRQyxXQUFVOzswQkFDbEIsOERBQUN2QyxtRUFBWUE7Z0JBQUN5QyxPQUFNOzs7Ozs7MEJBQ3BCLDhEQUFDeEMsa0VBQVdBO2dCQUFDeUMsVUFBVVQ7Ozs7OztZQUN0QjNCLGVBQWVxQyxTQUFTLElBQ3hCckMsZUFBZXNDLElBQUl2QixDQUFBQSxzQkFDbEIsOERBQUNuQix5RUFBZUE7b0JBRWZpQyxNQUFNZCxNQUFNYztvQkFDWlUsU0FBU3hCLE1BQU13QjtvQkFDZkMsTUFBTXpCLE1BQU15QjtvQkFDWkMsVUFBVTFCLE1BQU0wQjtvQkFDaEJDLFdBQVczQixNQUFNMkI7b0JBQ2pCcEIsY0FBYyxJQUFNQSxhQUFhUDtvQkFDakNVLFlBQVksSUFBTUEsV0FBV1Y7bUJBUHhCQSxNQUFNRTs7OzswQ0FXYiw4REFBQ2lCO2dCQUFFRCxXQUFVOzBCQUErQjs7Ozs7Ozs7Ozs7O0FBSWhEO0dBbkZTcEM7O1FBSU9KLHNEQUFTQTtRQUNFRCx1REFBVUE7OztLQUw1Qks7QUFxRlQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4P2YxMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAY29tcG9uZW50cy9VSS9TZWN0aW9uVGl0bGUnXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VhcmNoSW5wdXQnXG5cbmltcG9ydCBQb2ludE9mU2FsZUl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvUG9pbnRPZlNhbGVJdGVtJ1xuXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGUge1xuXHRfaWQ6IHN0cmluZ1xuXHRhZGRyZXNzOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bGF0aXR1ZGU6IHN0cmluZ1xuXHRsb25naXR1ZGU6IHN0cmluZ1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFBvaW50c09mU2FsZSgpIHtcblx0Y29uc3QgW2FsbFBvaW50cywgc2V0QWxsUG9pbnRzXSA9IHVzZVN0YXRlPFBvaW50T2ZTYWxlW10+KFtdKVxuXHRjb25zdCBbZmlsdGVyZWRQb2ludHMsIHNldEZpbHRlcmVkUG9pbnRzXSA9IHVzZVN0YXRlPFBvaW50T2ZTYWxlW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZldGNoUG9pbnRzT2ZTYWxlID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BvaW50LW9mLXNhbGUnKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGRhdGEuZmlsdGVyKChwb2ludDogUG9pbnRPZlNhbGUpID0+IHBvaW50LmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG5cdFx0XHRzZXRBbGxQb2ludHMoZmlsdGVyZWRQb2ludHMpXG5cdFx0XHRzZXRGaWx0ZXJlZFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKHBvaW50OiBQb2ludE9mU2FsZSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBmZXRjaChgL2FwaS9wb2ludC1vZi1zYWxlLyR7cG9pbnQuX2lkLnRvU3RyaW5nKCl9YCwge1xuXHRcdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRQb2ludHMgPSBhbGxQb2ludHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IHBvaW50Ll9pZClcblxuXHRcdFx0c2V0QWxsUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHRcdFx0c2V0TG9hZGluZyh0cnVlKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKHBvaW50OiBQb2ludE9mU2FsZSkgPT4ge1xuXHRcdHJvdXRlci5wdXNoKGAvZWRpdC1wb2ludC1vZi1zYWxlP2lkPSR7cG9pbnQuX2lkfWApXG5cdH1cblxuXHRjb25zdCBoYW5kbGVTZWFyY2ggPSAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgZmlsdGVyZWRQb2ludHMgPSBhbGxQb2ludHMuZmlsdGVyKHBvaW50ID0+IHBvaW50Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpKVxuXG5cdFx0c2V0RmlsdGVyZWRQb2ludHMoZmlsdGVyZWRQb2ludHMpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoUG9pbnRzT2ZTYWxlKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdNb2plIHB1bmt0eSBzcHJ6ZWRhxbx5JyAvPlxuXHRcdFx0PFNlYXJjaElucHV0IG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XG5cdFx0XHR7ZmlsdGVyZWRQb2ludHMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0ZmlsdGVyZWRQb2ludHMubWFwKHBvaW50ID0+IChcblx0XHRcdFx0XHQ8UG9pbnRPZlNhbGVJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e3BvaW50Ll9pZH1cblx0XHRcdFx0XHRcdG5hbWU9e3BvaW50Lm5hbWV9XG5cdFx0XHRcdFx0XHRhZGRyZXNzPXtwb2ludC5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0dHlwZT17cG9pbnQudHlwZX1cblx0XHRcdFx0XHRcdGxhdGl0dWRlPXtwb2ludC5sYXRpdHVkZX1cblx0XHRcdFx0XHRcdGxvbmdpdHVkZT17cG9pbnQubG9uZ2l0dWRlfVxuXHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUocG9pbnQpfVxuXHRcdFx0XHRcdFx0aGFuZGxlRWRpdD17KCkgPT4gaGFuZGxlRWRpdChwb2ludCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayBwdW5rdMOzdyBzcHJ6ZWRhxbx5PC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiU2VjdGlvblRpdGxlIiwiU2VhcmNoSW5wdXQiLCJQb2ludE9mU2FsZUl0ZW0iLCJQb2ludHNPZlNhbGUiLCJhbGxQb2ludHMiLCJzZXRBbGxQb2ludHMiLCJmaWx0ZXJlZFBvaW50cyIsInNldEZpbHRlcmVkUG9pbnRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoUG9pbnRzT2ZTYWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXIiLCJwb2ludCIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsIm1ldGhvZCIsIml0ZW0iLCJoYW5kbGVFZGl0IiwicHVzaCIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFRlcm0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJvblNlYXJjaCIsImxlbmd0aCIsIm1hcCIsImFkZHJlc3MiLCJ0eXBlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});