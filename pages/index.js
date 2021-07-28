import { useReducer } from "react";
import CountrySelector from "../components/CountrySelector";
import styles from "../styles/home.module.scss";
import { reducer } from "../store/reducer";
import { initialState } from "../store";
import BorderList from "../components/BorderList";
import { borders } from "../public/borders";
import { Paper } from "@material-ui/core";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { selectedCountries } = state;
  const borderId = `${selectedCountries.from.code}-${selectedCountries.to.code}`;
  const filteredBorders = borders.filter((border) => border.id === borderId);

  return (
    <>
      <div className={styles.container}>
        <h2>Válasz országot</h2>
        <Paper elevation={1}>
          <div className={styles.countrySelectorContainer}>
            <CountrySelector
              countries={state.countries}
              from={state.selectedCountries.from}
              to={state.selectedCountries.to}
              dispatch={dispatch}
            />
          </div>
        </Paper>

        <h3>Válasz határt</h3>
        <Paper elevation={1}>
          <div className={styles.borderListContainer}>
            <BorderList borders={filteredBorders} />
          </div>
        </Paper>
      </div>
    </>
  );
}
