import {PencilLine} from '@phosphor-icons/react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />
      <div className={styles.profile}>
       <Avatar src="https://github.com/rssilverioo.png" />
    
        <strong>Rodrigo Silverio</strong>
        <span>Web developer</span>
      </div>


      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}