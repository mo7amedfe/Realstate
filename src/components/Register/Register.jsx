import React, { useState } from 'react'
import styles from './Register.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../Footer/footer'

export default function Register() {

  function validate(values) {
    let errors = {}

    if (!values.name) {

      errors.name = "name is required"
    } else if (values.name.length < 3) {
      errors.name = "length must be greater than or equal 3 characters"
    }

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
    if (!values.repassword) {
      errors.repassword = "repassword is required"
    } else if (values.password != values.repassword) {
      errors.repassword = "password not match"
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "phoneNumber is required"
    } else if (!/^(002)?01[0125][0-9]{8}$/i.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phoneNumber number."
    }
    return errors
  }


  let formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phoneNumber: "",
      role:"admin"

    },

    validate,

    onSubmit: (values) => {
      console.log("hello  ", values);

      register(values)
    }

  })

  const [error, setError] = useState(null)
  const [resMessage, setResMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function register(values) {
    setIsLoading(true)
    return await axios.post("http://localhost:5000/api/users/register", values).then((res) => {
    // return await axios.post(" https://ecommerce.routemisr.com/api/v1/auth/signup", values).then((res) => {

     
      console.log(res)
      setResMessage(res.data.message)
      setIsLoading(false)
    }).catch((e) => {
      console.log(e);
      
      console.log(e.response.data.message)
      setError(e.response.data.message)
      setIsLoading(false)

    })
  }



  return (
  <>
  <div className="container">
    <h2 className="">Register Now:</h2>
    <form onSubmit={formik.handleSubmit}>

      <div className='w-100 d-flex m-auto flex-wrap padding_y_3'>

        <label htmlFor="">Name</label>
        <input type="text" name='name' value={formik.values.name} onClick={() => { setError(null), setResMessage(null) }} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Alex Barker' required />
        {formik.touched.name && formik.errors.name ?
          <div className='errorDiv'>

            <p><span >alert!</span> {formik.errors.name}</p>

          </div> : ""}

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

        <label htmlFor="">repassword</label>
        <input type="password" name='repassword' value={formik.values.repassword} onClick={() => { setError(null), setResMessage(null) }} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='********' required />
        {formik.touched.repassword && formik.errors.repassword ?
          <div className='errorDiv'>

            <p><span >alert!</span> {formik.errors.repassword}</p>

          </div> : ""}

        <label htmlFor="">phoneNumber</label>
        <input type="tel" name='phoneNumber' value={formik.values.phoneNumber} onClick={() => { setError(null), setResMessage(null) }} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='+## ###########' required />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ?
          <div className='errorDiv'>

            <p><span >alert!</span> {formik.errors.phoneNumber}</p>

          </div> : ""
        }

      </div>

      <div className="w-100 d-flex justify-content-end flex-wrap">
        <button disabled={!(formik.isValid && formik.dirty && !isLoading && resMessage == null)} type='submit' className={` ${(formik.isValid && formik.dirty && !isLoading && resMessage == null) ? "btn-green" : "btn-green desabled"}`}>{isLoading ? <div class="spinner"></div> : 'Submit'}</button>

        {error != null ? <div className='errorDiv'>

          <p><span >alert!</span> {error}</p>

        </div> : ""
        }

        {resMessage != null ? <div className="successDiv">

          <p><span>Success alert!</span> now you can <Link to="/login" className='text-green-500 hover:text-green-700 font-bold'>Login</Link></p>
        </div> : ""
        }

      </div>


    </form>
    <h5 className="">If you already have an account, <Link className='text-green' to="/login">Login Now</Link></h5>

  </div>
  <Footer/>
  </>

  )
}
