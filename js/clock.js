window.onload = function() {
    const name = prompt("Adınız Nedir?");
    const myName = document.getElementById('myName');

    if (name) {
        myName.textContent = name;
    } 
    else {
        myName.textContent = "misafir";
    }
};

function showTime() {
    var rightNow = new Date();
    var date = rightNow.toLocaleDateString('tr-TR');
    var time = rightNow.toLocaleTimeString('tr-TR');
    
    document.getElementById('myClock').innerHTML = date + ' ' + time;
}

// Her saniyede bir saatGuncelle fonksiyonu çalışacak
setInterval(showTime, 1000);

