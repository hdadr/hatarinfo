import { useState } from "react";
import { Box, Link, Paper } from "@material-ui/core";
import styles from "./border-description.module.scss";
import SwapHorizRoundedIcon from "@material-ui/icons/SwapHorizRounded";
import { useDispatch } from "react-redux";
import { swapSelectedBorder } from "../../../store/border/actions";

const BorderDescription = ({ border }) => {
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState(0);

  const handleBorderSwap = (border) => {
    setRotate(1);
    const [departure, arrival] = border.name.split("-");
    const swappedBorderName = `${arrival.trimLeft()} - ${departure.trimRight()}`;
    dispatch(swapSelectedBorder(swappedBorderName));
  };

  const formatBorderName = (border) => {
    const [departure, arrival] = border.name.split("-");

    return (
      <div className={styles.borderName}>
        <span>{departure}</span>
        <SwapHorizRoundedIcon
          className={styles.icon}
          rotate={rotate}
          onAnimationEnd={() => setRotate(0)}
          onClick={() => handleBorderSwap(border)}
          color="primary"
        />
        <span>{arrival}</span>
      </div>
    );
  };

  return (
    <Paper elevation={1}>
      <div className={styles.borderDescription}>
        <div>
          <Box color="text.secondary">Határ:</Box>
          {formatBorderName(border)}
        </div>
        <div>
          <Box color="text.secondary">Nyitvatartás:</Box>
          {border?.openingHours}h
        </div>
        <div>
          <Box color="text.secondary">Hivatalos infó:</Box>
          <Link
            href={
              border?.link
                ? info.link
                : "http://www.police.hu/hu/hirek-es-informaciok/hatarinfo?field_hat_rszakasz_value=szerb+hat%C3%A1rszakasz"
            }>
            Weboldal
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default BorderDescription;
