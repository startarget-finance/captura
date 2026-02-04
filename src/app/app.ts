import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  formData = {
    nome: '',
    email: '',
    faturamento: '',
    whatsapp: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  }
}
