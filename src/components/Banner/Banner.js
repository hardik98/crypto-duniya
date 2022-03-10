import { Container, Typography } from "@material-ui/core";
import React from "react";

import { useStyles } from "./Banner.styles";
import Carousel from "./Carousel";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Duniya
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get All The Information About Your Favourite Cryptovurrency{" "}
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
