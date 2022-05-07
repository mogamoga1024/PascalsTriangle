
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [[]],
            baseNum: 1,
            _mod: 2,
            minMod: 0,
            maxMod: Number.MAX_SAFE_INTEGER,
            _rowCount: 512,
            minRowCount: 0,
            maxRowCount: 1024,
            isKi: false
        }
    },
    computed: {
        mod: {
            get() {
                return this._mod;
            },
            set(newMod) {
                if (newMod < this.minMod) {
                    this._mod = this.minMod;
                }
                else if (newMod > this.maxMod) {
                    this._mod = this.maxMod;
                }
                else {
                    this._mod = newMod;
                }
            }
        },
        rowCount: {
            get() {
                return this._rowCount;
            },
            set(newRowCount) {
                if (newRowCount < this.minRowCount) {
                    this._rowCount = this.minRowCount;
                }
                else if (newRowCount > this.maxRowCount) {
                    this._rowCount = this.maxRowCount;
                }
                else {
                    this._rowCount = newRowCount;
                }
            }
        }
    },
    mounted() {
        const params = new URL(window.location.href).searchParams;
        const strMod = params.get("mod");
        const strRowCount = params.get("rowCount");
        this.isKi = params.get("ki") === "true";

        if (strMod !== null && this.canStrToInt(strMod)) {
            this.mod = Number(strMod);
        }
        if (strRowCount !== null && this.canStrToInt(strRowCount)) {
            this.rowCount = Number(strRowCount);
        }

        this.createPascalsTriangle();
    },
    methods: {
        createPascalsTriangle() {
            let prevNums = [this.baseNum];
            this.pascalsTriangle = [prevNums];
            
            if (this.rowCount <= 1) {
                return;
            }

            for (let i = 1; i < this.rowCount; i++) {
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
            if (this.canStrToInt(strNum) === false) {
                this.$refs.inputMod.value = this.mod;
                return;
            }
            this.mod = Number(strNum);
            this.$refs.inputMod.value = this.mod;
            this.createPascalsTriangle(this.rowCount);
        },
        blurRowCount(strNum) {
            if (this.canStrToInt(strNum) === false) {
                this.$refs.inputRowCount.value = this.rowCount;
                return;
            }
            this.rowCount = Number(strNum);
            this.$refs.inputRowCount.value = this.rowCount;
            this.createPascalsTriangle(this.rowCount);
        },
        canStrToInt(str) {
            return /^-?\d+$/.test(str);
        }
    }
};

Vue.createApp(viewModel).mount("#app");
