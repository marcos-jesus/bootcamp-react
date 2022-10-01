import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rockeatseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala Galera 👋 '},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É uma projeto que fiz no NLW return.'},
        {type: 'link', content: 'diegoCEO/doctorcare'},
      ],
      publishedAt: new Date('2022-09-30 17:44:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayke Brito',
        role: 'Educator @Rockeatseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala Galera 👋 '},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É uma projeto que fiz no NLW return.'},
        {type: 'link', content: 'diegoCEO/doctorcare'},
      ],
      publishedAt: new Date('2022-10-01 00:25:00')
    }
  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

    // Export Default vs Named Export
    /*
      Export Default permite você exportar e alterar o nome ao importar
      Named Export força você a usar o mesmo nome que você usou para exportar na hora de importar o arquivo sempre usando { }
    */
  )
}

export default App
