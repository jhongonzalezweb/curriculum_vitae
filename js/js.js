function myFunction() {
    var x = document.getElementById("carouselExampleSlidesOnly");
    if (x.style.display === "none") {
        x.style.display = "block";
        var ocultarVideo = document.getElementById("ocultaVideo");
        ocultarVideo.innerHTML = "Ocultar"

        var botoncito = document.getElementById("botoncito");
        botoncito.style.marginLeft = "48%";
        botoncito.style.fontWeight = "bold";
        
    } else {
        x.style.display = "none";
        var ocultarVideo = document.getElementById("ocultaVideo");
        ocultarVideo.innerHTML = "Ver de Nuevo!!"
        var botoncito = document.getElementById("botoncito");
        botoncito.style.marginLeft = "44%";
        botoncito.style.fontWeight = "bold";


    }
}
