import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Posts } from './Post'

import styles from './App.module.css'

import './global.css'



function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts 
          author="Marcos Jesus" 
          content="lorem impsu  lorem impsu lorem impsu" 
          />
          <Posts
            author="Diego"
            content="Novo post"
          />
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
