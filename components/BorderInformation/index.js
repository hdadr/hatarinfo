import { Dialog, Divider, Fab, Paper } from "@material-ui/core";
import styles from "./border-information.module.scss";
import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { loadInformations } from "../../store/infos/actions";
import { selectDeviceID, selectEntrieswithoutUserReported } from "../../store/selectors";
import Header from "./Header";
import Description from "./Description";
import Entry from "./Entry";
import Form from "./Form";

const sortByDatetimeDesc = (i1, i2) => i2.datetime - i1.datetime;

const BorderInformation = ({ close, border }) => {
  const dispatch = useDispatch();
  const deviceID = useSelector(selectDeviceID);
  const infoEntries = useSelector(selectEntrieswithoutUserReported(deviceID)).sort(sortByDatetimeDesc);
  const [openAddInfo, setOpenAddInfo] = useState(false);

  const handleCloseDialog = () => {
    setOpenAddInfo(false);
  };

  useEffect(() => {
    dispatch(loadInformations({ borderID: border?.id }));
  }, [dispatch, border]);

  return (
    <div className={styles.container}>
      <Header closeBorderInformation={close} />
      <Divider />

      <Description border={border} />

      <Paper elevation={1}>
        <div className={styles.infoContainer}>
          {infoEntries.length ? (
            infoEntries.map((info, index) => {
              return (
                <React.Fragment key={info.datetime + index}>
                  <Entry info={{ ...info, borderID: border?.id }} />
                  <Divider />
                </React.Fragment>
              );
            })
          ) : (
            <div>Az elmúlt 8 órában nem érkezett visszajelzés.</div>
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
