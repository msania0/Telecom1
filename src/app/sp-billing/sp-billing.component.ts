import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '.././services/dataprovider.service';

@Component({
  selector: 'app-sp-billing',
  templateUrl: './sp-billing.component.html',
  styleUrls: ['./sp-billing.component.css', '../.././assets/common.css']
})
export class SpBillingComponent implements OnInit {
    showInvoiceDiv: boolean = false;
    showRequestDiv: boolean = true;
    showInvoice: boolean = false;
    operators_list: any[];
    req_list: any[];
    constructor(private dataService: DataproviderService) { }

    ngOnInit() {
        this.operators_list = this.dataService.opList();
        this.req_list =this.dataService.reqList();
  }
  swipe() {
      this.showInvoiceDiv = !this.showInvoiceDiv;
      this.showRequestDiv = !this.showInvoiceDiv;
  }
  openInvoiceModal() {
      this.showInvoice = true;

  }

  closeInvoiceModal() {
      this.showInvoice = false;
  }
}
