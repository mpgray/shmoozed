import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

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
        description: 'This a watch <a href=#>Hi</a>',
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/thumbnail-img-example2.jpg',
        medium: 'assets/images/big-img-example2.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a brick'
      },
      {
        small: 'assets/images/thumbnail-img-example.jpg',
        medium: 'assets/images/big-img-example.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This a watch',
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/thumbnail-img-example2.jpg',
        medium: 'assets/images/big-img-example2.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a brick'
      },
      {
        small: 'assets/images/thumbnail-img-example.jpg',
        medium: 'assets/images/big-img-example.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This a watch',
        url: 'http://watch.com'
      },
      {
        small: 'assets/images/thumbnail-img-example2.jpg',
        medium: 'assets/images/big-img-example2.jpg',
        big: 'assets/images/massive-img-example.jpg',
        description: 'This is a brick'
      },
    ];
  }

}