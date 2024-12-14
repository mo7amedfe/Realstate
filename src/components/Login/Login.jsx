import React, { useContext, useEffect, useState } from 'react'

import styles from './Login.module.css';
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { TokenContext } from '../../Context/TokenContext';



export default function Login() {
  const { Token, setToken } = useContext(TokenContext)
  let navigate = useNavigate()
  const [error, setError] = useState(null)
  const [resMessage, setResMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  function validate(values) {
    let errors = {}

    if (!values.email) {
      errors.email = "email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }

    if (!values.password) {
      errors.password = "password is required"
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
      errors.password = "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
    }

    return errors
  }


  let formik = useFormik({

    initialValues: {

      email: "",
      password: "",

    },

    validate,

    onSubmit: (values) => {
      console.log("hello  ", values);

      login(values)
    }

  })


  async function login(values) {
    setIsLoading(true)
    return await axios.post(" https://ecommerce.routemisr.com/api/v1/auth/signin", values).then((res) => {
      console.log(res)
      localStorage.setItem("Token", res.data.token)
      setToken(res.data.token)
      setResMessage(res.data.message)
      setIsLoading(false)
      navigate("/home")
    }).catch((e) => {
      console.log(e.response.data.message)
      setError(e.response.data.message)
      setIsLoading(false)
    })
  }





  return (
    <div className="container">
      <h2 className="">Login Now:</h2>
      <form onSubmit={formik.handleSubmit}>

        <div className='w-100 d-flex m-auto flex-wrap padding_y_3'>



          <label htmlFor="">Email</label>
          <input type="email" name='email' value={formik.values.email} onClick={() => { setError(null), setResMessage(null) }} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='alex@mail.com' required />
          {formik.touched.email && formik.errors.email ?
            <div className='errorDiv'>

              <p><span >alert!</span> {formik.errors.email}</p>

            </div> : ""}

          <label htmlFor="">Password</label>
          <input type="password" name='password' value={formik.values.password} onClick={() => { setError(null), setResMessage(null) }} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='********' required />
          {formik.touched.password && formik.errors.password ?
            <div className='errorDiv'>

              <p><span >alert!</span> {formik.errors.password}</p>

            </div> : ""}


        </div>

        <div className="w-100 d-flex justify-content-end flex-wrap">
          <button disabled={!(formik.isValid && formik.dirty && !isLoading && resMessage == null)} type='submit' className={` ${(formik.isValid && formik.dirty && !isLoading && resMessage == null) ? "btn-green" : "btn-green desabled"}`}>{isLoading ? <div class="spinner"></div> : 'Submit'}</button>

          {error != null ? <div className='errorDiv'>

            <p><span >alert!</span> {error}</p>

          </div> : ""
          }

          {resMessage != null ? <div className="successDiv">

            <p><span>Success alert!</span></p>
          </div> : ""
          }

        </div>


      </form>
      <h5 className="">If you don't have an account, <Link className='text-green' to="/register">Register Now</Link></h5>

    </div>


  )
}
