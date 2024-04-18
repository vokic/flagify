import script from "./splitter.esm-F1p71owV.js";
import script$1 from "./splitterpanel.esm-Ykb7Yz2D.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import Flags from "./Flags-aWqjjGLT.js";
import Overview from "./Overview-p5IxAuJZ.js";
import { _ as _export_sfc } from "../server.mjs";
import "./basecomponent.esm-L4g1N9Qh.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "./iconfield.esm-DmT4YI6I.js";
import "./inputicon.esm-BHKNtge4.js";
import "./inputtext.esm-DEw--y4c.js";
import "./dataview.esm-5mX7PRvG.js";
import "./paginator.esm-DAmqu-zM.js";
import "./index.esm-qzJ9zz1f.js";
import "./baseicon.esm-CEseltRc.js";
import "./dropdown.esm-nNEoy4RI.js";
import "./index.esm-WMCMABDa.js";
import "./index.esm-i1qcLNOr.js";
import "./index.esm-B-_0XfTA.js";
import "./index.esm-Bf2d3KNz.js";
import "./index.esm-DiPHlylE.js";
import "./overlayeventbus.esm-CAhQZh07.js";
import "./portal.esm-CdWWxjdD.js";
import "./virtualscroller.esm-Dl05x8Oi.js";
import "./inputnumber.esm-Bt8N2kjF.js";
import "./button.esm-Cnn03Wdb.js";
import "./badge.esm-Bvkwn4_8.js";
import "./index.esm-DUQzZxvQ.js";
import "./index.esm-0zWicDxd.js";
import "./index.esm-CUkp44Vt.js";
import "axios";
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
export {
  Default as default
};
//# sourceMappingURL=Default-BDZ9sFGK.js.map
