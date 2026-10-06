import { Component } from '@angular/core';
import { DataService, Post } from '../../services/data/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list-httpclient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list-httpclient.component.html',
  styleUrl: './post-list-httpclient.component.scss'
})
export class PostListHttpclientComponent {
  posts: Post[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 👈 Subscribe to trigger the network request
    this.dataService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Failed to load posts', err)
    });
    console.log("Json placeHolder Data", this.posts)
  }
}
