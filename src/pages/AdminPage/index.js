import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Modal,
  Button,
  Drawer,
  Dropdown,
  Form,
  Select,
  Table,
  Image,
  Switch,
  notification,
} from "antd";
import React, { useState, useEffect } from "react";
import "../../pages/AdminPage/index.css";
import routes from "../../routes";
import { Route, Routes, useNavigate, Link, Outlet } from "react-router-dom";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  LogoutOutlined,
  RedditOutlined,
  CheckOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import {
  selectLoading,
  selectContent,
  selectDetailContent,
} from "./store/selector";

import {
  getAllContent,
  asyncGetDetailContentAction,
  asyncCreateContent,
  asyncDeleteContent,
  asyncUpdateContent,
} from "./store/action";

import { createStructuredSelector } from "reselect";
import { icons } from "antd/lib/image/PreviewGroup";
import { type } from "@testing-library/user-event/dist/type";
import { compose } from "recompose";
import { connect } from "react-redux";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const AdminPage = (props) => {
  // Map State to Props
  const { listContent, isLoading } = props;
  const navigate = useNavigate();
  const {
    zingNewContent,
    createNewContent,
    deleteContent,
    updateContentItem,
    detailsContent,
  } = props; //dispatch

  // Lấy thông tin user ( key value) từ Local Storage

  // Toggle Sider
  const [collapsed, setcollapsed] = useState(false);
  const toggle = () => {
    setcollapsed(!collapsed);
  };
  // Ẩn hiện moldal
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Check label title: Create or Edit
  const [createBtn, setcreateBtn] = useState(true);
  // Form Hook
  const [formModal] = Form.useForm();
  // const [formModal2] = Form.useForm();
  // Columns of table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "Show content",
      dataIndex: "isShow",
      key: "isShow",
      align: "center",
      render: (e, record) => {
        return (
          <Switch
            className="switch-show"
            // checked={e}
            defaultChecked={e}
            onChange={(values) => handleSwitch(values, record)}
            // defaultChecked={true}
          ></Switch>
        );
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      className: "img-Home",
      render: (text, record) => (
        <>
          <Image src={text} alt="" />
        </>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <label type="primary" onClick={showDrawer}>
          {text}
        </label>
        // <Link to="/" onClick={showDrawer}>
        //   {text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}

        // </Link>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "left",
      render: (text, record) => (
        <div>{text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}</div>
      ),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      align: "left",
      render: (text, record) => (
        // <Link to="/" onClick={showDrawer}></Link>
        <div>{text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}</div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            style={{
              background: "orange",
              color: "black",
              marginRight: "10px",
            }}
            onClick={() => openModelEdit(text)}
          >
            Edit
          </Button>

          <Button
            style={{ background: "#1890ff", color: "white" }}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const handleChange = () => {};
  // Get list news
  useEffect(() => {
    zingNewContent();
  }, []);

  // OPEN Modal
  const showModal = () => {
    setIsModalVisible(true);
    formModal.resetFields();
  };

  // Close Modal
  const handleCancel = () => {
    setIsModalVisible(false);
    zingNewContent();
  };
  // DELETE
  const handleDelete = async (values) => {
    const response = await deleteContent(values);
    if (response.status === 200) {
      zingNewContent();
      openNotification("Success", "Delete Complete !", true);
    } else {
      openNotification("Failed", "Delete Failed !", false);
    }
  };

  // SWITCH
  const handleSwitch = async (values, record) => {
    console.log(values);
    const params = {
      id: record.id,
      isShow: values,
    };
    const res = await updateContentItem(params);
    if (res) {
      zingNewContent();
    }
  };

  // Model Đăng Xuất
  const menu = (
    <Menu
      style={{ padding: "5px" }}
      items={[
        {
          icon: <LogoutOutlined />,
          label:
            ((icons = <LogoutOutlined />),
            (<Link to="/logout">Đăng xuất</Link>)),
        },
      ]}
    />
  );

  // Menu Itemmmmmmmmmmmmm
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="/admin">Bảng điều khiển Admin</Link>,
    },
    //  Thêm nhiều item Menu ở dưới đây
  ];
  // SUBMIT
  const onFinish = async (values) => {
    if (values.id) {
      const res = await updateContentItem(values);
      console.log(res);
      if (res) {
        zingNewContent();
        openNotification("Success", "Edit Complete !", true);
      } else {
        openNotification("Failed", "Update Failed !", false);
      }
    } else {
      const response = await createNewContent(values);
      if (response.status === 201) {
        zingNewContent();
        openNotification("Success", "Create Complete !", true);
      } else {
        openNotification("Failed", "Create Failed !", false);
      }
    }
    setIsModalVisible(false);
  };

  // Edit
  const openModelEdit = async (id) => {
    setcreateBtn(false);
    setIsModalVisible(true);
    const res = await detailsContent(id);
    if (res) {
      formModal.setFieldsValue({
        id: res.id,
        title: res.title,
        description: res.description,
        content: res.content,
        type: res.type,
        isShow: res.isShow,
        image: res.image,
      });
    }
  };
  // NOTIFICATION
  const openNotification = (title, content, icon) => {
    notification.open({
      message: title,
      description: content,
      icon: icon ? (
        <CheckOutlined style={{ color: "green" }} />
      ) : (
        <SmileOutlined style={{ color: "red" }} />
      ),
    });
  };

  // Drawer-------------------
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img
              src="https://duanestellaheights.com/wp-content/uploads/2021/11/Estella-Heights-logo-2.jpg"
              alt="/"
            />
          </div>
          <Menu items={menuItems} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            {/* Logout */}
            <div
              className="user-info"
              style={{ float: "right", marginRight: "15px" }}
            >
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                className="icon-user"
                style={{ marginRight: "10px" }}
              >
                <label>
                  <RedditOutlined style={{ color: "blue" }} />
                </label>
              </Dropdown>
              <label className="username">Xin chào </label>
            </div>
          </Header>

          <Breadcrumb
            style={{
              marginLeft: "23px",
              marginBottom: "-10px",
              marginTop: "10px",
            }}
          >
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">News Control</Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Search
            className="search-input"
            placeholder="Search input"
            enterButton
          />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Button
              type="primary"
              style={{ margin: "0 20px 10px 0" }}
              onClick={showModal}
            >
              Create
            </Button>
            <Button
              style={{
                backgroundColor: "rgba(253,230,187,255)",
                width: "182px",
              }}
            >
              <Link to="/">Back to user Home</Link>
            </Button>

            <Table
              dataSource={listContent}
              columns={columns}
              loading={isLoading}
              className="table-admin"
            />

            <Drawer
              title="Basic Drawer"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            {/* Modal for EDIT OR CREATE CONTENT */}
            <Modal
              title={createBtn ? "Create user" : "Edit user"}
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={
                <Button type="primary" htmlType="submit" form="formModal">
                  {/* Save */}
                  {createBtn ? "Create" : "Edit user"}
                </Button>
              }
            >
              {/* Formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
              <Form
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={formModal}
                name="formModal"
              >
                <Form.Item label="ID" name="id">
                  <Input
                    style={{ marginLeft: "173px", width: "152px" }}
                    disabled={true}
                  />
                </Form.Item>
                <Form.Item
                  label="Title"
                  name="title"
                  hasFeedbackntent
                  rules={[
                    {
                      required: true,
                      message: "Input your title!",
                    },
                    {
                      min: 10,
                      max: 50,
                      message: "More than 5 and less than 50 characters",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Description"
                  name="description"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input your description!",
                    },
                    {
                      min: 10,
                      max: 50,
                      message: "More than 5 and less than 50 characters",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Content"
                  name="content"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input your content",
                      max: 255,
                      message: "MAX 255 character",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Type"
                  name="type"
                  rules={[
                    {
                      required: true,
                      message: "Please input your type content!",
                    },
                  ]}
                >
                  <Select placeholder="Select type" onChange={handleChange}>
                    <Option value={1}>Type 1</Option>
                    <Option value={2}>Type 2</Option>
                    <Option value={3}>Type 3</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="isShow" label="Show content">
                  <Switch
                    style={{ marginLeft: "100px" }}
                    defaultChecked={false}
                    // onChange={(values) => handleSwitch(values)}
                  ></Switch>
                </Form.Item>

                <Form.Item
                  label="Image"
                  name="image"
                  // rules={[{
                  //   required: true, message: 'Upload your image!'
                  // }
                  // ]}>
                >
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  listContent: selectContent,
  detailContent: selectDetailContent,
});
//gọi API
const mapDispatchToProps = (dispatch) => ({
  zingNewContent: (payload) => dispatch(getAllContent(payload)),
  detailsContent: (payload) => asyncGetDetailContentAction(dispatch)(payload),
  createNewContent: (payload) => asyncCreateContent(dispatch)(payload),
  deleteContent: (payload) => asyncDeleteContent(dispatch)(payload),
  updateContentItem: (payload) => asyncUpdateContent(dispatch)(payload),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AdminPage);
// export default AdminPage;
