document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();//Prevent the default behavior of the link (navigation)
   // alert('Link clicked, but navigation prevented!');
    var pizzaType = document.getElementById('pizzaType').value;
    var quantity = parseInt(document.getElementById('quantity').value);
    var cart = document.getElementById('cart');
    var item = document.createElement('div');
    item.innerText = pizzaType + ' x ' + quantity;
    cart.appendChild(item);
  });
  