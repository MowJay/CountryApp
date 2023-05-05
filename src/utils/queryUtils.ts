export function checkQueryValidity(query: string[]) {
  return query && Array.isArray(query) && query.length == 2 && query[1];
}
