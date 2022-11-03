import { Form, Input, Button, Checkbox } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { compose } from "recompose";
import { connect } from "react-redux";
import { selectLoading } from "./stores/selector";
import { loginRequestAction } from "./stores/actions";
import { useEffect } from "react";
import "../Login/index.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [formLogin] = Form.useForm();

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === "admineh" && password === "Estella1230") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username,
        })
      );
      notification.open({
        message: "Login",
        description: "Đăng nhập thành công",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
      navigate("/");
    } else {
      formLogin.resetFields();
      notification.open({
        message: "Login",
        description: "Sai tên đăng nhập hoặc mật khẩu",
        icon: <SmileOutlined style={{ color: "red" }} />,
      });
    }
    props.loginRequest(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="login-page">
        <Form
          className="form-login"
          form={formLogin}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item>
            <label
              style={{
                fontSize: "30px",
                margin: "0 auto",
                width: "200px",
                display: "inline-block",
                marginLeft: "72px",
              }}
            >
              LOGIN PAGE
            </label>
          </Form.Item>
          <Form.Item
            className="form-itemmm"
            label="Account"
            name="username"
            hasFeedback
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 5, message: "min is 5 charactor" },
              { max: 10, message: "maxx is 10 charactor" },
              {
                pattern: new RegExp("([a-zA-Z]{3,30}\\s*)+"),
                message: "Format is wrong",
              },
            ]}
          >
            <Input className="input-login" />
          </Form.Item>

          <Form.Item
            className="form-itemmm"
            label="Password:"
            name="password"
            hasFeedback
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className="input-login" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(loginRequestAction(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Login);
