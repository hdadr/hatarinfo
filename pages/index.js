import { useReducer, useState } from "react";
import CountrySelector from "../components/CountrySelector";
import styles from "../styles/home.module.scss";
import { reducer } from "../store/reducer";
import { initialState } from "../store";
import BorderList from "../components/BorderList";
import { borders } from "../public/borders";
import { Dialog, Paper } from "@material-ui/core";
import BorderInformation from "../components/BorderInformation";
import SlideUpTransition from "../components/SlideUpTransition";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedCountries, selectedBorder } = state;
  const borderId = `${selectedCountries.from.code}-${selectedCountries.to.code}`;
  const filteredBorders = borders.filter((border) => border.id === borderId);

  const [openBorderInformation, setOpenBorderInformation] = useState(false);

  const handleBorderClick = () => {
    setOpenBorderInformation(true);
  };
  const handleCloseBorderInformation = () => {
    setOpenBorderInformation(false);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Válasz országot</h2>
        <Paper elevation={1}>
          <div className={styles.countrySelectorContainer}>
            <CountrySelector countries={state.countries} from={selectedCountries.from} to={selectedCountries.to} dispatch={dispatch} />
          </div>
        </Paper>

        <h3>Válasz határt</h3>
        <Paper elevation={1}>
          <div className={styles.borderListContainer}>
            <BorderList borders={filteredBorders} openBorderInformation={handleBorderClick} dispatch={dispatch} />
          </div>
        </Paper>
      </div>

      <Dialog fullScreen open={openBorderInformation} TransitionComponent={SlideUpTransition}>
        <BorderInformation border={selectedBorder} close={handleCloseBorderInformation} />
      </Dialog>
    </>
  );
}
