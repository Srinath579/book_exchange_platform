import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../app.userProfileService';
import { bufferToBase64 } from '../buffer-utils';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  books: any[] = [];

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.loadUserDetails();
    this.loadUserBooks();
   
  }

  loadUserDetails() {
    this.userProfileService.getUserDetails().subscribe(response => {
      this.user = response.user;
    });
  }

  loadUserBooks() {
    this.userProfileService.getBooksForUser().subscribe(response => {
      this.books = response;
      // Convert Buffer objects to base64 strings for book images
      this.books.forEach(book => {
        if (book.book_image && book.book_image.type === 'Buffer') {
          book.book_image = bufferToBase64(book.book_image);
          console.log(book.book_image);
        }
      });
    });
  }

  // Event handler for bookCreated event emitted by BookFormComponent
  onBookCreated(): void {
    // Refresh the book list
    this.loadUserBooks();
  }

  
}
