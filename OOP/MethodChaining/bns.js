class User {
    constructor(name,email){
        this.username = name;
        this.mail = email;
       
    }

    login(){
        console.log( `${this.username} giriş yaptı`);
        return this ;
    }
    logout(){
        console.log( `${this.username} çıkış yaptı`);
        //return this; iki tane döndürdüğümüz için sondaki thise gerek yok
    }
};

const userOne = new User("bensu", "bb@gmail.com");
const userTwo = new User("selin", "ss@gmail.com");

//console.log(userOne, userTwo);

//console.log(userOne.login(), userTwo.logout());

userOne.login().logout();
