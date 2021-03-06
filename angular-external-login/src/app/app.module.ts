import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { ReadWriteStorage } from './shared/services/storage-interfaces';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CognitoServiceModule } from './plugins/cognito/cognito.module';
import { IdentityServerServiceModule } from './plugins/identityserver/identity-server.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    // CognitoServiceModule.forRoot(environment.identityProvider),
    HttpClientModule,
    IdentityServerServiceModule.forRoot(environment.identityProvider),
  ],
  declarations: [AppComponent],
  providers: [
    { provide: ReadWriteStorage, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
