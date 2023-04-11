import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';//Import para trabajar con forms
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public student: Student;
  public myForm: FormGroup; 
  public validationMessages;

  constructor(private studentService: StudentService, private fb: FormBuilder){ /**Siempre se */
    this.myForm = this.fb.group({
      cn: ["",Validators.compose([Validators.minLength(8), //Compose sirve para meter varias validaciones a un input, recibe un arreglo
        Validators.pattern('^[0-9]+$')])], // pattern recibe una expresion regular
      name: ["",Validators.required],
      curp: ["",Validators.compose([Validators.required, //Compose sirve para meter varias validaciones a un input, recibe un arreglo
        Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      age: ["",Validators.compose([Validators.required, Validators.min(17)])],
      nip: ["",Validators.compose([Validators.required, Validators.min(10)])],
      email: ["",Validators.compose([Validators.required, Validators.email])],
      carreer: ["",Validators.required],       
      photo: [""]
    });

    this.student = {
      name:"",
      controlNumber:"",
      age:0,
      nip:0,
      email:"",
      career:"",
      curp:"",
      photo:""
    }

    this.validationMessages = {
      'cn':[
        {type: 'required', message: "El numero de control es obligatorio"},
        {type: 'minlength', message: "El numero de control esta incompleto"},
        {type: 'pattern', message: "El numero de control no es valido"},
      ],
      'name':[
        {type: 'required', message: "El numero de control es obligatorio"},
        {type: 'minlength', message: "El numero de control esta incompleto"},
        {type: 'pattern', message: "El numero de control no es valido"},
      ]
    }
  }

  ngOnInit(){}

  public newStudent() {
    this.student = {
      name:this.myForm.controls['name'].value,
      controlNumber:this.myForm.controls['cn'].value,
      age:this.myForm.controls['age'].value,
      nip:this.myForm.controls['nip'].value,
      email:this.myForm.controls['email'].value,
      career:this.myForm.controls['career'].value,
      curp:this.myForm.controls['curp'].value,
      photo:this.myForm.controls['photo'].value
    }
    this.studentService.newStudent(this.student);
  }

}
