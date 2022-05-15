import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
 
  selectedStudent?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: any): void {
    this.selectedStudent = student;
  }
}