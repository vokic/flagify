import script from './splitter.esm-F1p71owV.mjs';
import script$1 from './splitterpanel.esm-Ykb7Yz2D.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import Flags from './Flags-aWqjjGLT.mjs';
import Overview from './Overview-p5IxAuJZ.mjs';
import { _ as _export_sfc } from './server.mjs';
import './basecomponent.esm-L4g1N9Qh.mjs';
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
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './iconfield.esm-DmT4YI6I.mjs';
import './inputicon.esm-BHKNtge4.mjs';
import './inputtext.esm-DEw--y4c.mjs';
import './dataview.esm-5mX7PRvG.mjs';
import './paginator.esm-DAmqu-zM.mjs';
import './index.esm-qzJ9zz1f.mjs';
import './baseicon.esm-CEseltRc.mjs';
import './dropdown.esm-nNEoy4RI.mjs';
import './index.esm-WMCMABDa.mjs';
import './index.esm-i1qcLNOr.mjs';
import './index.esm-B-_0XfTA.mjs';
import './index.esm-Bf2d3KNz.mjs';
import './index.esm-DiPHlylE.mjs';
import './overlayeventbus.esm-CAhQZh07.mjs';
import './portal.esm-CdWWxjdD.mjs';
import './virtualscroller.esm-Dl05x8Oi.mjs';
import './inputnumber.esm-Bt8N2kjF.mjs';
import './button.esm-Cnn03Wdb.mjs';
import './badge.esm-Bvkwn4_8.mjs';
import './index.esm-DUQzZxvQ.mjs';
import './index.esm-0zWicDxd.mjs';
import './index.esm-CUkp44Vt.mjs';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCountryName = ref("");
    const setSelectedCountryName = (countryName) => {
      selectedCountryName.value = countryName;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Splitter = script;
      const _component_SplitterPanel = script$1;
      _push(ssrRenderComponent(_component_Splitter, mergeProps({ style: { "height": "calc(100vh - 16px)", "box-sizing": "border-box" } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SplitterPanel, {
              size: 35,
              minSize: 35
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Flags, { onShowCountryDetails: setSelectedCountryName }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Flags, { onShowCountryDetails: setSelectedCountryName })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SplitterPanel, {
              class: "overflow-y-auto",
              size: 65
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(Overview, { countryName: selectedCountryName.value }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(Overview, { countryName: selectedCountryName.value }, null, 8, ["countryName"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SplitterPanel, {
                size: 35,
                minSize: 35
              }, {
                default: withCtx(() => [
                  createVNode(Flags, { onShowCountryDetails: setSelectedCountryName })
                ]),
                _: 1
              }),
              createVNode(_component_SplitterPanel, {
                class: "overflow-y-auto",
                size: 65
              }, {
                default: withCtx(() => [
                  createVNode(Overview, { countryName: selectedCountryName.value }, null, 8, ["countryName"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f46da3ef"]]);

export { Default as default };
//# sourceMappingURL=Default-BDZ9sFGK.mjs.map
