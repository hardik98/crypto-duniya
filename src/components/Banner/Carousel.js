import { makeStyles } from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrendingCrypto } from "../../redux/slice/cryptoSlice";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  const { currency, tredingCrypto, symbol } = useSelector(
    (state) => state.crypto
  );
  const dispatch = useDispatch();

  // Rendering Carousel Items
  const items = tredingCrypto.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div className={classes.carouselContainer}>
        <Link className={classes.crouselItem} to={`/coins/${coin.id}`}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: "10px" }}
          />
        </Link>
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>

        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  React.useEffect(() => {
    dispatch(getTrendingCrypto({ currency }));
  }, [currency]);

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
