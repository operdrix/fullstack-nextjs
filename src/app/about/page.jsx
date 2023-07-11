import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa aut maiores distinctio laborum, porro numquam cum ratione inventore impedit voluptates ex aliquam fugit vitae unde, cupiditate ab animi nihil!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quis dicta velit atque! Nostrum accusamus quo eligendi, praesentium consequuntur, obcaecati soluta corporis cum ipsa unde culpa deserunt mollitia maxime facilis!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione consequatur ea, pariatur eveniet animi? Provident praesentium iure, nam, placeat, fugit sit eius quos nisi reprehenderit dolore fuga veniam quibusdam.
            <br />
            <br />
            - Creative Illustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  )
}

export default About