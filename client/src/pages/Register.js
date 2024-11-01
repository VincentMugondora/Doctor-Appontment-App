import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  // registration from control
  const onFinishHandler = async (values) => {
    try {
      const register = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        values
      );

      if (register.data.success) {
        message.success("Registration successful");
        navigate("/login");
      } else {
        message.error(register.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
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
