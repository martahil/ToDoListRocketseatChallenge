import { PlusCircle } from 'phosphor-react';
import styles from './ToDoAdd.module.css'

export function ToDoAdd() {
  return (
    <div className={styles.inputAndButton}>
      <input type="text" placeholder='Add a new task' className={styles.input} />
      <button className={styles.button}>Create <PlusCircle size={16} /></button>
    </div>
  );
}