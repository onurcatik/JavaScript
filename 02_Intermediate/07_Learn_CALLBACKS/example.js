function hello() {
    console.log("Hello")
}

function goodbye() {
    console.log("GoodBye")
}

hello()
goodbye()


// ----------------------

function hello() {
    setTimeout(() => {
        console.log("Hello");
    }, 3000)
}

// -----------------

function merhaba(callback) {
    setTimeout(() => {
        console.log("Merhaba");
        callback();
    }, 3000)
}

function GuleGule(){
    console.log("GoodBye");
}

merhaba(GuleGule)