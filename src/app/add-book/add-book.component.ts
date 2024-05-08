import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  ngOnInit(): void{}
  showPopup = false;
  // title:any;
  // author:any;
  // genre:any;
  // bookcondition:any;
  // status:any='1';
  formData = {
    title:'',
    author:'',
    genre:'',
    bookcondition:'',
    status:''
  };


  togglePopup() {
    this.showPopup = !this.showPopup;
  }


  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted with data:', this.formData);
   
  }

  submit() {
     // Handle form submission logic here
  //   console.log(this.title,this.author,this.genre,this.bookcondition,this.status);
  console.log('Form submitted with data:', this.formData);
    this.showPopup=false;
  }
  handleUpload(event:any) {
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=() => {
      console.log(reader.result);
    }  
  }
}
