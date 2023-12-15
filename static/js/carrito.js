    function añadirAlCarrito(product,price){
        var itemCreado = document.createElement('li')
        itemCreado.innerHTML = `
            <span class="product">${product}</span>
            <span class="price">$${price}</span>
            <button class="btn-borrar">Eliminar</button>
        `;
        var ItemsCreados = document.getElementById('items-creados')
        ItemsCreados.appendChild(itemCreado);

        actualizarCarrito(); // Actualizar el resumen del carrito

        var btnBorrar = itemCreado.querySelector('.btn-borrar');
        btnBorrar.addEventListener('click', function () {
            itemCreado.remove();
            actualizarCarrito();
        });
    }

    function actualizarCarrito() {
        var ItemsCreados = document.querySelectorAll('#items-creados li');
        var total = 0;
        var cantidad = ItemsCreados.length;
    
        ItemsCreados.forEach(function (item) {
        var price = parseFloat(item.querySelector('.price').innerText.replace('$', ' '));
        total += price;
        });

        var priceFinal = document.getElementById('cart-total');
        var cantidadItems = document.getElementById('cart-quantity');
    
        priceFinal.innerText = total.toFixed(3);
        cantidadItems.innerText = cantidad;
    }

    var btnCompra = document.querySelectorAll('.buy-button');
    btnCompra.forEach(function (button) {
        button.addEventListener('click', function () {
            var product = button.previousElementSibling.previousElementSibling.innerText;
            var price = button.previousElementSibling.innerText.replace('$', ' ');
            añadirAlCarrito(product, price);
        });
    });
    
    var checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
      // Obtener el valor del correo electrónico ingresado
      var emailInput = document.getElementById('email-input');
      var emailAddress = emailInput.value;
    
      // Mostrar mensaje emergente
      alert(`Tu compra será preparada y se enviará un resumen por correo electrónico (${emailAddress}) para que elijas la forma de pago. ¡Gracias por tu compra!`);
    
      // Restablecer el formulario
      checkoutForm.reset();
    
      
      // Limpiar el carrito y el formulario después de finalizar la compra
      var cartItemsContainer = document.getElementById('items-creados');
      cartItemsContainer.innerHTML = '';
      emailInput.value = '';
      actualizarCarrito();
    });