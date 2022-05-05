
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [[]]
        }
    },
    created() {
        this.initPascalsTriangle(30);
    },
    methods: {
        initPascalsTriangle(colCount) {
            const baseNum = 1;
            let prevNums = [baseNum];
            this.pascalsTriangle = [prevNums];
            
            if (colCount <= 1) {
                return;
            }

            for (let i = 1; i < colCount; i++) {
                const nums = [baseNum];
                for (let j = 0; j < i; j++) {
                    if (j === i - 1) {
                        nums.push(baseNum);
                    }
                    else {
                        const num = (prevNums[j] + prevNums[j + 1]) % 2;
                        nums.push(num);
                    }
                }
                this.pascalsTriangle.push(nums);
                prevNums = nums;
            }

            return;
        }
    }
};

Vue.createApp(viewModel).mount("#app");
