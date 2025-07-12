function greetuser(user) {
    console.log("namaste! " + user.name + ". your age is " + user.age + ".");
    if(user.age > 18) {
        console.log("You can Vote.");
    } else {
        console.log("You can't Vote.");
    }
}

let user = {
    name : "Vaidehi",
    age : 90
};

greetuser(user)