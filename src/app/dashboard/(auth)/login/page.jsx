"use client"

import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {
      email,
      password,
    })

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Login</button>
      </form>
      <Link href="/dashboard/register">Create new account</Link>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login