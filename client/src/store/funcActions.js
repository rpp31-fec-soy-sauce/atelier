import store, { actions } from "./store";

export const getOutfits = () => {
  const outfits = localStorage.getItem('outfits');
  store.dispatch(actions.userOutfitsUpdated(JSON.parse(outfits)));
};

export const addOutfit = outfit => {
  const outfits = store.getState().userOutfits;
  outfits.push(outfit);
  localStorage.setItem('outfits', JSON.stringify(outfits));
  store.dispatch(actions.userOutfitsUpdated(outfits))
};

export const deleteOutfit = id => {
  let outfits = store.getState().userOutfits;
  outfits = outfits.filter(outfit => outfit._id !== id);
  localStorage.setItem('outfits', JSON.stringify(outfits));
  store.dispatch(actions.userOutfitsUpdated(outfits));
};