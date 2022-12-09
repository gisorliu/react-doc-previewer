import React from 'react';
// import PDFViewer from './components/pdf/pdf.jsx';
// import DocxViewer from './components/doc/doc.jsx';
// import XlsxViewer from './components/xls/xls.jsx';
import Previewer from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div style={{ width: '900px', height: '600px' }}>
        <Previewer
          docFiles={[
            `${window.location.origin}/测试—demo.pdf`,
            `${window.location.origin}/测试—demo.docx`,
            `${window.location.origin}/测试—demo.xlsx`,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
