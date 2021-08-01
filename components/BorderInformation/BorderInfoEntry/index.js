import { Box } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styles from "./border-info-message.module.scss";

const formatDatetime = (datetime) => {
  const date = new Date(datetime);
  return date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0");
};

const formatWaitingTime = (waitingTime) => {
  const [hours, minutes] = waitingTime.split(":");
  return hours === "0" ? `${minutes} perc` : `${hours} óra ${minutes} perc`;
};

const BorderInfoEntry = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <AccountCircleIcon fontSize="large" color="disabled" />
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div>
            <span className={styles.userName}>{info.user ? info.user.name : "Anonymous"} </span>
            <Box color="text.secondary" component="span">
              {formatDatetime(info.datetime)}
            </Box>
          </div>
          <MoreHorizIcon color="primary" />
        </div>

        <div className={styles.contentWatingTime}>
          <Box color="text.secondary" component="span">
            Várakozási idő:
          </Box>{" "}
          {formatWaitingTime(info.waitingTime)}
        </div>

        <div className={styles.contentMessage}>
          <Box color="text.secondary" component="span">
            Megjegyzés:
          </Box>{" "}
          {info.comment ? info.comment : "-"}
        </div>
      </div>
    </div>
  );
};

export default BorderInfoEntry;
