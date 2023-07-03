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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/UI/SectionTitle */ \"(app-client)/./components/UI/SectionTitle.tsx\");\n/* harmony import */ var _components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Items/PointOfSaleItem */ \"(app-client)/./components/Items/PointOfSaleItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction PointsOfSale() {\n    var _ref;\n    _s();\n    const [allPoints, setAllPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    var _id;\n    const userId = (_id = (_ref = session === null || session === void 0 ? void 0 : session.user) === null || _ref === void 0 ? void 0 : _ref.id) !== null && _id !== void 0 ? _id : \"\";\n    const handleDelete = async (point)=>{\n        const hasConfirmed = confirm(\"Czy napewno chcesz usunąć punkt sprzedaży?\");\n        if (hasConfirmed) {\n            try {\n                await fetch(\"/api/point-of-sale/\".concat(point._id.toString()), {\n                    method: \"DELETE\"\n                });\n                const filteredPoints = allPoints.filter((item)=>item._id !== point._id);\n                setAllPoints(filteredPoints);\n            } catch (error) {\n                console.log(error);\n            }\n            x;\n        }\n    };\n    const fetchPointsOfSale = async ()=>{\n        try {\n            const response = await fetch(\"/api/point-of-sale\");\n            const data = await response.json();\n            const filteredPoints = data.filter((point)=>point.creator._id.toString() === userId.toString());\n            setAllPoints(filteredPoints);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPointsOfSale();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Wczytywanie danych...\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n            lineNumber: 69,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Moje punkty sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this),\n            allPoints.length > 0 ? allPoints.map((point)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Items_PointOfSaleItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: point.name,\n                    address: point.address,\n                    type: point.type,\n                    latitude: point.latitude,\n                    longitude: point.longitude,\n                    handleDelete: ()=>handleDelete(point)\n                }, point._id, false, {\n                    fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 6\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-black text-center\",\n                children: \"Brak punkt\\xf3w sprzedaży\"\n            }, void 0, false, {\n                fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/points-of-sale/page.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, this);\n}\n_s(PointsOfSale, \"arCP5M6WtLp8ObxR/w0NUOzBIAQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = PointsOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PointsOfSale);\nvar _c;\n$RefreshReg$(_c, \"PointsOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BvaW50cy1vZi1zYWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkM7QUFDQztBQUNVO0FBRVM7QUFpQi9ELFNBQVNLO1FBSU87O0lBSGYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFnQixFQUFFO0lBQzVELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVVLE1BQU1DLE9BQU8sRUFBRSxHQUFHVCwyREFBVUE7UUFDckI7SUFBZixNQUFNVSxTQUFTLGVBQUNELG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0Usa0JBQVYsZ0NBQW9DQyxnQkFBcEMsdUJBQTBDO0lBRXpELE1BQU1DLGVBQWUsT0FBT0M7UUFDM0IsTUFBTUMsZUFBZUMsUUFBUTtRQUU3QixJQUFJRCxjQUFjO1lBQ2pCLElBQUk7Z0JBQ0gsTUFBTUUsTUFBTSxzQkFBMkMsT0FBckJILE1BQU1JLElBQUlDLGFBQWM7b0JBQ3pEQyxRQUFRO2dCQUNUO2dCQUVBLE1BQU1DLGlCQUFpQmpCLFVBQVVrQixPQUFPQyxDQUFBQSxPQUFRQSxLQUFLTCxRQUFRSixNQUFNSTtnQkFFbkViLGFBQWFnQjtZQUNkLEVBQUUsT0FBT0csT0FBTztnQkFDZkMsUUFBUUMsSUFBSUY7WUFDYjtZQUFDRztRQUNGO0lBQ0Q7SUFFQSxNQUFNQyxvQkFBb0I7UUFDekIsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTVosTUFBTTtZQUM3QixNQUFNVCxPQUFPLE1BQU1xQixTQUFTQztZQUU1QixNQUFNVCxpQkFBaUJiLEtBQUtjLE9BQU8sQ0FBQ1IsUUFBdUJBLE1BQU1pQixRQUFRYixJQUFJQyxlQUFlVCxPQUFPUztZQUVuR2QsYUFBYWdCO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2ZDLFFBQVFDLElBQUlGO1FBQ2IsU0FBVTtZQUNUakIsV0FBVztRQUNaO0lBQ0Q7SUFFQVIsZ0RBQVNBLENBQUM7UUFDVDZCO0lBQ0QsR0FBRyxFQUFFO0lBRUwsSUFBSXRCLFNBQVM7UUFDWixxQkFDQyw4REFBQzBCO1lBQVFDLFdBQVU7c0JBQ2xCLDRFQUFDQztnQkFBRUQsV0FBVTswQkFBK0I7Ozs7Ozs7Ozs7O0lBRy9DO0lBRUEscUJBQ0MsOERBQUNEO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQ2hDLG1FQUFZQTtnQkFBQ2tDLE9BQU07Ozs7OztZQUNuQi9CLFVBQVVnQyxTQUFTLElBQ25CaEMsVUFBVWlDLElBQUl2QixDQUFBQSxzQkFDYiw4REFBQ1oseUVBQWVBO29CQUVmb0MsTUFBTXhCLE1BQU13QjtvQkFDWkMsU0FBU3pCLE1BQU15QjtvQkFDZkMsTUFBTTFCLE1BQU0wQjtvQkFDWkMsVUFBVTNCLE1BQU0yQjtvQkFDaEJDLFdBQVc1QixNQUFNNEI7b0JBQ2pCN0IsY0FBYyxJQUFNQSxhQUFhQzttQkFONUJBLE1BQU1JOzs7OzBDQVViLDhEQUFDZ0I7Z0JBQUVELFdBQVU7MEJBQStCOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0F2RVM5Qjs7UUFHa0JILHVEQUFVQTs7O0tBSDVCRztBQXlFVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcG9pbnRzLW9mLXNhbGUvcGFnZS50c3g/ZjEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnQGNvbXBvbmVudHMvVUkvU2VjdGlvblRpdGxlJ1xuXG5pbXBvcnQgUG9pbnRPZlNhbGVJdGVtIGZyb20gJ0Bjb21wb25lbnRzL0l0ZW1zL1BvaW50T2ZTYWxlSXRlbSdcblxuaW50ZXJmYWNlIFBvaW50T2ZTYWxlIHtcblx0X2lkOiBzdHJpbmdcblx0YWRkcmVzczogc3RyaW5nXG5cdGNyZWF0b3I6IHtcblx0XHRfaWQ6IHN0cmluZ1xuXHRcdGVtYWlsOiBzdHJpbmdcblx0XHR1c2VybmFtZTogc3RyaW5nXG5cdFx0aW1hZ2U6IHN0cmluZ1xuXHR9XG5cdGxhdGl0dWRlOiBzdHJpbmdcblx0bG9uZ2l0dWRlOiBzdHJpbmdcblx0bmFtZTogc3RyaW5nXG5cdHR5cGU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBQb2ludHNPZlNhbGUoKSB7XG5cdGNvbnN0IFthbGxQb2ludHMsIHNldEFsbFBvaW50c10gPSB1c2VTdGF0ZTxQb2ludE9mU2FsZVtdPihbXSlcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblx0Y29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcblx0Y29uc3QgdXNlcklkID0gKHNlc3Npb24/LnVzZXIgYXMgeyBpZD86IHN0cmluZyB9KT8uaWQgPz8gJydcblxuXHRjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9pbnQ6IFBvaW50T2ZTYWxlKSA9PiB7XG5cdFx0Y29uc3QgaGFzQ29uZmlybWVkID0gY29uZmlybSgnQ3p5IG5hcGV3bm8gY2hjZXN6IHVzdW7EhcSHIHB1bmt0IHNwcnplZGHFvHk/JylcblxuXHRcdGlmIChoYXNDb25maXJtZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IGZldGNoKGAvYXBpL3BvaW50LW9mLXNhbGUvJHtwb2ludC5faWQudG9TdHJpbmcoKX1gLCB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZFBvaW50cyA9IGFsbFBvaW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gcG9pbnQuX2lkKVxuXG5cdFx0XHRcdHNldEFsbFBvaW50cyhmaWx0ZXJlZFBvaW50cylcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0fXhcblx0XHR9XG5cdH1cblxuXHRjb25zdCBmZXRjaFBvaW50c09mU2FsZSA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wb2ludC1vZi1zYWxlJylcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0Y29uc3QgZmlsdGVyZWRQb2ludHMgPSBkYXRhLmZpbHRlcigocG9pbnQ6IFBvaW50T2ZTYWxlKSA9PiBwb2ludC5jcmVhdG9yLl9pZC50b1N0cmluZygpID09PSB1c2VySWQudG9TdHJpbmcoKSlcblxuXHRcdFx0c2V0QWxsUG9pbnRzKGZpbHRlcmVkUG9pbnRzKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoUG9pbnRzT2ZTYWxlKClcblx0fSwgW10pXG5cblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWluZXIgcHktMjAnPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTEwIHRleHQtYmxhY2sgdGV4dC1jZW50ZXInPldjenl0eXdhbmllIGRhbnljaC4uLjwvcD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxTZWN0aW9uVGl0bGUgdGl0bGU9J01vamUgcHVua3R5IHNwcnplZGHFvHknIC8+XG5cdFx0XHR7YWxsUG9pbnRzLmxlbmd0aCA+IDAgPyAoXG5cdFx0XHRcdGFsbFBvaW50cy5tYXAocG9pbnQgPT4gKFxuXHRcdFx0XHRcdDxQb2ludE9mU2FsZUl0ZW1cblx0XHRcdFx0XHRcdGtleT17cG9pbnQuX2lkfVxuXHRcdFx0XHRcdFx0bmFtZT17cG9pbnQubmFtZX1cblx0XHRcdFx0XHRcdGFkZHJlc3M9e3BvaW50LmFkZHJlc3N9XG5cdFx0XHRcdFx0XHR0eXBlPXtwb2ludC50eXBlfVxuXHRcdFx0XHRcdFx0bGF0aXR1ZGU9e3BvaW50LmxhdGl0dWRlfVxuXHRcdFx0XHRcdFx0bG9uZ2l0dWRlPXtwb2ludC5sb25naXR1ZGV9XG5cdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZShwb2ludCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1ibGFjayB0ZXh0LWNlbnRlcic+QnJhayBwdW5rdMOzdyBzcHJ6ZWRhxbx5PC9wPlxuXHRcdFx0KX1cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZTYWxlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiU2VjdGlvblRpdGxlIiwiUG9pbnRPZlNhbGVJdGVtIiwiUG9pbnRzT2ZTYWxlIiwiYWxsUG9pbnRzIiwic2V0QWxsUG9pbnRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJJZCIsInVzZXIiLCJpZCIsImhhbmRsZURlbGV0ZSIsInBvaW50IiwiaGFzQ29uZmlybWVkIiwiY29uZmlybSIsImZldGNoIiwiX2lkIiwidG9TdHJpbmciLCJtZXRob2QiLCJmaWx0ZXJlZFBvaW50cyIsImZpbHRlciIsIml0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ4IiwiZmV0Y2hQb2ludHNPZlNhbGUiLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdG9yIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInAiLCJ0aXRsZSIsImxlbmd0aCIsIm1hcCIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/points-of-sale/page.tsx\n"));

/***/ })

});