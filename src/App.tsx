import styles from './App.module.css';
import { Footer } from './components/Footer/Footer';
import { Generator } from './components/Generator/Generator.tsx';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}

export default App;
