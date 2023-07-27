import React from 'react'
import styles from './page.module.css'

const LoadingBlog = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default LoadingBlog