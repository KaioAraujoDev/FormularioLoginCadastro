import { userController } from './controller/userController.js';
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const controllerUser = new userController;
    alert(controllerUser.userInput);
});
