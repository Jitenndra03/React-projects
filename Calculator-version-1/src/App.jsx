import styles from './App.module.css';
import Display from './components/Display.jsx';
import Buttons from './components/Buttons.jsx';

function App() {
    return (
        <>
            <div className={styles.calculator}>
                <Display></Display>
                <Buttons></Buttons>
            </div>
        </>
    );
};

export default App;