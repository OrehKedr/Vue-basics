const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      const newCart = this.cart.filter((elem) => elem != id);
      this.cart = newCart;
    },
  },
});
