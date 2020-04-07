import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from
  "@angular/forms";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'form-app',
  templateUrl: './form.app.component.html'
})

export class FormAppComponent {

  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^@]*@[^ @]*")
  ]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges.subscribe(data => console.log(JSON.stringify(data)));
    //.filter(data => this.form.valid)
  }

  onSubmit() {
    console.log("Form submitted!");
  }
}

