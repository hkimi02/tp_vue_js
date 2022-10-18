app.component("connfirmed-orders", {
    template: `
    <div class="confirmed-orders">
    <h2>you have {{orders.length + "confirmed orders"}} </h2>
        <article v-for="order in orders" class="order">
            <img :src="order.src">
            <div class="order-details">
            <h3>{{order.name}}</h3>
            <h3>{{order.quantity}}</h3>
            </div>
        </article>
    </div>
    `,
    data() {

    },
    props: {
        orders: Array,
    }

});