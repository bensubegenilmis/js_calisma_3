class User {
    constructor(name,email){
        this.username = name;
        this.mail = email;
       
    }

    login(){
        return `${this.username} giriş yaptı`;
    }
    logout(){
        return `${this.username} çıkış yaptı`;
    }
};

const userOne = new User("bensu", "bb@gmail.com");
const userTwo = new User("selin", "ss@gmail.com");

console.log(userOne, userTwo);

console.log(userOne.login(), userTwo.logout());
