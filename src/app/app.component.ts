import { Component } from '@angular/core';
import {DeviceService} from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeviceService]
})
export class AppComponent {

  data;
  device_groups = [];

  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].device_groups;
  }

}
