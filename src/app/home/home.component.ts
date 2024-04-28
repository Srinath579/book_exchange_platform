import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { };

  Booklist = [
    {
      BookId:123,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      OwnedBy: 'Srinath'
    },
    {
      BookId: 456,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      OwnedBy: 'Srinath'
    },
    {
      BookId: 789,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      OwnedBy: 'Srinath'
    },
    {
      BookId: 987,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      OwnedBy: 'Srinath'
    },
    {
      BookId: 654,
      ImgSrc: 'https://cdn.kobo.com/book-images/0c67417c-fed9-40f3-8d69-895e3f0ff2de/1200/1200/False/the-story-of-kalidas.jpg',
      BookName: 'The Story of Kalidas',
      Author: 'H.D. Bhatt Shailesh',
      OwnedBy: 'Srinath'
    }
  ]

  SubmitRequest(BookId:any)
  {
    console.log(BookId);
  }
}
