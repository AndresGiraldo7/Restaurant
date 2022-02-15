const customerscontroller = require("../models/customerscontroller");
module.exports = class customerscontroller{
    static async getAll (request,response){
        const customers = await customersModel.find();
      response.status(200).json(customers);
    }

    static async getByid(request, response){
      const id = request.params.id;
      const customers = await customersModel.find();
      response.status(200).json(customers);
    }
}