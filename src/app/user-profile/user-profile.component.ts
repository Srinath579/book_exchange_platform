import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { blob } from 'stream/consumers';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  Booklist: any[] = [];
  formData = {
    title: '',
    author: '',
    genre: '',
    bookcondition: '',
    status: '',
    bookimage: ''
  };
  public emailid = window.sessionStorage.getItem('emailid');
  public username = window.sessionStorage.getItem('username');
  async ngOnInit(): Promise<void> {
    await this.appService.getUserBooks().subscribe(response => {
      this.Booklist = response.allbooks;
    });
  }
  constructor(private router: Router, private appService: AppService, private http: HttpClient) { };

  async ChangeAvailability(BookId: any) {
    await this.appService.changeAvailability(BookId).subscribe();
  }

  async DeleteUserBook(BookId: any) {
    await this.appService.deleteUserBook(BookId).subscribe();
  }
  FilterBookList(bookid: number): void {
    this.Booklist = this.Booklist.filter(item => (item.BOOK_ID !== bookid));
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

  async AddBook() {
    // console.log('Form submitted with data:', this.formData);
    await this.appService.addUserBook(this.formData).subscribe();
  }
  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      this.formData.bookimage = base64String;
    }
  }
}
