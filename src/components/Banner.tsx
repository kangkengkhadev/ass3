import React from 'react'
import Image from 'next/image'
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
    <Image src={'/img/banner.jpeg'}
    alt='cover'
    fill={true}
    priority
    style={{objectFit:"cover"}}/>
    <div className={styles.bannerText}>
        <h1 style={{fontSize:"100px"}}>Vaccine Service Center</h1>
        <h2>Get Vaccine</h2>
    </div>
</div>
  )
}

export default Banner