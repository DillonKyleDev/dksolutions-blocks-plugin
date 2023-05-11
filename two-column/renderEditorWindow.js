const { RichText } = wp.blockEditor;
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { moduleBase } from '../module-base/module.js';

export function renderFrontend(props) {
  const { attributes } = props;
  const styles = {
    backgroundColor: attributes.backgroundColor,
    paddingTop: attributes.paddingTop,
    paddingBottom: attributes.paddingBottom
  } 

  return moduleBase(renderContent(props), styles);
}

function renderContent(props) {
  const { attributes } = props;
  const blockProps = useBlockProps();

  return (
    <div className={`two-column two-column__column-gap--${attributes.columnGap}`}>
      <div className={`two-column__column two-column__column-type--${attributes.leftColumnContentType}`}>
        <div>
          { attributes.leftColumnContentType === 'content' &&          
          <div { ...blockProps }>
              <InnerBlocks.Content />       
          </div>
          }
          { attributes.leftColumnContentType === 'image' &&           
          <>
            <img src={attributes.leftImageUrl} />
          </>
          }
          { attributes.leftColumnContentType === 'video' &&           
          <>
            <img src={attributes.leftImageUrl} />
          </>
          }
        </div>
      </div>
      <div className={`two-column__column two-column__column-type--${attributes.rightColumnContentType}`}>
        <div>
          { attributes.rightColumnContentType === 'content' &&           
          <>
            {attributes.rightColumnContent.forEach(content => {
              <RichText.Content tagName="h2" value={ content } />
            })}   
          </>
          }
          { attributes.rightColumnContentType === 'image' &&           
          <>
            <img src={attributes.rightImageUrl} />
          </>
          }
          { attributes.rightColumnContentType === 'video' &&           
          <>
            <img src={attributes.rightImageUrl} />
          </>
          }
        </div>
      </div>
    </div>
  )
}