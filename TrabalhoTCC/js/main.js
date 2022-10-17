class validator {
    constructor() {
        this.validations = ['data-min-length'];
    }

    validate(form) {
        let inputs = form.getElementsBytagname('input');

        let inputsarray = [...inputs];

        inputsarray.forEach(function (input) {
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {

                    let method = this.validations[i].replace('data-', '').replace('-','');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input, value);
                }
            }
        }, this);
   
    }
    
    minlength(input, minvalue) {
      
        let inputlengyh = input.value.length;

        let errorMessage = `O campo precisa ter pelos menos ${minvalu} caracteres`;

        if(inputLength < minvalue){
            this.printMressage(input, errorMessage);
        }
    }

    printMressage(input, msg) {

        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputparent = input.parentNode;

        template.classlist.remove('template');

        inputparent.appendchild(template);
    }
}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new validator();

submit.addEventListener('click', function (e) {
    
    e.preventDefault();

    validator.validate(form);
});
