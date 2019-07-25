import React from "react"

export default ({ pageContext }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </div>
);
