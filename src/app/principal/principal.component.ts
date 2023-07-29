import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simularemos datos de muestra para los productos de ropa
    this.products = [
      { name: 'Camiseta', price: 25.99 },
      { name: 'Pantalón', price: 39.99 },
      { name: 'Vestido', price: 49.99 },
      // Agrega más productos si lo deseas
    ];
  }
}
