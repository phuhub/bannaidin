import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Harry Potter : Philosopher\'s stone',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Harry Potter : Chamber of Secrets',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg/220px-Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Harry Potter : Prisoner of Azkaban',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Prisoner_of_azkaban_UK_poster.jpg/220px-Prisoner_of_azkaban_UK_poster.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 4,
        name: 'Harry Potter : Goblet of Fire',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg/220px-Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 5,
        name: 'Harry Potter : Order of the Phoenix',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg/220px-Harry_Potter_and_the_Half-Blood_Prince_poster.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 6,
        name: 'Harry Potter : Half-Blood Prince',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg/220px-Harry_Potter_and_the_Half-Blood_Prince_poster.jpg',
        cart: false,
        quantity: 1,
      },
      {
        id: 7,
        name: 'Harry Potter : Dealthy Hallows',
        price: 100,
        url:'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg/220px-Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
        cart: false,
        quantity: 1,
      },
    ],
    cart:[],
    countloop : ''
  },
  mutations: {
    addProduct(state,product){
      state.cart.push(product)
      state.products.map((p)=>{
        if ( p.id == product.id) {
          p.cart= true
        }
      })
    },
    removeProduct(state,id){
      state.cart = state.cart.filter((p)=> p.id != id )
      state.products.map((p)=>{
        if ( p.id == id) {
          p.cart= false
        }
      })
    },
    increase(state,id){
      state.cart.map((p)=>{
        if ( p.id == id) {
          p.quantity += 1
        }
      })

    },
    decrease(state,id){
      state.cart.map((p)=>{
        if ( p.id == id && p.quantity > 1) {
          p.quantity -= 1
        }
      })
    }
  },
  actions: {
    addProduct({commit},product){
      commit('addProduct',product)
    },
    removeProduct({commit},id){
      commit('removeProduct',id)
    },
    increase({commit},id){
      commit('increase',id)
    },
    decrease({commit},id){
      commit('decrease',id)
    }
    
  },
  getters:{
    getProducts: state => {
      return state.products
    },
    getCart: state => {
      return state.cart
    },
    getTotal: state => {
      let total = 0
      state.cart.map((p) => {
        total += p.price*p.quantity
      })
      return total
    },
  },
  modules: {
  },
})
