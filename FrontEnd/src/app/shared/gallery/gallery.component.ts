import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import {sanitizeResourceUrl} from '@angular/core/src/sanitization/sanitization';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  walmartButton =  '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        'imageDescription': true,
        'imageAutoPlay': true,
        'imageAutoPlayPauseOnHover': true,
        'previewAutoPlay': false,
        'previewAutoPlayPauseOnHover': true
      },
      { 'breakpoint': 500, 'width': '550px', 'height': '550px', 'thumbnailsColumns': 3 },
      { 'breakpoint': 300, 'width': '100%', 'height': '100px', 'thumbnailsColumns': 2 }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/thumbnail-img-example.jpg',
        medium: 'assets/images/big-img-example.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a watch' + this.walmartButton,
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/thumbnail-img-example2.jpg',
        medium: 'assets/images/big-img-example2.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a brick' + this.walmartButton
      },
      {
        small: 'assets/images/image.png',
        medium: 'assets/images/image.png',
        big: 'assets/images/image.png',
        description: 'This a Ted' + this.walmartButton,
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/corn-on-the-cob.jpg',
        medium: 'assets/images/corn-on-the-cob.jpg',
        big: 'assets/images/corn-on-the-cob.jpg',
        description: 'This is corn???' + this.walmartButton
      },
      {
        small: 'assets/images/thumbnail-img-example.jpg',
        medium: 'assets/images/big-img-example.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This a watch' + this.walmartButton,
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/thumbnail-img-example2.jpg',
        medium: 'assets/images/big-img-example2.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a brick' + this.walmartButton
      },
    ];
  }

}
