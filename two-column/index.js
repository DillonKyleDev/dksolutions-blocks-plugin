const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } = wp.components;
 

wp.blocks.registerBlockType('dksolutions/two-column', {
  title: "Two Column",  
  icon: "block-default",
  category: "design",
  attributes: { 
    leftColumnContentType: { type: "string" },
    leftColumnContent: { type: "string" },
    rightColumnContentType: { type: "string" },
    rightColumnContent: { type: "string" },
    styles: {
      contentWidth: { type: "string" },
      backgroundColor: { type: "string" }      
    }
  },
  edit: function(props) {
    const { attributes, setAttributes } = props;

    return (
      <div>
        <InspectorControls>
          <PanelBody
						title="Styles"
						initialOpen={false}
					>
            <SelectControl              
              label="Content Width"
              value={attributes.styles.contentWidth}
              options={[
                {label: "Content", value: 'content'},
                {label: "Photo", value: 'photo'},
                {label: "Quote", value: 'quote'},
              ]}
              onChange={(newval) => setAttributes({ contentWidth: newval })}
            />
            <ColorPicker
              label="Background Color"
              color={attributes.styles.backgroundColor}
              onChangeComplete={(newval) => setAttributes({ backgroundColor: newval.hex })}              
            />
					</PanelBody>
					<PanelBody
						title="Left Column"
						initialOpen={true}
					>
            <SelectControl              
              label="Column Type"
              value={attributes.leftColumnContentType}
              options={[
                {label: "Content", value: 'content'},
                {label: "Photo", value: 'photo'},
                {label: "Quote", value: 'quote'},
              ]}
              onChange={(newval) => setAttributes({ leftColumnContentType: newval })}
            />
            <RichText
              label="Content"
              value={attributes.content}
            />
					</PanelBody>
          <PanelBody
						title="Right Column"
						initialOpen={false}
					>
            <SelectControl              
              label="Column Type"
              value={attributes.rightColumnContentType}
              options={[
                {label: "Content", value: 'content'},
                {label: "Photo", value: 'photo'},
                {label: "Quote", value: 'quote'},
              ]}
              onChange={(newval) => setAttributes({ rightColumnContentType: newval })}
            />
            <RichText
              label="Content"
              value={attributes.rightColumnContent}
            />
					</PanelBody>
				</InspectorControls>
        
        <form>
          <label>Company Name</label>
          <input type='text' value={props.attributes.companyName} placeholder='Company Name' onChange='handleName()'/>
          <label>Company Phone</label>
          <input type='text' value={props.attributes.companyPhone} placeholder='Company Phone' onChange='handlePhone()'/>
          <label>Company Address</label>
          <input type='text' value={props.attributes.companyAddress} placeholder='Company Name' onChange='handleAddress()'/>
        </form>
      </div>
    )
  },
  save: function(props) {
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