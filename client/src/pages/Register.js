import "../styles/RegisterStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";


const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form
          className="register-form"
          layout="vertical"
          onFinish={onFinishHandler}
        >
          <h3 className="text-center">Register Form</h3>

          {/* name input */}
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>

          {/* email */}
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>

          {/* password */}
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>

          {/* sign-in link */}
          <Link to="/login" className="m-2">
            Already registered? Go for Login
          </Link>

          {/* button */}
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
