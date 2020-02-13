import React from "react";
import { createUseStyles } from "react-jss";

import SpecialityCheckbox from "./SpecialtyCheckbox";

const useStyles = createUseStyles({
  filters: {
    display: "flex",
    background: "#fff",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  specialityFilters: {
    display: "flex",
    alignItems: "center"
  },
  label: {
    marginRight: 6,
    color: "#6c6c6c"
  },
  searchInput: {
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "6px 8px",
    fontSize: 18
  }
});

const allSpecialities = ["excavation", "plumbing", "electrical"];

const FiltersBar = ({
  searchValue = "",
  setSearchValue = () => {},
  selectedSpecialities = "",
  setSelectedSpecialities = () => {}
}) => {
  const classes = useStyles();
  const isSpecialitySelected = speciality =>
    selectedSpecialities.find(
      selectedSpeciality =>
        selectedSpeciality.toLowerCase() === speciality.toLowerCase()
    );

  const handleCheckboxChange = evt => {
    const name = evt.target.name;
    const value = evt.target.checked;
    if (!value) {
      setSelectedSpecialities(selectedSpecialities =>
        selectedSpecialities.filter(
          selectedSpeciality => selectedSpeciality !== name
        )
      );
    } else {
      setSelectedSpecialities([...selectedSpecialities, name]);
    }
  };

  return (
    <div className={classes.filters}>
      <div className={classes.nameFilter}>
        <label className={classes.label} htmlFor="search">
          Filter by Name:
        </label>
        <input
          id="search"
          name="search"
          type="text"
          className={classes.searchInput}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className={classes.specialityFilters}>
        <label className={classes.label}>Filter by Speciality:</label>
        {allSpecialities.map(speciality => (
          <SpecialityCheckbox
            key={speciality}
            name={speciality}
            value={isSpecialitySelected(speciality)}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FiltersBar;
