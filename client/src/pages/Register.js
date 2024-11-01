import "../styles/RegisterStyles.css"
import { Form, Input } from "antd";

const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <h1>Register Form</h1>

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

          {/* button */}
          <button className="btn btn-primary" type="submit">Register</button>
        </Form>
      </div>
    </>
  );
};

export default Register;
