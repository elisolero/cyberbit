import { Component, OnInit ,Input } from '@angular/core';
import {DeviceService} from '../device.service';


@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {




  data;
  device_groups = [];


  constructor(private deviceService: DeviceService) {
  
   }

  ngOnInit() {
    this.data =   this.deviceService.getDevices()[0].device_groups;
  }


}
