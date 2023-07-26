import * as itemsAPI from './items-api';

export async function getItems() {
  const token = await itemsAPI.getItems();
  return token
}