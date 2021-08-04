import { AppBar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import styles from "./app-header.module.scss";
import Sidebar from "./Sidebar";

const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar position="static" className={styles.appBar}>
        <div className={styles.container}>
          <IconButton onClick={() => setDrawerOpen(true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
      </AppBar>

      <Sidebar open={drawerOpen} close={() => setDrawerOpen(false)} />
    </>
  );
};

export default AppHeader;
