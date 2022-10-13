import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friends-data',
  templateUrl: './view-friends-data.component.html',
  styleUrls: ['./view-friends-data.component.css']
})
export class ViewFriendsDataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewList().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
  }
  viewData:any=[]
  ngOnInit(): void {
  }

}
