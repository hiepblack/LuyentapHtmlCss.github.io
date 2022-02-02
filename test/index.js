function thoiGian() {
    var today = new Date();
    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();
    setTimeout("thoiGian()", 1000);
    var box = document.getElementById('time');
    box.innerHTML = giay;
}
thoiGian();