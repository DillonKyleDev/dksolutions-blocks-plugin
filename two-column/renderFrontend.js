const { RichText } = wp.blockEditor;

import { moduleBase } from '../module-base/module.js';

export function renderFrontend(props, in_editor_ = false) {
  const { attributes } = props;
  const styles = {
    backgroundColor: attributes.backgroundColor,
    paddingTop: attributes.paddingTop,
    paddingBottom: attributes.paddingBottom
  } 

  return moduleBase(renderContent(props, in_editor_), styles);
}

function renderContent(props, in_editor_) {
  const { attributes } = props;

  return (
    <div className={`two-column two-column__column-gap--${attributes.columnGap}`}>
      <div className={`two-column__column two-column__column-type--${attributes.leftColumnContentType}`}>
        <div>
          { attributes.leftColumnContentType === 'content' &&          
          <>                      
            <RichText.Content value={ attributes.leftColumnContent } />
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
            { attributes.rightColumnContent}
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