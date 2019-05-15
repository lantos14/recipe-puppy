const concatLists = (lists) => {
  const result = [];
  lists.forEach((el) => {
    el.forEach((subel) => {
      result.push(subel);
    });
  });

  return result;
};

export default concatLists;
