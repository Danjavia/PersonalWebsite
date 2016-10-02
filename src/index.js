import './index.html';
import './index.less';
import dva from 'dva';
import { browserHistory } from 'dva/router';

// import styles
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva({
    initialState: {
      posts: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
        { name: 'antd', id: 3 },
        { name: 'antd', id: 4 },
        { name: 'antd', id: 5 },
        { name: 'antd', id: 6 },
        { name: 'antd', id: 7 },
        { name: 'antd', id: 8 },
        { name: 'antd', id: 9 },
        { name: 'antd', id: 10 },
        { name: 'antd', id: 11 },
        { name: 'antd', id: 12 },
        { name: 'antd', id: 13 },
        { name: 'antd', id: 14 },
      ],
    },
});

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
