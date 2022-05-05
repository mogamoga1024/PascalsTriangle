
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [[]],
            baseNum: 1,
            mod: 2,
            colCount: 512,
            min: 0,
            max: 1024
        }
    },
    created() {
        this.initPascalsTriangle(this.colCount);
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
                        nums.push((prevNums[j] + prevNums[j + 1]) % this.mod);
                    }
                }
                this.pascalsTriangle.push(nums);
                prevNums = nums;
            }
        },
        blurMod(event) {
            const strNum = event.target.value;
            if (event.target.validity.stepMismatch) {
                this.$refs.inputMod.value = this.mod;
                return;
            }
            const num = Number(strNum);
            if (num < this.min) {
                this.$refs.inputMod.value = this.min;
                this.mod = this.min;
            }
            else if (num > this.max) {
                this.$refs.inputMod.value = this.max;
                this.mod = this.max;
            }
            else {
                this.mod = num;
            }
            this.initPascalsTriangle(this.colCount);
        },
        blurColCount(event) {
            const strNum = event.target.value;
            if (event.target.validity.stepMismatch) {
                this.$refs.inputColCount.value = this.colCount;
                return;
            }
            const num = Number(strNum);
            if (num < this.min) {
                this.$refs.inputColCount.value = this.min;
                this.colCount = this.min;
            }
            else if (num > this.max) {
                this.$refs.inputColCount.value = this.max;
                this.colCount = this.max;
            }
            else {
                this.colCount = num;
            }
            this.initPascalsTriangle(this.colCount);
        }
    }
};

Vue.createApp(viewModel).mount("#app");
