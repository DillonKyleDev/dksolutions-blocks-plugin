/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./two-column/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InspectorControls
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker
} = wp.components;
wp.blocks.registerBlockType('dksolutions/two-column', {
  title: "Two Column",
  icon: "block-default",
  category: "design",
  attributes: {
    leftColumnContentType: {
      type: "string"
    },
    leftColumnContent: {
      type: "string"
    },
    rightColumnContentType: {
      type: "string"
    },
    rightColumnContent: {
      type: "string"
    },
    styles: {
      contentWidth: {
        type: "string"
      },
      backgroundColor: {
        type: "string"
      }
    }
  },
  edit: function (props) {
    const {
      attributes,
      setAttributes
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Styles",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Content Width",
      value: attributes.styles.contentWidth,
      options: [{
        label: "Content",
        value: 'content'
      }, {
        label: "Photo",
        value: 'photo'
      }, {
        label: "Quote",
        value: 'quote'
      }],
      onChange: newval => setAttributes({
        contentWidth: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      label: "Background Color",
      color: attributes.styles.backgroundColor,
      onChangeComplete: newval => setAttributes({
        backgroundColor: newval.hex
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Left Column",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Column Type",
      value: attributes.leftColumnContentType,
      options: [{
        label: "Content",
        value: 'content'
      }, {
        label: "Photo",
        value: 'photo'
      }, {
        label: "Quote",
        value: 'quote'
      }],
      onChange: newval => setAttributes({
        leftColumnContentType: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      label: "Content",
      value: attributes.content
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Right Column",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Column Type",
      value: attributes.rightColumnContentType,
      options: [{
        label: "Content",
        value: 'content'
      }, {
        label: "Photo",
        value: 'photo'
      }, {
        label: "Quote",
        value: 'quote'
      }],
      onChange: newval => setAttributes({
        rightColumnContentType: newval
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      label: "Content",
      value: attributes.rightColumnContent
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Company Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: props.attributes.companyName,
      placeholder: "Company Name",
      onChange: "handleName()"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Company Phone"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: props.attributes.companyPhone,
      placeholder: "Company Phone",
      onChange: "handlePhone()"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Company Address"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: props.attributes.companyAddress,
      placeholder: "Company Name",
      onChange: "handleAddress()"
    })));
  },
  save: function (props) {
    return React.createElement("div", {
      class: "company-information"
    }, React.createElement("h2", {
      class: "info-h2"
    }, "Company Information"), React.createElement("h3", {
      class: "info-h3"
    }, "Company: ", props.attributes.companyName), React.createElement("h3", {
      class: "info-h3"
    }, "Phone: ", props.attributes.companyPhone), React.createElement("h3", {
      class: "info-h3"
    }, "Address: ", props.attributes.companyAddress));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map