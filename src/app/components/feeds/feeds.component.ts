import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class AppFeedsComponent {
  @ViewChild('imagehehe') imagehehe!: ElementRef<HTMLImageElement>;
  @ViewChild('horzImageScroll') horzImageScroll!: ElementRef<HTMLDivElement>;

  //TODO: Initialize as empty and get data from backend
  feedList = [
    {
      user_id: 'temp.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
      verfied: true,
      uploadTime: new Date(2023, 6, 28, 15, 43, 20),
      location: {
        place: 'Taj Mahal',
        city: 'Agra',
        country: 'UP',
      },
      feeds: [
        {
          source: '../../../assets/picsTest/1.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/2.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/3.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/4.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/5.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/6.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/7.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/8.jpg',
          alt: 'Photo of Linux',
        },
        {
          source: '../../../assets/picsTest/9.jpg',
          alt: 'Photo of Linux',
        },
      ],
    },
  ];

  previousFeedImage() {
    console.log('previous', this.imagehehe);
    const scrollAmount =
      this.horzImageScroll.nativeElement.scrollLeft -
      this.imagehehe.nativeElement.clientWidth;
    this.horzImageScroll.nativeElement.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  nextFeedImage() {
    console.log('next', this.imagehehe);
    const scrollAmount =
      this.horzImageScroll.nativeElement.scrollLeft +
      this.imagehehe.nativeElement.clientWidth;
    this.horzImageScroll.nativeElement.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
}
