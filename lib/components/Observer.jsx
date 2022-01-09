export default {
    data: () => ({
        observer: null
    }),
    render() {
        return <div class='observer'/>
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit("intersect");
            }
        }, {
            root: this.$parent.$el.querySelector('.table-responsive'),
            rootMargin: "10px" //Alex: Add a small margin, seems to fix the issue were the observer stops working
        });

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    },
};
