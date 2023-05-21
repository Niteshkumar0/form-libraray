'use client'
import React, { createContext } from 'react'
import {Formik, useFormik} from "formik";
import * as Yup from 'yup';
import {useRouter } from 'next/navigation';
export default function Home() {

  let  router = useRouter();


  let formik = useFormik({
    initialValues : {
        name : "",
        email : "",
        country : "united state",
        terms : "",
    },

    validationSchema : Yup.object({
        name: Yup.string().max(20,'name must be less than 20 characters').required('name is required'),
        email:Yup.string().email('email is required').required("email is required"),
        terms:Yup.array().required("check the terms and condition")
    }),

    onSubmit :  (values) => {
        console.log(values);
        
         router.push('/success')
      
        
      }
})


  return (
    <>
    <main className='h-screen flex items-center justify-center'> 

        <form onSubmit={formik.handleSubmit} className='bg-white flex rounded-lg w-1/2 font-latoRegular'>
           
            <div className='flex-1 text-gray-700 p-20'>
                <h1 className='text-3*1 pb-2 font-latoBold'>Let's get started</h1>
                <p className='text-lg text-gray-500'>Join our E-learning platform today and unlock
                    over 500+ course
                </p>
                <div className='mt-6'>

                    {/* {name input fiels} */}
                    <div className='pb-4'>
                        <label htmlFor="name" className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name ? 'text-red-400' : " "}`}> {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                        <input type="text" name="name" placeholder='Enter Your Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border-2 p-2 border-gray-500 rounded-md w-1/2 focus:border-teal focus:ring-teal-500' />
                    </div>

                     {/* {email input fiels} */}
                     <div className='pb-4'>
                        <label htmlFor="email" className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`}>{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                        <input type="email" name="email"  placeholder='Enter Your Email'  value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='border-2 p-2 border-gray-500 rounded-md w-1/2 focus:border-teal focus:ring-teal-500' />
                    </div>

                     {/* {country input fiels} */}
                     <div className='pb-4'>
                        <label htmlFor="name" className='block font-latoBold text-sm pb-2'>Country</label>
                        <select name='country'  value={formik.values.country} onChange={formik.handleChange}  className='border-2 p-2 border-gray-500 rounded-md w-1/2 focus:border-teal focus:ring-teal-500'>
                            <option value="united state">united state</option>
                            <option value="united kingdom">united kingdom</option>
                            <option value="austrila ">austrila </option>
                            <option value="pakistan">pakistan</option>
                            <option value="india">india</option>
                        </select>
                    </div>

                      {/* {terms and condition} */}
                      <div className='pb-4'>
                        <label htmlFor="terms" className={`block font-latoBold text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-red-400" : ""}`}>{formik.touched.terms && formik.errors.terms ? formik.errors.terms: " Terms and Condition"}</label>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name='terms' onBlur={formik.handleBlur} value='checked' onChange={formik.handleChange}  className='
                            h-5 w-5  border-2' 
                             />
                             <p className='text-sm font-latoBold text-gray-500'>
                                I  agree to the terms and service that my data will
                                 be taken and sold
                             </p>
                        </div>
                    </div>
                    <button type='submit' className='bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full'>Start Learning Today!</button>
                </div>
            </div>
        </form>
    </main> 
    </>
  )
}
