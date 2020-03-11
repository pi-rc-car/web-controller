import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms/forms';


const ACTION_URL = 'http://' + environment.host + ':' + environment.port + '/action/';
const POWER_URL = 'http://' + environment.host + ':' + environment.port + '/power/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rc-controller';

  power = 100;

  constructor(private client: HttpClient) {}


  turn_right() {
    this.client.get(ACTION_URL, {params: new HttpParams().append('action', 'turn_right')}).subscribe((msg) => {
      console.log('right');
    });
  }

  turn_left() {
    this.client.get(ACTION_URL, {params: new HttpParams().append('action', 'turn_left')}).subscribe((msg) => {
      console.log('left');
    });
  }

  roll_front() {
    this.client.get(ACTION_URL, {params: new HttpParams().append('action', 'roll_front')}).subscribe((msg) => {
      console.log('front');
    });
  }

  roll_back() {
    this.client.get(ACTION_URL, {params: new HttpParams().append('action', 'roll_back')}).subscribe((msg) => {
      console.log('back');
    });
  }

  stop() {
    this.client.get(ACTION_URL, {params: new HttpParams().append('action', 'stop')}).subscribe((msg) => {
      console.log('stop');
    });
  }

  set_power(power: number) {
    this.client.get(POWER_URL, {params: new HttpParams().append('power', power ? power.toString() : '0')}).subscribe((msg) => {
      console.log('power: ' + power);
    });
  }

  onsubmit(form: NgForm) {
    const power = form.value.power;
    this.set_power(power as number);
  }
}
