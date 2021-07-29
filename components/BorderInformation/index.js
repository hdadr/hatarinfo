import { Divider, Paper } from "@material-ui/core";
import styles from "./border-info.module.scss";
import BorderDescription from "./BorderDescription";
import BorderInfoEntry from "./BorderInfoEntry";
import BorderInfoHeaderBar from "./BorderInfoHeaderBar";
import React from "react";

const BorderInformation = ({ close, border, infos = [] }) => {
  if (border === null) {
    close();
  }

  return (
    <div className={styles.container}>
      <BorderInfoHeaderBar close={close} />
      <Divider />

      <BorderDescription border={border} />

      <Paper elevation={1}>
        <div className={styles.infoContainer}>
          {infos.length ? (
            infos.map((info) => {
              return (
                <React.Fragment key={info.datetime}>
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
    </div>
  );
};

export default BorderInformation;
