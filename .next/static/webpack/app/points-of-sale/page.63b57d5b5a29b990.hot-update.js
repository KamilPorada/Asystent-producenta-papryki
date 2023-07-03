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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/UI/SearchInput */ \"(app-client)/./components/UI/SearchInput.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredPoints, setFilteredPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n            setFilteredPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleDelete = async (point)=>{\n        try {\n            await fetch(\"/api/point-of-sale/\".concat(point._id.toString()), {\n                method: \"DELETE\"\n            });\n            const filteredPoints = allPoints.filter((item)=>item._id !== point._id);\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleEdit = async (point)=>{\n        router.push(\"/edit-point-of-sale?id=\".concat(point._id));\n    };\n    const handleSearch = (searchTerm)=>{\n        const filteredPoints = allPoints.filter((point)=>point.name.toLowerCase().includes(searchTerm.toLowerCase()));\n        setFilteredPoints(filteredPoints);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 79,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SearchInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, this),\n            filteredPoints.length > 0 ? filteredPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    name: point.name,\n                    address: point.address,\n                    type: point.type,\n                    latitude: point.latitude,\n                    longitude: point.longitude,\n                    handleDelete: ()=>handleDelete(point),\n                    handleEdit: ()=>handleEdit(point)\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"sxcQabBtUiXT53GaYLZhh3uRDrI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQztBQUNEO0FBQ1c7QUFDRjtBQUVXO0FBaUIvRCxTQUFTTztRQU1POztJQUxmLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUM1RCxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFnQixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNYyxTQUFTWCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFWSxNQUFNQyxPQUFPLEVBQUUsR0FBR2QsMkRBQVVBO1FBQ3JCO0lBQWYsTUFBTWUsU0FBUyxlQUFDRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLGtCQUFWLGdDQUFvQ0MsZ0JBQXBDLHVCQUEwQztJQUV6RCxNQUFNQyxvQkFBb0I7UUFDekIsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNUCxPQUFPLE1BQU1NLFNBQVNFO1lBRTVCLE1BQU1iLGlCQUFpQkssS0FBS1MsT0FBTyxDQUFDQyxRQUF1QkEsTUFBTUMsUUFBUUMsSUFBSUMsZUFBZVgsT0FBT1c7WUFFbkduQixhQUFhQztZQUNiQyxrQkFBa0JEO1FBQ25CLEVBQUUsT0FBT21CLE9BQU87WUFDZkMsUUFBUUMsSUFBSUY7UUFDYixTQUFVO1lBQ1RoQixXQUFXO1FBQ1o7SUFDRDtJQUVBLE1BQU1tQixlQUFlLE9BQU9QO1FBQzNCLElBQUk7WUFDSCxNQUFNSCxNQUFNLHNCQUEyQyxPQUFyQkcsTUFBTUUsSUFBSUMsYUFBYztnQkFDekRLLFFBQVE7WUFDVDtZQUVBLE1BQU12QixpQkFBaUJGLFVBQVVnQixPQUFPVSxDQUFBQSxPQUFRQSxLQUFLUCxRQUFRRixNQUFNRTtZQUVuRWxCLGFBQWFDO1FBQ2QsRUFBRSxPQUFPbUIsT0FBTztZQUNmQyxRQUFRQyxJQUFJRjtRQUNiO0lBQ0Q7SUFFQSxNQUFNTSxhQUFhLE9BQU9WO1FBQ3pCWCxPQUFPc0IsS0FBSywwQkFBb0MsT0FBVlgsTUFBTUU7SUFDN0M7SUFFQSxNQUFNVSxlQUFlLENBQUNDO1FBQ3JCLE1BQU01QixpQkFBaUJGLFVBQVVnQixPQUFPQyxDQUFBQSxRQUFTQSxNQUFNYyxLQUFLQyxjQUFjQyxTQUFTSCxXQUFXRTtRQUU5RjdCLGtCQUFrQkQ7SUFDbkI7SUFFQVQsZ0RBQVNBLENBQUM7UUFDVG1CO0lBQ0QsR0FBRyxFQUFFO0lBRUwsSUFBSVIsU0FBUztRQUNaLHFCQUNDLDhEQUFDOEI7WUFBUUMsV0FBVTtzQkFDbEIsNEVBQUNDO2dCQUFFRCxXQUFVOzBCQUErQjs7Ozs7Ozs7Ozs7SUFHL0M7SUFFQSxxQkFDQyw4REFBQ0Q7UUFBUUMsV0FBVTs7MEJBQ2xCLDhEQUFDdkMsbUVBQVlBO2dCQUFDeUMsT0FBTTs7Ozs7OzBCQUNwQiw4REFBQ3hDLGtFQUFXQTtnQkFBQ3lDLFVBQVVUOzs7Ozs7WUFDdEIzQixlQUFlcUMsU0FBUyxJQUN4QnJDLGVBQWVzQyxJQUFJdkIsQ0FBQUEsc0JBQ2xCLDhEQUFDbkIseUVBQWVBO29CQUVmaUMsTUFBTWQsTUFBTWM7b0JBQ1pVLFNBQVN4QixNQUFNd0I7b0JBQ2ZDLE1BQU16QixNQUFNeUI7b0JBQ1pDLFVBQVUxQixNQUFNMEI7b0JBQ2hCQyxXQUFXM0IsTUFBTTJCO29CQUNqQnBCLGNBQWMsSUFBTUEsYUFBYVA7b0JBQ2pDVSxZQUFZLElBQU1BLFdBQVdWO21CQVB4QkEsTUFBTUU7Ozs7MENBV2IsOERBQUNpQjtnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7OztBQUloRDtHQWxGU3BDOztRQUlPSixzREFBU0E7UUFDRUQsdURBQVVBOzs7S0FMNUJLO0FBb0ZULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wb2ludHMtb2Ytc2FsZS9wYWdlLnRzeD9mMTA1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJ0Bjb21wb25lbnRzL1VJL1NlYXJjaElucHV0J1xuXG5pbXBvcnQgUG9pbnRPZlNhbGVJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1BvaW50T2ZTYWxlSXRlbSdcblxuaW50ZXJmYWNlIFBvaW50T2ZTYWxlIHtcblx0X2lkOiBzdHJpbmdcblx0YWRkcmVzczogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdGxhdGl0dWRlOiBzdHJpbmdcblx0bG9uZ2l0dWRlOiBzdHJpbmdcblx0bmFtZTogc3RyaW5nXG5cdHR5cGU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBQb2ludHNPZlNhbGUoKSB7XG5cdGNvbnN0IFthbGxQb2ludHMsIHNldEFsbFBvaW50c10gPSB1c2VTdGF0ZTxQb2ludE9mU2FsZVtdPihbXSlcblx0Y29uc3QgW2ZpbHRlcmVkUG9pbnRzLCBzZXRGaWx0ZXJlZFBvaW50c10gPSB1c2VTdGF0ZTxQb2ludE9mU2FsZVtdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBmZXRjaFBvaW50c09mU2FsZSA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wb2ludC1vZi1zYWxlJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRQb2ludHMgPSBkYXRhLmZpbHRlcigocG9pbnQ6IFBvaW50T2ZTYWxlKSA9PiBwb2ludC5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHRcdFx0c2V0RmlsdGVyZWRQb2ludHMoZmlsdGVyZWRQb2ludHMpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChwb2ludDogUG9pbnRPZlNhbGUpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgZmV0Y2goYC9hcGkvcG9pbnQtb2Ytc2FsZS8ke3BvaW50Ll9pZC50b1N0cmluZygpfWAsIHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdH0pXG5cblx0XHRcdGNvbnN0IGZpbHRlcmVkUG9pbnRzID0gYWxsUG9pbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBwb2ludC5faWQpXG5cblx0XHRcdHNldEFsbFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlRWRpdCA9IGFzeW5jIChwb2ludDogUG9pbnRPZlNhbGUpID0+IHtcblx0XHRyb3V0ZXIucHVzaChgL2VkaXQtcG9pbnQtb2Ytc2FsZT9pZD0ke3BvaW50Ll9pZH1gKVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlU2VhcmNoID0gKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IGZpbHRlcmVkUG9pbnRzID0gYWxsUG9pbnRzLmZpbHRlcihwb2ludCA9PiBwb2ludC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSlcblxuXHRcdHNldEZpbHRlcmVkUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaFBvaW50c09mU2FsZSgpXG5cdH0sIFtdKVxuXG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdtdC0xMCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyJz5XY3p5dHl3YW5pZSBkYW55Y2guLi48L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBweS0yMCc+XG5cdFx0XHQ8U2VjdGlvblRpdGxlIHRpdGxlPSdNb2plIHB1bmt0eSBzcHJ6ZWRhxbx5JyAvPlxuXHRcdFx0PFNlYXJjaElucHV0IG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XG5cdFx0XHR7ZmlsdGVyZWRQb2ludHMubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0ZmlsdGVyZWRQb2ludHMubWFwKHBvaW50ID0+IChcblx0XHRcdFx0XHQ8UG9pbnRPZlNhbGVJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e3BvaW50Ll9pZH1cblx0XHRcdFx0XHRcdG5hbWU9e3BvaW50Lm5hbWV9XG5cdFx0XHRcdFx0XHRhZGRyZXNzPXtwb2ludC5hZGRyZXNzfVxuXHRcdFx0XHRcdFx0dHlwZT17cG9pbnQudHlwZX1cblx0XHRcdFx0XHRcdGxhdGl0dWRlPXtwb2ludC5sYXRpdHVkZX1cblx0XHRcdFx0XHRcdGxvbmdpdHVkZT17cG9pbnQubG9uZ2l0dWRlfVxuXHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGUocG9pbnQpfVxuXHRcdFx0XHRcdFx0aGFuZGxlRWRpdD17KCkgPT4gaGFuZGxlRWRpdChwb2ludCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayBwdW5rdMOzdyBzcHJ6ZWRhxbx5PC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiU2VjdGlvblRpdGxlIiwiU2VhcmNoSW5wdXQiLCJQb2ludE9mU2FsZUl0ZW0iLCJQb2ludHNPZlNhbGUiLCJhbGxQb2ludHMiLCJzZXRBbGxQb2ludHMiLCJmaWx0ZXJlZFBvaW50cyIsInNldEZpbHRlcmVkUG9pbnRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImZldGNoUG9pbnRzT2ZTYWxlIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJmaWx0ZXIiLCJwb2ludCIsImNyZWF0b3IiLCJfaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsIm1ldGhvZCIsIml0ZW0iLCJoYW5kbGVFZGl0IiwicHVzaCIsImhhbmRsZVNlYXJjaCIsInNlYXJjaFRlcm0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwIiwidGl0bGUiLCJvblNlYXJjaCIsImxlbmd0aCIsIm1hcCIsImFkZHJlc3MiLCJ0eXBlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});