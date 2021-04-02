import { BrowserRouter } from "react-router-dom";
import {RouterConfig} from "./navigation/RouterConfig";
import "./App.css"
import { Provider } from "react-redux";
import {store} from "./redux/store"
function App() {
  return <Provider store={store}>
              <BrowserRouter>
                  <RouterConfig/>
            </BrowserRouter>
         </Provider>
}

export default App;
