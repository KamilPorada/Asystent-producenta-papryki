"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/trades-of-pepper/page",{

/***/ "(app-client)/./app/trades-of-pepper/page.tsx":
/*!***************************************!*\
  !*** ./app/trades-of-pepper/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/TradeOfPepperTableHeader */ \"(app-client)/./components/Items/TradeOfPepperTableHeader.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/TradeOfPepperItem */ \"(app-client)/./components/Items/TradeOfPepperItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TradesOfPepper() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTrades, setFilteredTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n        return \"\".concat(day < 10 ? \"0\" + day : day, \".\").concat(month < 10 ? \"0\" + month : month, \".\").concat(year);\n    };\n    const getClassLabel = (index)=>{\n        if (index === 3) {\n            return \"Krojona\";\n        }\n        return index.toString();\n    };\n    const getColorLabel = (index)=>{\n        switch(index){\n            case 1:\n                return \"Czerwona\";\n            case 2:\n                return \"Ż\\xf3łta\";\n            case 3:\n                return \"Zielona\";\n            case 4:\n                return \"Pomarańczowa\";\n            case 5:\n                return \"Blondyna\";\n            default:\n                return \"\";\n        }\n    };\n    const handleDelete = async (trade)=>{\n        try {\n            await fetch(\"/api/point-of-sale/\".concat(point._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredPoints = allPoints.filter((item)=>item._id !== point._id);\n            setAllPoints(filteredPoints);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n            setFilteredTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n            lineNumber: 106,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje transakcje sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 114,\n                columnNumber: 4\n            }, this),\n            filteredTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto ring-1 ring-black mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 6\n                    }, this),\n                    filteredTrades.length > 0 ? filteredTrades.map((point1, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            index: index + 1,\n                            date: formatDate(point1.date),\n                            clas: getClassLabel(point1.clas),\n                            color: getColorLabel(point1.color),\n                            price: point1.price,\n                            weight: point1.weight,\n                            vatRate: point1.vatRate,\n                            totalSum: point1.totalSum,\n                            pointOfSale: point1.pointOfSaleId,\n                            handleDelete: ()=>handleDelete(point1)\n                        }, point1._id, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 9\n                        }, this)) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 116,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak transakcji sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n        lineNumber: 113,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepper, \"vLY8SJryn8Pmq0ON4aezr52qUHQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TradesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ0Q7QUFDbEI7QUFDNkI7QUFDMkI7QUFDZDtBQW9CbkUsU0FBU1E7UUFNTzs7SUFMZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQWtCLEVBQUU7SUFDOUQsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUN4RSxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWUsU0FBU1osMERBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsTUFBTUMsT0FBTyxFQUFFLEdBQUdmLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1nQixTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGFBQWEsQ0FBQ0M7UUFDbkIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUN0QixNQUFNRyxNQUFNRixLQUFLRztRQUNqQixNQUFNQyxRQUFRSixLQUFLSyxhQUFhO1FBQ2hDLE1BQU1DLE9BQU9OLEtBQUtPO1FBRWxCLE9BQU8sR0FBaUNILE9BQTlCRixNQUFNLEtBQUssTUFBTUEsTUFBTUEsS0FBSSxLQUF1Q0ksT0FBcENGLFFBQVEsS0FBSyxNQUFNQSxRQUFRQSxPQUFNLEtBQVEsT0FBTEU7SUFDN0U7SUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ0M7UUFDdEIsSUFBSUEsVUFBVSxHQUFHO1lBQ2hCLE9BQU87UUFDUjtRQUNBLE9BQU9BLE1BQU1DO0lBQ2Q7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0Y7UUFDdEIsT0FBUUE7WUFDUCxLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUjtnQkFDQyxPQUFPO1FBQ1Q7SUFDRDtJQUVBLE1BQU1HLGVBQWUsT0FBT0M7UUFDM0IsSUFBSTtZQUNILE1BQU1DLE1BQU0sc0JBQTJDLE9BQXJCQyxNQUFNQyxJQUFJTixhQUFjO2dCQUN6RE8sUUFBUTtZQUNUO1lBRUEsTUFBTUMsaUJBQWlCQyxVQUFVQyxPQUFPQyxDQUFBQSxPQUFRQSxLQUFLTCxRQUFRRCxNQUFNQztZQUVuRU0sYUFBYUo7WUFDYjNCLFdBQVc7UUFDWixFQUFFLE9BQU9nQyxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2I7SUFDRDtJQUVBLE1BQU1HLHNCQUFzQjtRQUMzQixJQUFJO1lBQ0gsTUFBTUMsV0FBVyxNQUFNYixNQUFNO1lBQzdCLE1BQU1yQixPQUFPLE1BQU1rQyxTQUFTQztZQUU1QixNQUFNeEMsaUJBQWlCSyxLQUFLMkIsT0FBTyxDQUFDUCxRQUF5QkEsTUFBTWdCLFFBQVFiLElBQUlOLGVBQWVmLE9BQU9lO1lBRXJHdkIsYUFBYUM7WUFDYkMsa0JBQWtCRDtRQUNuQixFQUFFLE9BQU9tQyxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUaEMsV0FBVztRQUNaO0lBQ0Q7SUFFQWIsZ0RBQVNBLENBQUM7UUFDVGdEO0lBQ0QsR0FBRztRQUFDcEM7S0FBUTtJQUVaLElBQUlBLFNBQVM7UUFDWixxQkFDQyw4REFBQ3dDO1lBQVFDLFdBQVU7c0JBQ2xCLDRFQUFDQztnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7O0lBRy9DO0lBRUEscUJBQ0MsOERBQUNEO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQ2pELG1FQUFZQTtnQkFBQ21ELE9BQU07Ozs7OztZQUNuQjdDLGVBQWU4QyxTQUFTLGtCQUN4Qiw4REFBQ0M7Z0JBQUlKLFdBQVU7O2tDQUNkLDhEQUFDaEQsa0ZBQXdCQTs7Ozs7b0JBQ3hCSyxlQUFlOEMsU0FBUyxJQUN0QjlDLGVBQWVnRCxJQUFJLENBQUNyQixRQUFPTixzQkFDM0IsOERBQUN6QiwyRUFBaUJBOzRCQUVqQnlCLE9BQU9BLFFBQVE7NEJBQ2ZULE1BQU1GLFdBQVdpQixPQUFNZjs0QkFDdkJxQyxNQUFNN0IsY0FBY08sT0FBTXNCOzRCQUMxQkMsT0FBTzNCLGNBQWNJLE9BQU11Qjs0QkFDM0JDLE9BQU94QixPQUFNd0I7NEJBQ2JDLFFBQVF6QixPQUFNeUI7NEJBQ2RDLFNBQVMxQixPQUFNMEI7NEJBQ2ZDLFVBQVUzQixPQUFNMkI7NEJBQ2hCQyxhQUFhNUIsT0FBTTZCOzRCQUNuQmhDLGNBQWMsSUFBTUEsYUFBYUc7MkJBVjVCQSxPQUFNQzs7OztvQ0FhWjs7Ozs7O3FDQUdKLDhEQUFDZ0I7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0FqSFM5Qzs7UUFJT0wsc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBTDVCTTtBQW1IVCwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdHJhZGVzLW9mLXBlcHBlci9wYWdlLnRzeD81MzA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9UcmFkZU9mUGVwcGVyVGFibGVIZWFkZXInXG5pbXBvcnQgVHJhZGVPZlBlcHBlckl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvVHJhZGVPZlBlcHBlckl0ZW0nXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkVHJhZGVzLCBzZXRGaWx0ZXJlZFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZzogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXG5cdFx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcblx0XHRjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcblx0XHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cblx0XHRyZXR1cm4gYCR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9LiR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gXG5cdH1cblxuXHRjb25zdCBnZXRDbGFzc0xhYmVsID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRpZiAoaW5kZXggPT09IDMpIHtcblx0XHRcdHJldHVybiAnS3Jvam9uYSdcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4LnRvU3RyaW5nKClcblx0fVxuXG5cdGNvbnN0IGdldENvbG9yTGFiZWwgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdDemVyd29uYSdcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuICfFu8OzxYJ0YSdcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmV0dXJuICdaaWVsb25hJ1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRyZXR1cm4gJ1BvbWFyYcWEY3pvd2EnXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHJldHVybiAnQmxvbmR5bmEnXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAodHJhZGU6IFBvaW50T2ZTYWxlKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGZldGNoKGAvYXBpL3BvaW50LW9mLXNhbGUvJHtwb2ludC5faWQudG9TdHJpbmcoKX1gLCB7XG5cdFx0XHRcdG1ldGhvZDogJ0RFTEVURScsXG5cdFx0XHR9KVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGFsbFBvaW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gcG9pbnQuX2lkKVxuXG5cdFx0XHRzZXRBbGxQb2ludHMoZmlsdGVyZWRQb2ludHMpXG5cdFx0XHRzZXRMb2FkaW5nKHRydWUpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGZldGNoVHJhZGVzT2ZQZXBwZXIgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdHJhZGUtb2YtcGVwcGVyJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRUcmFkZXMgPSBkYXRhLmZpbHRlcigodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHRyYWRlLmNyZWF0b3IuX2lkLnRvU3RyaW5nKCkgPT09IHVzZXJJZC50b1N0cmluZygpKVxuXG5cdFx0XHRzZXRBbGxUcmFkZXMoZmlsdGVyZWRUcmFkZXMpXG5cdFx0XHRzZXRGaWx0ZXJlZFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaFRyYWRlc09mUGVwcGVyKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdNb2plIHRyYW5zYWtjamUgc3ByemVkYcW8eSBwYXByeWtpJyAvPlxuXHRcdFx0e2ZpbHRlcmVkVHJhZGVzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8gcmluZy0xIHJpbmctYmxhY2sgbXQtNSc+XG5cdFx0XHRcdFx0PFRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciAvPlxuXHRcdFx0XHRcdHtmaWx0ZXJlZFRyYWRlcy5sZW5ndGggPiAwXG5cdFx0XHRcdFx0XHQ/IGZpbHRlcmVkVHJhZGVzLm1hcCgocG9pbnQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRyYWRlT2ZQZXBwZXJJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3BvaW50Ll9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4PXtpbmRleCArIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRlPXtmb3JtYXREYXRlKHBvaW50LmRhdGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhcz17Z2V0Q2xhc3NMYWJlbChwb2ludC5jbGFzKX1cblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPXtnZXRDb2xvckxhYmVsKHBvaW50LmNvbG9yKX1cblx0XHRcdFx0XHRcdFx0XHRcdHByaWNlPXtwb2ludC5wcmljZX1cblx0XHRcdFx0XHRcdFx0XHRcdHdlaWdodD17cG9pbnQud2VpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmF0UmF0ZT17cG9pbnQudmF0UmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsU3VtPXtwb2ludC50b3RhbFN1bX1cblx0XHRcdFx0XHRcdFx0XHRcdHBvaW50T2ZTYWxlPXtwb2ludC5wb2ludE9mU2FsZUlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUocG9pbnQpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQgICkpXG5cdFx0XHRcdFx0XHQ6ICcnfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayB0cmFuc2FrY2ppIHNwcnplZGHFvHkgcGFwcnlraTwvcD5cblx0XHRcdCl9XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWRlc09mUGVwcGVyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTZWN0aW9uVGl0bGUiLCJUcmFkZU9mUGVwcGVyVGFibGVIZWFkZXIiLCJUcmFkZU9mUGVwcGVySXRlbSIsIlRyYWRlc09mUGVwcGVyIiwiYWxsVHJhZGVzIiwic2V0QWxsVHJhZGVzIiwiZmlsdGVyZWRUcmFkZXMiLCJzZXRGaWx0ZXJlZFRyYWRlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRDbGFzc0xhYmVsIiwiaW5kZXgiLCJ0b1N0cmluZyIsImdldENvbG9yTGFiZWwiLCJoYW5kbGVEZWxldGUiLCJ0cmFkZSIsImZldGNoIiwicG9pbnQiLCJfaWQiLCJtZXRob2QiLCJmaWx0ZXJlZFBvaW50cyIsImFsbFBvaW50cyIsImZpbHRlciIsIml0ZW0iLCJzZXRBbGxQb2ludHMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFRyYWRlc09mUGVwcGVyIiwicmVzcG9uc2UiLCJqc29uIiwiY3JlYXRvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJsZW5ndGgiLCJkaXYiLCJtYXAiLCJjbGFzIiwiY29sb3IiLCJwcmljZSIsIndlaWdodCIsInZhdFJhdGUiLCJ0b3RhbFN1bSIsInBvaW50T2ZTYWxlIiwicG9pbnRPZlNhbGVJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/trades-of-pepper/page.tsx\n"));

/***/ })

});