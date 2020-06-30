import React from 'react'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { ConfigProvider } from 'antd'

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Routes from '../routes'
moment.locale('zh-cn');



const App = () => (
  <div>
    <ConfigProvider locale={zhCN}>
      <Router>
          <Routes />
      </Router>
    </ConfigProvider>
  </div>
)

export default App
