import fetchData from './fetchData';
import concatLists from './concatLists';

const getRecipeData = async (input, pageNum) => {
  const result = [];

  for (let i = 1; i <= pageNum; i += 1) {
    const url = `http://recipepuppyproxy.herokuapp.com/api/?q=${input}&p=${i}`;
    result.push(fetchData(url));
  }

  const lists = await Promise.all(result);

  return concatLists(lists);
};

export default getRecipeData;
