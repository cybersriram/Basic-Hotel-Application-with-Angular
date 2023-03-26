import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class OrderDetailsforBreakFast {
    cuisine: String = "";
    Itemselected: String = "";
    name: String = "";
    qty: number = 0
    formGrp!:FormGroup;
    constructor (){
        var builder = new FormBuilder();
        this.formGrp = builder.group({});
        this.formGrp.addControl("NameValidation",new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]))
        this.formGrp.addControl("DropdownValidation", new FormControl('',[Validators.required]))
        this.formGrp.addControl("RadioRequired", new FormControl('',[Validators.required]))
        // this.formGrp.addControl("QtyValidation",new FormControl('',[Validators.required,Validators.pattern("^(?:[1-9])$")]))
    }
}