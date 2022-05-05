
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [[]],
            baseNum: 1,
            mod: 2,
            maxColCount: 512
        }
    },
    created() {
        this.initPascalsTriangle(this.maxColCount);
    },
    methods: {
        initPascalsTriangle(colCount) {
            let prevNums = [this.baseNum];
            this.pascalsTriangle = [prevNums];
            
            if (colCount <= 1) {
                return;
            }

            for (let i = 1; i < colCount; i++) {
                const nums = [this.baseNum];
                for (let j = 0; j < i; j++) {
                    if (j === i - 1) {
                        nums.push(this.baseNum);
                    }
                    else {
                        const num = (prevNums[j] + prevNums[j + 1]) % this.mod;
                        nums.push(num);
                    }
                }
                this.pascalsTriangle.push(nums);
                prevNums = nums;
            }

            return;
        }
    },
    watch: {
        mod() {
            this.initPascalsTriangle(this.maxColCount);
        },
        maxColCount() {
            this.initPascalsTriangle(this.maxColCount);
        }
    }
};

Vue.createApp(viewModel).mount("#app");
