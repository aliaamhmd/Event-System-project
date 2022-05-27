import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpeakerModule } from './speaker/speaker.module';
import { LoginComponent } from './login/login.component';
import { StdSignUpComponent } from './std-sign-up/std-sign-up.component';
import { SpkSignUpComponent } from './spk-sign-up/spk-sign-up.component';
import { AuthInterceptor } from './auth.interceptor';
import { EventModule } from './event/event.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StdSignUpComponent,
    SpkSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,StudentModule,RouterModule,FormsModule,SpeakerModule,EventModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
