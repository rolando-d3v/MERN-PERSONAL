import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const { email, password, repeatPassword, privacyPolicy } = inputs;

  //FORMULARIO PARA USAR CHEKED 
  const obtenerDatoState = (e) => {
   if(e.target.name ==="privacyPolicy"){
    setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
    })
   } else {
    setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    })
   }
  };


  const register = (e) => {
      e.preventDefault()

  }

  return (
    <div className="form-login"  >
      <Form {...layout} name="basic" initialValues={{ remember: true }} onSubmit={register} >
      <h1>Registro</h1>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Porfavor ingresa tu email!" }]}
        >
          <Input
            prefix={
              <MailOutlined
                className="site-form-item-icon"
                style={{ color: "#42424242" }}
              />
            }
            placeholder="ingresa tu email"
            type="email"
            name="email"
            value={email}
            onChange={obtenerDatoState}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Porfavor ingresa tu password!" }]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ color: "#42424242" }}
              />
            }
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={obtenerDatoState}
          />
        </Form.Item>

        <Form.Item
          label="repeatPassword"
          name="repeatPassword"
          rules={[
            { required: true, message: "Porfavor confirma tu password!" },
          ]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ color: "#42424242" }}
              />
            }
            placeholder="Confirmar Password"
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={obtenerDatoState}
          />
        </Form.Item>

        <Form.Item name="remember" >
          <Checkbox
            name="privacyPolicy"
            checked={privacyPolicy}
            value={privacyPolicy}
            onChange={obtenerDatoState}
          >
            He leido y aceptado, las politicas de privacidad
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Registrar User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
