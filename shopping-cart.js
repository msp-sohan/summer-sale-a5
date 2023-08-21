let total = 0;
let discount = 0;
let grandTotal = 0;

function itemClickedButton(target) {
   const cartItemsList = document.getElementById('cart-items-list');
   const itemNames = target.querySelector('.item-name').innerText;

   const li = document.createElement('li');
   li.innerText = itemNames;
   li.style.textAlign = 'left';
   li.style.margin = '0';
   li.style.padding = '4px 0px 4px 5px';
   cartItemsList.appendChild(li); 

   const price = target.querySelector('.price').innerText;
   total = parseFloat(total) + parseFloat(price);
   document.getElementById('total-price').innerText = total.toFixed(2) + " TK";

   const applyBtn = document.getElementById('apply-btn');
   const couponField = document.getElementById('coupon-field');
   const makePurchase = document.getElementById('make-purchase');

   if (total >= 200){
      applyBtn.removeAttribute('disabled'); 
      applyBtn.classList.remove('bg-gray-400');
      applyBtn.classList.add('bg-pink-500');
      couponField.removeAttribute('disabled'); 
   } else {
      applyBtn.setAttribute('disabled', true); 
      applyBtn.classList.remove('bg-pink-500');
      applyBtn.classList.add('bg-gray-400');
      couponField.setAttribute('disabled', true); 
   }

   if (total > 0) {
      makePurchase.removeAttribute('disabled');
      makePurchase.classList.remove('bg-gray-400');
      makePurchase.classList.add('bg-pink-500');
   } else {
      makePurchase.setAttribute('disabled', true);
      makePurchase.classList.remove('bg-pink-500');
      makePurchase.classList.add('bg-gray-400');
   }
}

document.getElementById('apply-btn').addEventListener('click', function(){
   const couponField = document.getElementById('coupon-field');
   const couponCode = couponField.value;

   if (couponCode === 'SELL200') {
      discount = total * 0.2;
      const discountElement = document.getElementById('discount-price');
      discountElement.innerText = discount.toFixed(2) + " TK";

      grandTotal = total - discount;
      document.getElementById('price-total').innerText = grandTotal.toFixed(2) + " TK";
      couponField.value = '';
   } else {
      alert("Invalid coupon code. Please enter a valid coupon code.");
   }
   
});

document.getElementById('go-home-btn').addEventListener('click', function() {
   const cartItemsList = document.getElementById('cart-items-list');
   cartItemsList.innerHTML = '';
   total = 0;
   discount = 0;
   grandTotal = 0;

   document.getElementById('total-price').innerText = total.toFixed(2);
   document.getElementById('discount-price').innerText = discount.toFixed(2);
   document.getElementById('price-total').innerText = grandTotal.toFixed(2);

   const applyBtn = document.getElementById('apply-btn');
   applyBtn.setAttribute('disabled', true);
   applyBtn.classList.remove('bg-pink-500');
   applyBtn.classList.add('bg-gray-400');

   const couponField = document.getElementById('coupon-field');
   couponField.value = '';
   couponField.setAttribute('disabled', true);

   const makePurchase = document.getElementById('make-purchase');
   makePurchase.setAttribute('disabled', true);
   makePurchase.classList.remove('bg-pink-500');
   makePurchase.classList.add('bg-gray-400');
});
