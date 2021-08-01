import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewInfo } from "../../../store/infos/actions";
import { selectDeviceID, selectInfoLoading } from "../../../store/selectors";
import styles from "./border-information-form.module.scss";

const Form = ({ closeDialog, borderID }) => {
  const [comment, setComment] = useState("");
  const [waitingTime, setWaitingTime] = useState("00:30");
  const deviceID = useSelector(selectDeviceID);

  const [waitingTimeError, setWaitingTimeError] = useState(false);
  const handleWaitingTimeErrorState = () => {
    return waitingTime ? setWaitingTimeError(false) : setWaitingTimeError(true);
  };

  const [submitted, setSubmitted] = useState("");
  const loading = useSelector(selectInfoLoading);
  useEffect(() => {
    submitted & !loading ? closeDialog() : null;
  }, [submitted, loading, closeDialog]);

  const dispatch = useDispatch();
  const handeSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    dispatch(
      addNewInfo({
        borderID,
        data: {
          deviceID,
          waitingTime,
          comment,
          datetime: Date.now(),
          report: {
            counts: 0,
            reporters: [],
          },
        },
      })
    );
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

        <Button disabled={loading} type="submit" variant="contained" color="primary">
          Küldés
        </Button>
      </div>
    </form>
  );
};

export default Form;
