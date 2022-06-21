import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Headline } from "./components/Headline";
import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Headline />
                <MainRoutes />
                <GlobalStyle />
            </div>
        </BrowserRouter>
    );
}

export default App;
