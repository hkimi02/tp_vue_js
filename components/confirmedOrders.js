app.component("connfirmed-orders", {
    template: `
    <div class="confirmed-orders">
    <h2>you have {{orders.length + " confirmed orders"}} </h2>
        <article v-for="(order,index) in orders" class="order">
        <h3>order num : {{index+1}}</h3>
        <div v-for="(o,index) in order">
            <img :src="o.src">
            <div class="order-details">
            <h3>product : {{o.name}}</h3>
            <h3> quantity : {{o.quantity}}</h3>
            <h3>price : {{o.totalprice}}</h3>
            <h3>delivered in {{o.quantity}} day(s) <span class="material-symbols-sharp">
            local_shipping
            </span></h3>
        </div>
            </div>
        </article>
    </div>
    `,
    data() {
        return {}
    },
    props: {
        orders: Array,
    },
    methods: {
        /* totalPrice() {
            let total = 0;
            let i = 0;
                for (i = 0; i < this.orders.length; i++) {
                    total += (this.orders[i].totalPrice);
                }
            console.log(total);
            return total;}*/
    },
    computed: {

    }

});