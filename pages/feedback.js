import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "../styles/feedback.module.scss";

const Feedback = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className={styles.title}>
        <h1>Visszajelzés</h1>
      </div>

      <form className={styles.form} noValidate>
        <div className={styles.subject}>
          <FormControl className={styles.fullWidth} variant="outlined">
            <InputLabel id="subject">Tárgy *</InputLabel>
            <Select labelId="subject" id="subject" label="Tárgy *" value={subject} onChange={(e) => setSubject(e.target.value)}>
              <MenuItem value="bug">Hibát találtam</MenuItem>
              <MenuItem value="feature">Ötletem van</MenuItem>
              <MenuItem value="else">Egyéb</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.message}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={16}
            label="Megjegyzés *"
            type="text"
            variant="outlined"
            className={styles.fullWidth}
          />
        </div>

        <div>
          <Button disabled={message.length < 3 || subject === ""} type="submit" variant="contained" color="primary">
            Küldés
          </Button>
        </div>
      </form>
    </>
  );
};

export default Feedback;
