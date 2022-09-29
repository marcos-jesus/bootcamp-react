import { Avatar } from  './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png"/>

          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>CEO Rocketseat</span>
          </div>

        </div>

        <time title='27 de Setembro publicado ás 20:47' dateTime='2022-09-27 20:47:00'>Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifolio. É uma projeto que fiz no NLW return.</p>
        <p>👉{' '} <a href="">diegoCEO/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rockseat</a>  
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}