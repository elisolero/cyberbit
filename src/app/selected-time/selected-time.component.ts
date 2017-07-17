import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../device.service';


@Component({
  selector: 'app-selected-time',
  templateUrl: './selected-time.component.html',
  styleUrls: ['./selected-time.component.css'],
     providers: [DeviceService]

})
export class SelectedTimeComponent implements OnInit {

  data;

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].times;
    console.log(this.data)
  }

}
