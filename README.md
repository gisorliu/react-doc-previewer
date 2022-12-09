# react-doc-previewer

preview documents : pdf、docx、xlsx

# start demo

```shell
yarn
yarn dev
```

# publish

```shell
yarn pub
```

# usage

```shell
yarn add react-doc-previewer canvas-datagrid docx-preview xlsx
```

```jsx
import Previewer from 'react-doc-previewer';
...
<Previewer
    docFiles={[
        `${window.location.origin}/测试—demo.pdf`,
        `${window.location.origin}/测试—demo.docx`,
        `${window.location.origin}/测试—demo.xlsx`,
    ]}
/>
```
