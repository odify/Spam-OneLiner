var i = 135; setInterval(function () {
    document.write(String.fromCharCode(i)), i % 300 == 0 && document.write("<br>"), i++
}, 2);