export class usersModel {
    constructor() {
        this.users = [];
    }
    adicionaUsuario(id, user, password) {
        const userData = {
            idUsuario: id,
            user: user,
            password: password,
        };
        this.users.push(userData);
    }
}
