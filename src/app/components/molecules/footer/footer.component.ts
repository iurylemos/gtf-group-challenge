import { Component, Input } from '@angular/core';
import { SharedServiceInterface } from 'src/app/interfaces/SharedService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() data: SharedServiceInterface = {
    cpfValidate: false,
    cpfData: {},
  };
}
