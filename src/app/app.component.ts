import { Component } from '@angular/core';
import {BoardingService} from "./boarding.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VismaPayApp';
  /*
  * jatka luokat loppuun
  *
  * tee tyhmät patch ja put metodit
  *
  * tee sit viel sign post metodi
  *
  * tee vähän jotai ulkonäöllisii juttuja ja regex patterneja
  *
  *
  * */
  constructor(private boardingService: BoardingService) {
  }

  ngOnInit() {
    this.boardingService.get('136af85054842f54811dc5e3d6b7c8b7af59e00413e98a99f35a5f64bc02f92c').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
