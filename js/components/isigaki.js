
const Isigaki = {
    props: {
        nums: Array
    },
    template: `
        <div class="row" v-for="num in nums">
            <div>{{num}}</div>
        </div>
    `
};

