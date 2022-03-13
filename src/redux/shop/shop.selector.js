import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionIdUrlParm => 
  createSelector(
    [selectCollections],
    collections => collections[collectionIdUrlParm]
  )
