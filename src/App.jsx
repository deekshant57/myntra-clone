import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";

function App() {
   return (
      <div className="App">
         {/* <h1>Welcome to home page</h1> */}
         {/* <Products data={men}/> */}
         <Routes>
            <Route
               path="/men"
               element={<Products data={"menTShirts"} />}
            ></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
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
