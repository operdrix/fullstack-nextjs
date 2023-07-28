"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)
  console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard