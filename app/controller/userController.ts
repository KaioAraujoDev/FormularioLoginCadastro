export class userController {
    public userInput:HTMLInputElement
    public passwordInput:HTMLInputElement
    
    constructor(){
        this.userInput = document.querySelector('#user');
        this.passwordInput = document.querySelector('#password');
    }

     get verificarValores() : string {
        return this.userInput.value 
    }
    
    findUser(){

    }
}