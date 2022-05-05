
const Isigaki = {
    props: {
        nums: Array,
        mod: Number
    },
    template: `
        <div class="row">
            <template v-for="num in nums">
                <div :class="{ black: num % mod !== 0 }">{{ num }}</div>
            </template>
        </div>
    `
};

