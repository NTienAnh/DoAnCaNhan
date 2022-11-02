import React from 'react'
import { Tabs, Input, Layout } from 'antd';
import '../Dashboard/index.css';

const { TabPane } = Tabs;
const { Search } = Input;
const { Content } = Layout;

export default function index() {

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <h2>Bảng điều khiển</h2>
      {/* Search */}

      <div style={{ minWidth: '200px', width: '20%', marginLeft: '23px' }}>
        <Search placeholder="Nhập tìm kiếm theo tên" enterButton />
      </div>

      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              // marginLeft: 15
            }}
          >
            {/* <Routes>
                            {showContentMenu(routes)}
                        </Routes> */}
            Content tab 1
          </Content>
        </TabPane>

        <TabPane tab="Tab 2" key="2">
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              // marginLeft: 15
            }}
          >
            {/* <Routes>
                            {showContentMenu(routes)}
                        </Routes> */}
            Content tab 2
          </Content>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              // marginLeft: 15
            }}
          >
            {/* <Routes>
                            {showContentMenu(routes)}
                        </Routes> */}
            Content tab 3
          </Content>
        </TabPane>
      </Tabs>
    </div>
  )
}
