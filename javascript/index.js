var textarea, qrcode, address;
var texts = '';
var index = 0;

const PLACE_HOLDER = "Hello, World!";

function refreshQrCode() {
    var current_address = texts[index] ? texts[index] : PLACE_HOLDER;
    qrcode.html('');
    qrcode.qrcode(current_address);
    address.html(current_address);
    $('#qrcode canvas').width('60%');
}

function init() {
    index = 0;
    texts = textarea.val().split('\n');
    refreshQrCode();
};

$(function () {
    textarea = $('#texts');
    qrcode = $('#qrcode');
    address = $('#address');

    texts = textarea.val().split('\n');

    refreshQrCode();

    textarea.on("change", init);
    textarea.on("input", init);

    qrcode.on("click", function () {
        index++;
        if (index == texts.length) {
            index = 0;
        }

        refreshQrCode();
    });
})