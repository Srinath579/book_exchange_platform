import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  ngOnInit(): void{}
  showPopup = false;
  title:any;
  author:any;
  genre:any;
  bookcondition:any;
  status:any='1';



  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  formData = {
    email: '',
    password: ''
  };

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted with data:', this.formData);
   
  }

  submit() {
     // Handle form submission logic here
     console.log(this.title,this.author,this.genre,this.bookcondition,this.status);
    
    this.showPopup=false;
  }
}
