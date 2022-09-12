export class userController {
    constructor() {
        this.userInput = document.querySelector('#user');
        this.passwordInput = document.querySelector('#password');
    }
    get verificarValores() {
        return this.userInput.value;
    }
    findUser() {
    }
}
