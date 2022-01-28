/* eslint-disable import/prefer-default-export */

export function find(list, searchedSlug) {
  return list.find((item) => item.slug === searchedSlug);
}
