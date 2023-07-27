"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: 'no-store'
      })
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
  })

  console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard