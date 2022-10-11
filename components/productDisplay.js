app.component('product-display', {
    template: `
    <div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="imageLink" :alt="product" alt="">
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <h2> {{"prix :"+price+"dt"}}</h2>
            <p>{{descripition}}</p>
            <product-details :details="details"></product-details>
            <a :href="link">here to open the link</a>
            <p v-if="inventory <=  10 && inventory > 0">presque en repture de stock </p>
            <p v-else-if="inventory == 0"> en repture de stock</p>
            <p v-else> en stock</p>
            <p v-if="onsale">en vente</p>
            <!-- <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>-->
            <ul style="display:flex">
                <li v-for="(variant,index) in variants" :key="variant.id">
                    <button v-bind:style="{backgroundColor:variant.color}" @mouseover="selectVarient(index)" class="color-circle"></button>
                </li>

            </ul>
            <div class="sizes">
                <span v-for="(size,index) in sizes" @click="selectSize(size)" style="display:flex;text-align:center;justify-content:center;align-items:center">{{size}}</span>
            </div><br>
            <button class="button success" @click="AddToCart" :class="{ disabledButton: !in_stock }" :disabled="!in_stock">add to cart</button>
            <button class="button danger" @click="RemoveFromCart">remove from cart</button>
            <p>expedition :{{premium ? "free" : "2.99"}}</p>
            <!--<p v-show="in_stock">en stock </p>-->
        </div>
    </div>
</div>
`,
    data() {
        return {
            brand: "vueJs",
            product: 'chaussettes',
            price: 23,
            descripition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, velit.',
            // path: './assets/images/socks_blue.jpg',
            link: 'https://www.vuejs.org/',
            hkimi: '',
            checked: [],
            in_stock: true,
            inventory: 100,
            //content_html: "<small>houcein</small>",
            tab: ["hdhdh", "dssd", "dssdds", "ssdd"],
            onsale: true,
            /*details: ['50% coton', '30% laine', '20% polyster'],*/
            variants: [
                { id: 2001, color: "green", src: "assets/images/socks_green.jpg", quantity: 12, size: 0 },
                { id: 2002, color: "blue", src: "assets/images/socks_blue.jpg", quantity: 12, size: 0 },
            ],
            show: false,
            purchases: [],
            sizes: [41, 42, 43, 44, 45, 47],
            selected: 0,
            message: "",
            show_purchases: false,
        }
    },
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        cart: {
            type: Number,
        },
        details: Array,
    },
    methods: {
        AddToCart() {
            this.$emit("add-to-cart");
        },
        AddToCartWithPrice() {
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
            /*
            //this.purchases.find(x => x.id == this.variants[this.selected].id).size = size;*/
        },
        showPurchases() {
            this.show_purchases = true;
            this.show = true;
        }
    },
    computed: {
        imageLink() {
            return this.in_stock ? this.variants[this.selected].src : 'assets/images/out-of-stock-img.png';
        },
        title() {
            return this.brand + " " + this.product;
        },
    },

})