import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, price, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items.slice(0, 4).map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
