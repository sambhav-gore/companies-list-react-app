import React from "react";
import CompanyCard from "./CompanyCard";

// if no search value then don't apply any filtering.
const filterByName = (company, searchValue) => {
  if (!searchValue) {
    return true;
  }
  return company.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
};

// if no selected speciality then dont apply the filter.
// if selected specialities are found then filter only the ones that match
const filterBySpeciality = (company, selectedSpecialities) => {
  if (!selectedSpecialities.length) {
    return true;
  }
  return selectedSpecialities.indexOf(company.speciality.toLowerCase()) > -1;
};

const CompaniesList = ({
  companies = [],
  searchValue = "",
  selectedSpecialities = []
}) => {
  const filteredCompanies = companies.filter(company => {
    return (
      filterByName(company, searchValue) &&
      filterBySpeciality(company, selectedSpecialities)
    );
  });

  if (!filteredCompanies.length) {
    return <div>No companies matching the filter criteria</div>;
  }

  return filteredCompanies.map(company => (
    <CompanyCard key={company.name} {...company} />
  ));
};

export default CompaniesList;
