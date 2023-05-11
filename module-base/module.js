const { PanelBody, SelectControl, ColorPicker } = wp.components;
import { Component } from '@wordpress/element';

export function moduleBase(content, styles) {
  const { 
    backgroundColor,
    paddingTop,
    paddingBottom
  } = styles

  return (
    <div className={`module module__padding-top--${paddingTop} module__padding-bottom--${paddingBottom}`} style={{backgroundColor: backgroundColor}}>
      <div className="container">
        { content }      
      </div>      
    </div>
  );
}

export const moduleStyles = {
  backgroundType: { 
    type: "string",
    default: "color" 
  },
  backgroundColor: { 
    type: "string",
    default: "white" 
  },
  backgroundImage: { 
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
  },
}

export function renderModuleInspectorStyles(props) {
  const { attributes, setAttributes } = props;

  return (
    <PanelBody
      title="Styles"
      initialOpen={false}
    >
      <h2 className="field-heading">Padding Top</h2>
      <SelectControl              
        value={attributes.paddingTop}
        options={sizeOptions}
        onChange={(newval) => setAttributes({ paddingTop: newval })}
      />
      <h2 className="field-heading">Padding Bottom</h2>
      <SelectControl              
        value={attributes.paddingBottom}
        options={sizeOptions}
        onChange={(newval) => setAttributes({ paddingBottom: newval })}
      />
      <h2 className="field-heading">Background Color</h2>
      <ColorPicker
        label="Background Color"
        color={attributes.backgroundColor}
        onChangeComplete={(newval) => setAttributes({ backgroundColor: newval.hex })}              
      />
    </PanelBody>
  )
}

export const sizeOptions = [
  {label: "XXXS", value: 'xxxs'},
  {label: "XXS", value: 'xxs'},
  {label: "XS", value: 'xs'},
  {label: "Small", value: 'small'},
  {label: "Medium", value: 'medium'},
  {label: "Large", value: 'large'},
  {label: "XL", value: 'xl'},
  {label: "XXL", value: 'xxl'},
  {label: "XXXL", value: 'xxxl'},
]