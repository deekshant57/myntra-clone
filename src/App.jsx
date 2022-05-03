import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Signup from "./components/Signup";
import men from "./data/mensData.json";

function App() {
   return (
      <div className="App">
         {/* <h1>Welcome to home page</h1> */}
         {/* <Products data={men}/> */}
         <Routes>
            <Route path="/men" element={<Products data={men} />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
         </Routes>
         {/* {Links} */}
         {/* {Routes} */}

         {/* {Few things which needs to be discussed before starting off with the project
        1) CSS library
        2) Redux / Context API
        3) Hardcode the data or API
        4) Payment gateway
      } */}
      </div>
   );
}

export default App;
