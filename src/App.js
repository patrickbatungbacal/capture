//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//import global style
import GlobalStyle from "./components/global style/GlobalStyle";

//import router packages
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work" exact>
          <OurWork />
        </Route>

        <Route path="/work/:id">
          <MovieDetail />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
