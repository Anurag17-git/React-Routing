import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Switch>
        <div>
        <MainHeader />
        <main>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
        </main>
        </div>
    </Switch>
  );
}

export default App;
