## Installation

`Yarn` is the prefered package manager, optionally, all of the yarn commands could be used with `npm` as well.

### Api (server)

```
cd api
yarn
```

### Client (react app)

```
cd client
yarn
```

## Running the Api and Client locally

#### API

In a terminal window:

```
cd api
yarn start:dev
```

note - to run without watching for files, use `yarn start`

- The API server will run on http://localhost:3100

#### Client

In a **new terminal window**

```
cd client
yarn start
```

- The React App will run on http://localhost:3000

### Key Features and Explanations:

- Create React App was used to setup the react application so as to save time in scaffolding
- [React-JSS](https://cssinjs.org/react-jss/?v=v10.0.4) is used as the CSS-in-JS solution to style the react app. this allows collision-free selectors and can be easily extended to support for themes, server-side-rendering, reuse of styles, dynamic styles and more. More details [here](https://cssinjs.org/features?v=v10.0.4)
- [useSWR hook](https://swr.now.sh/) is used as the solution for remote data fetching. This hook comes with some nice features as using the cache data first and then revalidating through request. this also makes local mutations and refetching at fixed intervals a breeze.
  - **TIP**: When this demo app is running, click on a different tab (or window) to lose the focus from the app. Afterwards when the window gets focused again, you would see that the Data is changed. this is because SWR is re-validating stale data when the window gets the focus back. It is also revalidating the data when (or if) the internet connection drops and connects again.
- Instead of going with a `table` view, I have made a UI in cards-like layout, detailing the 4 info items which were requested, logo, name, city (city is the one below the name), and speciality.
- On the API side, it is a very simple Express app with only one route for `companies`
- Instead of using a static JSON for data, I have used [Faker JS](https://github.com/marak/Faker.js/) to generate realistic looking fake data.
- Similar to client side, a generator ([Express generator](https://expressjs.com/en/starter/generator.html)) was used to create the app skeleton. I did modify a few things in there though.

### If I had more time to work on this, I would:

- Add tests
- Add linting and prettier support (note that since my dev setup has linting and prettier support, the current code is good per me, but when adding more team members it is better to have linting and code formatting rules defined, maybe even code-editor configs)
- Add git hooks to automate linter and tests
- Probably eject the app to take full control of web pack (optional)
- Add scripts in top level package to install, run, test and watch api and client apps together
- Add hot reloading support (for both client api changes)
- Set up code splitting
- Add SSR support
- Connect the filters to API (at present the filters are only client side, it is best to handle any sorting, filtering or pagination on server side IMO)
- Add responsive styles. this one currently only looks good on desktop scrrens.
- Add Sorting for data
- Add Pagination
- Add some visual effect (minor animations) when the filtered items are changed - as google says - `Motion provides meaning`
- Change the hardcoded filters of Speciality to dynamic ones (based on specialities present in the current data OR based on API response)
- Change the checkbox styling
- Probably use a different component like React-select or similar in place of checkboxes.

### Total time spent on making this solution:

~ Approx. 7 hours.
