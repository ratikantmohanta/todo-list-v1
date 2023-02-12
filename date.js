module.exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

//module.exports.sayHello = sayHello;

exports.sayHello = sayHello;

function sayHello() {
    console.log("Hello");
}