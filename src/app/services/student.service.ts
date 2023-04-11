import { Injectable } from '@angular/core';
import { Student } from '../models/student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private students: Student[] = [];

  

  constructor() {
    this.students.push({
      controlNumber: '18401145',
      name: 'Hector Izcoatl Llanos Godoy',
      curp: 'LAGH991023HNTLDC09',
      age: 23,
      nip: 3006,
      email: 'heizllanosgo@ittepic.edu.mx',
      career: 'ISC',
      photo: 'https://picsum.photos/200'
    },{
      controlNumber: '18401189',
      name: 'Jaime Robles Zepeda',
      curp: 'ROZJ991023HNTLDC09',
      age: 23,
      nip: 3006,
      email: 'heizllanosgo@ittepic.edu.mx',
      career: 'ISC',
      photo: 'https://picsum.photos/200'
    });
   }

   public getStudentList(): Student[]{
    return this.students;
   }

   public getStudentByControlNumberFilter(cn: string): Student|undefined {
    return this.students.find( elem => {
        return elem.controlNumber === cn;  
    });
   }//getStudentByControlNumberFilter

   public newStudent(student: Student): Student[] {
    this.students.push(student);
    alert(student.controlNumber+''+student.name+student.age+''+student.curp+student.nip+''+student.career);
    return this.students;
   }//newStudent

   public deleteStudent(student: Student): Student[] {
    const pos = this.students.findIndex(
      (_student) => _student.controlNumber == student.controlNumber
    );
    this.students.splice(pos,1);
    return this.students;
   }//deleteStudent

   public updateStudent(student: Student): Student[] {
    const pos = this.students.findIndex(
      (_student) => _student.controlNumber == student.controlNumber
    );
    this.students[pos] = student;
    return this.students;
   }//updateStudent

}//Final del service
