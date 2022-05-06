
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
            rowCount: 512,
            minRowCount: 0,
            maxRowCount: 1024
        }
    },
    mounted() {
        const params = new URL(window.location.href).searchParams;
        const strMod = params.get("mod");
        const strRowCount = params.get("rowCount");

        if (strMod !== null) this.blurMod(strMod);
        if (strRowCount !== null) this.blurRowCount(strRowCount);

        this.initPascalsTriangle(this.rowCount);
    },
    methods: {
        initPascalsTriangle(rowCount) {
            let prevNums = [this.baseNum];
            this.pascalsTriangle = [prevNums];
            
            if (rowCount <= 1) {
                return;
            }

            for (let i = 1; i < rowCount; i++) {
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
            this.initPascalsTriangle(this.rowCount);
        },
        blurRowCount(strNum) {
            if (/^-?\d+$/.test(strNum) === false) {
                this.$refs.inputRowCount.value = this.rowCount;
                return;
            }
            const num = Number(strNum);
            if (num < this.minRowCount) {
                this.$refs.inputRowCount.value = this.minRowCount;
                this.rowCount = this.minRowCount;
            }
            else if (num > this.maxRowCount) {
                this.$refs.inputRowCount.value = this.maxRowCount;
                this.rowCount = this.maxRowCount;
            }
            else {
                this.rowCount = num;
            }
            this.initPascalsTriangle(this.rowCount);
        }
    }
};

Vue.createApp(viewModel).mount("#app");
