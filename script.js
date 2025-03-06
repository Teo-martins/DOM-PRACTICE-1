document.addEventListener("DOMContentLoaded", function () {
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".card-body").forEach(card => {
            let quantity = parseInt(card.querySelector(".quantity").textContent);
            let unitPrice = parseInt(card.querySelector(".unit-price").textContent);
            total += quantity * unitPrice;
        });
        document.querySelector(".total").textContent = total + " $";
    }

    document.querySelectorAll(".fa-plus-circle").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElement = this.nextElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        });
    });

    document.querySelectorAll(".fa-minus-circle").forEach(button => {
        button.addEventListener("click", function () {
            let quantityElement = this.previousElementSibling;
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 0) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    document.querySelectorAll(".fa-trash-alt").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".card-body").remove();
            updateTotal();
        });
    });

    document.querySelectorAll(".fa-heart").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("liked");
            this.style.color = this.classList.contains("liked") ? "red" : "black";
        });
    });
});
