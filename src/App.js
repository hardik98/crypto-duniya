import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinDetail from "./pages/CoinDetail";
import Header from "./components/Header/Header";
import "./App.css";
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => ({
    app: {
      backgroundColor: "#14161a",
      minHeight: "100vh",
      color: "white",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/coins/:id">
          <CoinDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
