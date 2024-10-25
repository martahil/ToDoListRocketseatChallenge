import { RadioButton, Trash } from 'phosphor-react';
import styles from './TaskBoard.module.css'

export function TaskBoard() {
  return (
    <div className={styles.board}>
      <div className={styles.createdAndCompletedTasks}>
        <div className={styles.createdTasksDiv}>
          <span className={styles.createdTasksTxt}>Created tasks</span><span className={styles.createdTasksCounter}>5</span>
        </div>
        <div className={styles.completedTasksDiv}>
          <span className={styles.completedTasksTxt}>Completed tasks</span><span className={styles.completedTasksCounter}>2 of 5</span>
        </div>
      </div>

      <div className={styles.individualTaks}>
        <div className={styles.radioAndTxt}>
          <RadioButton size={24} className={styles.radio} />
          <label>This is a task test</label>
        </div>
        <div className={styles.deleteIcon}>
          <Trash size={24} />
        </div>
      </div>

      <div className={styles.individualTaks}>
        <div className={styles.radioAndTxt}>
          <RadioButton size={24} className={styles.radio} style={{ color: 'transparent', borderRadius: '999px', backgroundColor: 'var(--purple-100', border: '2px solid var(--purple-100)' }} />
          <label>This is another task test</label>
        </div>
        <div className={styles.deleteIcon}>
          <Trash size={24} />
        </div>
      </div>
    </div>
  );
}