const mapMonths = {
  Janeiro: 1,
  Fevereiro: 2,
  Março: 3,
  Abril: 4,
  Maio: 5,
  Junho: 6,
  Julho: 7,
  Agosto: 8,
  Setembro: 9,
  Outubro: 10,
  Novembro: 11,
  Dezembro: 12,
};

function orderEdition(array) {
  const newArray = [];
  if (array.length > 0) {
    array.forEach((item) => {
      const splitedItem = item.edition.split(" ");
      if (newArray.length === 0) {
        return newArray.push(item);
      } else {
        for (let i = 0; i < newArray.length; i += 1) {
          const splitedItemNew = newArray[i].edition.split(" ");
          if (splitedItem[2] === splitedItemNew[2]) {
            if (mapMonths[splitedItemNew[0]] < mapMonths[splitedItem[0]]) {
              return newArray.splice(i, 0, item);
            }
            if (i === newArray.length - 1) {
              return newArray.push(item);
            }
          }
          if (splitedItemNew[2] < splitedItem[2]) {
            return newArray.splice(i, 0, item);
          }
          if (i === newArray.length - 1) {
            return newArray.push(item);
          }
        }
      }
    });
  }
  return newArray;
}

export default orderEdition;
