const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
            details: ['50% coton', '30% laine', '20% polyster'],
            /*show: false,
            purchases: [],
            sizes: [41, 42, 43, 44, 45, 47],
            cart: 0,
            selected: 0,
            message: "",
            show_purchases: false,*/
        }
    },
    methods: {
        AddToCart() {
            //if (!this.Checkquantity)
            this.cart++;

            /*this.message = "this item is added to cart";
            this.show = true;
            this.AddToCartWithPrice;*/
        },
        RemoveFromCart() {
            if (this.cart > 0) {
                this.cart--;
                /*        this.message = "this item is removed from the cart";
                        this.show = true;*/
            }
        }
        /*AddToCartWithPrice() {
            if (!this.purchases.find(x => x.id == this.variants[this.selected].id)) {
                this.purchases.push(this.variants[this.selected]);
            }
            console.table(this.purchases);
        },
        RemoveFromCart() {
            if (this.cart > 0) {
                this.cart--;
                this.message = "this item is removed from the cart";
                this.show = true;
            }
        },
        selectVarient(id) {
            this.selected = id;
        },
        Checkquantity(quantity) {
            if (quantity == 0) {
                return false;
            }
        },
        selectSize(size) {
            this.variants[this.selected].size = size;
            /
            //this.purchases.find(x => x.id == this.variants[this.selected].id).size = size;
        },
        showPurchases() {
            this.show_purchases = true;
            this.show = true;
        } * /
    },
    computed: {
        /*imageLink() {
             return this.in_stock ? this.variants[this.selected].src : 'assets/images/out-of-stock-img.png';
         },
         title() {
             return this.brand + " " + this.product;
         },*/
    },
});

//const mountedApp = app.mount("#app");