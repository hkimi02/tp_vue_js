app.component('purchases-display', {
    template: `
    <div class="alert" v-if="show_click==true">
    <div class="header">
    <span class="material-symbols-sharp" @click="ChangeShowClick">close</span></div>
            <div class="cart-body">
            <h3 v-if="purchases.length==0">you havent buy anything yet </h3>
                <div v-for="(purchase,index) in purchases" class="purshase-display">
                    <img :src="purchase.src" alt=" ">
                    <div>
                    <h3>{{purchase.name}}</h3>
                    <h3>{{purchase.price}}</h3>
                    <h3>{{"size : " + purchase.size}}</h3>
                    <h3>{{"quantity : " + purchase.quantity}}</h3>
                    <span class="material-symbols-sharp delete-button" @click="deleteFromPurchases(index)">delete</span>
                    <hr>
                    </div>
                </div>
                </div>
                <div class="footer"> 
                <button class="success button" @click="passConfirmedOrders" :disabled="purchases.length==0">order now!</button>
                <button class="danger button" @click="cancelOrder" :disabled="purchases==[]">cancel order</button>
                </div>
                </div>`,

    methods: {
        ChangeShowClick() {
            this.$emit("change-show-click");
        },
        showPurchases() {
            console.table(this.purchases);
        },
        deleteFromPurchases(index) {
            this.$emit("delete-from-purchases", index);
        },
        passConfirmedOrders() {
            this.$emit("pass-confirmed-orders");
            this.ChangeShowClick();
        },
        cancelOrder() {
            this.$emit("cancel-order");
        }
    },

    props: {
        purchases: Array,
        show_click: Boolean,
    },
    data() {
        return {
            show_purchases: true,
            show: false,
            message: "",
        }
    },
    computed() {

    },
})