# Smart Table

#### Dependencies

- [history](https://www.npmjs.com/package/history)
- [lodash.get](https://www.npmjs.com/package/lodash.get)

#### Usage

```jsx
import { BrowserRouter } from 'react-router-dom';

const datas = [{ balance: 1 }, { balance: 1 }];
const cols = [
  { key: '_id', label: 'ID', primary: true },
  { key: 'balance', label: 'balance' },
];

const Layout = ({ datas }) => (
  <BrowserRouter>
    <SmartTable cols={cols} provider={datas} />
  </BrowserRouter>
);
```
