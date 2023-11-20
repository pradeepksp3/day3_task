let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let users = (JSON.parse(xhr.responseText));

    users.forEach(element => {
        console.log(element.name["common"])
    })
}

xhr.send();