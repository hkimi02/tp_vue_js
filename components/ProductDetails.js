app.component('product-details', {
    template: `
    <ul>
      <li v-for="detail in details">
         {{detail}}
      </li>
    </ul>
    `,
    props: {
        details: Array,
    },
})