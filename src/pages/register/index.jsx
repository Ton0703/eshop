import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.scss";

import Header from "../../components/header";

const initialValues = { name: "", password: "", email: "" };
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("没有输入用户名"),
  password: Yup.string().required("没有输入密码"),
  email: Yup.string().email("格式不正确").required("没有输入邮箱"),
});

function Register() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };
  return (
    <div className="signin">
      <Header />
      <div className="register">
        <label htmlFor="register">注册</label>
        <div className="toLogin">
          <p>已经注册了账号？</p>
          <span onClick={handleToLogin}>去登陆</span>！
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="用户名"
            name="name"
            id="name"
          />
          {formik.errors.name ? <div className='form-error'>{formik.errors.name}</div> : null}
          <input
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="邮箱"
            name="email"
            id="email"
          />
           {formik.errors.email ? <div className='form-error'>{formik.errors.email}</div> : null}
          <input
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="密码"
            name="password"
            id="password"
          />
           {formik.errors.password ? <div className='form-error'>{formik.errors.password}</div> : null}
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
