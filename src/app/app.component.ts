import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyCdxLbA60izzC-_bov9eLCoiTqm_MVaMUE",
        authDomain: "my-shopping-20aa2.firebaseapp.com",
        databaseURL: "https://my-shopping-20aa2.firebaseio.com",
        projectId: "my-shopping-20aa2",
        storageBucket: "",
        messagingSenderId: "320195777911"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
