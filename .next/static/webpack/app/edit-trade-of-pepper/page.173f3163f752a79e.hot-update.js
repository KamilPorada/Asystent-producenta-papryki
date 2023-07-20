"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/edit-trade-of-pepper/page",{

/***/ "(app-client)/./app/edit-trade-of-pepper/page.tsx":
/*!*******************************************!*\
  !*** ./app/edit-trade-of-pepper/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Forms_TradeOfPepperForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Forms/TradeOfPepperForm */ \"(app-client)/./components/Forms/TradeOfPepperForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction EditPointOfSale() {\n    var _ref;\n    _s();\n    const [tradeOfPepper, setTradeOfPepper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        date: \"\",\n        clas: 0,\n        color: 0,\n        price: 0,\n        weight: 0,\n        vatRate: 0,\n        pointOfSale: 0\n    });\n    const [pointOfSales, setPointOfSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const tradeId = searchParams.get(\"id\");\n    const editTradeOfPepper = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        if (tradeOfPepper.date === \"\" || !tradeOfPepper.clas || !tradeOfPepper.color || !tradeOfPepper.price || !tradeOfPepper.weight || !tradeOfPepper.vatRate || !tradeOfPepper.pointOfSale) {\n            setError(\"Wypełnij wszystkie pola formularza!\");\n            setIsSubmitting(false);\n            return;\n        }\n        try {\n            const totalSum = calculateTotalSum(tradeOfPepper.price, tradeOfPepper.vatRate, tradeOfPepper.weight);\n            const response = await fetch(\"/api/trade-of-pepper/\".concat(tradeId), {\n                method: \"PATCH\",\n                body: JSON.stringify({\n                    pointOfSaleId: tradeOfPepper.pointOfSale,\n                    date: tradeOfPepper.date,\n                    clas: tradeOfPepper.clas,\n                    color: tradeOfPepper.color,\n                    price: tradeOfPepper.price,\n                    weight: tradeOfPepper.weight,\n                    vatRate: tradeOfPepper.vatRate,\n                    totalSum: totalSum\n                })\n            });\n            if (response.ok) {\n                router.push(\"/trades-of-pepper\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    function calculateTotalSum(price, vatRate, weight) {\n        const vatAmount = price * weight * vatRate / 100;\n        const totalSum = price * weight + vatAmount;\n        return Number(totalSum.toFixed(2));\n    }\n    const fetchPointOfSales = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setPointOfSales(filteredPoints);\n            setLoading(false);\n        } catch (error) {\n            console.log(error);\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointOfSales();\n    }, [\n        loading\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTradeDetails = async ()=>{\n            const response = await fetch(\"/api/trade-of-pepper/\".concat(tradeId));\n            const data = await response.json();\n            // Konwersja formatu daty z \"dd.mm.rrrr\" na \"yyyy-MM-dd\"\n            const [day, month, year] = data.date.split(\".\");\n            const formattedDate = \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n            setTradeOfPepper({\n                ...tradeOfPepper,\n                date: formattedDate,\n                pointOfSale: data.pointOfSale,\n                clas: data.clas,\n                color: data.color,\n                price: data.price,\n                weight: data.weight,\n                vatRate: data.vatRate\n            });\n        };\n        if (tradeId) getTradeDetails();\n    }, [\n        tradeId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_TradeOfPepperForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            type: \"EDIT\",\n            tradeOfPepper: tradeOfPepper,\n            setTradeOfPepper: setTradeOfPepper,\n            submitting: submitting,\n            handleSubmit: editTradeOfPepper,\n            error: error,\n            pointOfSales: pointOfSales\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-trade-of-pepper/page.tsx\",\n            lineNumber: 138,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-trade-of-pepper/page.tsx\",\n        lineNumber: 137,\n        columnNumber: 3\n    }, this);\n}\n_s(EditPointOfSale, \"5ImEytPuM9TgJb+6P7ZvGoMP2g8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditPointOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPointOfSale);\nvar _c;\n$RefreshReg$(_c, \"EditPointOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtdHJhZGUtb2YtcGVwcGVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ007QUFDaEI7QUFDdUI7QUFpQm5FLFNBQVNNO1FBZ0JPOztJQWZmLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDO1FBQ2xEUyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxhQUFhO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHakIsK0NBQVFBLENBQWdCLEVBQUU7SUFDbEUsTUFBTSxDQUFDa0IsWUFBWUMsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNzQixPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNd0IsU0FBU3RCLDBEQUFTQTtJQUN4QixNQUFNLEVBQUV1QixNQUFNQyxPQUFPLEVBQUUsR0FBR3RCLDJEQUFVQTtRQUNyQjtJQUFmLE1BQU11QixTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBQ3pELE1BQU1DLGVBQWUzQixnRUFBZUE7SUFDcEMsTUFBTTRCLFVBQVVELGFBQWFFLElBQUk7SUFFakMsTUFBTUMsb0JBQW9CLE9BQU9DO1FBQ2hDQSxFQUFFQztRQUNGaEIsZ0JBQWdCO1FBRWhCLElBQ0NaLGNBQWNFLFNBQVMsTUFDdkIsQ0FBQ0YsY0FBY0csUUFDZixDQUFDSCxjQUFjSSxTQUNmLENBQUNKLGNBQWNLLFNBQ2YsQ0FBQ0wsY0FBY00sVUFDZixDQUFDTixjQUFjTyxXQUNmLENBQUNQLGNBQWNRLGFBQ2Q7WUFDRFEsU0FBUztZQUNUSixnQkFBZ0I7WUFDaEI7UUFDRDtRQUVBLElBQUk7WUFDSCxNQUFNaUIsV0FBV0Msa0JBQWtCOUIsY0FBY0ssT0FBT0wsY0FBY08sU0FBU1AsY0FBY007WUFDN0YsTUFBTXlCLFdBQVcsTUFBTUMsTUFBTSx3QkFBZ0MsT0FBUlIsVUFBVztnQkFDL0RTLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFVBQVU7b0JBQ3BCQyxlQUFlckMsY0FBY1E7b0JBQzdCTixNQUFNRixjQUFjRTtvQkFDcEJDLE1BQU1ILGNBQWNHO29CQUNwQkMsT0FBT0osY0FBY0k7b0JBQ3JCQyxPQUFPTCxjQUFjSztvQkFDckJDLFFBQVFOLGNBQWNNO29CQUN0QkMsU0FBU1AsY0FBY087b0JBQ3ZCc0IsVUFBVUE7Z0JBQ1g7WUFDRDtZQUVBLElBQUlFLFNBQVNPLElBQUk7Z0JBQ2hCckIsT0FBT3NCLEtBQUs7WUFDYjtRQUNELEVBQUUsT0FBT3hCLE9BQU87WUFDZnlCLFFBQVFDLElBQUkxQjtRQUNiLFNBQVU7WUFDVEgsZ0JBQWdCO1FBQ2pCO0lBQ0Q7SUFFQSxTQUFTa0Isa0JBQWtCekIsS0FBYSxFQUFFRSxPQUFlLEVBQUVELE1BQWM7UUFDeEUsTUFBTW9DLFlBQVksUUFBU3BDLFNBQVNDLFVBQVc7UUFDL0MsTUFBTXNCLFdBQVd4QixRQUFRQyxTQUFTb0M7UUFFbEMsT0FBT0MsT0FBT2QsU0FBU2UsUUFBUTtJQUNoQztJQUVBLE1BQU1DLG9CQUFvQjtRQUN6QixJQUFJO1lBQ0gsTUFBTWQsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1kLE9BQU8sTUFBTWEsU0FBU2U7WUFFNUIsTUFBTUMsaUJBQWlCN0IsS0FBSzhCLE9BQU8sQ0FBQ0MsUUFBdUJBLE1BQU1DLFFBQVFDLElBQUlDLGVBQWVoQyxPQUFPZ0M7WUFFbkcxQyxnQkFBZ0JxQztZQUNoQmpDLFdBQVc7UUFDWixFQUFFLE9BQU9DLE9BQU87WUFDZnlCLFFBQVFDLElBQUkxQjtZQUNaRCxXQUFXO1FBQ1o7SUFDRDtJQUVBcEIsZ0RBQVNBLENBQUM7UUFDVG1EO0lBQ0QsR0FBRztRQUFDaEM7S0FBUTtJQUVabkIsZ0RBQVNBLENBQUM7UUFDVCxNQUFNMkQsa0JBQWtCO1lBQ3ZCLE1BQU10QixXQUFXLE1BQU1DLE1BQU0sd0JBQWdDLE9BQVJSO1lBQ3JELE1BQU1OLE9BQU8sTUFBTWEsU0FBU2U7WUFFNUIsd0RBQXdEO1lBQ3hELE1BQU0sQ0FBQ1EsS0FBS0MsT0FBT0MsS0FBSyxHQUFHdEMsS0FBS2hCLEtBQUt1RCxNQUFNO1lBQzNDLE1BQU1DLGdCQUFnQixHQUFXSCxPQUFSQyxNQUFLLEtBQVlGLE9BQVRDLE9BQU0sS0FBTyxPQUFKRDtZQUUxQ3JELGlCQUFpQjtnQkFDaEIsR0FBR0QsYUFBYTtnQkFDaEJFLE1BQU13RDtnQkFDTmxELGFBQWFVLEtBQUtWO2dCQUNsQkwsTUFBTWUsS0FBS2Y7Z0JBQ1hDLE9BQU9jLEtBQUtkO2dCQUNaQyxPQUFPYSxLQUFLYjtnQkFDWkMsUUFBUVksS0FBS1o7Z0JBQ2JDLFNBQVNXLEtBQUtYO1lBQ2Y7UUFDRDtRQUVBLElBQUlpQixTQUFTNkI7SUFDZCxHQUFHO1FBQUM3QjtLQUFRO0lBRVoscUJBQ0MsOERBQUNtQztRQUFRQyxXQUFVO2tCQUNsQiw0RUFBQzlELDJFQUFpQkE7WUFDakIrRCxNQUFLO1lBQ0w3RCxlQUFlQTtZQUNmQyxrQkFBa0JBO1lBQ2xCVSxZQUFZQTtZQUNabUQsY0FBY3BDO1lBQ2RYLE9BQU9BO1lBQ1BOLGNBQWNBOzs7Ozs7Ozs7OztBQUlsQjtHQS9IU1Y7O1FBY09KLHNEQUFTQTtRQUNFRSx1REFBVUE7UUFFZkQsNERBQWVBOzs7S0FqQjVCRztBQWlJVCwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZWRpdC10cmFkZS1vZi1wZXBwZXIvcGFnZS50c3g/M2M4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IEVkaXRUcmFkZU9mUGVwcGVyIGZyb20gJ0Bjb21wb25lbnRzL0Zvcm1zL1RyYWRlT2ZQZXBwZXJGb3JtJ1xuXG5pbnRlcmZhY2UgUG9pbnRPZlNhbGUge1xuXHRfaWQ6IHN0cmluZ1xuXHRhZGRyZXNzOiBzdHJpbmdcblx0Y3JlYXRvcjoge1xuXHRcdF9pZDogc3RyaW5nXG5cdFx0ZW1haWw6IHN0cmluZ1xuXHRcdHVzZXJuYW1lOiBzdHJpbmdcblx0XHRpbWFnZTogc3RyaW5nXG5cdH1cblx0bGF0aXR1ZGU6IHN0cmluZ1xuXHRsb25naXR1ZGU6IHN0cmluZ1xuXHRuYW1lOiBzdHJpbmdcblx0dHlwZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEVkaXRQb2ludE9mU2FsZSgpIHtcblx0Y29uc3QgW3RyYWRlT2ZQZXBwZXIsIHNldFRyYWRlT2ZQZXBwZXJdID0gdXNlU3RhdGUoe1xuXHRcdGRhdGU6ICcnLFxuXHRcdGNsYXM6IDAsXG5cdFx0Y29sb3I6IDAsXG5cdFx0cHJpY2U6IDAsXG5cdFx0d2VpZ2h0OiAwLFxuXHRcdHZhdFJhdGU6IDAsXG5cdFx0cG9pbnRPZlNhbGU6IDAsXG5cdH0pXG5cdGNvbnN0IFtwb2ludE9mU2FsZXMsIHNldFBvaW50T2ZTYWxlc10gPSB1c2VTdGF0ZTxQb2ludE9mU2FsZVtdPihbXSlcblx0Y29uc3QgW3N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblx0Y29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblx0Y29uc3QgdHJhZGVJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJylcblxuXHRjb25zdCBlZGl0VHJhZGVPZlBlcHBlciA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHNldElzU3VibWl0dGluZyh0cnVlKVxuXG5cdFx0aWYgKFxuXHRcdFx0dHJhZGVPZlBlcHBlci5kYXRlID09PSAnJyB8fFxuXHRcdFx0IXRyYWRlT2ZQZXBwZXIuY2xhcyB8fFxuXHRcdFx0IXRyYWRlT2ZQZXBwZXIuY29sb3IgfHxcblx0XHRcdCF0cmFkZU9mUGVwcGVyLnByaWNlIHx8XG5cdFx0XHQhdHJhZGVPZlBlcHBlci53ZWlnaHQgfHxcblx0XHRcdCF0cmFkZU9mUGVwcGVyLnZhdFJhdGUgfHxcblx0XHRcdCF0cmFkZU9mUGVwcGVyLnBvaW50T2ZTYWxlXG5cdFx0KSB7XG5cdFx0XHRzZXRFcnJvcignV3lwZcWCbmlqIHdzenlzdGtpZSBwb2xhIGZvcm11bGFyemEhJylcblx0XHRcdHNldElzU3VibWl0dGluZyhmYWxzZSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b3RhbFN1bSA9IGNhbGN1bGF0ZVRvdGFsU3VtKHRyYWRlT2ZQZXBwZXIucHJpY2UsIHRyYWRlT2ZQZXBwZXIudmF0UmF0ZSwgdHJhZGVPZlBlcHBlci53ZWlnaHQpXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3RyYWRlLW9mLXBlcHBlci8ke3RyYWRlSWR9YCwge1xuXHRcdFx0XHRtZXRob2Q6ICdQQVRDSCcsXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRwb2ludE9mU2FsZUlkOiB0cmFkZU9mUGVwcGVyLnBvaW50T2ZTYWxlLFxuXHRcdFx0XHRcdGRhdGU6IHRyYWRlT2ZQZXBwZXIuZGF0ZSxcblx0XHRcdFx0XHRjbGFzOiB0cmFkZU9mUGVwcGVyLmNsYXMsXG5cdFx0XHRcdFx0Y29sb3I6IHRyYWRlT2ZQZXBwZXIuY29sb3IsXG5cdFx0XHRcdFx0cHJpY2U6IHRyYWRlT2ZQZXBwZXIucHJpY2UsXG5cdFx0XHRcdFx0d2VpZ2h0OiB0cmFkZU9mUGVwcGVyLndlaWdodCxcblx0XHRcdFx0XHR2YXRSYXRlOiB0cmFkZU9mUGVwcGVyLnZhdFJhdGUsXG5cdFx0XHRcdFx0dG90YWxTdW06IHRvdGFsU3VtLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pXG5cblx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRyb3V0ZXIucHVzaCgnL3RyYWRlcy1vZi1wZXBwZXInKVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGN1bGF0ZVRvdGFsU3VtKHByaWNlOiBudW1iZXIsIHZhdFJhdGU6IG51bWJlciwgd2VpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGNvbnN0IHZhdEFtb3VudCA9IChwcmljZSAqIHdlaWdodCAqIHZhdFJhdGUpIC8gMTAwXG5cdFx0Y29uc3QgdG90YWxTdW0gPSBwcmljZSAqIHdlaWdodCArIHZhdEFtb3VudFxuXG5cdFx0cmV0dXJuIE51bWJlcih0b3RhbFN1bS50b0ZpeGVkKDIpKVxuXHR9XG5cblx0Y29uc3QgZmV0Y2hQb2ludE9mU2FsZXMgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9pbnQtb2Ytc2FsZScpXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkUG9pbnRzID0gZGF0YS5maWx0ZXIoKHBvaW50OiBQb2ludE9mU2FsZSkgPT4gcG9pbnQuY3JlYXRvci5faWQudG9TdHJpbmcoKSA9PT0gdXNlcklkLnRvU3RyaW5nKCkpXG5cblx0XHRcdHNldFBvaW50T2ZTYWxlcyhmaWx0ZXJlZFBvaW50cylcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoUG9pbnRPZlNhbGVzKClcblx0fSwgW2xvYWRpbmddKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZ2V0VHJhZGVEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90cmFkZS1vZi1wZXBwZXIvJHt0cmFkZUlkfWApXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cblx0XHRcdC8vIEtvbndlcnNqYSBmb3JtYXR1IGRhdHkgeiBcImRkLm1tLnJycnJcIiBuYSBcInl5eXktTU0tZGRcIlxuXHRcdFx0Y29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gZGF0YS5kYXRlLnNwbGl0KCcuJylcblx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG5cblx0XHRcdHNldFRyYWRlT2ZQZXBwZXIoe1xuXHRcdFx0XHQuLi50cmFkZU9mUGVwcGVyLFxuXHRcdFx0XHRkYXRlOiBmb3JtYXR0ZWREYXRlLCAvLyBVc3Rhd2llbmllIHNmb3JtYXRvd2FuZWogZGF0eVxuXHRcdFx0XHRwb2ludE9mU2FsZTogZGF0YS5wb2ludE9mU2FsZSxcblx0XHRcdFx0Y2xhczogZGF0YS5jbGFzLFxuXHRcdFx0XHRjb2xvcjogZGF0YS5jb2xvcixcblx0XHRcdFx0cHJpY2U6IGRhdGEucHJpY2UsXG5cdFx0XHRcdHdlaWdodDogZGF0YS53ZWlnaHQsXG5cdFx0XHRcdHZhdFJhdGU6IGRhdGEudmF0UmF0ZSxcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRyYWRlSWQpIGdldFRyYWRlRGV0YWlscygpXG5cdH0sIFt0cmFkZUlkXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxFZGl0VHJhZGVPZlBlcHBlclxuXHRcdFx0XHR0eXBlPSdFRElUJ1xuXHRcdFx0XHR0cmFkZU9mUGVwcGVyPXt0cmFkZU9mUGVwcGVyfVxuXHRcdFx0XHRzZXRUcmFkZU9mUGVwcGVyPXtzZXRUcmFkZU9mUGVwcGVyfVxuXHRcdFx0XHRzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfVxuXHRcdFx0XHRoYW5kbGVTdWJtaXQ9e2VkaXRUcmFkZU9mUGVwcGVyfVxuXHRcdFx0XHRlcnJvcj17ZXJyb3J9XG5cdFx0XHRcdHBvaW50T2ZTYWxlcz17cG9pbnRPZlNhbGVzfVxuXHRcdFx0Lz5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFBvaW50T2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VTZXNzaW9uIiwiRWRpdFRyYWRlT2ZQZXBwZXIiLCJFZGl0UG9pbnRPZlNhbGUiLCJ0cmFkZU9mUGVwcGVyIiwic2V0VHJhZGVPZlBlcHBlciIsImRhdGUiLCJjbGFzIiwiY29sb3IiLCJwcmljZSIsIndlaWdodCIsInZhdFJhdGUiLCJwb2ludE9mU2FsZSIsInBvaW50T2ZTYWxlcyIsInNldFBvaW50T2ZTYWxlcyIsInN1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsInNlYXJjaFBhcmFtcyIsInRyYWRlSWQiLCJnZXQiLCJlZGl0VHJhZGVPZlBlcHBlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsU3VtIiwiY2FsY3VsYXRlVG90YWxTdW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb2ludE9mU2FsZUlkIiwib2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInZhdEFtb3VudCIsIk51bWJlciIsInRvRml4ZWQiLCJmZXRjaFBvaW50T2ZTYWxlcyIsImpzb24iLCJmaWx0ZXJlZFBvaW50cyIsImZpbHRlciIsInBvaW50IiwiY3JlYXRvciIsIl9pZCIsInRvU3RyaW5nIiwiZ2V0VHJhZGVEZXRhaWxzIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwic3BsaXQiLCJmb3JtYXR0ZWREYXRlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJoYW5kbGVTdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-trade-of-pepper/page.tsx\n"));

/***/ })

});