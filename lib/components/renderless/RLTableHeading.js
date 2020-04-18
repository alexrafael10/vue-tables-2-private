export default {
    name: 'RLTableHeading',
    props:['column'],
    provide() {
      return {
          column: this.column
      }
    },
    inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip','getHeading','orderByColumn', 'componentsOverride','tabIndex'],
    render(h) {
        return this.$scopedSlots.default({
            thAttrs: {
                class: this.sortableClass(this.column) + ' ' + this.theme.th,
                tabIndex: this.tabIndex(),
                style: this.opts().stickyHeader ? 'position:sticky; top:0; background:white;' : ''
            },
            thEvents: {
                keypress: function (e) {
                    if (e.key === "Enter") {
                        this.orderByColumn(this.column, e);
                    }
                },
                click: (e) => {
                    if (e.target.className !== "resize-handle") {
                        this.orderByColumn(this.column, e);
                    }
                }
            },
            spanAttrs: {
                title: this.getHeadingTooltip(this.column)
            },
            heading: this.getHeading(this.column, h),
            override: this.componentsOverride.tableHeading
        })
    }
}