export function removeFromQuery(query: string, key: string) {
  let temp = query;

  if (query && key) {
    let tempArr = query.split("/");
    let index = tempArr.findIndex((item) => item === key);
    if (index >= 0) {
      tempArr = tempArr.slice(0, index).concat(tempArr.slice(index + 2));
    }
    temp = tempArr.join("/");
  }

  return temp;
}

export function addOrUpdate(query: string, key: string, value: string) {
  let temp = removeFromQuery(query, key).concat(`/${key}/${value}`);
  if (temp.startsWith("//")) temp = temp.slice(1);
  return temp;
}
