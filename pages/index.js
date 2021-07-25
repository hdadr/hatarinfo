import { useReducer } from "react";
import CountrySelector from "../components/CountrySelector";
import styles from "../styles/home.module.scss";
import { reducer } from "../store/reducer";
import { initialState } from "../store";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.countrySelectorContainer}>
      <CountrySelector
        countries={state.countries}
        from={state.selectedCountries.from}
        to={state.selectedCountries.to}
        dispatch={dispatch}
      />
    </div>
  );
}
