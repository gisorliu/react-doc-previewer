import React, { useEffect, useRef, useState } from 'react';
import { read, utils } from 'xlsx';
import styles from './style.module.less';
import CanvasDatagrid from 'canvas-datagrid';

const XlsxViewer = (props) => {
  const { uri } = props;
  const viewConRef = useRef();
  const [selSheet, setSelSheet] = useState(-1);
  const [xlsContent, setXlsCOntent] = useState();
  const gridRef = useRef();

  useEffect(() => {
    if (uri) {
      (async () => {
        const f = await (await fetch(uri)).arrayBuffer();
        const wb = read(f);
        console.log(wb.Sheets);
        setXlsCOntent(wb);
        if (wb.SheetNames.length > 0) setSelSheet(0);
      })();
    }
  }, [uri]);

  useEffect(() => {
    if (selSheet > -1) {
      const ws = xlsContent.Sheets[xlsContent.SheetNames[selSheet]];
      gridRef.current.data = utils.sheet_to_json(ws, { header: 1 });
    }
  }, [selSheet, xlsContent]);

  useEffect(() => {
    if (!gridRef.current) {
      var grid = new CanvasDatagrid({
        parentNode: viewConRef.current,
        data: [],
        editable: false,
        showNewRow: true,
        showFilter: false,
        blanksText: '',
        showOrderByOption: false,
      });
      // 会多出一个容器高度？
      // grid.style.height = '100%';
      grid.style.width = '100%';
      gridRef.current = grid;
    }
  }, []);

  return (
    <div className={styles.xlsRoot}>
      <div className={styles.contentCon}>
        <div ref={viewConRef} />
      </div>
      <div className={styles.sheets}>
        {xlsContent &&
          xlsContent.SheetNames &&
          xlsContent.SheetNames.map((item, index) => (
            <div
              className={`${styles.sheetItem} ${selSheet === index && styles.sel}`}
              onClick={() => {
                setSelSheet(index);
              }}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default XlsxViewer;
