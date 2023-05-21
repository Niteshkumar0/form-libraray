import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import '../app/globals.css'

export default function success() {

    let router = useRouter();
    let {query} = router;
    console.log(query)
 

  return (
    <>
        <main className='h-screen flex items-center justify-center'>
            <div className='bg-white  rounded-lg w-1/2 text-gray-700 p-16'>
                <h1 className='text=3*1 pb-4 '>
                    Thanks for the email 
                </h1>
                <p>
                    we have sent you an email over at . we will get back
                    to you as soon as we can
                </p>
            </div>
        </main>
    </>
  )
}
