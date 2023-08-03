import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { insta_icons } from 'src/assets/instagram-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  activeSidenavTab = '';
  icons: { [key: keyof typeof insta_icons]: MatIconRegistry } = {};

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    //  'ActivityFeed_Fill', 'ActivityFeed', 'Arrow', 'Carousel', 'Comment', 'Emoji',    'FindPeople_fill', 'FindPeople', 'Guides', 'Home_fill', 'Home', 'Logo', 'Like', 'Messenger_fill', 'Messenger', 'More', 'NewMessages', 'NewPosts', 'Options', 'Posts', 'Profile', 'Reels', 'Save', 'Search', 'SharePost', 'SwitchAccount', 'Tagged', 'Tags', 'Video_fill', 'Video'
    for (const [iconName, iconSVG] of Object.entries(insta_icons)) {
      this.icons[iconName] = iconRegistry.addSvgIconLiteral(
        iconName,
        sanitizer.bypassSecurityTrustHtml(iconSVG)
      );
    }
  }

  ngOnInit() {}
}
