import { Component, OnInit, Input } from '@angular/core';
import {DeviceService} from '../device.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [DeviceService]
})
export class AccordionComponent implements OnInit {

  data;
  device_groups = [];


  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].device_groups;
  }

}
