import { Dialog, Divider, Fab, Paper } from "@material-ui/core";
import styles from "./border-info.module.scss";
import BorderDescription from "./BorderDescription";
import BorderInfoEntry from "./BorderInfoEntry";
import BorderInfoHeaderBar from "./BorderInfoHeaderBar";
import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { loadInformations, unsetInformation } from "../../store/infos/actions";
import { selectBorderInformationEntires } from "../../store/selectors";

const sortByDatetimeDesc = (i1, i2) => i2.datetime - i1.datetime;

const BorderInformation = ({ close, border }) => {
  const dispatch = useDispatch();
  const infoEntries = useSelector(selectBorderInformationEntires);
  const [openAddInfo, setOpenAddInfo] = useState(false);

  const handleCloseDialog = () => {
    setOpenAddInfo(false);
  };

  useEffect(() => {
    dispatch(unsetInformation());
    dispatch(loadInformations({ borderID: border?.id }));
  }, [dispatch, border]);

  return (
    <div className={styles.container}>
      <BorderInfoHeaderBar close={close} />
      <Divider />

      <BorderDescription border={border} />

      <Paper elevation={1}>
        <div className={styles.infoContainer}>
          {infoEntries.length ? (
            infoEntries.sort(sortByDatetimeDesc).map((info, index) => {
              return (
                <React.Fragment key={info.datetime + index}>
                  <BorderInfoEntry info={{ ...info, borderID: border?.id }} />
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
        <Form closeDialog={handleCloseDialog} borderID={border?.id} />
      </Dialog>
    </div>
  );
};

export default BorderInformation;
