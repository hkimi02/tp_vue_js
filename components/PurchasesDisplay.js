app.component('purchases-display', {
    template: `
    <div class="alert" v-if="show_click==true">
    <span class="material-symbols-sharp" @click="ChangeShowClick">close</span>
            <h3 v-if="purshases==[] ">you havent buy anything yet </h3>
                <div v-for="purchase in purchases" class="purshase-display">
                    <img :src="purchase.src" alt=" ">
                    <div>
                    <h3>{{purchase.name}}</h3>
                    <h3>{{purchase.price}}<h3>
                    <h3>{{"size : " + purchase.size}}</h3>
                    <hr>
                    <button class="button delete-button"><span class="material-symbols-sharp">delete</span></button>
                    </div>
                </div>
                <button class="success button">order now!</button>
                <button class="danger button">cancel order</button>
            </div>`,

    methods: {
        ChangeShowClick() {
            this.$emit("change-show-click");
        },
        showPurchases() {
            console.table(this.purchases);
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