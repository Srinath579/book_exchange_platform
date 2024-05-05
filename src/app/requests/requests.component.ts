import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  Requestlist = [
    {
      BookId: 123,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      RequestedBy: 'Sai Nikshay',
      Status: 'Pending'
    },
    {
      BookId: 123,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      RequestedBy: 'Sai Nikshay',
      Status: 'Approved'
    },
    {
      BookId: 123,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      RequestedBy: 'Sai Nikshay',
      Status: 'Declined'
    }
  ]
  SubmitRequest(BookId: any) {
    console.log(BookId);
  }
}
