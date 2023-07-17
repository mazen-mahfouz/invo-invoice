import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [
            {
            "title": "BS-200",
            "description": "Customize web application",
            "price": 10.99,      
            "quantity": 1,
            },
            {
            "title": "BS-500",
            "description": "Website SEO improvement of themevessel.com",
            "price": 20.00,      
            "quantity": 5,
            }
        ],
        add: false,
    },
})

export default store;