app.component('review-list', {
    props: {
        reviews: Array
    },
    template: `
    <div class="review-container">
    <h3>comment</h3>
    <ul>
        <li v-for="(review,index) in reviews" :key="index">
            {{review.name}} give us {{review.rating}} starts <br> "{{review.review}}" <br> recomndation : {{review.recomndation}}
        </li>
    </ul>
   <!-- <button @click="addStarts"> show starts </button> 
    <div style="display:flex;" v-for="star in starts">
            {{star}}
            </div>-->
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