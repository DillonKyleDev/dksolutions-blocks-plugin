const { PanelBody, SelectControl, ColorPicker } = wp.components;

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
  backgroundColor: { 
    type: "string",
    default: "white" 
  },
  paddingTop: { 
    type: "string",
    default: "xs" 
},
  paddingBottom: { 
    type: "string",
    default: "xs"  
},
}

export function renderModuleInspectorStyles(props) {
  const { attributes, setAttributes } = props;

  return (
    <PanelBody
      title="Styles"
      initialOpen={false}
    >
      <h2>Content Width</h2>
      <SelectControl              
        value={attributes.contentWidth}
        options={[
          {label: "Content", value: 'content'},
          {label: "Photo", value: 'photo'},
          {label: "Quote", value: 'quote'},
        ]}
        onChange={(newval) => setAttributes({ contentWidth: newval })}
      />
      <h2>Padding Top</h2>
      <SelectControl              
        value={attributes.paddingTop}
        options={sizeOptions}
        onChange={(newval) => setAttributes({ paddingTop: newval })}
      />
      <h2>Padding Bottom</h2>
      <SelectControl              
        value={attributes.paddingBottom}
        options={sizeOptions}
        onChange={(newval) => setAttributes({ paddingBottom: newval })}
      />
      <h2>Block Background Color</h2>
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