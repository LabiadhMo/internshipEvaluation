import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { DataServiceService } from 'src/app/data-service.service';
import { SpinnerService } from 'src/app/modules/Spinner/spinner.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data:any[]=[];
  myForm!:FormGroup;

  constructor(private http:HttpClient,public spinnerServer:SpinnerService,private dataService:DataServiceService){}
  ngOnInit(){
    //init
    this.myForm = new FormGroup({
      name:new FormControl('',Validators.required),
      url:new FormControl('',[Validators.required,Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/)])
    });
    //Getting data from fireBase
    this.fetchSavedUrls();
  }

  // insert form  to firebase
  onSubmit(){
    this.dataService.addPosts({
      name:this.myForm.value.name,
      url:this.myForm.value.url
    }).subscribe(res =>{
      this.fetchSavedUrls();
    })

    
    
  }

  // validate url
  validate(){
    if (this.myForm!=null)
    if(!this.myForm.get('url')?.valid && this.myForm.get('url')?.touched)
    return true;
    return false;
  }

  // get saved data from firebase
  fetchSavedUrls(){
    this.dataService.getPosts().pipe(map((response:any)=>{
      const savedUrls = []
      for(const key in response){
        savedUrls.push({...response[key],id:key})
      }
      return savedUrls
    }))
    .subscribe(res=>{
      this.data = res
    })
  }
  // delete
  onDelete(id: any){
    this.dataService.deletePosts(id).subscribe(res=>{
      this.data = this.data.filter(elt => elt.id !== id)
    }) 
  }

}
