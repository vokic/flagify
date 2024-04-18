import { s as script$2 } from './basecomponent.esm-L4g1N9Qh.mjs';
import { renderSlot } from 'vue';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

var TabPanelStyle = {};
var script$1 = {
  name: "BaseTabPanel",
  "extends": script$2,
  props: {
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: TabPanelStyle
};
var script = {
  name: "TabPanel",
  "extends": script$1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
script.render = render;

export { script as default };
//# sourceMappingURL=tabpanel.esm-CF0xR4ch.mjs.map
