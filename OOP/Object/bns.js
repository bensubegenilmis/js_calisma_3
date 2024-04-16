const userOne = {
    username:"Bensu",
    email:"bb@gmail.com",
    login(){
        console.log("Bensu giriş yaptı")
    },
    logout(){
        console.log("Bensu çıkış yaptı")
    }
,
};

console.log(userOne.email, userOne.username);
userOne.login();
userOne.logout();


const userTwo = {
    username:"Can",
    email:"cc@gmail.com",
    login(){
        console.log("Can giriş yaptı")
    },
    logout(){
        console.log("Can çıkış yaptı")
    }
,
};
console.log(userTwo.email, userTwo.username);
userTwo.login();
userTwo.logout();

