import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  id:number;
  posts: Post[]=[];

  constructor(private postclient: PostService) {
  }

  ngOnInit(): void {
    this.postclient.getPosts().subscribe(value => this.posts=value)
  }
}
