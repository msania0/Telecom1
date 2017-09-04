import { Injectable } from '@angular/core';

@Injectable()
export class DataproviderService {

    constructor() { }
  service_providers = ["Service Provider 1 ", "Service Provider 2","Service Provider 3"];
  customers_list = [
      {
          "name": "Customer1",
          "startDate": "01/04/2017",
          "endDate": "01/10/2017",
          "bw": "100",
          "payment" : "1500"
      },
      {
          "name": "Customer2",
          "startDate": "06/08/2017",
          "endDate": "06/8/2017",
          "bw": "100",
          "payment": "500"
      }
  ]
  lease_list = [{
      "name": "SP1",
      "startDate": "02/09/2015",
      "endDate": "04/08/2018",
      "bw" : "20000"
  }]
  op_list = [

      {
          "name": "Operator1",
          "startDate": "02/04/2015",
          "endDate": "01/10/2018",
          "bw": "2000",
          "usedbw" : "300",
          "payment": "10000"
      },
      {
          "name": "Operator2",
          "startDate": "05/08/2017",
          "endDate": "06/8/2019",
          "bw": "2000",
          "usedbw" : "500",
          "payment": "10000"
      }
  ]
  req_list = [
      {
          "name": "Operator3",
          "startDate": "09/09/2017",
          "endDate": "08/07/2019",
          "bw" :  "1500",
          "type": "Request",

      },
       {
          "name": "Operator4",
          "startDate": "09/09/2017",
          "endDate": "08/07/2019",
          "bw": "1500",
          "type": "Renewal",

      }
  ]
  listOfServiceProviders() {
      return this.service_providers;
  } 

  listofCustomers() {
      return this.customers_list;
  }

  leaseList() {
      return this.lease_list;
  }
  opList() {
      return this.op_list;
  }
  reqList() {
      return this.req_list;
  }
}
