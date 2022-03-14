import { Component, OnInit } from '@angular/core';
import {BoardingService} from "../boarding.service";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  boardingId: string;

  constructor(private boardingService: BoardingService) {
    this.boardingId = '136af85054842f54811dc5e3d6b7c8b7af59e00413e98a99f35a5f64bc02f92c';
  }

  ngOnInit(): void {
  }

  signDocument() {
    this.boardingService.sign(this.boardingId).subscribe(response => {
      console.log(response)
      alert('sign action succeeded')
    }, error => {
      console.log(error)
    })
  }

}
