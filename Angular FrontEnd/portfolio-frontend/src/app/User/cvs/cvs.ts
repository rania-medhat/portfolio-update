import { Component } from '@angular/core';
import { CvsService } from '../../Core/Services/CV.Service';

@Component({
  selector: 'app-cvs',
  standalone: true,
  imports: [],
  templateUrl: './cvs.html',
  styleUrls: ['./cvs.css'],
})
export class CVs {

  CVs: any[] = [];

  constructor(private CVService:CvsService){
  }

 ngOnInit() {
    this.getAllCVs();
}

  getAllCVs(){

 return this.CVService.getAll().subscribe({
      next: (res) => {
        this.CVs = res;
        console.log(this.CVs);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
