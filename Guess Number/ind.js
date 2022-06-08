var btn_Kaydet = document.getElementById("Kaydet");
var Random_Number = Math.floor(Math.random() * 100);
var Tebrik_Kart = document.getElementById("Tebrik_Kart");
Tebrik_Kart.style.display = "none";
var btn_Again = document.getElementById("Again");

btn_Kaydet.onclick = function () {

    var Min_Number = document.getElementById("min_number");
    var Max_Number = document.getElementById("max_number");
    var input_Sayi = document.getElementById("Gelen_Sayi_id");


    if (input_Sayi.value > 100 || 0 > input_Sayi.value) {
        window.alert("yanlış sayı");

    }
    else {
        if (input_Sayi.value == Random_Number) {
            Tebrik_Kart.style.display = "";
            console.log("Doğru");
        }
        else {
            if (input_Sayi.value > Random_Number) {
                Max_Number.innerHTML = input_Sayi.value;
                console.log("çok");
            }
            else {
                Min_Number.innerHTML = input_Sayi.value;
                console.log("az");
            }
        }

    }

}


btn_Again.onclick = function () {
    window.location.reload(false);
}
