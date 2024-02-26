const shoppingCart = {
  items: [],
  total: 0,

  /*  Способ если товар передается объектом
  addItem(item = { name, price, quantity }) {
    this.items.push(item);
    this.total += item.price * item.quantity;
    return this;
  },
  */

  addItem(name, price, quantity) {
    const item = { name, price, quantity };
    this.items.push(item);
    this.total += item.price * item.quantity;                                // Обновляем конечную стоимость корзины
    return this;
  },

  removeItem(itemName) {
    const [ findItem ] = [...this.items].filter(el => el.name === itemName); // Находим Нужный товар из списка
    const items = [...this.items].filter(el => el.name !== itemName);        // Получаем новый список товаров без нужного нам объекта
    this.items = items;                                                      // Присваиваем отфильтрованный список вместо текущего
    this.total -= findItem.price * findItem.quantity;                        // Обновляем конечную стоимость корзины
    return this;
  },

  updateQuantity(itemName, newQuantity) {
    const [ findItem ] = [...this.items].filter(el => el.name === itemName); // Находим Нужный товар из списка
    const deltaQuantity = newQuantity - findItem.quantity;                   // Находим разницу количества

    this.total += findItem.price * deltaQuantity;                            // Обновляем конечную стоимость корзины

    const items = [...this.items].map((el) => {                              // Обновляем товар с новым количеством в списке
      if (el.name === itemName) {
        el.quantity = newQuantity;
      }
      return el;
    });

    this.items = items;                                                      // Присваиваем обновленный список вместо текущего
    return this;
  },

  calculateTotal() {
    return [...this.items].map((el) => el.quantity * el.price)               // Считаем и возвращаем стоимость корзины
      .reduce((acc, el) => acc + el, 0);
  },

  clearCart() {                                                              // Очищаем корзину
    this.items = [];
    this.total = 0;
    return this;
  },
}

/*
const toy1 = { name: 'bear', price: 29.99, quantity: 1 };
const toy2 = { name: 'dog', price: 19.99, quantity: 1 };

console.log(shoppingCart.addItem(toy1));
console.log(shoppingCart.addItem(toy2));
console.log(shoppingCart.removeItem(toy1.name)); 
*/

/*
console.log(shoppingCart.addItem('bear', 30.00, 1));
console.log(shoppingCart.addItem('dog', 10.00, 1 ));
console.log(shoppingCart.addItem('cat', 15.00, 1 ));

console.log(shoppingCart.removeItem('cat'));

console.log(shoppingCart.updateQuantity('bear', 5));

console.log('Total summ is: ', shoppingCart.calculateTotal());

console.log(shoppingCart.clearCart()); 
*/
