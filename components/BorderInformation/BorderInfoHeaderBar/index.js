import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./border-info-header-bar.module.scss";

const BorderInfoHeaderBar = ({ close }) => {
  return (
    <Box bgcolor="white">
      <div className={styles.headerBar}>
        <h3 className={styles.title}>HatárInfó</h3>
        <div className={styles.actionButton}>
          <IconButton onClick={close}>
            <CloseIcon color="primary" />
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default BorderInfoHeaderBar;
