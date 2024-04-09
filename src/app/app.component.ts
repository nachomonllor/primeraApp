import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi nuevo titulo';

  suma: number = 0;

  nombre: string = "Augusto";

  sumar() {
    this.suma ++;
  }
  restar() {
    if(this.suma > 0) {
      this.suma--;
    }
  }
}
