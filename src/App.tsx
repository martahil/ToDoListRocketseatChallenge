import { Header } from "./components/Header"
import { ToDoAdd } from './components/ToDoAdd'
import { TaskBoard } from "./components/TaskBoard"

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.mainContent}>
        <ToDoAdd />
      </div>

      <TaskBoard />
    </div>
  )
}

export default App
