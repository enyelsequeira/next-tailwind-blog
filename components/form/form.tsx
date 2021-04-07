import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { emailSend, errorClasses, inputClasses, labelClasses } from '../../helpers/emailSender';


const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: "",
      message: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
      message: Yup.string().min(12, "Please write at least 12").required("Please write a message")
    }),
    onSubmit: values => {
      const res = JSON.stringify(values, null, 2)
      emailSend(res)
      formik.resetForm()
    },
  });
  return (
    <div className="flex items-center min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-gray-50 dark:bg-nav-dark  p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200 font-display">Contact </h1>
            <p className="text-gray-700 dark:text-words-dark font-body">Fill up the form below to send  a message.</p>
          </div>
          <div className="m-7">
            <form onSubmit={formik.handleSubmit} id="form">

              <div className="mb-6">
                <label className={labelClasses}>Full Name</label>
                <input placeholder="John Doe" required className={inputClasses}
                  id="firstName"
                  name="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={errorClasses}>{formik.errors.firstName}</div>
                ) : null}
              </div>


              <div className="mb-6">
                <label className={labelClasses}>Email Address</label>
                <input placeholder="you@company.com" required className={inputClasses}
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}

                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={errorClasses}>{formik.errors.email}</div>
                ) : null}
              </div>


              <div className="mb-6">

                <label className={labelClasses}>Phone Number</label>
                <input placeholder="+1 (555) 1234-567" required className={inputClasses}
                  id="phone"
                  name="phone"
                  type="text"
                  {...formik.getFieldProps('phone')}
                />

                {formik.touched.phone && formik.errors.phone ? (
                  <div className={errorClasses}>{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="mb-6">
                <label className={labelClasses}>Your Message</label>

                <textarea placeholder="Your Message" className={inputClasses} required
                  id="message"
                  name="message"
                  {...formik.getFieldProps('message')}

                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={errorClasses}>{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit"  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
