/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {


  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }


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
              <Trash onClick={handleDeleteComment} size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => handleLikeComment()}>
            <ThumbsUp />
            Apluadir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}