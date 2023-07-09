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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Items/TradeOfPepperTableHeader */ \"(app-client)/./components/Items/TradeOfPepperTableHeader.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/TradeOfPepperItem */ \"(app-client)/./components/Items/TradeOfPepperItem.tsx\");\n/* harmony import */ var _components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Items/TradeOfPepperFilterItem */ \"(app-client)/./components/Items/TradeOfPepperFilterItem.tsx\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ \"(app-client)/./node_modules/xlsx/xlsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction TradesOfPepper() {\n    var _ref;\n    _s();\n    const [allTrades, setAllTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredTrades, setFilteredTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [showFilters, setShowFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleShowFilters = ()=>{\n        setShowFilters(true);\n    };\n    const handleHideFilters = ()=>{\n        setShowFilters(false);\n    };\n    const handleFilter = (filters)=>{\n        const { date, clas, color, pointOfSale } = filters;\n        const filteredItems = allTrades.filter((trade)=>{\n            let matchesFilter = true;\n            // Filtruj po dacie\n            if (date && formatDate(trade.date) !== formatDate(date)) {\n                matchesFilter = false;\n            }\n            // Filtruj po klasie\n            if (clas && trade.clas !== clas) {\n                matchesFilter = false;\n            }\n            // Filtruj po kolorze\n            if (color && trade.color !== color) {\n                matchesFilter = false;\n            }\n            // Filtruj po punkcie sprzedaży\n            if (pointOfSale && trade.pointOfSaleId !== pointOfSale) {\n                matchesFilter = false;\n            }\n            return matchesFilter;\n        });\n        setFilteredTrades(filteredItems);\n    };\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        const day = date.getDate();\n        const month = date.getMonth() + 1;\n        const year = date.getFullYear();\n        return \"\".concat(day < 10 ? \"0\" + day : day, \".\").concat(month < 10 ? \"0\" + month : month, \".\").concat(year);\n    };\n    const getClassLabel = (index)=>{\n        if (index === 3) {\n            return \"Krojona\";\n        }\n        return index.toString();\n    };\n    const getColorLabel = (index)=>{\n        switch(index){\n            case 1:\n                return \"Czerwona\";\n            case 2:\n                return \"Ż\\xf3łta\";\n            case 3:\n                return \"Zielona\";\n            case 4:\n                return \"Pomarańczowa\";\n            case 5:\n                return \"Blondyna\";\n            default:\n                return \"\";\n        }\n    };\n    const handleDelete = async (trade)=>{\n        try {\n            await fetch(\"/api/trade-of-pepper/\".concat(trade._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredTrades = allTrades.filter((item)=>item._id !== trade._id);\n            setAllTrades(filteredTrades);\n            setLoading(true);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleEdit = async (trade)=>{\n        router.push(\"/edit-trade-of-pepper?id=\".concat(trade._id));\n    };\n    const fetchTradesOfPepper = async ()=>{\n        try {\n            const response = await fetch(\"/api/trade-of-pepper\");\n            const data = await response.json();\n            const filteredTrades = data.filter((trade)=>trade.creator._id.toString() === userId.toString());\n            setAllTrades(filteredTrades);\n            setFilteredTrades(filteredTrades);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTradesOfPepper();\n    }, [\n        loading\n    ]);\n    const exportToXLS = ()=>{\n        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_new();\n        const sheetData = [\n            [\n                \"L.P.\",\n                \"Data\",\n                \"Klasa\",\n                \"Kolor\",\n                \"Cena\",\n                \"Waga\",\n                \"Stawka VAT\",\n                \"Suma\",\n                \"Punkt sprzedaży\"\n            ]\n        ];\n        filteredTrades.forEach((trade, index)=>{\n            const rowData = [\n                (index + 1).toString(),\n                formatDate(trade.date),\n                getClassLabel(trade.clas),\n                getColorLabel(trade.color),\n                trade.price.toString(),\n                trade.weight.toString(),\n                trade.vatRate.toString(),\n                trade.totalSum.toString(),\n                trade.pointOfSaleId\n            ];\n            sheetData.push(rowData);\n        });\n        const sheet = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.aoa_to_sheet(sheetData);\n        // Ustawianie niestandardowych formatów dla poszczególnych kolumn\n        const headerCellStyle = {\n            font: {\n                bold: true,\n                color: {\n                    rgb: \"FFFFFF\"\n                }\n            },\n            fill: {\n                fgColor: {\n                    rgb: \"00FF00\"\n                }\n            },\n            alignment: {\n                horizontal: \"center\"\n            }\n        };\n        const cellStyles = [\n            null,\n            null,\n            {\n                font: {\n                    bold: true\n                }\n            },\n            {\n                font: {\n                    italic: true\n                }\n            },\n            {\n                numFmt: \"0.00\"\n            },\n            {\n                numFmt: \"0.00\"\n            },\n            {\n                numFmt: \"0%\"\n            },\n            {\n                numFmt: \"0.00\"\n            },\n            null\n        ];\n        for(let row = 0; row < sheetData.length; row++){\n            for(let col = 0; col < sheetData[row].length; col++){\n                const cell = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.encode_cell({\n                    r: row,\n                    c: col\n                });\n                const cellStyle = row === 0 ? headerCellStyle : cellStyles[col];\n                if (cellStyle) {\n                    sheet[cell].s = cellStyle;\n                }\n            }\n        }\n        xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.book_append_sheet(workbook, sheet, \"Transakcje papryki\");\n        xlsx__WEBPACK_IMPORTED_MODULE_8__.writeFile(workbook, \"transakcje_papryki.xlsx\");\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 216,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n            lineNumber: 215,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje transakcje sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 223,\n                columnNumber: 4\n            }, this),\n            showFilters ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperFilterItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                handleFilter: handleFilter,\n                handleCancel: handleHideFilters\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 225,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1 mr-3 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        onClick: exportToXLS,\n                        children: \"Eksport do XLS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 228,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors\",\n                        onClick: handleShowFilters,\n                        children: \"Zastosuj filtry\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 233,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 227,\n                columnNumber: 5\n            }, this),\n            filteredTrades.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto ring-1 ring-black mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperTableHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                        lineNumber: 242,\n                        columnNumber: 6\n                    }, this),\n                    filteredTrades.length > 0 ? filteredTrades.map((trade, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_TradeOfPepperItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            index: index + 1,\n                            date: formatDate(trade.date),\n                            clas: getClassLabel(trade.clas),\n                            color: getColorLabel(trade.color),\n                            price: trade.price,\n                            weight: trade.weight,\n                            vatRate: trade.vatRate,\n                            totalSum: trade.totalSum,\n                            pointOfSale: trade.pointOfSaleId,\n                            handleDelete: ()=>handleDelete(trade),\n                            handleEdit: ()=>handleEdit(trade)\n                        }, trade._id, false, {\n                            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                            lineNumber: 245,\n                            columnNumber: 9\n                        }, this)) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 241,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak transakcji sprzedaży papryki\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n                lineNumber: 263,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/trades-of-pepper/page.tsx\",\n        lineNumber: 222,\n        columnNumber: 3\n    }, this);\n}\n_s(TradesOfPepper, \"W8LekS+4C93YSJRg1nocGoVkK5g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = TradesOfPepper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradesOfPepper);\nvar _c;\n$RefreshReg$(_c, \"TradesOfPepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3RyYWRlcy1vZi1wZXBwZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ0M7QUFDRDtBQUNsQjtBQUM2QjtBQUMyQjtBQUNkO0FBQ1k7QUFDbkQ7QUEyQjVCLFNBQVNVO1FBT087O0lBTmYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFrQixFQUFFO0lBQzlELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQWtCLEVBQUU7SUFDeEUsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNbUIsU0FBU2hCLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVpQixNQUFNQyxPQUFPLEVBQUUsR0FBR25CLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU1vQixTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLG9CQUFvQjtRQUN6QlQsZUFBZTtJQUNoQjtJQUVBLE1BQU1VLG9CQUFvQjtRQUN6QlYsZUFBZTtJQUNoQjtJQUVBLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDckIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR0o7UUFFM0MsTUFBTUssZ0JBQWdCdEIsVUFBVXVCLE9BQU9DLENBQUFBO1lBQ3RDLElBQUlDLGdCQUFnQjtZQUVwQixtQkFBbUI7WUFDbkIsSUFBSVAsUUFBUVEsV0FBV0YsTUFBTU4sVUFBVVEsV0FBV1IsT0FBTztnQkFDeERPLGdCQUFnQjtZQUNqQjtZQUVBLG9CQUFvQjtZQUNwQixJQUFJTixRQUFRSyxNQUFNTCxTQUFTQSxNQUFNO2dCQUNoQ00sZ0JBQWdCO1lBQ2pCO1lB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QUNQLGlGQUF1QkE7Z0JBQUNtQixjQUFjQTtnQkFBYzZFLGNBQWM5RTs7Ozs7cUNBRW5FLDhEQUFDK0U7Z0JBQUlKLFdBQVU7O2tDQUNkLDhEQUFDSzt3QkFDQUwsV0FBVTt3QkFDVk0sU0FBUzFDO2tDQUFhOzs7Ozs7a0NBR3ZCLDhEQUFDeUM7d0JBQ0FMLFdBQVU7d0JBQ1ZNLFNBQVNsRjtrQ0FBbUI7Ozs7Ozs7Ozs7OztZQUs5QlosZUFBZTZFLFNBQVMsa0JBQ3hCLDhEQUFDZTtnQkFBSUosV0FBVTs7a0NBQ2QsOERBQUMvRixrRkFBd0JBOzs7OztvQkFDeEJPLGVBQWU2RSxTQUFTLElBQ3RCN0UsZUFBZStGLElBQUksQ0FBQ3pFLE9BQU9hLHNCQUMzQiw4REFBQ3pDLDJFQUFpQkE7NEJBRWpCeUMsT0FBT0EsUUFBUTs0QkFDZm5CLE1BQU1RLFdBQVdGLE1BQU1OOzRCQUN2QkMsTUFBTWlCLGNBQWNaLE1BQU1MOzRCQUMxQkMsT0FBT21CLGNBQWNmLE1BQU1KOzRCQUMzQnlDLE9BQU9yQyxNQUFNcUM7NEJBQ2JDLFFBQVF0QyxNQUFNc0M7NEJBQ2RDLFNBQVN2QyxNQUFNdUM7NEJBQ2ZDLFVBQVV4QyxNQUFNd0M7NEJBQ2hCM0MsYUFBYUcsTUFBTUc7NEJBQ25CYSxjQUFjLElBQU1BLGFBQWFoQjs0QkFDakN3QixZQUFZLElBQU1BLFdBQVd4QjsyQkFYeEJBLE1BQU1rQjs7OztvQ0FjWjs7Ozs7O3FDQUdKLDhEQUFDaUQ7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0F0T1MzRjs7UUFLT1Asc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBTjVCUTtBQXdPVCwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdHJhZGVzLW9mLXBlcHBlci9wYWdlLnRzeD81MzA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciBmcm9tICdAY29tcG9uZW50cy9JdGVtcy9UcmFkZU9mUGVwcGVyVGFibGVIZWFkZXInXG5pbXBvcnQgVHJhZGVPZlBlcHBlckl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvVHJhZGVPZlBlcHBlckl0ZW0nXG5pbXBvcnQgVHJhZGVPZlBlcHBlckZpbHRlckl0ZW0gZnJvbSAnQGNvbXBvbmVudHMvSXRlbXMvVHJhZGVPZlBlcHBlckZpbHRlckl0ZW0nXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnXG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyIHtcblx0X2lkOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0cG9pbnRPZlNhbGVJZDogc3RyaW5nXG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwcmljZTogbnVtYmVyXG5cdHdlaWdodDogbnVtYmVyXG5cdHZhdFJhdGU6IG51bWJlclxuXHR0b3RhbFN1bTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBUcmFkZU9mUGVwcGVyRmlsdGVycyB7XG5cdGRhdGU6IHN0cmluZ1xuXHRjbGFzOiBudW1iZXJcblx0Y29sb3I6IG51bWJlclxuXHRwb2ludE9mU2FsZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFRyYWRlc09mUGVwcGVyKCkge1xuXHRjb25zdCBbYWxsVHJhZGVzLCBzZXRBbGxUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVPZlBlcHBlcltdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkVHJhZGVzLCBzZXRGaWx0ZXJlZFRyYWRlc10gPSB1c2VTdGF0ZTxUcmFkZU9mUGVwcGVyW10+KFtdKVxuXHRjb25zdCBbc2hvd0ZpbHRlcnMsIHNldFNob3dGaWx0ZXJzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuXHRjb25zdCB1c2VySWQgPSAoc2Vzc2lvbj8udXNlciBhcyB7IGlkPzogc3RyaW5nIH0pPy5pZCA/PyAnJ1xuXG5cdGNvbnN0IGhhbmRsZVNob3dGaWx0ZXJzID0gKCkgPT4ge1xuXHRcdHNldFNob3dGaWx0ZXJzKHRydWUpXG5cdH1cblxuXHRjb25zdCBoYW5kbGVIaWRlRmlsdGVycyA9ICgpID0+IHtcblx0XHRzZXRTaG93RmlsdGVycyhmYWxzZSlcblx0fVxuXG5cdGNvbnN0IGhhbmRsZUZpbHRlciA9IChmaWx0ZXJzOiBUcmFkZU9mUGVwcGVyRmlsdGVycykgPT4ge1xuXHRcdGNvbnN0IHsgZGF0ZSwgY2xhcywgY29sb3IsIHBvaW50T2ZTYWxlIH0gPSBmaWx0ZXJzXG5cblx0XHRjb25zdCBmaWx0ZXJlZEl0ZW1zID0gYWxsVHJhZGVzLmZpbHRlcih0cmFkZSA9PiB7XG5cdFx0XHRsZXQgbWF0Y2hlc0ZpbHRlciA9IHRydWVcblxuXHRcdFx0Ly8gRmlsdHJ1aiBwbyBkYWNpZVxuXHRcdFx0aWYgKGRhdGUgJiYgZm9ybWF0RGF0ZSh0cmFkZS5kYXRlKSAhPT0gZm9ybWF0RGF0ZShkYXRlKSkge1xuXHRcdFx0XHRtYXRjaGVzRmlsdGVyID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdHJ1aiBwbyBrbGFzaWVcblx0XHRcdGlmIChjbGFzICYmIHRyYWRlLmNsYXMgIT09IGNsYXMpIHtcblx0XHRcdFx0bWF0Y2hlc0ZpbHRlciA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRydWogcG8ga29sb3J6ZVxuXHRcdFx0aWYgKGNvbG9yICYmIHRyYWRlLmNvbG9yICE9PSBjb2xvcikge1xuXHRcdFx0XHRtYXRjaGVzRmlsdGVyID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdHJ1aiBwbyBwdW5rY2llIHNwcnplZGHFvHlcblx0XHRcdGlmIChwb2ludE9mU2FsZSAmJiB0cmFkZS5wb2ludE9mU2FsZUlkICE9PSBwb2ludE9mU2FsZSkge1xuXHRcdFx0XHRtYXRjaGVzRmlsdGVyID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoZXNGaWx0ZXJcblx0XHR9KVxuXG5cdFx0c2V0RmlsdGVyZWRUcmFkZXMoZmlsdGVyZWRJdGVtcylcblx0fVxuXG5cdGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZzogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXG5cdFx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcblx0XHRjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcblx0XHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cblx0XHRyZXR1cm4gYCR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9LiR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LiR7eWVhcn1gXG5cdH1cblxuXHRjb25zdCBnZXRDbGFzc0xhYmVsID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRpZiAoaW5kZXggPT09IDMpIHtcblx0XHRcdHJldHVybiAnS3Jvam9uYSdcblx0XHR9XG5cdFx0cmV0dXJuIGluZGV4LnRvU3RyaW5nKClcblx0fVxuXG5cdGNvbnN0IGdldENvbG9yTGFiZWwgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdDemVyd29uYSdcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cmV0dXJuICfFu8OzxYJ0YSdcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmV0dXJuICdaaWVsb25hJ1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRyZXR1cm4gJ1BvbWFyYcWEY3pvd2EnXG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHJldHVybiAnQmxvbmR5bmEnXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAodHJhZGU6IFRyYWRlT2ZQZXBwZXIpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgZmV0Y2goYC9hcGkvdHJhZGUtb2YtcGVwcGVyLyR7dHJhZGUuX2lkLnRvU3RyaW5nKCl9YCwge1xuXHRcdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRUcmFkZXMgPSBhbGxUcmFkZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IHRyYWRlLl9pZClcblxuXHRcdFx0c2V0QWxsVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdFx0c2V0TG9hZGluZyh0cnVlKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9XG5cdH1cblxuXHRjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKHRyYWRlOiBUcmFkZU9mUGVwcGVyKSA9PiB7XG5cdFx0cm91dGVyLnB1c2goYC9lZGl0LXRyYWRlLW9mLXBlcHBlcj9pZD0ke3RyYWRlLl9pZH1gKVxuXHR9XG5cblx0Y29uc3QgZmV0Y2hUcmFkZXNPZlBlcHBlciA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFkZS1vZi1wZXBwZXInKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJlZFRyYWRlcyA9IGRhdGEuZmlsdGVyKCh0cmFkZTogVHJhZGVPZlBlcHBlcikgPT4gdHJhZGUuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cblx0XHRcdHNldEFsbFRyYWRlcyhmaWx0ZXJlZFRyYWRlcylcblx0XHRcdHNldEZpbHRlcmVkVHJhZGVzKGZpbHRlcmVkVHJhZGVzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoVHJhZGVzT2ZQZXBwZXIoKVxuXHR9LCBbbG9hZGluZ10pXG5cblx0Y29uc3QgZXhwb3J0VG9YTFMgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgd29ya2Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KClcblx0XHRjb25zdCBzaGVldERhdGE6IHN0cmluZ1tdW10gPSBbXG5cdFx0XHRbJ0wuUC4nLCAnRGF0YScsICdLbGFzYScsICdLb2xvcicsICdDZW5hJywgJ1dhZ2EnLCAnU3Rhd2thIFZBVCcsICdTdW1hJywgJ1B1bmt0IHNwcnplZGHFvHknXSxcblx0XHRdXG5cblx0XHRmaWx0ZXJlZFRyYWRlcy5mb3JFYWNoKCh0cmFkZSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHJvd0RhdGE6IHN0cmluZ1tdID0gW1xuXHRcdFx0XHQoaW5kZXggKyAxKS50b1N0cmluZygpLFxuXHRcdFx0XHRmb3JtYXREYXRlKHRyYWRlLmRhdGUpLFxuXHRcdFx0XHRnZXRDbGFzc0xhYmVsKHRyYWRlLmNsYXMpLFxuXHRcdFx0XHRnZXRDb2xvckxhYmVsKHRyYWRlLmNvbG9yKSxcblx0XHRcdFx0dHJhZGUucHJpY2UudG9TdHJpbmcoKSxcblx0XHRcdFx0dHJhZGUud2VpZ2h0LnRvU3RyaW5nKCksXG5cdFx0XHRcdHRyYWRlLnZhdFJhdGUudG9TdHJpbmcoKSxcblx0XHRcdFx0dHJhZGUudG90YWxTdW0udG9TdHJpbmcoKSxcblx0XHRcdFx0dHJhZGUucG9pbnRPZlNhbGVJZCxcblx0XHRcdF1cblx0XHRcdHNoZWV0RGF0YS5wdXNoKHJvd0RhdGEpXG5cdFx0fSlcblxuXHRcdGNvbnN0IHNoZWV0ID0gWExTWC51dGlscy5hb2FfdG9fc2hlZXQoc2hlZXREYXRhKVxuXG5cdFx0Ly8gVXN0YXdpYW5pZSBuaWVzdGFuZGFyZG93eWNoIGZvcm1hdMOzdyBkbGEgcG9zemN6ZWfDs2xueWNoIGtvbHVtblxuXHRcdGNvbnN0IGhlYWRlckNlbGxTdHlsZSA9IHtcblx0XHRcdGZvbnQ6IHsgYm9sZDogdHJ1ZSwgY29sb3I6IHsgcmdiOiAnRkZGRkZGJyB9IH0sXG5cdFx0XHRmaWxsOiB7IGZnQ29sb3I6IHsgcmdiOiAnMDBGRjAwJyB9IH0sXG5cdFx0XHRhbGlnbm1lbnQ6IHsgaG9yaXpvbnRhbDogJ2NlbnRlcicgfSxcblx0XHR9XG5cdFx0Y29uc3QgY2VsbFN0eWxlczogYW55W10gPSBbXG5cdFx0XHRudWxsLCAvLyBMLlAuIC0gYnJhayBuaWVzdGFuZGFyZG93ZWdvIGZvcm1hdHVcblx0XHRcdG51bGwsIC8vIERhdGEgLSBicmFrIG5pZXN0YW5kYXJkb3dlZ28gZm9ybWF0dVxuXHRcdFx0eyBmb250OiB7IGJvbGQ6IHRydWUgfSB9LCAvLyBLbGFzYSAtIHBvZ3J1YmllbmllIGN6Y2lvbmtpXG5cdFx0XHR7IGZvbnQ6IHsgaXRhbGljOiB0cnVlIH0gfSwgLy8gS29sb3IgLSBrdXJzeXdhIGN6Y2lvbmtpXG5cdFx0XHR7IG51bUZtdDogJzAuMDAnIH0sIC8vIENlbmEgLSBmb3JtYXRvd2FuaWUgamFrbyBsaWN6YmEgeiBkd29tYSBtaWVqc2NhbWkgcG8gcHJ6ZWNpbmt1XG5cdFx0XHR7IG51bUZtdDogJzAuMDAnIH0sIC8vIFdhZ2EgLSBmb3JtYXRvd2FuaWUgamFrbyBsaWN6YmEgeiBkd29tYSBtaWVqc2NhbWkgcG8gcHJ6ZWNpbmt1XG5cdFx0XHR7IG51bUZtdDogJzAlJyB9LCAvLyBTdGF3a2EgVkFUIC0gZm9ybWF0b3dhbmllIGpha28gcHJvY2VudFxuXHRcdFx0eyBudW1GbXQ6ICcwLjAwJyB9LCAvLyBTdW1hIC0gZm9ybWF0b3dhbmllIGpha28gbGljemJhIHogZHdvbWEgbWllanNjYW1pIHBvIHByemVjaW5rdVxuXHRcdFx0bnVsbCwgLy8gUHVua3Qgc3ByemVkYcW8eSAtIGJyYWsgbmllc3RhbmRhcmRvd2VnbyBmb3JtYXR1XG5cdFx0XVxuXG5cdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2hlZXREYXRhLmxlbmd0aDsgcm93KyspIHtcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNoZWV0RGF0YVtyb3ddLmxlbmd0aDsgY29sKyspIHtcblx0XHRcdFx0Y29uc3QgY2VsbCA9IFhMU1gudXRpbHMuZW5jb2RlX2NlbGwoeyByOiByb3csIGM6IGNvbCB9KVxuXHRcdFx0XHRjb25zdCBjZWxsU3R5bGUgPSByb3cgPT09IDAgPyBoZWFkZXJDZWxsU3R5bGUgOiBjZWxsU3R5bGVzW2NvbF1cblx0XHRcdFx0aWYgKGNlbGxTdHlsZSkge1xuXHRcdFx0XHRcdHNoZWV0W2NlbGxdLnMgPSBjZWxsU3R5bGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya2Jvb2ssIHNoZWV0LCAnVHJhbnNha2NqZSBwYXByeWtpJylcblx0XHRYTFNYLndyaXRlRmlsZSh3b3JrYm9vaywgJ3RyYW5zYWtjamVfcGFwcnlraS54bHN4Jylcblx0fVxuXG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdNb2plIHRyYW5zYWtjamUgc3ByemVkYcW8eSBwYXByeWtpJyAvPlxuXHRcdFx0e3Nob3dGaWx0ZXJzID8gKFxuXHRcdFx0XHQ8VHJhZGVPZlBlcHBlckZpbHRlckl0ZW0gaGFuZGxlRmlsdGVyPXtoYW5kbGVGaWx0ZXJ9IGhhbmRsZUNhbmNlbD17aGFuZGxlSGlkZUZpbHRlcnN9IC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCc+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdweC0yIHB5LTEgbXItMyByb3VuZGVkIGZvbnQtc2VtaWJvbGQgYmctbWFpbkNvbG9yIGhvdmVyOmJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uLWNvbG9ycydcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2V4cG9ydFRvWExTfT5cblx0XHRcdFx0XHRcdEVrc3BvcnQgZG8gWExTXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdweC0yIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIGJnLW1haW5Db2xvciBob3ZlcjpiZy1ncmVlbi04MDAgdHJhbnNpdGlvbi1jb2xvcnMnXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTaG93RmlsdGVyc30+XG5cdFx0XHRcdFx0XHRaYXN0b3N1aiBmaWx0cnlcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdFx0e2ZpbHRlcmVkVHJhZGVzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy14LWF1dG8gcmluZy0xIHJpbmctYmxhY2sgbXQtNSc+XG5cdFx0XHRcdFx0PFRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciAvPlxuXHRcdFx0XHRcdHtmaWx0ZXJlZFRyYWRlcy5sZW5ndGggPiAwXG5cdFx0XHRcdFx0XHQ/IGZpbHRlcmVkVHJhZGVzLm1hcCgodHJhZGUsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRyYWRlT2ZQZXBwZXJJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RyYWRlLl9pZH1cblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4PXtpbmRleCArIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRlPXtmb3JtYXREYXRlKHRyYWRlLmRhdGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhcz17Z2V0Q2xhc3NMYWJlbCh0cmFkZS5jbGFzKX1cblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPXtnZXRDb2xvckxhYmVsKHRyYWRlLmNvbG9yKX1cblx0XHRcdFx0XHRcdFx0XHRcdHByaWNlPXt0cmFkZS5wcmljZX1cblx0XHRcdFx0XHRcdFx0XHRcdHdlaWdodD17dHJhZGUud2VpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmF0UmF0ZT17dHJhZGUudmF0UmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsU3VtPXt0cmFkZS50b3RhbFN1bX1cblx0XHRcdFx0XHRcdFx0XHRcdHBvaW50T2ZTYWxlPXt0cmFkZS5wb2ludE9mU2FsZUlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUodHJhZGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRWRpdD17KCkgPT4gaGFuZGxlRWRpdCh0cmFkZSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCAgKSlcblx0XHRcdFx0XHRcdDogJyd9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5CcmFrIHRyYW5zYWtjamkgc3ByemVkYcW8eSBwYXByeWtpPC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhZGVzT2ZQZXBwZXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlNlY3Rpb25UaXRsZSIsIlRyYWRlT2ZQZXBwZXJUYWJsZUhlYWRlciIsIlRyYWRlT2ZQZXBwZXJJdGVtIiwiVHJhZGVPZlBlcHBlckZpbHRlckl0ZW0iLCJYTFNYIiwiVHJhZGVzT2ZQZXBwZXIiLCJhbGxUcmFkZXMiLCJzZXRBbGxUcmFkZXMiLCJmaWx0ZXJlZFRyYWRlcyIsInNldEZpbHRlcmVkVHJhZGVzIiwic2hvd0ZpbHRlcnMiLCJzZXRTaG93RmlsdGVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJoYW5kbGVTaG93RmlsdGVycyIsImhhbmRsZUhpZGVGaWx0ZXJzIiwiaGFuZGxlRmlsdGVyIiwiZmlsdGVycyIsImRhdGUiLCJjbGFzIiwiY29sb3IiLCJwb2ludE9mU2FsZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJ0cmFkZSIsIm1hdGNoZXNGaWx0ZXIiLCJmb3JtYXREYXRlIiwicG9pbnRPZlNhbGVJZCIsImRhdGVTdHJpbmciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRDbGFzc0xhYmVsIiwiaW5kZXgiLCJ0b1N0cmluZyIsImdldENvbG9yTGFiZWwiLCJoYW5kbGVEZWxldGUiLCJmZXRjaCIsIl9pZCIsIm1ldGhvZCIsIml0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVFZGl0IiwicHVzaCIsImZldGNoVHJhZGVzT2ZQZXBwZXIiLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdG9yIiwiZXhwb3J0VG9YTFMiLCJ3b3JrYm9vayIsInV0aWxzIiwiYm9va19uZXciLCJzaGVldERhdGEiLCJmb3JFYWNoIiwicm93RGF0YSIsInByaWNlIiwid2VpZ2h0IiwidmF0UmF0ZSIsInRvdGFsU3VtIiwic2hlZXQiLCJhb2FfdG9fc2hlZXQiLCJoZWFkZXJDZWxsU3R5bGUiLCJmb250IiwiYm9sZCIsInJnYiIsImZpbGwiLCJmZ0NvbG9yIiwiYWxpZ25tZW50IiwiaG9yaXpvbnRhbCIsImNlbGxTdHlsZXMiLCJpdGFsaWMiLCJudW1GbXQiLCJyb3ciLCJsZW5ndGgiLCJjb2wiLCJjZWxsIiwiZW5jb2RlX2NlbGwiLCJyIiwiYyIsImNlbGxTdHlsZSIsInMiLCJib29rX2FwcGVuZF9zaGVldCIsIndyaXRlRmlsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJoYW5kbGVDYW5jZWwiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/trades-of-pepper/page.tsx\n"));

/***/ })

});