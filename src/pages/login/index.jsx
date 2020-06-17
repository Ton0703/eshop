import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clear } from "../../redux/user/action";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.scss";

import Header from "../../components/header";

function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(clear())
  }, [dispatch])
  const msg = useSelector(state => state.user.error_msg)

  const initialValues = { name: "", password: "" };
  const onSubmit = (values) => {
    console.log(values);
    dispatch(login({ name: values.name, password: values.password }));
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("用户名为空"),
    password: Yup.string().required("密码为空"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/register");
  };
  return (
    <div className="signin">
      <Header />
      <div className="register">
        <label htmlFor="register">登陆</label>
        <div className="toLogin">
          <p>还没注册账号？</p>
          <span onClick={handleToLogin}>去注册</span>！
        </div>
        <form onSubmit={formik.handleSubmit}>
          {msg ? <div className='error-msg'>{msg}</div> : null}
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="用户名"
            name="name"
            id="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
          <input
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="密码"
            name="password"
            id="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="form-error">{formik.errors.password}</div>
          ) : null}
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
