import fetchData from './api/getResponse';
import concatLists from './utils/concatLists';

const getRecipeData = async (input, pageNum) => {
  const result = [];

  for (let i = 1; i <= pageNum; i += 1) {
    // need to use proxy due to CORS policy
    const url = `http://recipepuppyproxy.herokuapp.com/api/?q=${input}&p=${i}`;
    result.push(fetchData(url));
  }

  const lists = await Promise.all(result);
  // there is no limit query in the API, so if there is more than 1 page result,
  // I need to concatenate them for easier use of data
  return concatLists(lists);
};

export default getRecipeData;
