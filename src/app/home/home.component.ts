import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Booklist!: any[];
  async ngOnInit(): Promise<void> {
    await this.appService.getAllBooks().subscribe(response => {
      this.Booklist = response.allbooks;
    });
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };

  async SubmitExchangeRequest(returnByDate: any, deliveryMethod:any, owneremailid: string, bookid: any, bookname: string) {
    console.log(deliveryMethod);
    await this.appService.submitExchangeRequest(returnByDate, deliveryMethod, owneremailid, bookid, bookname).subscribe()
  }

  private modalService = inject(NgbModal);
  closeResult = '';

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
