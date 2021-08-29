import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-demo';
  courses: Array<string> = ["Course1", "Course2"];
  viewMode : string = 'map';
  canSave : boolean = true;

  courseDetails: Array<any> = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'}
  ];
  course!: { id: number; name: string; }[];

  // checkCourse() {
  //   if(this.courses.length > 0)
  //     then ;
  //   else
  //     return false;
  // }

  // noCourse() {
  //   if(this.courses.length == 0)
  //     return true;
  //   else
  //     return false;
  // }

  getFormData(value: any) {
    console.log(value);
  }

  onLoadCourses() {
    this.course = [
      {id: 1, name: 'Course1'},
      {id: 2, name: 'Course2'},
      {id: 3, name: 'Course3'}
    ];
  }

  trackCourse(index : number, course : any) {
    return course ? course.id : undefined;
  }

}
