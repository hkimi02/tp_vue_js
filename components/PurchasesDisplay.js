app.component('purchases-display', {
    template: `
    <div class="alert" v-if="show_click==true">
            <span @click="ChangeShowClick">X</span>
            <!--<h3 v-if="show_purchases==false ">{{message}}</h3>-->
            <button @click="showPurchases">show</button>
                <div v-for="purchase in purchases">
                    
                    <img :src="purchase.src" alt=" ">
                    <h3>{{"size : " + purchase.size}}</h3>
                </div>
            
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