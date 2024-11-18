import SignUpForm from '@/components/form/form'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] border border-red-700'>
        <SignUpForm title="SignUp form"/>
    </div>
  )
}

export default SignUp