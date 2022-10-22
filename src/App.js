import HexToRgb from './components/hex2rgb/HexToRgb';
import StepsAccounting from './components/steps/StepsAccounting';
import PhotoLoader from './components/photo/PhotoLoader';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <HexToRgb />
      <StepsAccounting />
      <PhotoLoader />
    </div>
  );
}

export default App;
