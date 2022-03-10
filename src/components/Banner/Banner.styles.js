import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    paddingTop: 25,
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));
