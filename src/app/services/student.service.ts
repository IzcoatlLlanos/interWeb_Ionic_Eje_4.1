import { Injectable } from '@angular/core';
import { Student } from '../models/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private students: Student[];

  

  constructor() {
    this.students = [{
      controlNumber: '18401145',
      name: 'Hector Izcoatl Llanos Godoy',
      curp: 'LAGH991023HNTLDC09',
      age: 23,
      nip: 3006,
      email: 'heizllanosgo@ittepic.edu.mx',
      career: 'ISC',
      photo: 'https://fastly.picsum.photos/id/859/600/600.jpg?hmac=xepFxeogyk6l3g9L3iqsATVWaE-JapYVrIxjsFkiN6s'
    },{
      controlNumber: '18401189',
      name: 'Jaime Robles Zepeda',
      curp: 'ROZJ991023HNTLDC09',
      age: 23,
      nip: 3006,
      email: 'heizllanosgo@ittepic.edu.mx',
      career: 'ISC',
      photo: 'https://fastly.picsum.photos/id/859/600/600.jpg?hmac=xepFxeogyk6l3g9L3iqsATVWaE-JapYVrIxjsFkiN6s'
    }];
   }

   public getStudentList(): Student[]{
    return this.students;
   }

   public getStudentByControlNumberForEach(cn: string): Student {
    let student: Student = 
    {
      controlNumber: '',
      name: '',
      curp: '',
      age: 0,
      nip: 0,
      email: '',
      career: '',
    }
    this.students.forEach(element => {
      if(element.controlNumber == cn) {
        student = element;
      }
    });
    
    return student;
   }//getStudentByControlNumber

   public getStudentByControlNumberFilter(cn: string): Student|undefined {
    return this.students.find( elem => {
        return elem.controlNumber === cn;  
    });
   }//getStudentByControlNumberFilter

   public newStudent(student: Student): Student[] {
    this.students.push(student);
    return this.students;
   }//newStudent

   public deleteStudent(pos: number): Student[] {
    this.students.splice(pos);
    return this.students;
   }//deleteStudent

   public updateStudent(pos: number, student: Student): Student[] {
    this.students[pos] = student;
    return this.students;
   }//updateStudent

}//Final del service
