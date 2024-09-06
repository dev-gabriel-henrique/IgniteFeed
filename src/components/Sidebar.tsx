import { Avatar } from './Avatar'

import { PencilLine } from 'phosphor-react'

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=50&w=500" alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/dev-gabriel-henrique.png" /> 

        <strong>Gabriel Henrique</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}