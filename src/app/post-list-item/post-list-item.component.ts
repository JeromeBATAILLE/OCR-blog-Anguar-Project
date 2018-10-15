import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postLoveIts : number;
  @Input() postDate : Date;

  constructor() { }

  ngOnInit() {
  }

  dontLoveIt = () => this.postLoveIts--

  loveIt = () => this.postLoveIts++
}
