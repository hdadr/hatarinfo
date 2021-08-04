import { IconButton, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import styles from "./country-selector.module.scss";
import { swapSelectedCountries, updateCountryFrom, updateCountryTo } from "../../store/countries/actions";
import Image from "next/image";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

const findCountryByCountryCode = (countries, code) => countries.find((country) => country.code === code);

const CountrySelector = ({ countries, from, to }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const [rotate, setRotate] = useState(0);
  const [blink, setBlink] = useState(0);

  const handleSwapAnimationStart = () => {
    setRotate(1);
    setBlink(1);
  };

  const handleSwapAnimationEnd = () => {
    setRotate(0);
    setBlink(0);
  };

  const swapSelectedOptions = () => {
    handleSwapAnimationStart();
    dispatch(swapSelectedCountries());
  };

  const neighbourCountries = (countries, from) => {
    return countries
      .filter((country) => from.neighbours.includes(country.code))
      .map((country) => (
        <MenuItem key={country.code} value={country.code}>
          <div className={styles.menuItemContent}>
            <span className={styles.image}>
              <Image src={`/flags/${country.code}.png`} alt="flag" width={24} height={24} />
            </span>
            {country.name}
          </div>
        </MenuItem>
      ));
  };

  return (
    <>
      <div className={styles.container}>
        <Select
          value={from.code}
          onChange={(e) => dispatch(updateCountryFrom(findCountryByCountryCode(countries, e.target.value)))}
          variant="outlined"
          className={styles.select}
          blink={blink}>
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              <div className={styles.menuItemContent}>
                <span className={styles.image}>
                  <Image src={`/flags/${country.code}.png`} alt="flag" width={24} height={24} />
                </span>
                {country.name}
              </div>
            </MenuItem>
          ))}
        </Select>

        <div className={styles.swapIconContainer}>
          <div className={styles.swapButton}>
            <IconButton onClick={swapSelectedOptions}>
              <SwapVertIcon
                onAnimationEnd={handleSwapAnimationEnd}
                rotate={rotate}
                className={styles.icon}
                style={{ color: theme.palette.primary.main }}
              />
            </IconButton>
          </div>
        </div>

        <Select
          value={to.code}
          onChange={(e) => dispatch(updateCountryTo(findCountryByCountryCode(countries, e.target.value)))}
          variant="outlined"
          className={styles.select}
          blink={blink}>
          {neighbourCountries(countries, from)}
        </Select>
      </div>
    </>
  );
};

export default CountrySelector;
