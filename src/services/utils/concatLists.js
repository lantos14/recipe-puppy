const concatLists = (lists) => {
  const result = [];

  lists.forEach((el) => {
    if (!el) { return; }

    el.forEach((subel) => {
      result.push(subel);
    });
  });

  return result;
};

export default concatLists;
