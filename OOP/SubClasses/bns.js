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

class Admin extends User{
    deleteUser(userArrived){
        users = users.filter( (user) => user.username !== userArrived.username);
    }
};

const userOne = new User("bensu", "bb@gmail.com");
const userTwo = new User("selin", "ss@gmail.com");
const userThree = new Admin("can", "cc@gmail.com");

let users= [userOne,userTwo, userThree];
userThree.deleteUser(userOne)

console.log(userOne,userTwo,userThree);

console.log(users);



