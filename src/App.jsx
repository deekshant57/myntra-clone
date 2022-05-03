import Products from "./components/Products";
import men from "./data/mensData.json";

function App() {
   return (
      <div className="App">
         <h1>Welcome to home page</h1>
         <Products data={men}/>
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
