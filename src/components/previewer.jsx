import React, { useEffect, useState } from 'react';
import PDFViewer from './pdf/pdf.jsx';
import DocxViewer from './doc/doc.jsx';
import XlsxViewer from './xls/xls.jsx';
import styles from './style.module.less';

/**
 *
 * @param {{docFiles:Array<String>}} props
 * @returns
 */
const Previewer = (props) => {
  const { docFiles } = props;
  const supportedFile = ['.pdf', '.xlsx', '.docx'];
  const [fileNames, setFileNames] = useState([]);
  const [selFile, setSelFile] = useState();
  const [selFileType, setSelFileType] = useState();
  useEffect(() => {
    if (docFiles && docFiles.length > 0) {
      const names = docFiles.map((file) => {
        const indx = file.lastIndexOf('/');
        return {
          name: file.substring(indx + 1),
          path: file,
        };
      });
      setFileNames(names);
      setSelFile(docFiles[0]);
    }
  }, [docFiles]);

  useEffect(() => {
    if (selFile) {
      const indx = selFile.lastIndexOf('.');
      const ext = selFile.substring(indx);
      console.log(ext);
      if (supportedFile.includes(ext)) {
        setSelFileType(ext);
      } else {
        setSelFileType('');
      }
    }
  }, [selFile]);

  return (
    <div className={styles.rootView}>
      <div className={styles.names}>
        {fileNames.map((n) => (
          <div
            className={`${styles.nameItem} ${n.path === selFile && styles.sel}`}
            onClick={() => {
              setSelFile(n.path);
            }}
          >
            {n.name}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {selFileType === '' && (
          <div style={{ lineHeight: '110px', color: 'gray' }}>
            File types that cannot be supported
          </div>
        )}
        {selFileType?.toLowerCase() === supportedFile[0] && <PDFViewer uri={selFile} />}
        {selFileType?.toLowerCase() === supportedFile[1] && <XlsxViewer uri={selFile} />}
        {selFileType?.toLowerCase() === supportedFile[2] && <DocxViewer uri={selFile} />}
      </div>
    </div>
  );
};

export default Previewer;
