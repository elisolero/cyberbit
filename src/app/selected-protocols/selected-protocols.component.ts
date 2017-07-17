import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../device.service';


@Component({
  selector: 'app-selected-protocols',
  templateUrl: './selected-protocols.component.html',
  styleUrls: ['./selected-protocols.component.css'],
   providers: [DeviceService]
})
export class SelectedProtocolsComponent implements OnInit {

  data;

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].protocols;
    console.log(this.data)
  }
}
