import { Drawer, IconButton, Link } from "@material-ui/core";
import GavelIcon from "@material-ui/icons/GavelRounded";
import FeedbackIcon from "@material-ui/icons/FeedbackTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./sidebar.module.scss";

const Sidebar = ({ open, close }) => {
  return (
    <Drawer anchor="right" open={open} onClose={close}>
      <div className={styles.drawer}>
        <div className={styles.close}>
          <IconButton onClick={close} edge="start" color="inherit" aria-label="menu">
            <CloseIcon color="primary" />
          </IconButton>
        </div>

        <div className={styles.links}>
          <div>
            <Link>
              <div className={styles.link}>
                <FeedbackIcon />
                <span>Visszajelzés</span>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className={styles.link}>
                <GavelIcon />
                <span>Szabályzat</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
