app.component('review-list', {
    props: {
        reviews: Array
    },
    template: `
    <div class="review-container">
    <h3>comment section</h3>
    <ul>
        <li v-for="(review,index) in reviews" :key="index">
            {{review.name}} rated us <span class="fa fa-star checked" v-for="star in review.rating"></span><br> and he said :  "{{review.review}}" <br> recomndation : {{review.recomndation}}
        </li>
    </ul>
</div>
`,
    data() {
        return {
            starts: [],
        }
    },
    methods: {
        addStars() {
            for (i = 0; i < this.review.rating; i++) {
                this.starts.push = '<span class="fa fa-star checked"></span>';
            }
        }
    }
})