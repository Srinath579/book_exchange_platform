import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent implements OnInit {
  Requestlist: any[] = [];
  async ngOnInit(): Promise<void> {
    await this.appService.getExchangeRequests().subscribe(response => {
      this.Requestlist = response.exchangerequests;
    });
    console.log(this.Requestlist);
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };

  async UpdateRequest(ExchangeId: any, strUpdate:string) {
    let updatedstatus='';
    if (strUpdate === 'Accept') {
      updatedstatus = 'Accepted';
    }
    else if (strUpdate === 'Decline'){
      updatedstatus = 'Declined';
    }
    await this.appService.updateExchangeStatus(ExchangeId, updatedstatus).subscribe();
    let itemIndex = this.Requestlist.findIndex(item => item.EXCHANGE_ID == ExchangeId);
    this.Requestlist[itemIndex].STATUS = updatedstatus;
  }
}
