import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeCurrency } from "../../redux/slice/cryptoSlice";
import { useStyles } from "./Header.styles";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currency } = useSelector((state) => state.crypto);
  console.log("currency", currency);
  const dispatch = useDispatch();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              onClick={() => history.push("/")}
            >
              Crypto Duniya
            </Typography>
            <Select
              variant="outlined"
              value={currency}
              onChange={(e) =>
                dispatch(changeCurrency({ currency: e.target.value }))
              }
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
