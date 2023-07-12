import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public getJsonValue:any;  
  // public postJsonValue:any;  
  public responseData:any;
  formData = {
    // Define your form fields here
    title: '',
    body: '',
    userId: '',
    // ...
  }
  constructor(private http:HttpClient)
  { }
  ngOnInit(): void {
//  this.getMethod();
//  this.postMethod();
  }


submitForm(){
  this.http.post('https://jsonplaceholder.typicode.com/posts', this.formData).subscribe(
    (response) => {
      // Handle success response
      this.responseData = response; // Assign the API response to responseData
      console.log('API response:', response);
    },
    (error) => {
      // Handle error response
      console.error('API error:', error);
    }
  );
}

}



















  // public getMethod(){
  //   this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=>{
  //     console.log(data);
  //     this.getJsonValue=data;
  //   });

  // } 
  // public postMethod(){
    
    
  //   this.http.post('https://jsonplaceholder.typicode.com/posts',{}).subscribe((data)=>{
  //     console.log(data);
  //     this.postJsonValue=data;
  //   });
  
  // }
