import type { FunctionalComponent } from "vue";
import { h } from 'vue'
import { ElIcon } from "element-plus";

interface props {
    name?: string,
    icon?: string
}

export const FunctionalTitle: FunctionalComponent = (props: props, context) => {
    let Icon = null;
    return [Icon, h('span', props.name)]
};