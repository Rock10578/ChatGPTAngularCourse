import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,              // 👈 required for standalone component
  imports: [],                   // 👈 you can add other standalone components/directives here
  templateUrl: './hello.html',
  styleUrls: ['./hello.scss']    // 👈 note the "s" at the end
})
export class HelloComponent {
  message = 'Hello from my standalone component 🎉';
}