import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css'],
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    { title: 'Grand Circus', thought: 'Grand Circus is cool' },
    { title: 'Ritual', thought: 'Ritual is a well developed app' },
    { title: 'Scott', thought: 'Scott rides scooters' },
  ];

  showForm: boolean = false;

  constructor() {}

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
