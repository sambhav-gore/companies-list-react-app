import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    background: "#fff",
    display: "flex",
    padding: 10,
    border: "1px solid rgba(0,0,0,0.1)",
    margin: "0 0 20px",
    alignItems: "center"
  },
  nameContainer: {
    flex: "1 1 0",
    textAlign: "left",
    padding: "0 20px"
  },
  name: {
    margin: " 0 0 20px"
  },
  speciality: {
    color: "salmon",
    padding: 20,
    textTransform: "capitalize"
  }
});

const CompanyCard = ({ name = "", logo = "", city = "", speciality = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div classes={classes.logoContainer}>
        <img src={logo} alt={name} />
      </div>
      <div className={classes.nameContainer}>
        <h2 className={classes.name}>{name}</h2>
        <div>{city}</div>
      </div>
      <div className={classes.speciality}>{speciality}</div>
    </div>
  );
};

export default CompanyCard;
