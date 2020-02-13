import React from "react";
import { createUseStyles } from "react-jss";

import Companies from "./components/Companies";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    width: "100%",
    height: "100%"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Companies />
    </div>
  );
}

export default App;
