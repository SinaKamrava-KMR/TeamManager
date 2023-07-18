import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMember from "./pages/AddMember";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddMember />
              <Main />
            </>
          }
        >


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
