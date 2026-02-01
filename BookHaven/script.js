// Touchstone 3.2 – Web Storage Implementation
document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------
     SHOPPING CART (sessionStorage)
  --------------------------*/

  // Get cart or initialize empty array
  function getCart() {
    return JSON.parse(sessionStorage.getItem("cartItems")) || [];
  }

  function saveCart(cart) {
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  }

  // Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-item");
      const cart = getCart();
      cart.push(itemName);
      saveCart(cart);
      alert("Item added to the cart.");
    });
  });

  // View Cart
  const viewCartBtn = document.getElementById("viewCartBtn");
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      const cart = getCart();
      const cartList = document.getElementById("cartItems");
      cartList.innerHTML = "";

      if (cart.length === 0) {
        cartList.innerHTML = "<li>No items in cart.</li>";
      } else {
        cart.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          cartList.appendChild(li);
        });
      }

      document.getElementById("cartModal").style.display = "block";
    });
  }

  // Clear Cart
  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      sessionStorage.clear();
      alert("Cart cleared.");
      location.reload();
    });
  }

  // Process Order
  const processOrderBtn = document.getElementById("processOrderBtn");
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      sessionStorage.clear();
      alert("Thank you for your order.");
      location.reload();
    });
  }

  /* -------------------------
     CONTACT FORM (localStorage)
  --------------------------*/

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const orderData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        customOrder: document.getElementById("customOrder").checked
      };

      localStorage.setItem("customOrder", JSON.stringify(orderData));
      alert("Thank you for your message.");
      contactForm.reset();
    });
  }

});
