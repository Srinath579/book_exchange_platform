import { Component, EventEmitter, Output } from '@angular/core';
import { UserProfileService } from '../app.userProfileService';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Output() bookCreated: EventEmitter<void> = new EventEmitter<void>();

  title!: string;
  author!: string;
  genre!: string;
  bookCondition!: string;
  availabilityStatus!: string;
  image!: File | null; // File object to hold the selected image file

  constructor(private userProfileService: UserProfileService) { }

  onSubmit(): void {
    // Check if an image file is selected
    if (!this.image) {
      console.error('Please select an image');
      return;
    }

    // Read the image file as base64
    const reader = new FileReader();
    reader.readAsDataURL(this.image);
    reader.onload = () => {
      // Create formData with base64 encoded image
      const formData = {
        title: this.title,
        author: this.author,
        genre: this.genre,
        book_condition: this.bookCondition,
        availability_status: this.availabilityStatus,
        owner_id: sessionStorage.getItem('userid'),
        image: reader.result // Base64 encoded image
      };

      // Send formData to createBook method in UserProfileService
      this.userProfileService.createBook(formData).subscribe({
        next: () => {
          console.log('Book created successfully');
          // Emit an event to inform the parent component about the creation of a new book
          this.bookCreated.emit();
          // Reset form fields
          this.resetForm();
        },
        error: (error) => {
          console.error('Error creating book:', error);
          // Handle error, e.g., show an error message
        }
      });
    };
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      // Retrieve the selected image file
      this.image = target.files[0];
    }
  }

  private resetForm(): void {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.bookCondition = '';
    this.availabilityStatus = '';
    this.image = null;
  }
}
