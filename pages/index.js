import { useState } from "react";
import { useSelector } from "react-redux";
import CountrySelector from "../components/CountrySelector";
import styles from "../styles/home.module.scss";
import BorderList from "../components/BorderList";
import { borders } from "../public/borders";
import { Dialog, Paper } from "@material-ui/core";
import BorderInformation from "../components/BorderInformation";
import SlideUpTransition from "../components/SlideUpTransition";

export default function Home() {
  const state = useSelector((state) => state);
  const { selectedCountries, selectedBorder } = state;
  const countryBorderDirection = `${selectedCountries.from.code}-${selectedCountries.to.code}`;
  const filteredBorders = borders.filter((border) => border.id.includes(countryBorderDirection));

  const [openBorderInformation, setOpenBorderInformation] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h2>Válasz országot</h2>
        <Paper elevation={1}>
          <div className={styles.countrySelectorContainer}>
            <CountrySelector countries={state.countries} from={selectedCountries.from} to={selectedCountries.to} />
          </div>
        </Paper>

        <h3>Válasz határt</h3>
        <Paper elevation={1}>
          <div className={styles.borderListContainer}>
            <BorderList borders={filteredBorders} openBorderInformation={() => setOpenBorderInformation(true)} />
          </div>
        </Paper>
      </div>

      <Dialog fullScreen open={openBorderInformation} TransitionComponent={SlideUpTransition}>
        <BorderInformation border={selectedBorder} close={() => setOpenBorderInformation(false)} />
      </Dialog>
    </>
  );
}
