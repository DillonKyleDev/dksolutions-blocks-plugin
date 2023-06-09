const { RichText } = wp.blockEditor;

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

  return (
    <div className={`two-column two-column__column-gap--${attributes.columnGap}`}>
      <div className={`two-column__column two-column__column-type--${attributes.leftColumnContentType}`}>
        <div>
          { attributes.leftColumnContentType === 'content' &&  
            <>            
              <RichText.Content tagName="h2" value={ attributes.leftColumnContentHeading } />     
              <RichText.Content tagName="p" value={ attributes.leftColumnContentBody } />                     
            </>                                            
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
              <RichText.Content tagName="h2" value={ attributes.rightColumnContentHeading } />     
              <RichText.Content tagName="p" value={ attributes.rightColumnContentBody } />                     
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