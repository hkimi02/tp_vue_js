app.component('product-details', {
    template: `
    <div class="product-details">
    <ul>
      <li v-for="detail in details">
          {{detail}}
      </li>
    </ul>
    </div>
    `,
    props: {
        details: Array,
    },
})