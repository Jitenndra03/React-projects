import AppName from "./Components/AppName.jsx";
import Slogan from "./Components/Slogan.jsx";
import Time from "./Components/Time.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return(
        <center>
            <AppName></AppName>
            <Slogan></Slogan>
            <Time></Time>
        </center>
    );
}

export default App;