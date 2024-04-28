/* eslint-disable react/prop-types */
import styles from './Avatar.module.css'




export function Avatar({hasBorder = true, src,}) {

  return (
    <img
     className={hasBorder ? styles.avatarWithborder : styles.avatar}
     src={src}
     alt="" />
  )
}