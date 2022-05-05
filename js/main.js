
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [[]],
            baseNum: 1,
            mod: 2,
            minMod: 0,
            maxMod: Number.MAX_SAFE_INTEGER,
            colCount: 512,
            minColCount: 0,
            maxColCount: 1024
        }
    },
    mounted() {
        const params = new URL(window.location.href).searchParams;
        const strMod = params.get("mod");
        const strColCount = params.get("colCount");

        if (strMod !== null) this.blurMod(strMod);
        if (strColCount !== null) this.blurColCount(strColCount);

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
        blurMod(strNum) {
            if (/^-?\d+$/.test(strNum) === false) {
                this.$refs.inputMod.value = this.mod;
                return;
            }
            const num = Number(strNum);
            if (num < this.minMod) {
                this.$refs.inputMod.value = this.minMod;
                this.mod = this.minMod;
            }
            else if (num > this.maxMod) {
                this.$refs.inputMod.value = this.maxMod;
                this.mod = this.maxMod;
            }
            else {
                this.mod = num;
            }
            this.initPascalsTriangle(this.colCount);
        },
        blurColCount(strNum) {
            if (/^-?\d+$/.test(strNum) === false) {
                this.$refs.inputColCount.value = this.colCount;
                return;
            }
            const num = Number(strNum);
            if (num < this.minColCount) {
                this.$refs.inputColCount.value = this.minColCount;
                this.colCount = this.minColCount;
            }
            else if (num > this.maxColCount) {
                this.$refs.inputColCount.value = this.maxColCount;
                this.colCount = this.maxColCount;
            }
            else {
                this.colCount = num;
            }
            this.initPascalsTriangle(this.colCount);
        }
    }
};

Vue.createApp(viewModel).mount("#app");
