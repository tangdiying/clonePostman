import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clonePostman';
  selectedValue:string = "";//下拉框的值
  paramsValue:string = "";//参数文本框的值
  returnValue:string = "";//返回值文本框的值
  data = {
    "code": 0,
    "msg": "SUCCESS",
    "data": [
        {
            "app_id": 1,
            "appname": "嘿嘿嘿",
            "groups": [
                {
                    "group_id": 1,
                    "name": "A",
                    "status": true,
                    "trdetails": [],
                    "subgroup": [
                        {
                            "id": 3,
                            "name": "A1",
                            "status": true,
                            "trdetails": [
                                {
                                    "trdetail_id": 1,
                                    "title": "获取所有应用程序",
                                    "url": "http://192.168.50.180:9090/themis/apps/",
                                    "status": false
                                },
                                {
                                    "trdetail_id": 2,
                                    "title": "添加组",
                                    "url": "http://192.168.50.180:9090/themis/groupadd/",
                                    "status": false
                                }
                            ],
                            "subgroups": []
                        },
                        {
                            "id": 4,
                            "name": "A2",
                            "status": true,
                            "trdetails": [],
                            "subgroups": []
                        },
                        {
                            "id": 5,
                            "name": "A3",
                            "status": true,
                            "trdetails": [],
                            "subgroups": []
                        }
                    ]
                },
                {
                    "group_id": 2,
                    "name": "B",
                    "status": true,
                    "trdetails": [],
                    "subgroup": [
                      {
                        "id": 3,
                        "name": "A1",
                        "status": true,
                        "trdetails": [
                            {
                                "trdetail_id": 1,
                                "title": "获取所有应用程序",
                                "url": "http://192.168.50.180:9090/themis/apps/",
                                "status": false
                            },
                            {
                                "trdetail_id": 2,
                                "title": "添加组",
                                "url": "http://192.168.50.180:9090/themis/groupadd/",
                                "status": false
                            }
                        ],
                        "subgroups": []
                    }
                    ]
                }
            ]
        }
    ]
}
cascaderData = this.data.data
constructor(){
  
}
send(){
}
}
