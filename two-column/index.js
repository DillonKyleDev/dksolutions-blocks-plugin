wp.blocks.registerBlockType('dksolutions/two-column', {
  title: "Two Column",
  // On the dashicons website it is 'dashicons-block-default' but we remove the 'dashicons-' part for this.
  icon: "block-default",
  category: "design",
  attributes: { 
    companyName: { type: "string" },
    companyPhone: { type: "string" },
    companyAddress: { type: "string" },
    // Go here for info on adding editor fields
    // https://awhitepixel.com/blog/add-custom-settings-to-existing-wordpress-gutenberg-blocks/
    // Advanced tab fields
    isChecked: { type: "bool" }
  },
  edit: function(props) {
    const { InspectorAdvancedControls } = wp.blockEditor;

    function handleName(e) {      
      props.setAttributes({ companyName: e.target.value })
    }
    function handlePhone(e) {      
      props.setAttributes({ companyPhone: e.target.value })
    }
    function handleAddress(e) {      
      props.setAttributes({ companyAddress: e.target.value })
    }    

    return (
      <div>
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