import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/104869030?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
                <strong>Rodrigo Silverio</strong>
                <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado cerca de 2hr atras</time>
            </div>

            <button title="excluir comentario">
              <Trash size={24}/>
            </button>
          </header>
          
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
          <footer>
              <button>
                <ThumbsUp/>
                Apluadir <span>20</span>
              </button>
          </footer>
      </div>
    </div>
  )
}