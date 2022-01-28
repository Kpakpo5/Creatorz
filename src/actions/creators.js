// Les actions sont des objets représentants nos intentions
// Ainsi un composant qui veut initialiser un changement
// ne décrira pas ce changement mais émettra simplement une intention en dispatchant une action.
// Le relais sera pris ensuite par le reducer pour traduire cette intention en
// modification du state.

// action type : est ni plus ni moins qu’une constante pour
// mémoriser la chaîne de caractère représentant l’action.
// Permet d'éviter les fautes de frappes
export const FETCH_CREATORS = 'FETCH_CREATORS';
// action creator : est une fonction qui retourne l’objet action,
// cela évite d’avoir à réécrire sa structure à chaque fois et
// éventuellement de la rendre paramétrable
export const fetchCreators = () => ({
  type: FETCH_CREATORS,
});

export const SAVE_CREATORS = 'SAVE_CREATORS';
export const saveCreators = (creators) => ({
  type: SAVE_CREATORS,
  // je prépare une action qui accepte un paramètre et s'en
  // sert pour retourner un objet action portant une info
  creators: creators,
});

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const saveComments = (comments) => ({
  type: SAVE_COMMENTS,
  comments: comments,
});
