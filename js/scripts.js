// 1) Create a Master function that will call on seperate functions:
//  - Form creation
//  - Label Creation
//  - Input Creation
// EXAMPLE:
// function Parent() {
// 	-Form()
// 	-Label()
// 	-Input()
// }

const formGroup = document.createElement('div');
formGroup.className = 'form-group';

const formContent = document.querySelector('.form_content');
// console.log(formGroup);

const button = document.querySelector('#myButton');

// Creates Form
function createMyForm(){
    const form = document.createElement('form');
    form.setAttribute('name', 'myForm');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', " ");
    form.appendChild(formGroup);
    formContent.appendChild(form);

    // console.log(form);
}


// Creates Label
function createSubjectLabel(){
    const subjectLabel = document.createElement('label');
    subjectLabel.setAttribute('for', 'subject');
    subjectLabel.innerText = 'Subject';
    formGroup.appendChild(subjectLabel);
    // console.log(formGroup);
};

// Creates input/text area
function createTextArea(){
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'textarea');
    textarea.setAttribute('type', 'text');
    textarea.setAttribute('class', 'form-control');
    textarea.setAttribute('id', 'textarea');
    formGroup.appendChild(textarea);
    // console.log(formGroup);
};

// Generates Form into dom
function formGenerator(){
    createMyForm();
    createSubjectLabel();
    createTextArea();
}

button.addEventListener('click', formGenerator);
