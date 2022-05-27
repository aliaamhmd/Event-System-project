import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logdata={"Email":"",
      "Password":""}
      Login(){
        this.authserv.login(this.logdata).subscribe(a=>{
          localStorage.setItem("userToken",a.Token)
          if(a.role==="Admin")
          {this.router.navigate(["/header"])}
          else if(a.role==="Student")
          {
            this.router.navigate(["/Students/Details/"+a.id])
          }
          else if(a.role==="Speaker")
          {
            this.router.navigate(["/Speakers/Details/"+a.id])
          }

          console.log(a)
        })
        
      }


  constructor(public authserv:AuthService,public router:Router) { }

  ngOnInit(): void {

  }

}
