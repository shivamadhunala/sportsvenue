import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles = ['USER', 'ADMIN', 'OWNER'];
  hide = true;
  loginHasError = false;
  message = '';

  constructor(private router: Router, private authServiceObj: AuthService) { }

  ngOnInit() {
  }

    onSubmit(loginObj) {
      this.loginHasError = false;
      console.log(loginObj);
      this.authServiceObj.loginUser(loginObj)
      .subscribe(
          (res) => { console.log('Observable return on succuesful registration', res);

                     if (res.message === 'Invalid credentials!') {
                  this.loginHasError = true;
                  this.message = 'Invalid Credentials!';
            } else if (res.message === 'Email not exist') {
              this.loginHasError = true;
              this.message = `There is no user with this Email:${loginObj?.email}`;
            } else if (res.message === 'success') {


                    localStorage.setItem('Token', res.signedToken);
                    this.authServiceObj.loggedInEmail = res.email;
                    this.authServiceObj.loggedIn = true;
                    if (loginObj.role === 'Owner') {
                           console.log('Succesfully signed in as an Owner');
                           this.router.navigate(['owner/Ownerprofile']);


                    } else {
                      console.log('Succesfully signed in as an User');
                      this.router.navigate(['user/Userprofile']);
                    }
            } else {

            }

        },
          (err) => { console.log('some Error occured during registration', err);
                     this.loginHasError = true;
                     this.message = 'Some Error has occured, please try again later!';

        }
      );




   }

}
