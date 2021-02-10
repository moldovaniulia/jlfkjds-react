import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>jlfkjds</title>
        <meta property="og:title" content="jlfkjds" />
      </Helmet>
      <h1 className={projectStyles.thqHeading1}>Heading</h1>
    </div>
  )
}

export default Page
