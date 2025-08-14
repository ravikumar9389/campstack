document.addEventListener("DOMContentLoaded", function () {
  // =============================
  // 1. Important Variable Setup
  // =============================

  const cartIcon = document.getElementById("cart-icon");           // 🛒 Cart Icon (top)
  const cartContent = document.getElementById("cart-content");     // 🧾 Cart Item Container (inside sidebar)
  const subtotalText = document.querySelector(".subtotal .price span"); // 💰 Subtotal Element

  let total = 0;         // 💵 Total cart value
  let itemCount = 0;     // 🧮 Total item count in cart

  // =============================
  // 2. Create Cart Badge on Icon
  // =============================

  const badge = document.createElement("span"); // <span> badge for count
  badge.id = "cart-count";                      // id for styling
  badge.textContent = "0";                      // Initial value
  cartIcon.appendChild(badge);                  // Add badge to icon

  // =============================
  // 3. Function to Format Price
  // =============================

  function formatCurrency(number) {
    return "$" + number.toFixed(2); // Convert 749 to $749.00
  }

  // =====================================
  // 4. Loop on All “Add to Cart” Buttons
  // =====================================

  const allButtons = document.querySelectorAll(".add-to-cart"); // Sabhi buttons ko select karo

  allButtons.forEach(function (button) {
    // For every add-to-cart button:

    button.addEventListener("click", function () {
      // Jab button pe click ho

      // --------------------------------------
      // Get Product Details from Related Card
      // --------------------------------------

      const card = button.closest(".shop-card");                         // 🧾 Full product card
      const title = card.querySelector(".effeciture h2").innerText;     // 📛 Product Title
      const priceText = card.querySelector(".price h2").innerText;      // 💲 "$749.00"
      const priceValue = parseFloat(priceText.replace("$", ""));        // 💲 749
      const imageSrc = card.querySelector(".card img").src;             // 📸 Product Image URL

      // --------------------------------------
      // Create HTML Element for Cart Item
      // --------------------------------------

      const cartItem = document.createElement("div");                   // ➕ New cart item block
      cartItem.className = "images1";                                   // Class for layout

      // HTML inside cart item
      cartItem.innerHTML = `
        <img src="${imageSrc}" alt="Product Image">
        <div class="images2">
          <p>${title}<br><span>1 x $${priceValue.toFixed(2)}</span></p>
        </div>
        <div class="images3">
          <i class="fa-solid fa-xmark"></i>
        </div>
      `;

      // --------------------------------------
      // Add Item to Cart Content
      // --------------------------------------

      cartContent.appendChild(cartItem); // Sidebar me dikhaye

      // --------------------------------------
      // Update Cart Count and Subtotal
      // --------------------------------------

      itemCount++;                           // Count +1
      total += priceValue;                   // Price add
      badge.textContent = itemCount;         // Badge update
      subtotalText.textContent = formatCurrency(total); // Subtotal update

      // --------------------------------------
      // Setup Remove Button Functionality
      // --------------------------------------

      const removeBtn = cartItem.querySelector("i");

      removeBtn.addEventListener("click", function () {
        cartItem.remove();                   // 🗑 Remove from UI
        itemCount--;                         // Count -1
        total -= priceValue;                 // Price subtract
        badge.textContent = itemCount;       // Update badge
        subtotalText.textContent = formatCurrency(total); // Update total
      });
    });
  });
});

function applyborder(event, element) {
  // event.preventDefault();

  const checklist2 = document.querySelector(".checklist2");
  const checklist4 = document.querySelector(".checklist4");

  checklist2.style.border = "none";
  checklist4.style.border = "none";

  // Apply border to the clicked element
  if (element.classList.contains("checklist2")) {
    checklist2.style.border = "1px solid #b03938";
  } else if (element.classList.contains("checklist4")) {
    checklist4.style.border = "1px solid #b03938";
  }
}

const menuToggle = document.getElementById("menu-toggle");
    const navCollapse = document.getElementById("navbarNav");

    menuToggle.addEventListener("click", () => {
        navCollapse.classList.toggle("active");
    });

    const cartIcon = document.getElementById("cart-icon");
    const cartPanel = document.getElementById("offcanvasRight");
    const closeCart = document.getElementById("close-cart");

    cartIcon.addEventListener("click", (e) => {
        e.preventDefault();
        cartPanel.style.display = "flex";
    });

    closeCart.addEventListener("click", () => {
        cartPanel.style.display = "none";
    });

