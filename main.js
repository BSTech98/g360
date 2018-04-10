function showCards(id1, id2) {
    var x = document.getElementById(id1);
    var x1 = document.getElementById(id2);
    if (x.style.display === "none") {
        x.style.display = "flex";
        x1.style.display = "none";
    } else {
        x.style.display = "none";
    }
} 
