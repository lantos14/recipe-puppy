/* eslint-disable arrow-parens */
const fetchData = (url) => fetch(url)
  .then(response => response.json())
  .then(response => response.results)
  .catch((error) => {
    throw error;
  });

export default fetchData;
