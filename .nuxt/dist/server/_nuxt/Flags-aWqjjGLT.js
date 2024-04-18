import script from "./iconfield.esm-DmT4YI6I.js";
import script$1 from "./inputicon.esm-BHKNtge4.js";
import script$2 from "./inputtext.esm-DEw--y4c.js";
import script$3 from "./dataview.esm-5mX7PRvG.js";
import { defineComponent, ref, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./basecomponent.esm-L4g1N9Qh.js";
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
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-0.5%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2022C17.2467%2022%2021.5%2017.7467%2021.5%2012.5C21.5%207.25329%2017.2467%203%2012%203C6.75329%203%202.5%207.25329%202.5%2012.5C2.5%2017.7467%206.75329%2022%2012%2022Z'%20stroke='%230F0F0F'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.37%208.34L14.18%2012.15C14.38%2012.35%2014.38%2012.66%2014.18%2012.86L10.37%2016.67'%20stroke='%230F0F0F'%20stroke-miterlimit='10'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Flags",
  __ssrInlineRender: true,
  emits: ["showCountryDetails"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const showCountryDetails = (countryName) => {
      emit("showCountryDetails", countryName);
    };
    const flags = ref([]);
    const searchQuery = ref("");
    const filteredFlags = computed(() => {
      var _a;
      const query = (_a = searchQuery.value) == null ? void 0 : _a.toLowerCase();
      return !query ? flags.value : flags.value.filter(
        (item) => item.name.common.toLowerCase().includes(query)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconField = script;
      const _component_InputIcon = script$1;
      const _component_InputText = script$2;
      const _component_DataView = script$3;
      if (flags.value.length > 0) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-21e4887d>`);
        _push(ssrRenderComponent(_component_IconField, {
          iconPosition: "left",
          class: "mb-3 mt-2 mr-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_InputIcon, { class: "pi pi-search" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: searchQuery.value,
                "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                placeholder: "Search countries",
                class: "w-full h-3rem"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_InputIcon, { class: "pi pi-search" }),
                createVNode(_component_InputText, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  placeholder: "Search countries",
                  class: "w-full h-3rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_DataView, {
          value: filteredFlags.value,
          paginator: "",
          rows: 5
        }, {
          list: withCtx((flags2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(flags2.items, (item, index) => {
                _push2(`<div class="col-12 m-0 p-0" data-v-21e4887d${_scopeId}><div class="grid border-top-1 border-300 grid-item" data-v-21e4887d${_scopeId}><div class="col-7" data-v-21e4887d${_scopeId}><div class="col-12" data-v-21e4887d${_scopeId}><div class="text-xl font-bold" data-v-21e4887d${_scopeId}>${ssrInterpolate(item.name.common)}</div><div class="font-italic mb-3" data-v-21e4887d${_scopeId}>${ssrInterpolate(item.name.official)}</div><div class="" data-v-21e4887d${_scopeId}>`);
                if (Array.isArray(item.capital)) {
                  _push2(`<div class="mt-1" data-v-21e4887d${_scopeId}><span class="" data-v-21e4887d${_scopeId}>Capital:</span> ${ssrInterpolate(item.capital[0])}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div><div class="col-1" data-v-21e4887d${_scopeId}><div class="h-full flex align-items-center justify-content-center" data-v-21e4887d${_scopeId}>`);
                if (item.coatOfArms && item.coatOfArms.png) {
                  _push2(`<img class="w-3rem pr-2"${ssrRenderAttr("src", item.coatOfArms.png)}${ssrRenderAttr("alt", item.name.common)} data-v-21e4887d${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="col-3" data-v-21e4887d${_scopeId}><div class="h-full flex align-items-center justify-content-center" data-v-21e4887d${_scopeId}><img class="w-7rem border-1 border-200 max-h-4rem"${ssrRenderAttr("src", item.flags.png)}${ssrRenderAttr("alt", item.name.common)} data-v-21e4887d${_scopeId}></div></div><div class="col-1" data-v-21e4887d${_scopeId}><div class="flex align-items-center justify-content-center h-full cursor-pointer icon-container mr-3" data-v-21e4887d${_scopeId}><img${ssrRenderAttr("src", _imports_0)} width="40rem" class="filter-grey" data-v-21e4887d${_scopeId}></div></div></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(flags2.items, (item, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "col-12 m-0 p-0"
                  }, [
                    createVNode("div", { class: "grid border-top-1 border-300 grid-item" }, [
                      createVNode("div", { class: "col-7" }, [
                        createVNode("div", { class: "col-12" }, [
                          createVNode("div", { class: "text-xl font-bold" }, toDisplayString(item.name.common), 1),
                          createVNode("div", { class: "font-italic mb-3" }, toDisplayString(item.name.official), 1),
                          createVNode("div", { class: "" }, [
                            Array.isArray(item.capital) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-1"
                            }, [
                              createVNode("span", { class: "" }, "Capital:"),
                              createTextVNode(" " + toDisplayString(item.capital[0]), 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-1" }, [
                        createVNode("div", { class: "h-full flex align-items-center justify-content-center" }, [
                          item.coatOfArms && item.coatOfArms.png ? (openBlock(), createBlock("img", {
                            key: 0,
                            class: "w-3rem pr-2",
                            src: item.coatOfArms.png,
                            alt: item.name.common
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-3" }, [
                        createVNode("div", { class: "h-full flex align-items-center justify-content-center" }, [
                          createVNode("img", {
                            class: "w-7rem border-1 border-200 max-h-4rem",
                            src: item.flags.png,
                            alt: item.name.common
                          }, null, 8, ["src", "alt"])
                        ])
                      ]),
                      createVNode("div", { class: "col-1" }, [
                        createVNode("div", {
                          class: "flex align-items-center justify-content-center h-full cursor-pointer icon-container mr-3",
                          onClick: ($event) => showCountryDetails(item.name.common)
                        }, [
                          createVNode("img", {
                            src: _imports_0,
                            width: "40rem",
                            class: "filter-grey"
                          })
                        ], 8, ["onClick"])
                      ])
                    ])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Flags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Flags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21e4887d"]]);
export {
  Flags as default
};
//# sourceMappingURL=Flags-aWqjjGLT.js.map
