"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cosmos_kit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cosmos-kit/react */ \"./node_modules/@cosmos-kit/react/esm/index.js\");\n/* harmony import */ var _config_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/defaults */ \"./src/config/defaults.ts\");\n/* harmony import */ var _contract_ts_MyProject_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contract/ts/MyProject.client */ \"./src/contract/ts/MyProject.client.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import Tailwind CSS\n\nconst CONTRACT_ADDRESS = \"testcore18y4j8zm4qpfemvr22zhwd6nzc54nuezaxfzydj7qq6rzjgmx6cqq40qjd7\";\nfunction App() {\n    _s();\n    const chainContext = (0,_cosmos_kit_react__WEBPACK_IMPORTED_MODULE_2__.useChain)(_config_defaults__WEBPACK_IMPORTED_MODULE_3__.chainName);\n    var _chainContext_address;\n    const walletAddress = (_chainContext_address = chainContext.address) !== null && _chainContext_address !== void 0 ? _chainContext_address : \"\";\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [mintNftId, setMintNftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mintNftData, setMintNftData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mintNftUri, setMintNftUri] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mintNftUriHash, setMintNftUriHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modifyNftId, setModifyNftId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [modifyNftData, setModifyNftData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isMintMode, setIsMintMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to manage form toggle\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (walletAddress) {\n            (async ()=>{\n                const signingClient = await chainContext.getSigningCosmWasmClient();\n                setClient(new _contract_ts_MyProject_client__WEBPACK_IMPORTED_MODULE_4__.MyProjectClient(signingClient, walletAddress, CONTRACT_ADDRESS));\n            })();\n        }\n    }, [\n        walletAddress,\n        chainContext\n    ]);\n    const getAccountDetails = async ()=>{\n        const signingClient = await chainContext.getSigningCosmWasmClient();\n        const account = await signingClient.getAccount(walletAddress);\n        return account;\n    };\n    const mintNFT = async ()=>{\n        if (!client) return;\n        const fee = {\n            amount: [\n                {\n                    denom: \"ucore\",\n                    amount: \"2000\"\n                }\n            ],\n            gas: \"200000\"\n        };\n        // Properly base64 encode the data\n        const data = btoa(mintNftData); // Binary data in base64 format\n        try {\n            const account = await getAccountDetails();\n            const sequence = account ? account.sequence : undefined;\n            const result = await client.mintMutable({\n                id: mintNftId,\n                recipient: walletAddress,\n                data,\n                uri: mintNftUri,\n                uriHash: mintNftUriHash\n            }, fee, \"Mint NFT\", []);\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"NFT minted with transaction hash: \".concat(result.transactionHash));\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Failed to mint NFT: \".concat(error.message));\n        }\n    };\n    const modifyNFTData = async ()=>{\n        if (!client) return;\n        const fee = {\n            amount: [\n                {\n                    denom: \"ucore\",\n                    amount: \"2000\"\n                }\n            ],\n            gas: \"200000\"\n        };\n        // Properly base64 encode the data\n        const data = btoa(modifyNftData); // Binary data in base64 format\n        try {\n            const account = await getAccountDetails();\n            const sequence = account ? account.sequence : undefined;\n            const result = await client.modifyData({\n                id: modifyNftId,\n                data\n            }, fee, \"Modify NFT Data\", []);\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"NFT data modified with transaction hash: \".concat(result.transactionHash));\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Failed to modify NFT data: \".concat(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_8__.Header, {}, void 0, false, {\n                fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-md p-4 bg-white rounded shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-4 py-2 font-bold \".concat(isMintMode ? \"text-white bg-blue-500\" : \"text-blue-500 bg-white\", \" rounded hover:bg-blue-700\"),\n                                        onClick: ()=>setIsMintMode(true),\n                                        children: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"px-4 py-2 font-bold \".concat(!isMintMode ? \"text-white bg-blue-500\" : \"text-blue-500 bg-white\", \" rounded hover:bg-blue-700\"),\n                                        onClick: ()=>setIsMintMode(false),\n                                        children: \"Modify NFT Data\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            isMintMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT ID\",\n                                        value: mintNftId,\n                                        onChange: (e)=>setMintNftId(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT Data\",\n                                        value: mintNftData,\n                                        onChange: (e)=>setMintNftData(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT URI\",\n                                        value: mintNftUri,\n                                        onChange: (e)=>setMintNftUri(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT URI Hash\",\n                                        value: mintNftUriHash,\n                                        onChange: (e)=>setMintNftUriHash(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700\",\n                                        onClick: mintNFT,\n                                        children: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT ID\",\n                                        value: modifyNftId,\n                                        onChange: (e)=>setModifyNftId(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"NFT Data\",\n                                        value: modifyNftData,\n                                        onChange: (e)=>setModifyNftData(e.target.value),\n                                        className: \"w-full px-4 py-2 border rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 159,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700\",\n                                        onClick: modifyNFTData,\n                                        children: \"Modify NFT Data\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                        fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jahanzebhussain/Documents/Cosmwasm-DynamicData/src/pages/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"/w1ziaMbWOs5gGunsLFpY4p0EDg=\", false, function() {\n    return [\n        _cosmos_kit_react__WEBPACK_IMPORTED_MODULE_2__.useChain\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Wiw4REFBQ0c7d0NBQ0NDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pDLE9BQU96Qzt3Q0FDUDBDLFVBQVUsQ0FBQ0MsSUFBTTFDLGtCQUFrQjBDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3Q0FDakROLFdBQVU7Ozs7OztrREFFWiw4REFBQ0M7d0NBQ0NELFdBQVU7d0NBQ1ZFLFNBQVN4QjtrREFDVjs7Ozs7Ozs7Ozs7cURBS0gsOERBQUNxQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaQyxPQUFPdkM7d0NBQ1B3QyxVQUFVLENBQUNDLElBQU14QyxlQUFld0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dDQUM5Q04sV0FBVTs7Ozs7O2tEQUVaLDhEQUFDRzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWkMsT0FBT3JDO3dDQUNQc0MsVUFBVSxDQUFDQyxJQUFNdEMsaUJBQWlCc0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dDQUNoRE4sV0FBVTs7Ozs7O2tEQUVaLDhEQUFDQzt3Q0FDQ0QsV0FBVTt3Q0FDVkUsU0FBU0w7a0RBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNUCw4REFBQ2hELDBEQUFjQTs7Ozs7Ozs7Ozs7OztBQUl2QjtHQXRLU0k7O1FBQ2NQLHVEQUFRQTs7O0tBRHRCTztBQXdLVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2hhaW4gfSBmcm9tIFwiQGNvc21vcy1raXQvcmVhY3RcIjtcbmltcG9ydCB7IGNoYWluTmFtZSB9IGZyb20gXCIuLi9jb25maWcvZGVmYXVsdHNcIjtcbmltcG9ydCB7IE15UHJvamVjdENsaWVudCB9IGZyb20gXCJAL2NvbnRyYWN0L3RzL015UHJvamVjdC5jbGllbnRcIjtcbmltcG9ydCB7IFN0ZEZlZSB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiOyAvLyBJbXBvcnQgVGFpbHdpbmQgQ1NTXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCBDT05UUkFDVF9BRERSRVNTID0gXCJ0ZXN0Y29yZTE4eTRqOHptNHFwZmVtdnIyMnpod2Q2bnpjNTRudWV6YXhmenlkajdxcTZyempnbXg2Y3FxNDBxamQ3XCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgY2hhaW5Db250ZXh0ID0gdXNlQ2hhaW4oY2hhaW5OYW1lKTtcbiAgY29uc3Qgd2FsbGV0QWRkcmVzcyA9IGNoYWluQ29udGV4dC5hZGRyZXNzID8/IFwiXCI7XG5cbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlPE15UHJvamVjdENsaWVudCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWludE5mdElkLCBzZXRNaW50TmZ0SWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW50TmZ0RGF0YSwgc2V0TWludE5mdERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW50TmZ0VXJpLCBzZXRNaW50TmZ0VXJpXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWludE5mdFVyaUhhc2gsIHNldE1pbnROZnRVcmlIYXNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kaWZ5TmZ0SWQsIHNldE1vZGlmeU5mdElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kaWZ5TmZ0RGF0YSwgc2V0TW9kaWZ5TmZ0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTWludE1vZGUsIHNldElzTWludE1vZGVdID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFN0YXRlIHRvIG1hbmFnZSBmb3JtIHRvZ2dsZVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdhbGxldEFkZHJlc3MpIHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25pbmdDbGllbnQgPSBhd2FpdCBjaGFpbkNvbnRleHQuZ2V0U2lnbmluZ0Nvc21XYXNtQ2xpZW50KCk7XG4gICAgICAgIHNldENsaWVudChuZXcgTXlQcm9qZWN0Q2xpZW50KHNpZ25pbmdDbGllbnQsIHdhbGxldEFkZHJlc3MsIENPTlRSQUNUX0FERFJFU1MpKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9LCBbd2FsbGV0QWRkcmVzcywgY2hhaW5Db250ZXh0XSk7XG5cbiAgY29uc3QgZ2V0QWNjb3VudERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2lnbmluZ0NsaWVudCA9IGF3YWl0IGNoYWluQ29udGV4dC5nZXRTaWduaW5nQ29zbVdhc21DbGllbnQoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgc2lnbmluZ0NsaWVudC5nZXRBY2NvdW50KHdhbGxldEFkZHJlc3MpO1xuICAgIHJldHVybiBhY2NvdW50O1xuICB9O1xuXG4gIGNvbnN0IG1pbnRORlQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjbGllbnQpIHJldHVybjtcblxuICAgIGNvbnN0IGZlZTogU3RkRmVlID0ge1xuICAgICAgYW1vdW50OiBbeyBkZW5vbTogXCJ1Y29yZVwiLCBhbW91bnQ6IFwiMjAwMFwiIH1dLFxuICAgICAgZ2FzOiBcIjIwMDAwMFwiLFxuICAgIH07XG5cbiAgICAvLyBQcm9wZXJseSBiYXNlNjQgZW5jb2RlIHRoZSBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGJ0b2EobWludE5mdERhdGEpOyAgLy8gQmluYXJ5IGRhdGEgaW4gYmFzZTY0IGZvcm1hdFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBnZXRBY2NvdW50RGV0YWlscygpO1xuICAgICAgY29uc3Qgc2VxdWVuY2UgPSBhY2NvdW50ID8gYWNjb3VudC5zZXF1ZW5jZSA6IHVuZGVmaW5lZDtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50Lm1pbnRNdXRhYmxlKHtcbiAgICAgICAgaWQ6IG1pbnROZnRJZCxcbiAgICAgICAgcmVjaXBpZW50OiB3YWxsZXRBZGRyZXNzLFxuICAgICAgICBkYXRhLFxuICAgICAgICB1cmk6IG1pbnROZnRVcmksXG4gICAgICAgIHVyaUhhc2g6IG1pbnROZnRVcmlIYXNoLFxuICAgICAgfSwgZmVlLCBcIk1pbnQgTkZUXCIsIFtdKTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoYE5GVCBtaW50ZWQgd2l0aCB0cmFuc2FjdGlvbiBoYXNoOiAke3Jlc3VsdC50cmFuc2FjdGlvbkhhc2h9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGBGYWlsZWQgdG8gbWludCBORlQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kaWZ5TkZURGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWNsaWVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZmVlOiBTdGRGZWUgPSB7XG4gICAgICBhbW91bnQ6IFt7IGRlbm9tOiBcInVjb3JlXCIsIGFtb3VudDogXCIyMDAwXCIgfV0sXG4gICAgICBnYXM6IFwiMjAwMDAwXCIsXG4gICAgfTtcblxuICAgIC8vIFByb3Blcmx5IGJhc2U2NCBlbmNvZGUgdGhlIGRhdGFcbiAgICBjb25zdCBkYXRhID0gYnRvYShtb2RpZnlOZnREYXRhKTsgIC8vIEJpbmFyeSBkYXRhIGluIGJhc2U2NCBmb3JtYXRcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZ2V0QWNjb3VudERldGFpbHMoKTtcbiAgICAgIGNvbnN0IHNlcXVlbmNlID0gYWNjb3VudCA/IGFjY291bnQuc2VxdWVuY2UgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5tb2RpZnlEYXRhKHtcbiAgICAgICAgaWQ6IG1vZGlmeU5mdElkLFxuICAgICAgICBkYXRhLFxuICAgICAgfSwgZmVlLCBcIk1vZGlmeSBORlQgRGF0YVwiLCBbXSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKGBORlQgZGF0YSBtb2RpZmllZCB3aXRoIHRyYW5zYWN0aW9uIGhhc2g6ICR7cmVzdWx0LnRyYW5zYWN0aW9uSGFzaH1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoYEZhaWxlZCB0byBtb2RpZnkgTkZUIGRhdGE6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgcC00IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBmb250LWJvbGQgJHtpc01pbnRNb2RlID8gXCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwXCIgOiBcInRleHQtYmx1ZS01MDAgYmctd2hpdGVcIn0gcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWludE1vZGUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbnQgTkZUXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIGZvbnQtYm9sZCAkeyFpc01pbnRNb2RlID8gXCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwXCIgOiBcInRleHQtYmx1ZS01MDAgYmctd2hpdGVcIn0gcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWludE1vZGUoZmFsc2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb2RpZnkgTkZUIERhdGFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc01pbnRNb2RlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTkZUIElEXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWludE5mdElkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWludE5mdElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTkZUIERhdGFcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXttaW50TmZ0RGF0YX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1pbnROZnREYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTkZUIFVSSVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21pbnROZnRVcml9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW50TmZ0VXJpKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTkZUIFVSSSBIYXNoXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWludE5mdFVyaUhhc2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW50TmZ0VXJpSGFzaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTcwMFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17bWludE5GVH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1pbnQgTkZUXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5GVCBJRFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21vZGlmeU5mdElkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW9kaWZ5TmZ0SWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJORlQgRGF0YVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21vZGlmeU5mdERhdGF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb2RpZnlOZnREYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgYmcteWVsbG93LTUwMCByb3VuZGVkIGhvdmVyOmJnLXllbGxvdy03MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGlmeU5GVERhdGF9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNb2RpZnkgTkZUIERhdGFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDaGFpbiIsImNoYWluTmFtZSIsIk15UHJvamVjdENsaWVudCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJIZWFkZXIiLCJDT05UUkFDVF9BRERSRVNTIiwiQXBwIiwiY2hhaW5Db250ZXh0Iiwid2FsbGV0QWRkcmVzcyIsImFkZHJlc3MiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJtaW50TmZ0SWQiLCJzZXRNaW50TmZ0SWQiLCJtaW50TmZ0RGF0YSIsInNldE1pbnROZnREYXRhIiwibWludE5mdFVyaSIsInNldE1pbnROZnRVcmkiLCJtaW50TmZ0VXJpSGFzaCIsInNldE1pbnROZnRVcmlIYXNoIiwibW9kaWZ5TmZ0SWQiLCJzZXRNb2RpZnlOZnRJZCIsIm1vZGlmeU5mdERhdGEiLCJzZXRNb2RpZnlOZnREYXRhIiwiaXNNaW50TW9kZSIsInNldElzTWludE1vZGUiLCJzaWduaW5nQ2xpZW50IiwiZ2V0U2lnbmluZ0Nvc21XYXNtQ2xpZW50IiwiZ2V0QWNjb3VudERldGFpbHMiLCJhY2NvdW50IiwiZ2V0QWNjb3VudCIsIm1pbnRORlQiLCJmZWUiLCJhbW91bnQiLCJkZW5vbSIsImdhcyIsImRhdGEiLCJidG9hIiwic2VxdWVuY2UiLCJ1bmRlZmluZWQiLCJyZXN1bHQiLCJtaW50TXV0YWJsZSIsImlkIiwicmVjaXBpZW50IiwidXJpIiwidXJpSGFzaCIsInN1Y2Nlc3MiLCJ0cmFuc2FjdGlvbkhhc2giLCJlcnJvciIsIm1lc3NhZ2UiLCJtb2RpZnlORlREYXRhIiwibW9kaWZ5RGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});