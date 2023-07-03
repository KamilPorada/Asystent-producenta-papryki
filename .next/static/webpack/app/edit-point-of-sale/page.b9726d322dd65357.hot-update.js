"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/edit-point-of-sale/page",{

/***/ "(app-client)/./app/edit-point-of-sale/page.tsx":
/*!*****************************************!*\
  !*** ./app/edit-point-of-sale/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Forms_PointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Forms/PointOfSaleForm */ \"(app-client)/./components/Forms/PointOfSaleForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditPointOfSale() {\n    _s();\n    const [pointOfSale, setPointOfSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        type: 0,\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const [submitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const pointId = searchParams.get(\"id\");\n    const addPointOfSale = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        if (!pointOfSale.name || !pointOfSale.address || !pointOfSale.type || !pointOfSale.latitude || !pointOfSale.longitude) {\n            setError(\"Wypełnij wszystkie pola formularza!\");\n            setIsSubmitting(false);\n            return;\n        }\n        try {\n            const response = await fetch(\"/api/point-of-sale/new\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    name: pointOfSale.name,\n                    address: pointOfSale.address,\n                    type: pointOfSale.type,\n                    latitude: pointOfSale.latitude,\n                    longitude: pointOfSale.longitude\n                })\n            });\n            setError(\"\");\n            if (response.ok) {\n                router.push(\"/\");\n            } else {\n                throw new Error(\"Błąd podczas dodawania punktu sprzedaży\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPointtDetails = async ()=>{\n            const response = await fetch(\"/api/point-of-sale/\".concat(pointId));\n            const data = await response.json();\n            setPointOfSale({\n                name: data.name,\n                address: data.address,\n                type: data.type,\n                latitude: data.latitude,\n                longitude: data.longitude\n            });\n        };\n        if (pointId) getPointtDetails();\n    }, [\n        pointId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_PointOfSaleForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"EDIT\",\n            pointOfSale: pointOfSale,\n            setPointOfSale: setPointOfSale,\n            submitting: submitting,\n            handleSubmit: addPointOfSale,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n            lineNumber: 79,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kamil/Desktop/asystent-producenta-papryki/app/edit-point-of-sale/page.tsx\",\n        lineNumber: 78,\n        columnNumber: 3\n    }, this);\n}\n_s(EditPointOfSale, \"KW++sip9esImBeSa3Aa1A87A8R0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = EditPointOfSale;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPointOfSale);\nvar _c;\n$RefreshReg$(_c, \"EditPointOfSale\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2VkaXQtcG9pbnQtb2Ytc2FsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0Q7QUFDTTtBQUNNO0FBRWxFLFNBQVNLOztJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUM5Q1EsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxXQUFXO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1pQixTQUFTZiwwREFBU0E7SUFDeEIsTUFBTWdCLGVBQWVmLGdFQUFlQTtJQUNwQyxNQUFNZ0IsVUFBVUQsYUFBYUUsSUFBSTtJQUVqQyxNQUFNQyxpQkFBaUIsT0FBT0M7UUFDN0JBLEVBQUVDO1FBQ0ZULGdCQUFnQjtRQUVoQixJQUNDLENBQUNSLFlBQVlFLFFBQ2IsQ0FBQ0YsWUFBWUcsV0FDYixDQUFDSCxZQUFZSSxRQUNiLENBQUNKLFlBQVlLLFlBQ2IsQ0FBQ0wsWUFBWU0sV0FDWjtZQUNESSxTQUFTO1lBQ1RGLGdCQUFnQjtZQUNoQjtRQUNEO1FBRUEsSUFBSTtZQUNILE1BQU1VLFdBQVcsTUFBTUMsTUFBTSwwQkFBMEI7Z0JBQ3REQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxVQUFVO29CQUNwQnJCLE1BQU1GLFlBQVlFO29CQUNsQkMsU0FBU0gsWUFBWUc7b0JBQ3JCQyxNQUFNSixZQUFZSTtvQkFDbEJDLFVBQVVMLFlBQVlLO29CQUN0QkMsV0FBV04sWUFBWU07Z0JBQ3hCO1lBQ0Q7WUFDQUksU0FBUztZQUNULElBQUlRLFNBQVNNLElBQUk7Z0JBQ2hCYixPQUFPYyxLQUFLO1lBQ2IsT0FBTztnQkFDTixNQUFNLElBQUlDLE1BQU07WUFDakI7UUFDRCxFQUFFLE9BQU9qQixPQUFPO1lBQ2ZrQixRQUFRQyxJQUFJbkI7UUFDYixTQUFVO1lBQ1RELGdCQUFnQjtRQUNqQjtJQUNEO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTWtDLG1CQUFtQjtZQUN4QixNQUFNWCxXQUFXLE1BQU1DLE1BQU0sc0JBQThCLE9BQVJOO1lBQ25ELE1BQU1pQixPQUFPLE1BQU1aLFNBQVNhO1lBRTVCOUIsZUFBZTtnQkFDZEMsTUFBTTRCLEtBQUs1QjtnQkFDWEMsU0FBUzJCLEtBQUszQjtnQkFDZEMsTUFBTTBCLEtBQUsxQjtnQkFDWEMsVUFBVXlCLEtBQUt6QjtnQkFDZkMsV0FBV3dCLEtBQUt4QjtZQUNqQjtRQUNEO1FBRUEsSUFBSU8sU0FBU2dCO0lBQ2QsR0FBRztRQUFDaEI7S0FBUTtJQUVaLHFCQUNDLDhEQUFDbUI7UUFBUUMsV0FBVTtrQkFDbEIsNEVBQUNuQyx5RUFBa0JBO1lBQ2xCTSxNQUFLO1lBQ0xKLGFBQWFBO1lBQ2JDLGdCQUFnQkE7WUFDaEJNLFlBQVlBO1lBQ1oyQixjQUFjbkI7WUFDZE4sT0FBT0E7Ozs7Ozs7Ozs7O0FBSVg7R0FuRlNWOztRQVVPSCxzREFBU0E7UUFDSEMsNERBQWVBOzs7S0FYNUJFO0FBcUZULCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9lZGl0LXBvaW50LW9mLXNhbGUvcGFnZS50c3g/OTEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgTmV3UG9pbnRPZlNhbGVGb3JtIGZyb20gJ0Bjb21wb25lbnRzL0Zvcm1zL1BvaW50T2ZTYWxlRm9ybSdcblxuZnVuY3Rpb24gRWRpdFBvaW50T2ZTYWxlKCkge1xuXHRjb25zdCBbcG9pbnRPZlNhbGUsIHNldFBvaW50T2ZTYWxlXSA9IHVzZVN0YXRlKHtcblx0XHRuYW1lOiAnJyxcblx0XHRhZGRyZXNzOiAnJyxcblx0XHR0eXBlOiAwLFxuXHRcdGxhdGl0dWRlOiAnJyxcblx0XHRsb25naXR1ZGU6ICcnLFxuXHR9KVxuXHRjb25zdCBbc3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXHRjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuXHRjb25zdCBwb2ludElkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKVxuXG5cdGNvbnN0IGFkZFBvaW50T2ZTYWxlID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0c2V0SXNTdWJtaXR0aW5nKHRydWUpXG5cblx0XHRpZiAoXG5cdFx0XHQhcG9pbnRPZlNhbGUubmFtZSB8fFxuXHRcdFx0IXBvaW50T2ZTYWxlLmFkZHJlc3MgfHxcblx0XHRcdCFwb2ludE9mU2FsZS50eXBlIHx8XG5cdFx0XHQhcG9pbnRPZlNhbGUubGF0aXR1ZGUgfHxcblx0XHRcdCFwb2ludE9mU2FsZS5sb25naXR1ZGVcblx0XHQpIHtcblx0XHRcdHNldEVycm9yKCdXeXBlxYJuaWogd3N6eXN0a2llIHBvbGEgZm9ybXVsYXJ6YSEnKVxuXHRcdFx0c2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9pbnQtb2Ytc2FsZS9uZXcnLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0bmFtZTogcG9pbnRPZlNhbGUubmFtZSxcblx0XHRcdFx0XHRhZGRyZXNzOiBwb2ludE9mU2FsZS5hZGRyZXNzLFxuXHRcdFx0XHRcdHR5cGU6IHBvaW50T2ZTYWxlLnR5cGUsXG5cdFx0XHRcdFx0bGF0aXR1ZGU6IHBvaW50T2ZTYWxlLmxhdGl0dWRlLFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogcG9pbnRPZlNhbGUubG9uZ2l0dWRlLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pXG5cdFx0XHRzZXRFcnJvcignJylcblx0XHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0XHRyb3V0ZXIucHVzaCgnLycpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0LFgsSFZCBwb2RjemFzIGRvZGF3YW5pYSBwdW5rdHUgc3ByemVkYcW8eScpXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpXG5cdFx0fVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBnZXRQb2ludHREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb2ludC1vZi1zYWxlLyR7cG9pbnRJZH1gKVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdFx0XHRzZXRQb2ludE9mU2FsZSh7XG5cdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0YWRkcmVzczogZGF0YS5hZGRyZXNzLFxuXHRcdFx0XHR0eXBlOiBkYXRhLnR5cGUsXG5cdFx0XHRcdGxhdGl0dWRlOiBkYXRhLmxhdGl0dWRlLFxuXHRcdFx0XHRsb25naXR1ZGU6IGRhdGEubG9uZ2l0dWRlLFxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRpZiAocG9pbnRJZCkgZ2V0UG9pbnR0RGV0YWlscygpXG5cdH0sIFtwb2ludElkXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTIwJz5cblx0XHRcdDxOZXdQb2ludE9mU2FsZUZvcm1cblx0XHRcdFx0dHlwZT0nRURJVCdcblx0XHRcdFx0cG9pbnRPZlNhbGU9e3BvaW50T2ZTYWxlfVxuXHRcdFx0XHRzZXRQb2ludE9mU2FsZT17c2V0UG9pbnRPZlNhbGV9XG5cdFx0XHRcdHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG5cdFx0XHRcdGhhbmRsZVN1Ym1pdD17YWRkUG9pbnRPZlNhbGV9XG5cdFx0XHRcdGVycm9yPXtlcnJvcn1cblx0XHRcdC8+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQb2ludE9mU2FsZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiTmV3UG9pbnRPZlNhbGVGb3JtIiwiRWRpdFBvaW50T2ZTYWxlIiwicG9pbnRPZlNhbGUiLCJzZXRQb2ludE9mU2FsZSIsIm5hbWUiLCJhZGRyZXNzIiwidHlwZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJwb2ludElkIiwiZ2V0IiwiYWRkUG9pbnRPZlNhbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQb2ludHREZXRhaWxzIiwiZGF0YSIsImpzb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/edit-point-of-sale/page.tsx\n"));

/***/ })

});