import axios from "axios";

class InventoryService{

    getAllSKUs(){
        console.log(axios.get('http://localhost:3001/inventoryitems'));
        //return axios.get('http://localhost:3001/inventoryitems');
    }
    getOneSKU(id){
        return axios.get(``);
    }
    createSKU(data){
        return axios.post("", data);
    }
    updateSKU(data){
        return axios.put("", data);
    }
    deleteSKU(sku){
        return axios.delete("", {data: {sku: sku}})
    }

}

export default new InventoryService;