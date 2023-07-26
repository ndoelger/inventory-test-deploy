import axios from "axios";

class InventoryService{

    getAllSKUs(){
        return axios.get(``);
    }
    getOneSKU(id){
        return axios.get(``);
    }
    findSKU(sku){
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