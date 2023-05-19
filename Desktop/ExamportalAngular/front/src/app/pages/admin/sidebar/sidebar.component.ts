import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
constructor(private login:LoginService,private router:Router){}

  public logout(){
    this.login.logout();
    window.location.reload();
  }
  ngAfterViewInit() {
  const links = document.querySelectorAll('mat-sidenav-container button.mat-list-item');
  const currentUrl = this.router.url;

  links.forEach(link => {
    if (link.getAttribute('routerLink') === currentUrl) {
      link.classList.add('active');
    }
  });


}
}
