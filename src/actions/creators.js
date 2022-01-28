export const FETCH_CREATORS = 'FETCH_CREATORS';
export const fetchCreators = () => ({
  type: FETCH_CREATORS,
});

export const SAVE_CREATORS = 'SAVE_CREATORS';
export const saveCreators = (creators) => ({
  type: SAVE_CREATORS,
  creators: creators,
});
