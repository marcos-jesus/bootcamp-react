import { useState } from 'react';

import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from "phosphor-react";

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diegog.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time 
                title='28 de Setembro publicado ás 17:04' 
                dateTime='2022-09-28 17:04:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={() => { setLikeCount(likeCount + 1)}}>
            <ThumbsUp />
            Aplaudir <span> {likeCount} </span>
          </button>
          
        </footer>
      </div>

    </div>
  )
}