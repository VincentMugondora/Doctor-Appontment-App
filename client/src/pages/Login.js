import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../styles/RegisterStyles.css";

const LoginPage = () => {

   const onFinishHandler = (values) => {
     console.log(values);
   };

  return (
    <div>
      <div className="form-container">
        <Form
          className="register-form"
          layout="vertical"
          onFinish={onFinishHandler}
        >
          <h3 className="text-center">Login Form</h3>

          {/* email */}
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>

          {/* password */}
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>

          {/* sign-in link */}
          <Link to="/register" className="m-2">
            Not a user? Go for Register
          </Link>

          {/* button */}
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
