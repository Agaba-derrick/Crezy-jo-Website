// Add the shop's WhatsApp number here in international format, digits only (e.g. "2567XXXXXXXX").
var WHATSAPP = "";

(function () {
    var form = document.getElementById("orderForm");
    var note = document.getElementById("waNote");
    var link = document.getElementById("waLink");
    var phone = document.getElementById("phoneText");
    if (WHATSAPP) {
        link.href = "https://wa.me/" + WHATSAPP;
        phone.textContent = "+" + WHATSAPP;
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!WHATSAPP) { note.hidden = false; return; }
        var d = new FormData(form);
        var msg = "Hello Crezy Jo Arts, I'm " + d.get("name") + ".\nI need: " + d.get("service") +
            (d.get("details") ? "\nDetails: " + d.get("details") : "");
        window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
})();

