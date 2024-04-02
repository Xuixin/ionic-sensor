import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getDatabase, Database, provideDatabase } from '@angular/fire/database'
import { NavController } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => {
      return initializeApp({
        apiKey: "AIzaSyBJnag5s7OFVMHPuxY9Xbntlb5VI5Z97xk",
        authDomain: "realtimedbproject-c112b.firebaseapp.com",
        databaseURL: "https://realtimedbproject-c112b-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "realtimedbproject-c112b",
        storageBucket: "realtimedbproject-c112b.appspot.com",
        messagingSenderId: "627443182529",
        appId: "1:627443182529:web:b42ad110dc642c754bdd40"
      })
    }),
    provideDatabase(() => { return getDatabase() })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
