
import { Component } from '@angular/core';
import { onValue, Database, ref, update } from '@angular/fire/database'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dbref: any
  data: any


  constructor(public database: Database) {
    this.dbref = ref(this.database, 'TempuratureSensor')
    onValue(this.dbref, (response) => {
      this.data = response.val()
      console.log(this.data)
    })
  }

  buzzerOn(){
    update( ref(this.database, 'TempuratureSensor'), {
      buzzer:1
    })
  }
  buzzerOff(){
    update( ref(this.database, 'TempuratureSensor'), {
      buzzer:0
    })
  }
  


}
