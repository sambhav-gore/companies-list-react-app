import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    marginRight: 8
  },
  input: {
    cursor: "pointer"
  },
  label: {
    textTransform: "capitalize",
    cursor: "pointer"
  }
});

const SpecialityCheckbox = ({
  name = "",
  value = false,
  handleCheckboxChange = () => {}
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        name={name}
        id={name}
        type="checkbox"
        value={value}
        onChange={handleCheckboxChange}
        className={classes.input}
      />
      <label className={classes.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default SpecialityCheckbox;
