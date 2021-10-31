import store from "./store";
import { actions } from './reducer';

export const getOutfits = () => {
  const outfits = localStorage.getItem('outfits');
  if (!outfits) return;
  store.dispatch(actions.userOutfitsUpdated(JSON.parse(outfits)));
};

export const addOutfit = outfit => {
  const outfits = store.getState().userOutfits;
  let duplicate = false;
  outfits.forEach(obj => {
    if (obj['_id'] === outfit['_id']) {
      duplicate = true;
    }
  })
  if (duplicate) {
    return;
  }
  const clone = Object.assign([], outfits)
  clone.push(outfit);
  localStorage.setItem('outfits', JSON.stringify(clone));
  store.dispatch(actions.userOutfitsUpdated(clone))
};

export const deleteOutfit = id => {
  let outfits = store.getState().userOutfits;
  outfits = outfits.filter(outfit => outfit._id !== id);
  localStorage.setItem('outfits', JSON.stringify(outfits));
  store.dispatch(actions.userOutfitsUpdated(outfits));
};