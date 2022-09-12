export class usersModel {
    private users: Array<any> = [];

    adicionaUsuario(id: number, user: string, password: string) {
        const userData = {
            idUsuario : id,
            user: user,
            password : password,
        }
        this.users.push(userData);
    }
}