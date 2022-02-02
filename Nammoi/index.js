function thoiGian() {
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();
    console.log(day, month, year, gio);

    if (giay < 10) {
        giay = "0" + giay;
    }
    if (day < 10) {
        day = "0" + (day - 1);
    }
    if (month < 10) {
        month = "0" + (month + 1);
    }

    setTimeout("thoiGian()", 1000);

    var box = document.getElementById('day');
    box.innerHTML = day;

    var box1 = document.getElementById('month');
    box1.innerHTML = month;

    var box2 = document.getElementById('year');
    box2.innerHTML = year;

    var box3 = document.getElementById('hours');
    box3.innerHTML = gio;

    var box4 = document.getElementById('minute');
    box4.innerHTML = phut;

    var box5 = document.getElementById('second');
    box5.innerHTML = giay;

}
thoiGian();

