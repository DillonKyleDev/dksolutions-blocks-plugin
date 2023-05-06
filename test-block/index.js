import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

// const registerBlockType = require('@wordpress/blocks');
// const __ = require('@wordpress/blocks');
// const TextControl = require('@wordpress/blocks');

import {
    useBlockProps,
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';
// const useBlockProps = require('@wordpress/block-editor');
// const ColorPalette = require('@wordpress/block-editor');
// const InspectorControls = require('@wordpress/block-editor');

registerBlockType( 'dksolutions/test-block', {
    apiVersion: 2,
      title: "Two Column",
    attributes: {
        message: {
            type: 'string',
            source: 'text',
            selector: 'div',
            default: '', // empty default
        },
        bg_color: { type: 'string', default: '#000000' },
        text_color: { type: 'string', default: '#ffffff' },
    },
    edit: ( { attributes, setAttributes } ) => {
        const onChangeBGColor = ( hexColor ) => {
            setAttributes( { bg_color: hexColor } );
        };

        const onChangeTextColor = ( hexColor ) => {
            setAttributes( { text_color: hexColor } );
        };

        return /*#__PURE__*/React.createElement("div", useBlockProps(), /*#__PURE__*/React.createElement(InspectorControls, {
  key: "setting"
}, /*#__PURE__*/React.createElement("div", {
  id: "gutenpride-controls"
}, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", {
  className: "blocks-base-control__label"
}, __('Background color', 'gutenpride')), /*#__PURE__*/React.createElement(ColorPalette // Element Tag for Gutenberg standard colour selector
, {
  onChange: onChangeBGColor // onChange event callback
})), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", {
  className: "blocks-base-control__label"
}, __('Text color', 'gutenpride')), /*#__PURE__*/React.createElement(ColorPalette // Element Tag for Gutenberg standard colour selector
, {
  onChange: onChangeTextColor // onChange event callback
})))), /*#__PURE__*/React.createElement(TextControl, {
  value: attributes.message,
  onChange: val => setAttributes({
    message: val
  }),
  style: {
    backgroundColor: attributes.bg_color,
    color: attributes.text_color
  }
}));
    },
    save: () => {
      return null;
    },
} );
