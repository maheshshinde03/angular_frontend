import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{

  ngOnInit(): void {
    // Toggle the side navigation
    document.getElementById('menu-toggle')!.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('wrapper')!.classList.toggle('toggled');
    });
  }
}
