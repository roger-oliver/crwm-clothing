import React from 'react';
import CollectionItem from '../collection-item/colletion-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          // these part will always be called when the object is rerendered.
          // performance concern!!!
          items
            .filter((_, index) => index < 4)
            .map((item) => {
            return (
              <CollectionItem key={item.id} item={item}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default CollectionPreview;