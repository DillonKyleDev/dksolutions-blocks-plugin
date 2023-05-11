/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module-base/module.js":
/*!*******************************!*\
  !*** ./module-base/module.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleBase": function() { return /* binding */ moduleBase; },
/* harmony export */   "moduleStyles": function() { return /* binding */ moduleStyles; },
/* harmony export */   "renderModuleInspectorStyles": function() { return /* binding */ renderModuleInspectorStyles; },
/* harmony export */   "sizeOptions": function() { return /* binding */ sizeOptions; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  PanelBody,
  SelectControl,
  ColorPicker
} = wp.components;
function moduleBase(content, styles) {
  const {
    backgroundColor,
    paddingTop,
    paddingBottom
  } = styles;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `module module__padding-top--${paddingTop} module__padding-bottom--${paddingBottom}`,
    style: {
      backgroundColor: backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, content));
}
const moduleStyles = {
  backgroundColor: {
    type: "string",
    default: "white"
  },
  paddingTop: {
    type: "string",
    default: "medium"
  },
  paddingBottom: {
    type: "string",
    default: "medium"
  }
};
function renderModuleInspectorStyles(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Styles",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Padding Top"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: attributes.paddingTop,
    options: sizeOptions,
    onChange: newval => setAttributes({
      paddingTop: newval
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Padding Bottom"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: attributes.paddingBottom,
    options: sizeOptions,
    onChange: newval => setAttributes({
      paddingBottom: newval
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Background Color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
    label: "Background Color",
    color: attributes.backgroundColor,
    onChangeComplete: newval => setAttributes({
      backgroundColor: newval.hex
    })
  }));
}
const sizeOptions = [{
  label: "XXXS",
  value: 'xxxs'
}, {
  label: "XXS",
  value: 'xxs'
}, {
  label: "XS",
  value: 'xs'
}, {
  label: "Small",
  value: 'small'
}, {
  label: "Medium",
  value: 'medium'
}, {
  label: "Large",
  value: 'large'
}, {
  label: "XL",
  value: 'xl'
}, {
  label: "XXL",
  value: 'xxl'
}, {
  label: "XXXL",
  value: 'xxxl'
}];

/***/ }),

/***/ "./two-column/block.js":
/*!*****************************!*\
  !*** ./two-column/block.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const moduleAttributes = {
  columnGap: {
    type: "string",
    default: "medium"
  },
  leftColumnContentType: {
    type: "string",
    default: "image"
  },
  rightColumnContentType: {
    type: "string",
    default: "content"
  },
  leftColumnContent: {
    type: "array"
  },
  rightColumnContent: {
    type: "array"
  },
  leftImageUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
    default: 'https://ten-fingers-local.local/wp-content/uploads/2023/04/Earth.Day_2023_1.jpg'
  },
  rightImageUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
    default: 'https://ten-fingers-local.local/wp-content/uploads/2023/04/Earth.Day_2023_1.jpg'
  },
  leftVideoUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'video',
    attribute: 'src',
    default: 'https://www.youtube.com/watch?v=CTV-wwszGw8&ab_channel=NotJustBikes'
  },
  rightVideoUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'video',
    attribute: 'src',
    default: 'https://www.youtube.com/watch?v=CTV-wwszGw8&ab_channel=NotJustBikes'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (moduleAttributes);

/***/ }),

/***/ "./two-column/renderEdit.js":
/*!**********************************!*\
  !*** ./two-column/renderEdit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEdit": function() { return /* binding */ renderEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_base_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module-base/module.js */ "./module-base/module.js");
/* harmony import */ var _renderFrontend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFrontend.js */ "./two-column/renderFrontend.js");

const {
  RichText,
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl
} = wp.components;


function renderEdit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_module_base_module_js__WEBPACK_IMPORTED_MODULE_1__.renderModuleInspectorStyles)(props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Columns Settings",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Column Gap"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: attributes.columnGap,
    options: _module_base_module_js__WEBPACK_IMPORTED_MODULE_1__.sizeOptions,
    onChange: newval => setAttributes({
      columnGap: newval
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Left Column",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Content Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: attributes.leftColumnContentType,
    options: [{
      label: 'Content',
      value: 'content'
    }, {
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video',
      value: 'video'
    }],
    onChange: newval => setAttributes({
      leftColumnContentType: newval
    })
  }), attributes.leftColumnContentType === 'content' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Left Column Content"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "h2",
    value: attributes.leftColumnContent,
    onChange: newval => setAttributes({
      leftColumnContent: newval
    })
  })), attributes.leftColumnContentType === 'image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Left Column Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: attributes.leftImageUrl,
    onChange: newval => setAttributes({
      leftImageUrl: newval
    })
  })), attributes.rightColumnContentType === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Left Column Video"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: attributes.leftVideoUrl,
    onChange: newval => setAttributes({
      leftVideoUrl: newval
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: "Right Column",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Content Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: attributes.rightColumnContentType,
    options: [{
      label: 'Content',
      value: 'content'
    }, {
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video',
      value: 'video'
    }],
    onChange: newval => setAttributes({
      rightColumnContentType: newval
    })
  }), attributes.rightColumnContentType === 'content' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Right Column Content"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: attributes.rightColumnContent,
    onChange: newval => setAttributes({
      rightColumnContent: newval
    })
  })), attributes.rightColumnContentType === 'image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Right Column Image"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: attributes.rightImageUrl,
    onChange: newval => setAttributes({
      rightImageUrl: newval
    })
  })), attributes.rightColumnContentType === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "field-heading"
  }, "Right Column Video"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    value: attributes.rightVideoUrl,
    onChange: newval => setAttributes({
      rightVideoUrl: newval
    })
  }))))), (0,_renderFrontend_js__WEBPACK_IMPORTED_MODULE_2__.renderFrontend)(props, true));
}

/***/ }),

/***/ "./two-column/renderFrontend.js":
/*!**************************************!*\
  !*** ./two-column/renderFrontend.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFrontend": function() { return /* binding */ renderFrontend; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_base_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module-base/module.js */ "./module-base/module.js");

const {
  RichText
} = wp.blockEditor;

function renderFrontend(props) {
  let in_editor_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    attributes
  } = props;
  const styles = {
    backgroundColor: attributes.backgroundColor,
    paddingTop: attributes.paddingTop,
    paddingBottom: attributes.paddingBottom
  };
  return (0,_module_base_module_js__WEBPACK_IMPORTED_MODULE_1__.moduleBase)(renderContent(props, in_editor_), styles);
}
function renderContent(props, in_editor_) {
  const {
    attributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `two-column two-column__column-gap--${attributes.columnGap}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `two-column__column two-column__column-type--${attributes.leftColumnContentType}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.leftColumnContentType === 'content' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    value: attributes.leftColumnContent
  })), attributes.leftColumnContentType === 'image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.leftImageUrl
  })), attributes.leftColumnContentType === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.leftImageUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `two-column__column two-column__column-type--${attributes.rightColumnContentType}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.rightColumnContentType === 'content' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, attributes.rightColumnContent), attributes.rightColumnContentType === 'image' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.rightImageUrl
  })), attributes.rightColumnContentType === 'video' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.rightImageUrl
  })))));
}

/***/ }),

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
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./two-column/block.js");
/* harmony import */ var _renderEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEdit */ "./two-column/renderEdit.js");
/* harmony import */ var _renderFrontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFrontend */ "./two-column/renderFrontend.js");
/* harmony import */ var _module_base_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module-base/module.js */ "./module-base/module.js");
const {
  registerBlockType
} = wp.blocks;




registerBlockType('dksolutions/two-column', {
  title: "Two Column Block",
  icon: "block-default",
  category: "design",
  attributes: {
    ..._block__WEBPACK_IMPORTED_MODULE_0__["default"],
    // Default module style attributes
    ..._module_base_module_js__WEBPACK_IMPORTED_MODULE_3__.moduleStyles
  },
  edit: _renderEdit__WEBPACK_IMPORTED_MODULE_1__.renderEdit,
  save: _renderFrontend__WEBPACK_IMPORTED_MODULE_2__.renderFrontend
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map