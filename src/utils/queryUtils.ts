export function checkQueryValidity(query: string[]) {
  return (
    query &&
    Array.isArray(query) &&
    query.length == 2 &&
    ["name", "region"].includes(query[0]) &&
    query[1]
  );
}
