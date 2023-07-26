import * as itemsAPI from './items-api';

export async function getItems() {
  const token = await itemsAPI.getItems();
  return token
}

export async function createItem(formData){

  await itemsAPI.newItem(formData);
}