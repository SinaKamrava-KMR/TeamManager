import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMember from "./pages/AddMember";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <AddMember />
              <Main />
            </Provider>
          }
        >


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
