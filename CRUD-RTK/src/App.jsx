import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavBar from "./components/navbar/NavBar";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/cart" element={<Cart />}>
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
