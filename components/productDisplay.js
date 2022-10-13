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
                <button v-for="(size,index) in sizes" @click="selectSize(size)" style="display:flex;text-align:center;justify-content:center;align-items:center" :class="{ disabledButton: show_click }" :disabled="show_click">{{size}}</button>
            </div><br>
            <button class="button success" @click="AddToCart" :class="{ disabledButton: show_click }" :disabled="show_click">add to cart</button>
            <button class="button danger" @click="RemoveFromCart" :class="{ disabledButton: show_click }" :disabled="show_click">remove from cart</button>
            <p>expedition :{{premium ? "free" : "2.99"}}</p>
            <!--<p v-show="in_stock">en stock </p>-->
        </div>
    </div>
</div>
<purchases-display :purchases="purchases" :show_click="show_click" @change-show-click="ChangeShowClick"></purchases-display>
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
                { id: 2001, name: "vue js socks", price: 23.999, color: "green", src: "assets/images/socks_green.jpg", quantity: 12, size: 0 },
                { id: 2002, name: "vue js socks", price: 23.999, color: "blue", src: "assets/images/socks_blue.jpg", quantity: 12, size: 0 },
            ],

            purchases: [],
            sizes: [41, 42, 43, 44, 45, 47],
            selected: 0,

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
        show: Boolean,
        show_click: Boolean
    },
    methods: {
        AddToCart() {
            this.$emit("add-to-cart");
            this.AddToPurchases();
        },
        ChangeShowClick() {
            this.$emit("change-show-click");
        },
        AddToCartWithPrice() {
            if (!this.purchases.find(x => x.id == this.variants[this.selected].id)) {
                this.purchases.push(this.variants[this.selected]);
            }
            console.table(this.purchases);
        },
        RemoveFromCart() {
            this.$emit("remove-from-cart");
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
        },
        AddToPurchases() {
            this.purchases.push((this.variants[this.selected]));
            console.table(this.purchases);
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