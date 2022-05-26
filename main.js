(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../node_modules/worker-plugin/dist/loader.js?name=0!./SolcJs.worker.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/qazws/Desktop/台大/大三下/DAPP/FNP/SmartContractDapp_beta_v1/node_modules/worker-plugin/dist/loader.js?name=0!./SolcJs.worker.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompilingSmartContactDemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompilingSmartContactDemo */ "./components/CompilingSmartContactDemo/index.tsx");
/* harmony import */ var _components_LoginSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginSystem */ "./components/LoginSystem/index.tsx");
/* harmony import */ var _components_FunctionSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FunctionSystem */ "./components/FunctionSystem/index.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./app/styled.ts");
/* harmony import */ var sancho__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sancho */ "../../../node_modules/sancho/esm/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "../../../node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "../../../node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Home */ "../../../node_modules/@mui/icons-material/Home.js");
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/IconButton */ "../../../node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Link */ "../../../node_modules/@mui/material/Link/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\qazws\\Desktop\\\u53F0\u5927\\\u5927\u4E09\u4E0B\\DAPP\\FNP\\SmartContractDapp_beta_v1\\apps\\frontend\\src\\app\\app.tsx";













function Copyright() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Link__WEBPACK_IMPORTED_MODULE_11__["default"], {
      color: "inherit",
      href: "https://www.linkedin.com/in/ChiHaoLu/",
      children: "swfLAB - Mur**"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

function Body() {
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const theme = Object(sancho__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_StyledLayer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["DarkMode"], {
      children: darkTheme => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_StyledDiv, {
        $_css: darkTheme.colors.background.tint2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_StyledToolbar, {
          compressed: true,
          $_css2: theme.spaces.md,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
            sx: {
              mr: 2
            },
            href: "https://hackmd.io/@ChiHaoLu/HyTLOaRGc",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "home",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Text"], {
            variant: "h5",
            children: "Smart Contract Testing System"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Tabs"], {
          value: index,
          onChange: i => setIndex(i),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
            id: "you",
            children: "1. Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
            id: "sports",
            children: "2. Compile & Deploy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
            id: "about",
            children: "3. Dapp Functionality"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Pager"], {
      value: index,
      onRequestChange: i => setIndex(i),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
        id: "you",
        className: "Tab-panel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_LoginSystem__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
        id: "sports",
        className: "Tab-panel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_CompilingSmartContactDemo__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
        id: "about",
        className: "Tab-panel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_FunctionSystem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_5__["StyledApp"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Body, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        p: 6
      },
      component: "footer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variant: "subtitle1",
        align: "center",
        color: "text.secondary",
        component: "p",
        children: "110-2 CSIE-Decentralized Applications Design and Practice Final Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Copyright, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

var _StyledLayer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Layer"]).withConfig({
  displayName: "app___StyledLayer",
  componentId: "sc-1epm3ws-0"
})({
  overflow: "hidden"
});

var _StyledDiv = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("div").withConfig({
  displayName: "app___StyledDiv",
  componentId: "sc-1epm3ws-1"
})(p => ({
  background: p.$_css
}));

var _StyledToolbar = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(sancho__WEBPACK_IMPORTED_MODULE_6__["Toolbar"]).withConfig({
  displayName: "app___StyledToolbar",
  componentId: "sc-1epm3ws-2"
})(p => ({
  paddingTop: p.$_css2
}));

/***/ }),

/***/ "./app/styled.ts":
/*!***********************!*\
  !*** ./app/styled.ts ***!
  \***********************/
/*! exports provided: StyledApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledApp", function() { return StyledApp; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__StyledApp",
  componentId: "sc-9u2enm-0"
})(["font-family:sans-serif;min-width:300px;max-width:1024px;margin:50px auto;.gutter-left{margin-left:9px;}.col-span-2{grid-column:span 2;}.flex{display:flex;align-items:center;justify-content:center;}header{background-color:#143055;color:white;padding:5px;border-radius:3px;}main{padding:0 36px;}p{text-align:center;}h1{text-align:center;margin-left:18px;font-size:24px;}h2{margin:40px 0 10px 0;}.resources{text-align:center;list-style:none;padding:0;display:grid;grid-gap:9px;grid-template-columns:1fr 1fr;}.resource{color:#0094ba;height:36px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);border-radius:4px;padding:3px 9px;text-decoration:none;}.resource:hover{background-color:rgba(68,138,255,0.04);}pre{padding:9px;border-radius:4px;background-color:black;color:#eee;}details{border-radius:4px;color:#333;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0.12);padding:3px 9px;margin-bottom:9px;}summary{outline:none;height:36px;line-height:36px;}.github-star-container{margin-top:12px;line-height:20px;}.github-star-container a{display:flex;align-items:center;text-decoration:none;color:#333;}.github-star-badge{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,0.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600;}.github-star-badge:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:rgba(27,31,35,0.35);background-position:-0.5em;}.github-star-badge .material-icons{height:16px;width:16px;margin-right:4px;}"]);

/***/ }),

/***/ "./components/CompilingSmartContactDemo/contract.ts":
/*!**********************************************************!*\
  !*** ./components/CompilingSmartContactDemo/contract.ts ***!
  \**********************************************************/
/*! exports provided: SimpleStorageContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleStorageContact", function() { return SimpleStorageContact; });
const SimpleStorageContact = `// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
`;

/***/ }),

/***/ "./components/CompilingSmartContactDemo/index.tsx":
/*!********************************************************!*\
  !*** ./components/CompilingSmartContactDemo/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract */ "./components/CompilingSmartContactDemo/contract.ts");
/* harmony import */ var sancho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sancho */ "../../../node_modules/sancho/esm/index.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Alert */ "../../../node_modules/@mui/material/Alert/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "../../../node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Collapse */ "../../../node_modules/@mui/material/Collapse/index.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Close */ "../../../node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\qazws\\Desktop\\\u53F0\u5927\\\u5927\u4E09\u4E0B\\DAPP\\FNP\\SmartContractDapp_beta_v1\\apps\\frontend\\src\\components\\CompilingSmartContactDemo\\index.tsx";









const Web3 = __webpack_require__(/*! web3 */ "../../../../../../../../../node_modules/web3/lib/index.js");

const url = "https://eth-rinkeby.alchemyapi.io/v2/<YourProjectKey>";
const web3 = new Web3(url);

const CompilingSmartContractDemo = () => {
  const [compileResult_abi, setCompileResult_abi] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [compileResult_bytecode, setCompileResult_bytecode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [ABI, setABI] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [Bytecode, setBytecode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [compiling, setCompiling] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [deploying, setDeploying] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [flag, setFlag] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [deploybtn, setDeploybtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [contract, setContract] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_contract__WEBPACK_IMPORTED_MODULE_1__["SimpleStorageContact"]);
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [deploy_open, setDeployOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [deploySuccess, setDeploySuccess] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const compileWithWorker = async data => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__webpack__worker__0, undefined);
      worker.postMessage(data);

      worker.onmessage = function (event) {
        resolve(event.data);
      };

      worker.onerror = reject;
    });
  };

  const handleDeploy = async () => {
    setOpen(false);
    setDeploying(true); // const ganacheAccounts = await web3.eth.getAccounts();

    const now_user = await window.ethereum.request({
      method: "eth_requestAccounts"
    }).catch(err => {
      console.error(err);
    });
    const incrementer = new web3.eth.Contract(JSON.parse(ABI));
    const incrementerTx = incrementer.deploy({
      data: Bytecode,
      arguments: [5]
    });
    const transactionParameters = {
      from: now_user[0],
      // must match user's active address.
      data: incrementerTx.encodeABI() // Optional, but used for defining smart contract creation and interaction.

    }; // txHash is a hex string
    // As with any RPC call, it may throw an error

    try {
      const createTransaction = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
      });
      setMessage("https://rinkeby.etherscan.io/tx/" + createTransaction);
      setDeploySuccess(true);
    } catch (error) {
      setMessage("😥 - Something wrong: " + error.message);
      setDeploySuccess(false);
    }

    setDeployOpen(true);
    setDeploying(false);
  };

  const handleCompile = async () => {
    var abi = "";
    var bytecode = "";
    var forABI = "";
    setDeployOpen(false);
    setCompiling(true);
    setCompileResult_abi(abi);
    setCompileResult_bytecode(bytecode);
    let result;
    result = await compileWithWorker({
      content: contract
    });

    if (result.indexOf("errors") === -1) {
      var output = JSON.parse(result);

      for (var contractName in output.contracts['storage.sol']) {
        bytecode += contractName + ': \n' + output.contracts['storage.sol'][contractName].evm.bytecode.object + "\n\n"; // console.log(JSON.stringify(output.contracts['storage.sol'][contractName].evm.bytecode.object))

        setBytecode(output.contracts['storage.sol'][contractName].evm.bytecode.object);
        abi += contractName + ': \n[';
        var f = true;

        for (var abi_object in output.contracts['storage.sol'][contractName].abi) {
          if (!f) {
            forABI += ",";
            abi += ",";
          } else {
            forABI += "[";
            f = false;
          }

          abi += JSON.stringify(output.contracts['storage.sol'][contractName].abi[abi_object]);
          forABI += JSON.stringify(output.contracts['storage.sol'][contractName].abi[abi_object]);
        }

        forABI += "]";
        abi += "]\n\n";
        setABI(forABI);
      }
    }

    setCompileResult_abi(abi);
    setCompileResult_bytecode(bytecode);
    setCompiling(false);
    setOpen(true);

    if (abi.length > 25) {
      setDeploybtn(true);
      setFlag(true);
    } else {
      setDeploybtn(false);
      setFlag(false);
    }
  };

  const onChange = event => {
    setContract(event.currentTarget.value);
    console.log(contract);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "Solidity Source Code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
            value: contract,
            onChange: onChange,
            style: {
              width: '400px',
              height: '450px',
              resize: "none"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
            in: open && !compiling && flag,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
              severity: "success",
              action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: () => {
                  setOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  fontSize: "inherit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 19
              }, undefined),
              sx: {
                mb: 2
              },
              children: "Compile Successfully!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
            in: open && !compiling && !flag,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
              severity: "error",
              action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: () => {
                  setOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  fontSize: "inherit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, undefined),
              sx: {
                mb: 2
              },
              children: "Compile Failed!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
            in: deploy_open && deploySuccess && !deploying,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
              severity: "success",
              style: {
                width: '380px'
              },
              action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: () => {
                  setDeployOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  fontSize: "inherit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, undefined),
              sx: {
                mb: 2
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                children: ["\u2705 - Check your transaction on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                  target: "_blank",
                  href: message,
                  children: "Etherscan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 53
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
            in: deploy_open && !deploySuccess && !deploying,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
              severity: "error",
              style: {
                width: '380px'
              },
              action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: () => {
                  setDeployOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  fontSize: "inherit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 19
              }, undefined),
              sx: {
                mb: 2
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                children: message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          padding: '1em'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "outline",
          intent: "primary",
          className: "resource flex",
          onClick: handleCompile,
          disabled: compiling,
          children: compiling ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
            label: "Compiling...",
            center: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 26
          }, undefined) : 'Compile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, undefined), deploybtn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "outline",
          intent: "primary",
          className: "resource flex",
          onClick: handleDeploy,
          disabled: deploying,
          children: deploying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
            label: "Deploying...",
            center: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 28
          }, undefined) : 'Deploy'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "ABI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
            defaultValue: compileResult_abi,
            style: {
              width: '400px',
              height: '200px',
              resize: "none"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "Bytecode"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
            defaultValue: compileResult_bytecode,
            style: {
              width: '400px',
              height: '200px',
              resize: "none"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          variant: "uppercase",
          children: "Code Was Compiled By Latest Solidity Compiler"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          variant: "uppercase",
          children: "Please Set Your Internet to Rinkeby!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CompilingSmartContractDemo);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! C:/Users/qazws/Desktop/台大/大三下/DAPP/FNP/SmartContractDapp_beta_v1/node_modules/worker-plugin/dist/loader.js?name=0!../../SolcJs.worker.ts */ "../../../node_modules/worker-plugin/dist/loader.js?name=0!./SolcJs.worker.ts")))

/***/ }),

/***/ "./components/FunctionSystem/index.tsx":
/*!*********************************************!*\
  !*** ./components/FunctionSystem/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_abi2solidity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/abi2solidity */ "./utils/abi2solidity.tsx");
/* harmony import */ var sancho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sancho */ "../../../node_modules/sancho/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\qazws\\Desktop\\\u53F0\u5927\\\u5927\u4E09\u4E0B\\DAPP\\FNP\\SmartContractDapp_beta_v1\\apps\\frontend\\src\\components\\FunctionSystem\\index.tsx";


var Web3 = __webpack_require__(/*! web3 */ "../../../../../../../../../node_modules/web3/lib/index.js");

const web3 = new Web3("https://cloudflare-eth.com");




const FunctionSys = () => {
  const [ABI, setABI] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [interfaceABi, setinterface] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = event => {
    setABI(event.currentTarget.value);
    console.log(ABI);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
          children: "Your Contract ABI"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
            value: ABI,
            onChange: onChange,
            style: {
              width: '400px',
              height: '300px',
              resize: "none"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          padding: '1em'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "outline",
          intent: "primary",
          className: "resource flex",
          onClick: () => {
            setinterface(Object(_utils_abi2solidity__WEBPACK_IMPORTED_MODULE_1__["default"])(ABI));
          },
          children: "Transfer ABI To Interface"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
          children: "Contract Interface"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("textarea", {
            defaultValue: interfaceABi,
            style: {
              width: '400px',
              height: '200px',
              resize: "none"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(sancho__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          variant: "uppercase",
          children: "Interface can be used in your Solidity Dapp !"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FunctionSys);

/***/ }),

/***/ "./components/LoginSystem/index.tsx":
/*!******************************************!*\
  !*** ./components/LoginSystem/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ "../../../node_modules/@mui/material/Button/index.js");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metamask/detect-provider */ "../../../node_modules/@metamask/detect-provider/dist/index.js");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\qazws\\Desktop\\\u53F0\u5927\\\u5927\u4E09\u4E0B\\DAPP\\FNP\\SmartContractDapp_beta_v1\\apps\\frontend\\src\\components\\LoginSystem\\index.tsx";




/*****************************************/

/* Detect the MetaMask Ethereum provider */

/*****************************************/
 // this returns the provider, or null if it wasn't detected



const provider = async () => {
  await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();
};

if (provider) {
  startApp(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  } // Access the decentralized web!

}

const LoginSys = () => {
  const [isLoging, setIsLoging] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /**********************************************************/

  /* Handle chain (network) and chainChanged (per EIP-1193) */

  /**********************************************************/

  const [chainId, setChainId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // const chainId = async () => { await (window).ethereum.request({ method: 'eth_chainId' }); }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoging) {
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.request({
        method: 'eth_chainId'
      }).then(newChain => setChainId(newChain)).catch(err => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
    }
  }, []);

  function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
    window.ethereum.request({
      method: 'eth_chainId'
    }).then(newChain => setChainId(newChain)).catch(err => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
  }
  /***********************************************************/

  /* Handle user accounts and accountsChanged (per EIP-1193) */

  /***********************************************************/


  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== user) {
      setUser(accounts[0]); // Do any other work!
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoging) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.request({
        method: 'eth_requestAccounts'
      }).then(newAccounts => setUser(newAccounts[0])).catch(err => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
    }
  }, []);

  const Login = () => {
    window.ethereum.request({
      method: 'eth_requestAccounts'
    }).then(newAccounts => setUser(newAccounts[0])).catch(err => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
    window.ethereum.request({
      method: 'eth_chainId'
    }).then(newChain => setChainId(newChain)).catch(err => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
    setIsLoging(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [!isLoging && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        sx: {
          m: 2,
          width: '26.5ch'
        },
        onClick: () => {
          Login();
        },
        variant: "contained",
        children: "Login by Metamask"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 20
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }, undefined), isLoging && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: ["User: ", user, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        children: ["ChainID: ", chainId]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginSys);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\qazws\\Desktop\\\u53F0\u5927\\\u5927\u4E09\u4E0B\\DAPP\\FNP\\SmartContractDapp_beta_v1\\apps\\frontend\\src\\main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ "./utils/abi2solidity.tsx":
/*!********************************!*\
  !*** ./utils/abi2solidity.tsx ***!
  \********************************/
/*! exports provided: ABI2SolidityFiles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABI2SolidityFiles", function() { return ABI2SolidityFiles; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ 25);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);


function getInOrOut(inputs) {
  let out = '';

  for (let i = 0; i < inputs.length; i += 1) {
    out += inputs[i].type;

    if (inputs[i].name) {
      out += ` ${inputs[i].name}`;
    }

    if (i !== inputs.length - 1) {
      out += ', ';
    }
  }

  return out;
}

function getMethodInterface(method) {
  const out = []; // Type
  // Interfaces limitation: https://solidity.readthedocs.io/en/v0.4.24/contracts.html#interfaces

  if (method.type !== 'function') {
    return null;
  }

  out.push(method.type); // Name

  if (method.name) {
    out.push(method.name);
  } // Inputs


  out.push('(');
  out.push(getInOrOut(method.inputs));
  out.push(')'); // Functions in ABI are either public or external and there is no difference in the ABI

  out.push('external'); // State mutability

  if (method.stateMutability === 'pure') {
    out.push('pure');
  } else if (method.stateMutability === 'view') {
    out.push('view');
  } else if (method.stateMutability === 'pure') {
    out.push('pure');
  } // Payable


  if (method.payable) {
    out.push('payable');
  } // Outputs


  if (method.outputs && method.outputs.length > 0) {
    out.push('returns');
    out.push('(');
    out.push(getInOrOut(method.outputs));
    out.push(')');
  }

  return out.join(' ');
}

function ABI2Solidity(abi) {
  const HEADER = 'interface GeneratedInterface {\n';
  const FOOTER = '}\n';
  const jsonABI = JSON.parse(abi);
  let out = HEADER;

  for (let i = 0; i < jsonABI.length; i += 1) {
    const method = jsonABI[i];
    const methodString = getMethodInterface(method);

    if (methodString) {
      out += `  ${getMethodInterface(method)};\n`;
    }
  }

  return out + FOOTER;
}

function ABI2SolidityFiles(input, output) {
  fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](input, {
    encoding: 'utf8'
  }, (err, abi) => {
    if (err) {
      console.error(err);
      return;
    }

    const solidity = ABI2Solidity(abi);

    if (output === '') {
      // default to stdout
      console.log('------------ Solidity interface:');
      console.log(solidity);
    } else {
      fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"](output, solidity, err2 => {
        if (err2) console.error(err2);
      });
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ABI2Solidity);

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\qazws\Desktop\台大\大三下\DAPP\FNP\SmartContractDapp_beta_v1\apps\frontend\src\main.tsx */"./main.tsx");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 14:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 16:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 17:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 18:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 19:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 20:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 21:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 22:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 23:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 24:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 25:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map