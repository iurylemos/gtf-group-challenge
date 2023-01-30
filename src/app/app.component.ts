import { Component, OnInit } from '@angular/core';
import { SharedServiceInterface } from './interfaces/SharedService';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'gft-group-challenge';
  public sharedService: SharedService;

  public sharedData: SharedServiceInterface = {
    cpfValidate: false,
    cpfData: {},
  };

  constructor(private _sharedService: SharedService) {
    this.sharedService = this._sharedService;
  }

  ngOnInit(): void {
    this.sharedService.changeEmitted$.subscribe(
      (text: SharedServiceInterface) => {
        this.sharedData = text;
      }
    );
  }
}
