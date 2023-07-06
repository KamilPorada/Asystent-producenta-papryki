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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/TradeOfPepperTableHeader */ \"(app-client)/./components/Items/TradeOfPepperTableHeader.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/TradeOfPepperItem */ \"(app-client)/./components/Items/TradeOfPepperItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TradesOfPepper() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTrades, setFilteredTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n        return \"\".concat(day < 10 ? \"0\" + day : day, \".\").concat(month < 10 ? \"0\" + month : month, \".\").concat(year);\n    };\n    const getClassLabel = (index)=>{\n        if (index === 3) {\n            return \"Krojona\";\n        }\n        return index.toString();\n    };\n    const getColorLabel = (index)=>{\n        switch(index){\n            case 1:\n                return \"Czerwona\";\n            case 2:\n                return \"Ż\\xf3łta\";\n            case 3:\n                return \"Zielona\";\n            case 4:\n                return \"Pomarańczowa\";\n            case 5:\n                return \"Blondyna\";\n            default:\n                return \"\";\n        }\n    };\n    const handleDelete = async (trade)=>{\n        try {\n            await fetch(\"/api/point-of-sale/\".concat(trade._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredTrades = allPoints.filter((item)=>item._id !== point._id);\n            setAllPoints(filteredPoints);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n            setFilteredTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n            lineNumber: 106,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje transakcje sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 114,\n                columnNumber: 4\n            }, this),\n            filteredTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto ring-1 ring-black mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 6\n                    }, this),\n                    filteredTrades.length > 0 ? filteredTrades.map((point1, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            index: index + 1,\n                            date: formatDate(point1.date),\n                            clas: getClassLabel(point1.clas),\n                            color: getColorLabel(point1.color),\n                            price: point1.price,\n                            weight: point1.weight,\n                            vatRate: point1.vatRate,\n                            totalSum: point1.totalSum,\n                            pointOfSale: point1.pointOfSaleId,\n                            handleDelete: ()=>handleDelete(point1)\n                        }, point1._id, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 9\n                        }, this)) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 116,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak transakcji sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n        lineNumber: 113,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepper, \"vLY8SJryn8Pmq0ON4aezr52qUHQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TradesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ0Q7QUFDbEI7QUFDNkI7QUFDMkI7QUFDZDtBQW9CbkUsU0FBU1E7UUFNTzs7SUFMZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQWtCLEVBQUU7SUFDOUQsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUN4RSxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWUsU0FBU1osMERBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsTUFBTUMsT0FBTyxFQUFFLEdBQUdmLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1nQixTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGFBQWEsQ0FBQ0M7UUFDbkIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUN0QixNQUFNRyxNQUFNRixLQUFLRztRQUNqQixNQUFNQyxRQUFRSixLQUFLSyxhQUFhO1FBQ2hDLE1BQU1DLE9BQU9OLEtBQUtPO1FBRWxCLE9BQU8sR0FBaUNILE9BQTlCRixNQUFNLEtBQUssTUFBTUEsTUFBTUEsS0FBSSxLQUF1Q0ksT0FBcENGLFFBQVEsS0FBSyxNQUFNQSxRQUFRQSxPQUFNLEtBQVEsT0FBTEU7SUFDN0U7SUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ0M7UUFDdEIsSUFBSUEsVUFBVSxHQUFHO1lBQ2hCLE9BQU87UUFDUjtRQUNBLE9BQU9BLE1BQU1DO0lBQ2Q7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0Y7UUFDdEIsT0FBUUE7WUFDUCxLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUixLQUFLO2dCQUNKLE9BQU87WUFDUjtnQkFDQyxPQUFPO1FBQ1Q7SUFDRDtJQUVBLE1BQU1HLGVBQWUsT0FBT0M7UUFDM0IsSUFBSTtZQUNILE1BQU1DLE1BQU0sc0JBQTJDLE9BQXJCRCxNQUFNRSxJQUFJTCxhQUFjO2dCQUN6RE0sUUFBUTtZQUNUO1lBRUEsTUFBTTVCLGlCQUFpQjZCLFVBQVVDLE9BQU9DLENBQUFBLE9BQVFBLEtBQUtKLFFBQVFLLE1BQU1MO1lBRW5FTSxhQUFhQztZQUNiL0IsV0FBVztRQUNaLEVBQUUsT0FBT2dDLE9BQU87WUFDZkMsUUFBUUMsSUFBSUY7UUFDYjtJQUNEO0lBRUEsTUFBTUcsc0JBQXNCO1FBQzNCLElBQUk7WUFDSCxNQUFNQyxXQUFXLE1BQU1iLE1BQU07WUFDN0IsTUFBTXJCLE9BQU8sTUFBTWtDLFNBQVNDO1lBRTVCLE1BQU14QyxpQkFBaUJLLEtBQUt5QixPQUFPLENBQUNMLFFBQXlCQSxNQUFNZ0IsUUFBUWQsSUFBSUwsZUFBZWYsT0FBT2U7WUFFckd2QixhQUFhQztZQUNiQyxrQkFBa0JEO1FBQ25CLEVBQUUsT0FBT21DLE9BQU87WUFDZkMsUUFBUUMsSUFBSUY7UUFDYixTQUFVO1lBQ1RoQyxXQUFXO1FBQ1o7SUFDRDtJQUVBYixnREFBU0EsQ0FBQztRQUNUZ0Q7SUFDRCxHQUFHO1FBQUNwQztLQUFRO0lBRVosSUFBSUEsU0FBUztRQUNaLHFCQUNDLDhEQUFDd0M7WUFBUUMsV0FBVTtzQkFDbEIsNEVBQUNDO2dCQUFFRCxXQUFVOzBCQUErQjs7Ozs7Ozs7Ozs7SUFHL0M7SUFFQSxxQkFDQyw4REFBQ0Q7UUFBUUMsV0FBVTs7MEJBQ2xCLDhEQUFDakQsbUVBQVlBO2dCQUFDbUQsT0FBTTs7Ozs7O1lBQ25CN0MsZUFBZThDLFNBQVMsa0JBQ3hCLDhEQUFDQztnQkFBSUosV0FBVTs7a0NBQ2QsOERBQUNoRCxrRkFBd0JBOzs7OztvQkFDeEJLLGVBQWU4QyxTQUFTLElBQ3RCOUMsZUFBZWdELElBQUksQ0FBQ2hCLFFBQU9YLHNCQUMzQiw4REFBQ3pCLDJFQUFpQkE7NEJBRWpCeUIsT0FBT0EsUUFBUTs0QkFDZlQsTUFBTUYsV0FBV3NCLE9BQU1wQjs0QkFDdkJxQyxNQUFNN0IsY0FBY1ksT0FBTWlCOzRCQUMxQkMsT0FBTzNCLGNBQWNTLE9BQU1rQjs0QkFDM0JDLE9BQU9uQixPQUFNbUI7NEJBQ2JDLFFBQVFwQixPQUFNb0I7NEJBQ2RDLFNBQVNyQixPQUFNcUI7NEJBQ2ZDLFVBQVV0QixPQUFNc0I7NEJBQ2hCQyxhQUFhdkIsT0FBTXdCOzRCQUNuQmhDLGNBQWMsSUFBTUEsYUFBYVE7MkJBVjVCQSxPQUFNTDs7OztvQ0FhWjs7Ozs7O3FDQUdKLDhEQUFDaUI7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0FqSFM5Qzs7UUFJT0wsc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBTDVCTTtBQW1IVCwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdHJhZGVzLW9mLXBlcHBlci9wYWdlLnRzeD81MzA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9UcmFkZU9mUGVwcGVyVGFibGVIZWFkZXInXG5pbXBvcnQgVHJhZGVPZlBlcHBlckl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvVHJhZGVPZlBlcHBlckl0ZW0nXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkVHJhZGVzLCBzZXRGaWx0ZXJlZFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZzogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXG5cdFx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcblx0XHRjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcblx0XHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cblx0XHRyZXR1cm4gYCR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9LiR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gXG5cdH1cblxuXHRjb25zdCBnZXRDbGFzc0xhYmVsID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRpZiAoaW5kZXggPT09IDMpIHtcblx0XHRcdHJldHVybiAnS3Jvam9uYSdcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4LnRvU3RyaW5nKClcblx0fVxuXG5cdGNvbnN0IGdldENvbG9yTGFiZWwgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdDemVyd29uYSdcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuICfFu8OzxYJ0YSdcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmV0dXJuICdaaWVsb25hJ1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRyZXR1cm4gJ1BvbWFyYcWEY3pvd2EnXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHJldHVybiAnQmxvbmR5bmEnXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgZmV0Y2goYC9hcGkvcG9pbnQtb2Ytc2FsZS8ke3RyYWRlLl9pZC50b1N0cmluZygpfWAsIHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkVHJhZGVzID0gYWxsUG9pbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBwb2ludC5faWQpXG5cblx0XHRcdHNldEFsbFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0XHRcdHNldExvYWRpbmcodHJ1ZSlcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZmV0Y2hUcmFkZXNPZlBlcHBlciA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFkZS1vZi1wZXBwZXInKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFRyYWRlcyA9IGRhdGEuZmlsdGVyKCh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4gdHJhZGUuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cblx0XHRcdHNldEFsbFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHRcdHNldEZpbHRlcmVkVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgdHJhbnNha2NqZSBzcHJ6ZWRhxbx5IHBhcHJ5a2knIC8+XG5cdFx0XHR7ZmlsdGVyZWRUcmFkZXMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J292ZXJmbG93LXgtYXV0byByaW5nLTEgcmluZy1ibGFjayBtdC01Jz5cblx0XHRcdFx0XHQ8VHJhZGVPZlBlcHBlclRhYmxlSGVhZGVyIC8+XG5cdFx0XHRcdFx0e2ZpbHRlcmVkVHJhZGVzLmxlbmd0aCA+IDBcblx0XHRcdFx0XHRcdD8gZmlsdGVyZWRUcmFkZXMubWFwKChwb2ludCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VHJhZGVPZlBlcHBlckl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGtleT17cG9pbnQuX2lkfVxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4ICsgMX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGU9e2Zvcm1hdERhdGUocG9pbnQuZGF0ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzPXtnZXRDbGFzc0xhYmVsKHBvaW50LmNsYXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9e2dldENvbG9yTGFiZWwocG9pbnQuY29sb3IpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpY2U9e3BvaW50LnByaWNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0d2VpZ2h0PXtwb2ludC53ZWlnaHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXRSYXRlPXtwb2ludC52YXRSYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0dG90YWxTdW09e3BvaW50LnRvdGFsU3VtfVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9pbnRPZlNhbGU9e3BvaW50LnBvaW50T2ZTYWxlSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZShwb2ludCl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCAgKSlcblx0XHRcdFx0XHRcdDogJyd9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5CcmFrIHRyYW5zYWtjamkgc3ByemVkYcW8eSBwYXByeWtpPC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGVzT2ZQZXBwZXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlNlY3Rpb25UaXRsZSIsIlRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciIsIlRyYWRlT2ZQZXBwZXJJdGVtIiwiVHJhZGVzT2ZQZXBwZXIiLCJhbGxUcmFkZXMiLCJzZXRBbGxUcmFkZXMiLCJmaWx0ZXJlZFRyYWRlcyIsInNldEZpbHRlcmVkVHJhZGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldENsYXNzTGFiZWwiLCJpbmRleCIsInRvU3RyaW5nIiwiZ2V0Q29sb3JMYWJlbCIsImhhbmRsZURlbGV0ZSIsInRyYWRlIiwiZmV0Y2giLCJfaWQiLCJtZXRob2QiLCJhbGxQb2ludHMiLCJmaWx0ZXIiLCJpdGVtIiwicG9pbnQiLCJzZXRBbGxQb2ludHMiLCJmaWx0ZXJlZFBvaW50cyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZldGNoVHJhZGVzT2ZQZXBwZXIiLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsImxlbmd0aCIsImRpdiIsIm1hcCIsImNsYXMiLCJjb2xvciIsInByaWNlIiwid2VpZ2h0IiwidmF0UmF0ZSIsInRvdGFsU3VtIiwicG9pbnRPZlNhbGUiLCJwb2ludE9mU2FsZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/trades-of-pepper/page.tsx\n"));

/***/ })

});