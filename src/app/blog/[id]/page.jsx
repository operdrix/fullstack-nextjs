import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie tristique sem, et luctus diam tristique at. Fusce in nisi ligula. Phasellus quis varius elit, nec semper lacus. Sed pulvinar, urna nec tincidunt sollicitudin, est lorem rutrum neque.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt='author'
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt='paysage'
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie tristique sem, et luctus diam tristique at. Fusce in nisi ligula. Phasellus quis varius elit, nec semper lacus. Sed pulvinar, urna nec tincidunt sollicitudin, est lorem rutrum neque, nec ornare nisl ipsum a ligula. Nam leo nisl, lobortis sed risus in, elementum blandit tortor. Pellentesque consectetur, dui et varius sagittis, est mi volutpat mauris, quis dictum risus nunc eget sem. Duis justo elit, placerat at efficitur sed, mollis non enim. Sed vehicula elit nisl. <br /><br />Duis lacinia turpis cursus tellus feugiat tristique. Sed dui lacus, molestie vitae vulputate quis, feugiat at eros. Phasellus quis augue ut est tincidunt laoreet nec id ante. Quisque quis felis in nulla vehicula consequat. Praesent vitae dolor sit amet massa porttitor placerat a vitae orci. <br /><br />Sed euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget aliquam velit nisl quis nunc. Nu <br /><br />nc sed odio eget nunc ultricies u
        </p>
      </div>
    </div>
  )
}

export default BlogPost