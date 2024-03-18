import styles from './App.module.css';
import Index from './Pages/index';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Treina<span>Music</span></h1>
      </header>
      <Index />
    </div>
  )
}

export default App;
