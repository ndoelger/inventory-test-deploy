import sendRequest from './send-request';
//const BASE_URL = '/api/items'
const BASE_URL = '/inventoryitems'

export async function getItems() {
  return sendRequest(BASE_URL);
}

export async function newItem(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}