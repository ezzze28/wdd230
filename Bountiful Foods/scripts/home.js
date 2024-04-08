
/* Toastify if the user take at least 1 order */

document.addEventListener("DOMContentLoaded", function() {
    // Connect with localStorage (cache) - Get the value stored
    if (localStorage.getItem("Quantity of Smoothies Taken")) {
      Orderscounter = parseInt(localStorage.getItem("Quantity of Smoothies Taken"));
      Toastify({
        text: `You have taken ${Orderscounter} smoothies so far. Keep up the good work!`,
        className: "info",
        duration: 3000,
        close: true,    
        style: {
          background: "linear-gradient(to right, #016131, #028d48, #016131)"
        },
        onClick: () => {
          window.location.href = "fresh.html";
        }
      }).showToast();
    }
  });
  