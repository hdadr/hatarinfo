import { Dialog, Divider, Fab, Paper } from "@material-ui/core";
import styles from "./border-info.module.scss";
import BorderDescription from "./BorderDescription";
import BorderInfoEntry from "./BorderInfoEntry";
import BorderInfoHeaderBar from "./BorderInfoHeaderBar";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";

const BorderInformation = ({ close, border, infos = [] }) => {
  if (border === null) {
    close();
  }

  const [openAddInfo, setOpenAddInfo] = useState(false);
  const handleCloseDialog = () => {
    setOpenAddInfo(false);
  };

  return (
    <div className={styles.container}>
      <BorderInfoHeaderBar close={close} />
      <Divider />

      <BorderDescription border={border} />

      <Paper elevation={1}>
        <div className={styles.infoContainer}>
          {infos.length ? (
            infos.map((info, index) => {
              return (
                <React.Fragment key={info.datetime + index}>
                  <BorderInfoEntry info={info} />
                  <Divider />
                </React.Fragment>
              );
            })
          ) : (
            <div>Az elmúlt 6 órában nem érkezett visszajelzés.</div>
          )}
        </div>
      </Paper>

      <div className={styles.floatingActionButton}>
        <Fab onClick={() => setOpenAddInfo(true)} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

      <Dialog open={openAddInfo} onClose={handleCloseDialog}>
        <Form closeDialog={handleCloseDialog} />
      </Dialog>
    </div>
  );
};

export default BorderInformation;
