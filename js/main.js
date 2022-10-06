const app = Vue.createApp({
    data() {
        return {
            brand: "vueJs",
            product: 'chaussettes',
            price: 23,
            descripition: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, velit.',
            // path: './assets/images/socks_blue.jpg',
            link: 'https://www.vuejs.org/',
            hkimi: '',
            count: 0,
            checked: [],
            //in_stock: true,
            inventory: 100,
            content_html: "<small>houcein</small>",
            tab: ["hdhdh", "dssd", "dssdds", "ssdd"],
            onsale: true,
            details: ['50% coton', '30% laine', '20% polyster'],
            variants: [
                { id: 2001, color: "green", src: "assets/images/socks_green.jpg", quantity: 12 },
                { id: 2002, color: "blue", src: "assets/images/socks_blue.jpg", quantity: 0 },
            ],
            sizes: [41, 42, 43, 44, 45, 47],
            cart: 0,
            style: {
                color: 'red',
                fontSize: '14px'
            },
            selected: 0,
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
        selectVarient(id) {
            this.selected = id;
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
});

const mountedApp = app.mount("#app");