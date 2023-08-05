"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {

  const session = useSession()

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`, fetcher
  )

  if (session.status === "loading") {
    return <p>Loading ...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>
  }
}

export default Dashboard