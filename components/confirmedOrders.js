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
        </div>
            <h3>total price : {{totalPrice(order)}}</h3>
            <h3>delivered in {{order.quantity}} days <span class="material-symbols-sharp">
            local_shipping
            </span></h3> 
            </div>
        </article>
    </div>
    `,
    data() {
        return {

        }
    },
    props: {
        orders: Array,
    },
    methods: {
        totalPrice(order) {
            if (order.length == 1) {
                return order.price * order.quantity;
            } else {
                let total = 0;
                for (i = 0; i < order.length; i++) {
                    total += (order[i].price * order[i].quantity);
                }
                return total;
            }
        }
    },
    computed: {

    }

});