import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from "phosphor-react";

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diegog.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='28 de Setembro publicado ás 17:04' dateTime='2022-09-28 17:04:00'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button title='Deletar comentário'>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
          
        </footer>
      </div>

    </div>
  )
}