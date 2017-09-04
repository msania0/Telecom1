import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '.././services/dataprovider.service';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css','../.././assets/common.css']
})
export class BillingComponent implements OnInit {
    show: boolean = false;
    showInvoiceDiv: boolean = false;
    showLeaseDiv: boolean = true;
    listSP: any;
    showInvoice: boolean = false;
    lease_list: any[];
    customers_list: any[];
    constructor(private dataprovider: DataproviderService) { }

    ngOnInit() {
        this.listSP = this.dataprovider.listOfServiceProviders();
        this.customers_list = this.dataprovider.listofCustomers();
        this.lease_list = this.dataprovider.leaseList();

    }

    swipe() {
        this.showInvoiceDiv = !this.showInvoiceDiv;
        this.showLeaseDiv = !this.showInvoiceDiv;

    }
    openLeaseModal() {
        
        this.show = true;
    }

    closeLeaseModal() {
        
        this.show = false;
    }

    openInvoiceModal() {
        this.showInvoice = true;

    }

    closeInvoiceModal() {
        this.showInvoice = false;
    }

    LeaseButton(sp,startdate,enddate,bw) {
        console.log(sp, startdate, enddate, bw);
    }

    InvoiceButton(name, bw, sdate, edate,payment) {
        console.log(name, bw,sdate, edate, payment);
    }
}
