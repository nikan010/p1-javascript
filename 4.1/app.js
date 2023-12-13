

let output = '';
    for (let i = 1; i <= 10; i++) {
    output += i + ' x 10 ' + (i * 10) + '<br>'
    }

document.getElementById('tafelvantien').innerHTML = output