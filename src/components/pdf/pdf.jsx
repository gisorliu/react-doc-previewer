import React from 'react';

const PDFViewer = (props) => {
  const { uri } = props;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* 三种方法 */}
      {/* <object data={uri} type='application/pdf' width='100%' height='100%' /> */}
      {/* <iframe src={uri} width='100%' height='100%' /> */}
      <embed src={uri} type='application/pdf' width='100%' height='100%'></embed>
    </div>
  );
};

export default PDFViewer;
