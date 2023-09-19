import styles from './App.module.css';
import { Footer } from './components/Footer/Footer';
import { Generator } from './components/Generator/Generator.tsx';
import { Header } from './components/Header/Header';
import { SignForm } from './components/SignForm/SignForm.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/login" element={<SignForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
