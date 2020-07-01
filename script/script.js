document.querySelectorAll(".modal-container img").forEach(el => {

    el.addEventListener("click", function(ev) {
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        console.log("Entre");
    })

});

document.querySelectorAll(".modal-container").forEach(el => {

    el.addEventListener("click", function(ev) {

        this.parentNode.classList.remove("active");
        console.log("Sali");
    })

});