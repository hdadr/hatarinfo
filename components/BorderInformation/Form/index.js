import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import styles from "./border-information-form.module.scss";

const Form = ({ closeDialog }) => {
  const [waitingTime, setWaitingTime] = useState("00:30");
  const [waitingTimeError, setWaitingTimeError] = useState(false);
  const [comment, setComment] = useState("");

  const handleWaitingTimeErrorState = () => {
    return waitingTime ? setWaitingTimeError(false) : setWaitingTimeError(true);
  };

  const handeSubmit = (event) => {
    event.preventDefault();
    console.log({ waitingTime }, { comment });
  };

  return (
    <form onSubmit={handeSubmit} className={styles.form} noValidate>
      <TextField
        error={waitingTimeError}
        name="waitingTime"
        value={waitingTime}
        onChange={(e) => setWaitingTime(e.target.value)}
        onBlur={handleWaitingTimeErrorState}
        className={styles.fullWidth}
        label="Várakozási idő (óra:perc)"
        type="time"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={3}
        label="Megjegyzés"
        type="text"
        variant="outlined"
        className={styles.fullWidth}
      />

      <div className={styles.buttons}>
        <Button onClick={closeDialog} color="secondary">
          Mégse
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Küldés
        </Button>
      </div>
    </form>
  );
};

export default Form;
