import Signup from '@/components/Signup'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Signup - Tuber",
    description: "Register now create your first video",
    keywords: "signin, login, auth, signup, register, acount login, profile login, admin login"
}

const SignupRouter = () => {
  return (
    <Signup />
  )
}

export default SignupRouter