const user = {
    username: "adarsh",
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.userbane} ,welcome to website `);
    }
}

user.welcomeMessege()
user.username="Sam"
user.welcomeMessege()

console.log(this);

function chai(){
    console.log(this);
}
chai()