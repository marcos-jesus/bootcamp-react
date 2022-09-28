import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
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
