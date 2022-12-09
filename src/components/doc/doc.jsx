import React, { useEffect, useRef } from 'react';
import * as docx from 'docx-preview';

const DocxViewer = (props) => {
  const { uri } = props;
  const viewConRef = useRef();

  useEffect(() => {
    if (uri) {
      fetch(uri).then((res) => {
        const doc = res.blob();
        var docxOptions = Object.assign(docx.defaultOptions, {
          useMathMLPolyfill: true,
        });
        //Render the Word Document.
        docx.renderAsync(doc, viewConRef.current, null, docxOptions);
      });
    }
  }, [uri]);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', position: 'relative' }}>
      <div style={{ left: 0, top: 0, width: '100%', position: 'absolute' }}>
        <div style={{ width: '100%' }} ref={viewConRef} />
      </div>
    </div>
  );
};

export default DocxViewer;
