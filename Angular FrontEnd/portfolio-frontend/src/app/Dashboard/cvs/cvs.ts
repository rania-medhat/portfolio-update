import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CvsService } from '../../Core/Services/CV.Service';

@Component({
  selector: 'app-admin-cvs',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cvs.html',
  styleUrls: ['./cvs.css'],
})
export class CVs {

  constructor(private cvService:CvsService){}

  addCV(CVForm:NgForm){
    if(CVForm.invalid){
      return
    }
    else{
    this.cvService.add(CVForm.value)
.subscribe({
  next:()=>{
    alert('CV Added Successfully');
    CVForm.reset();
  },
error:(err)=>{
  console.log(err);
  alert('failed to add cv');
}
})
    }
  }
}
