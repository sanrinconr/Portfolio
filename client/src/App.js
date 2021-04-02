import { BrowserRouter } from "react-router-dom";
import {RouterConfig} from "./navigation/RouterConfig";
import "./App.css"

function App() {
  return <BrowserRouter>
  <RouterConfig/>
</BrowserRouter>
}

export default App;
