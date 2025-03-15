
$(document).ready(function () {
  $('.gallery-img').on('click', function () {
      var imgSrc = $(this).attr('data-img');
      console.log("Clicked Image:", imgSrc); // Debugging log

      if (imgSrc) {
          $('#modalImage').attr('src', imgSrc);
          $('#imageModal').modal('show');
      } else {
          console.error("No data-img attribute found!");
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const subtotalEl = document.getElementById("subtotal");
    const deliveryEl = document.getElementById("delivery");
    const totalEl = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkout");
  
    let cart = [];
  
    function updateCart() {
        cartItems.innerHTML = "";
        let subtotal = 0;
  
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            li.innerHTML = `
                ${item.name} (${item.quantity} pcs) - ₱${item.price}
                <button class="btn btn-sm btn-secondary remove-item" data-index="${index}">✖</button>
            `;
            cartItems.appendChild(li);
            subtotal += item.price;
        });
  
        subtotalEl.textContent = `₱${subtotal}`;
        let deliveryFee = cart.length > 0 ? 50 : 0;
        deliveryEl.textContent = `₱${deliveryFee}`;
        totalEl.textContent = `₱${subtotal + deliveryFee}`;
        checkoutBtn.disabled = cart.length === 0;
    }
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function () {
            let productName = this.getAttribute("data-name");
            let quantitySelect = this.previousElementSibling;
            let [price, quantity] = quantitySelect.value.split("-").map(Number);
  
            cart.push({ name: productName, quantity, price });
            updateCart();
        });
    });
  
    cartItems.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            updateCart();
        }
    });
  
    checkoutBtn.addEventListener("click", function () {
      alert("Thank you for your purchase!");
      
      // clear the cart
      cart = [];
      
      // update the cart display
      updateCart();
  });
  });

$(document).ready(function () {
    $(".faq-button").click(function () {
        let icon = $(this).find(".toggle-icon");
        icon.text(icon.text() === ">" ? "v" : ">");
    });
});

$('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var imgSrc = button.data('img'); 
    var modal = $(this);
    modal.find('#modalImage').attr('src', imgSrc); 
});