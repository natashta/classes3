const getNumber = (str) => {
  try {
    if (/^[1-9]\d*$/.test(str) && str > 0) return Number(str);
    throw new Error('Ввод некорректен');
  } catch (e) {
    return e;
  }
};

export default getNumber;
