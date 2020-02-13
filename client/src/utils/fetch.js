import fetch from "isomorphic-unfetch";

// Custom fetch function used for SWR which returns the json data from the response
export default async function(...args) {
  const res = await fetch(...args);
  return res.json();
}
