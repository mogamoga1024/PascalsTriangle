
const Isigaki = {
    props: {
        nums: Array
    },
    template: `
        <div class="row">
            <template v-for="num in nums">
                <div>{{num}}</div>
            </template>
        </div>
    `
};

