$(function() {

    $("#mail").on('click', ()=> {

        $("#mail").select();
        $("#mail").setSelectionRange(0, 99999);

        document.execCommand("copy");
        alert("skopiowano")

    })
})