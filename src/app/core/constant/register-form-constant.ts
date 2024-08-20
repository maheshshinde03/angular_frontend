import { IForm } from "../models/interfaces/reuableform";


export const registerFormConfig: IForm = {
    formTitle: 'Gym Registration Form',
    saveBtnTitle: 'Confirm Registration',
    resetBtnTitle: 'Reset',
    formControls: [
        {
            "name": "firstName",
            "label": "First name",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                // {
                //     "validatorName": "pattern",
                //     "pattern": "^[A-Z]{8,15}$",
                //     "message": "First name should be 8-15 characters in uppercase"
                // },
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "First Name is Required"
                },
            ]
        },
        
        {
            "name": "lastName",
            "label": "Last name",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                // {
                //     "validatorName": "pattern",
                //     "pattern": "^[A-Z]{8,15}$",
                //     "message": "First name should be 8-15 characters in uppercase"
                // },
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Last Name is Required"
                },
                {
                    "validatorName": "minlength",
                    "minLength": 3,
                    "message": "Minimun character should be 3"
                },
            ]
        },

        {
            "name": "email",
            "label": "Email",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "email",
            "validators": [
                // {
                //     "validatorName": "pattern",
                //     "pattern": "^[A-Z]{8,15}$",
                //     "message": "First name should be 8-15 characters in uppercase"
                // },
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Email is Required"
                },
                {
                    "validatorName": "email",
                    "email": "email",
                    "message": "Email is not valid"
                },
            ]
        },

        {
            "name": "mobile",
            "label": "Mobile Number",
            "value": "",
            "placeholder": "",
            "class": "col-md-6",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Last Name is Required"
                },
                {
                    "validatorName": "maxlength",
                    "maxLength": 10,
                    "message": "Maximum 10 digit is allowed"
                },
            ]
        },
      
        {
            "name": "weight",
            "label": "Weight",
            "value": "",
            "placeholder": "Should be in Kgs",
            "class": "col-md-6",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Weight is Required"
                },
            ]
        },

        {
            "name": "height",
            "label": "Height",
            "value": "",
            "placeholder": "Should be in cms",
            "class": "col-md-6",
            "type": "number",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Height is Required"
                },
            ]
        },

        {
            "name": "gender",
            "label": "Gender",
            "placeholder": "",
            "class": "col-md-6",
            "type": "radio",
            "radioOptions":[
                "Male",
                "Female",
                "Others"
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Gender is Required"
                },
            ]
        },

        {
            "name": "trainer",
            "label": "Require Trainer",
            "placeholder": "",
            "class": "col-md-6",
            "type": "radio",
            "radioOptions":[
                "Yes",
                "No"
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Selection is Required"
                },
            ]
        },
       
        {
            "name": "package",
            "label": "Package",
            "placeholder": "",
            "class": "col-md-6",
            "type": "select",
            "options":[
                {
                    "id":1,
                    "value": "Monthly"
                },
                {
                    "id":2,
                    "value": "Quarterly"
                },
                {
                    "id":1,
                    "value": "Yearly"
                },
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Package is Required"
                },
            ]
        },
        
        {
            "name": "enquiryDate",
            "label": "Date of Enquiry",
            "placeholder": "",
            "class": "col-md-6",
            "type": "date",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "Enquiry Date is Required"
                },
            ]
        },
    ]
}