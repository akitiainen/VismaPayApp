import { Component, OnInit } from '@angular/core';
import {BoardingService} from "../boarding.service";
import {resolve} from "@angular/compiler-cli";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-boarding',
  templateUrl: './create-boarding.component.html',
  styleUrls: ['./create-boarding.component.css']
})
export class CreateBoardingComponent implements OnInit {

  constructor(private boardingService: BoardingService) { }

  ngOnInit(): void {
  }

  createNewBoarding() {
    this.boardingService.createBoarding({vatNumber: '2486559-4', pricePackage: 'power'}).subscribe(response => {
      console.log(response)
      this.boardingService.get(response.id).subscribe(response => {
        console.log(response);
        alert('New boarding created successfully');
      })
    },
      error => {
      console.log(error)
      })
  }

}
