
const Isigaki = {
    props: {
        nums: Array,
        mod: Number,
        isKi: Boolean
    },
    template: `
        <template v-if="isKi">
            <div class="row-ki">
                <template v-for="num in nums">
                    <div v-if="num % mod !== 0">木</div>
                    <div v-else></div>
                </template>
            </div>
        </template>
        <template v-else>
            <div class="row">
                <template v-for="num in nums">
                <div :class="{ black: num % mod !== 0 }"></div>
                </template>
            </div>
        </template>
    `
};

// 
