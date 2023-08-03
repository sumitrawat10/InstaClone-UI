import { Component, ElementRef, ViewChild } from '@angular/core';

//TODO: Create an interface file for this Interface
interface IStory {
  user_id: string;
  profile_photo: URL;
}
//TODO: place it inside the constants file
const STORIES_SCROLL_STEP = 100;

@Component({
  selector: 'app-stories',
  templateUrl: './app-stories.component.html',
  styleUrls: ['./app-stories.component.scss'],
})
export class AppStoriesComponent {
  @ViewChild('horzStoryList') horizontalStoryList!: ElementRef;

  //TODO: Initialize as empty and fetch the result throught API
  stories: IStory[] = [
    {
      user_id: '1.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '2.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '3.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '4.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '5.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '6.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '7.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '8.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '9.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '10.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '11.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
    {
      user_id: '12.com',
      profile_photo: new URL(
        `https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png`
      ),
    },
  ];

  scrollLeft() {
    const scrollAmount =
      this.horizontalStoryList.nativeElement.scrollLeft - STORIES_SCROLL_STEP;
    this.horizontalStoryList.nativeElement.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const scrollAmount =
      this.horizontalStoryList.nativeElement.scrollLeft + STORIES_SCROLL_STEP;
    this.horizontalStoryList.nativeElement.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }
}
