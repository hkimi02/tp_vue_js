const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
            details: ['50% coton', '30% laine', '20% polyster'],
            show_click: false,
            show_review_form: false
        }
    },
    methods: {
        AddToCart() {
            this.cart++;
        },
        RemoveFromCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        },
        ChangeShowClick() {
            this.show_click = false;
        },
        change_show_review_form() {
            this.show_review_form = false;
        },
        initialiseCart() {
            this.cart = 0;
        }
    },
    computed: {

    },
});