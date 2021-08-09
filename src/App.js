import React from "react";
import "./App.css";
import { Typography, AppBar } from "@material-ui/core";
import Videoplayer from "./components/videoplayer";
import Notifications from "./components/notifications";
import Options from "./components/options";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "520px",
    border: "transparent",
    color: "#001E6C",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    fontSize: "100px",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position='static'>
        <Typography align='center'>Call Your Loved One's</Typography>
      </AppBar>
      <Videoplayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
