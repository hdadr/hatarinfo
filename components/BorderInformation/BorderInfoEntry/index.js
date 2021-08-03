import { Box, IconButton, Menu, MenuItem, useTheme } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInformation } from "../../../store/infos/actions";
import { selectDeviceID } from "../../../store/selectors";
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
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const deviceID = useSelector(selectDeviceID);
  const dispatch = useDispatch();

  const colorLeftBorderBasedOnWaitingTime = (waitingTime) => {
    const [hours, minutes] = waitingTime.split(":");
    const waitingTimeInMins = +hours * 60 + +minutes;

    let color = theme.palette.error.main;
    if (waitingTimeInMins <= 30) {
      color = theme.palette.success.main;
    } else if (waitingTimeInMins <= 90) {
      color = theme.palette.warning.main;
    }

    return { borderLeft: `3px solid ${color}` };
  };

  return (
    <div className={styles.container} style={colorLeftBorderBasedOnWaitingTime(info.waitingTime)}>
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
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            size="small"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true">
            <MoreHorizIcon color="primary" />
          </IconButton>
          <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={() => setAnchorEl(null)}>
            {deviceID === info.deviceID ? (
              <MenuItem onClick={() => dispatch(deleteInformation({ borderID: info.borderID, infoID: info.id }))} selected>
                Törlés
              </MenuItem>
            ) : (
              <MenuItem selected>Jelentés</MenuItem>
            )}
          </Menu>
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
