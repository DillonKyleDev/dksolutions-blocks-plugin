const { RichText, InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

import { renderModuleInspectorStyles, sizeOptions } from '../module-base/module.js';
import { renderFrontend } from './renderFrontend.js';

export function renderEdit(props) {
  const { attributes, setAttributes } = props;   

  return (
    <div>
      <InspectorControls>
        {renderModuleInspectorStyles(props)}
        <PanelBody
          title="Columns Settings"
          initialOpen={true}
        >
          <h2 className="field-heading">Column Gap</h2>
          <SelectControl
            value={attributes.columnGap}
            options={ sizeOptions }
            onChange={(newval) => setAttributes({ columnGap: newval }) }
          />
        
          <PanelBody
            title="Left Column"
            initialOpen={false}
          >
            <h2 className="field-heading">Content Type</h2>
            <SelectControl
              value={attributes.leftColumnContentType}
              options={ [
                  { label: 'Content', value: 'content' },
                  { label: 'Image', value: 'image' },
                  { label: 'Video', value: 'video' },
              ] }
              onChange={(newval) => setAttributes({ leftColumnContentType: newval }) }
            />
            { attributes.leftColumnContentType === 'content' &&
            <>
              <h2 className="field-heading">Left Column Content</h2>
              <RichText       
                tagName="h2"       
                value={attributes.leftColumnContent}
                onChange={(newval) => setAttributes({ leftColumnContent: newval })}
              />
            </> 
            }
            { attributes.leftColumnContentType === 'image' &&
            <>
              <h2 className="field-heading">Left Column Image</h2>
              <RichText              
                value={attributes.leftImageUrl}
                onChange={(newval) => setAttributes({ leftImageUrl: newval })}
              />
            </>
            }
            { attributes.rightColumnContentType === 'video' &&
            <>
              <h2 className="field-heading">Left Column Video</h2>
              <RichText              
                value={attributes.leftVideoUrl}
                onChange={(newval) => setAttributes({ leftVideoUrl: newval })}
              />
            </>
            }
          </PanelBody>
          <PanelBody
            title="Right Column"
            initialOpen={false}
          >
            <h2 className="field-heading">Content Type</h2>
            <SelectControl
              value={attributes.rightColumnContentType}
              options={ [
                  { label: 'Content', value: 'content' },
                  { label: 'Image', value: 'image' },
                  { label: 'Video', value: 'video' },
              ] }
              onChange={(newval) => setAttributes({ rightColumnContentType: newval }) }
            />
            { attributes.rightColumnContentType === 'content' &&
            <>
              <h2 className="field-heading">Right Column Content</h2>
              <RichText              
                value={attributes.rightColumnContent}
                onChange={(newval) => setAttributes({ rightColumnContent: newval })}
              />
            </> 
            }
            { attributes.rightColumnContentType === 'image' &&
            <>
              <h2 className="field-heading">Right Column Image</h2>
              <RichText              
                value={attributes.rightImageUrl}
                onChange={(newval) => setAttributes({ rightImageUrl: newval })}
              />
            </>
            }
            { attributes.rightColumnContentType === 'video' &&
            <>
              <h2 className="field-heading">Right Column Video</h2>
              <RichText              
                value={attributes.rightVideoUrl}
                onChange={(newval) => setAttributes({ rightVideoUrl: newval })}
              />
            </>
            }
          </PanelBody> 
        </PanelBody>
      </InspectorControls>        
      {renderFrontend(props, true)}
    </div>
  )
}