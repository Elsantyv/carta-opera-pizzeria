document.querySelectorAll(".modal-container img").forEach(el => {

    el.addEventListener("click", function(ev) {
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        console.log("Entre");
    })

});

document.querySelectorAll(".modal-container").forEach(el => {

    el.addEventListener("click", function(ev) {

        this.classList.remove("active");
        console.log("Sali");
    })

});

document.querySelectorAll(".modal-container img").forEach(el => {

    el.addEventListener("click", function(ev) {
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        console.log("Entre");
    })

});

document.querySelectorAll(".modal-container").forEach(el => {

    el.addEventListener("click", function(ev) {

        this.classList.remove("active");
        console.log("Sali");
    })

});