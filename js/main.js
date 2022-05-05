
const viewModel = {
    components: {
        Isigaki
    },
    data() {
        return {
            pascalsTriangle: [
                [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]
            ]
        }
    }
};

Vue.createApp(viewModel).mount("#app");
