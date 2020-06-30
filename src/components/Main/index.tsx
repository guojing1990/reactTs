import React, { ComponentType } from 'react'
import { Layout } from 'antd';

import ContentMain from '../ContentMain'

import './index.scss'

const Main = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true)

  

  return (
    <Layout className="index__container">
      <Layout>
        <ContentMain />
      </Layout>
    </Layout>
  )
}


export default Main as ComponentType