import type { FunctionalComponent } from "vue";
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';
import { h } from 'vue'
import { ElIcon } from "element-plus";

interface props {
    name?: string,
    icon?: string
}

export const FunctionalTitle: FunctionalComponent = (props: props, context) => {
    let Icon = null;
    if (props.icon) {
        Icon = h(ElIcon, [h(Document)]);
    }
    return [Icon, h('span', props.name)]
};