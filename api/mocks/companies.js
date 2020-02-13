const faker = require("faker");

const specialities = ["excavation", "plumbing", "electrical"];

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getFakeCompany = () => {
  const rand = getRandomInt(200);
  const company = {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    city: faker.address.city(),
    logo: `https://picsum.photos/100?random=${rand}`,
    speciality: faker.random.arrayElement(specialities)
  };
  return company;
};

const getCompanies = (count = 10) => {
  const companies = [];
  for (let i = 0; i < count; i++) {
    companies.push(getFakeCompany());
  }
  return companies;
};

module.exports = { getCompanies };
