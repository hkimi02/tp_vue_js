app.component('reveiw-form', {
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recomndation: null,
        }
    },
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
    <span class="material-symbols-sharp close-btn-form" @click="change_show_review_form">close</span>
            <h3>leave us a comment</h3>
            <label for="name">name</label>
            <input type="text" id="name" v-model="name">
            <label for="review">comment</label>
            <textarea name="textarea" id="review" cols="30" rows="10" v-model="review"></textarea>
            <select name="select" id="rating" v-model.number="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <label for="recomndation">do you recomand this product ?</label>
            <select name="recomondation" id="recomndation" v-model="recomndation">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
            <input type="submit" value="envoyer" class="button">
        </form>
    `,
    methods: {
        onSubmit() {
            if (this.name === "" || this.review === "" || this.rating === null || this.recomondation === null) {
                alert("please fill out the form feilds");
            } else {
                let productReview = {
                        name: this.name,
                        review: this.review,
                        rating: this.rating,
                        recomndation: this.recomndation,
                    }
                    //console.log(this.rating);
                this.$emit('review-submitted', productReview);
                this.name = '';
                this.review = '';
                this.rating = null;
                this.recomndation = null;
            }
            this.change_show_review_form();
        },
        change_show_review_form() {
            this.$emit("change-show-review-form");
        },
    },
})