import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent implements OnInit {
  @Input() dataList = []
  expend:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.expend = !this.expend
  }
}
