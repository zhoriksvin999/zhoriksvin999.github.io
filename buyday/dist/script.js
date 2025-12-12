// let amount = 0
// function discount(amount){
//   if (amount > 10000) { 
//      return amount * 0.85;
//   } else if (amount > 5000) {
//      return amount * 0.9;
//   } else if (amount > 2000) {
//      return amount *0.95;
//   }
//     else {
//      return amount *0.99;
//   }
// }                                                                                                                                  
// // console.log("Итого:₽" + discount(7800))
// const category = document.getElementById('category').value;
// const maxPrice = document.getElementById('price').value;
// const minRating = parseFloat(document.getElementById('rating').value);
// const badge = document.getElementById('badge').value;

// const products = document.querySelectorAll('.design');
// let visibleCount = 0;

// products.forEach(product => {
//   const productCategory = product.dataset.category;
//   const productPrice = parseFloat(product.dataset.price);
//   const productRating = parseFloat(product.dataset.rating);
//   const productBadge = product.dataset.badge;

//   let isVisible = true;

//   // Фильтр по категории
//   if (category !== 'all' && productCategory !== category) {
//     isVisible = false;
//   }

//   // Фильтр по цене
//   if (maxPrice && productPrice > parseFloat(maxPrice)) {
//     isVisible = false;
//   }

//   // Фильтр по рейтингу
//   if (minRating > 0 && productRating < minRating) {
//     isVisible = false;
//   }

//   // Фильтр по статусу
//   if (badge !== 'all' && productBadge !== badge) {
//     isVisible = false;
//   }

//   if (isVisible) {
//     product.classList.remove('hidden');
//     visibleCount++;
//   } else {
//     product.classList.add('hidden');
//   }
// });

// // Обновляем информацию о результатах
// const resultsInfo = document.getElementById('resultsInfo');
// if (visibleCount === 0) {
//   resultsInfo.textContent = 'Товары по вашему запросу не найдены';
//   resultsInfo.style.color = '#F44336';
// } else {
//   resultsInfo.textContent = `Найдено товаров: ${visibleCount}`;
//   resultsInfo.style.color = '#4E342E';
// }
// }

// function resetFilters() {
//   document.getElementById('category').value = 'all';
//   document.getElementById('price').value = '';
//   document.getElementById('rating').value = '0';
//   document.getElementById('badge').value = 'all';

//   const products = document.querySelectorAll('.design');
//   products.forEach(product => {
//     product.classList.remove('hidden');
//   });

//   document.getElementById('resultsInfo').textContent = '';
// }

// // Автоматическое применение фильтров при изменении значений
// document.addEventListener('DOMContentLoaded', function() {
//   const filterInputs = document.querySelectorAll('.filter-select, .filter-input');
//   filterInputs.forEach(input => {
//     input.addEventListener('change', applyFilters);
//   });

//   document.getElementById('price').addEventListener('input', applyFilters);
// });