import React, { useState } from "react";
import useSwr from "swr";
import { createUseStyles } from "react-jss";

import fetch from "../utils/fetch";
import CompaniesList from "./CompaniesList";
import FiltersBar from "./FiltersBar";

const useStyles = createUseStyles({
  root: {
    height: "100%",
    width: "100%",
    padding: 20
  },
  listWrapper: {
    padding: "20px 0"
  },
  listTitle: {
    margin: "0 0 20px",
    fontSize: 34
  }
});

const Companies = () => {
  const classes = useStyles();
  // TODO : The API url should be moved to .env file
  const { data, error } = useSwr("http://localhost:3100/companies", fetch);

  const [searchValue, setSearchValue] = useState("");
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);

  if (error) {
    return <div>Error. failed to load the data</div>;
  }
  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={classes.root}>
      <header>
        <h2 className={classes.listTitle}>All Companies</h2>
      </header>

      <FiltersBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedSpecialities={selectedSpecialities}
        setSelectedSpecialities={setSelectedSpecialities}
      />

      <div className={classes.listWrapper}>
        <CompaniesList
          companies={data.companies}
          searchValue={searchValue}
          selectedSpecialities={selectedSpecialities}
        />
      </div>
    </div>
  );
};

export default Companies;
