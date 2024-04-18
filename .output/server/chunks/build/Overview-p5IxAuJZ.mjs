import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import axios from 'axios';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

async function fetchFlagDetails(countryName) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${countryName}:`, error);
    throw error;
  }
}
const _imports_0 = "" + buildAssetsURL("globe.BPU9I-IN.gif");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Overview",
  __ssrInlineRender: true,
  props: {
    countryName: {}
  },
  setup(__props) {
    const props = __props;
    const countryDetails = ref(null);
    watch(() => props.countryName, async (newValue) => {
      if (newValue) {
        try {
          const details = await fetchFlagDetails(newValue);
          countryDetails.value = details[0];
        } catch (error) {
          console.error("Error fetching country details:", error);
        }
      }
    });
    const openStreetMapUrl = computed(() => {
      const lat = countryDetails.value.latlng[0];
      const lng = countryDetails.value.latlng[1];
      const bbox = `${lng - 2},${lat - 2},${lng + 2},${lat + 2}`;
      return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (countryDetails.value) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-d99189da><div class="mt-4" data-v-d99189da><div class="text-4xl font-bold ml-4" data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</div><div class="ml-4 border-bottom-1 border-200" data-v-d99189da>${ssrInterpolate(countryDetails.value.name.official)}</div></div><div class="grid nested-grid" data-v-d99189da><div class="col-6" data-v-d99189da><div class="h-full ml-4 mt-4" data-v-d99189da><b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>, officially known as <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.official)}</b>, is a country situated in <b data-v-d99189da>${ssrInterpolate(countryDetails.value.subregion)}</b>. Its common name, <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>, reflects its rich cultural and geographical heritage. Bordered by <b data-v-d99189da>${ssrInterpolate(countryDetails.value.borders)}</b>, <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> boasts a diverse landscape that spans across <b data-v-d99189da>${ssrInterpolate(countryDetails.value.region)}</b>. <br data-v-d99189da><h3 data-v-d99189da>Geography and Borders</h3> Covering an area of <b data-v-d99189da>${ssrInterpolate(countryDetails.value.area)}</b> square kilometers, <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> is a vibrant nation with a population of approximately <b data-v-d99189da>${ssrInterpolate(countryDetails.value.population)}</b> people. The country is characterized by its captivating natural beauty, attracting visitors from around the globe. Its capital city, <b data-v-d99189da>${ssrInterpolate(countryDetails.value.capital)}</b>, serves as the political and economic hub, situated at a latitude and longitude of <b data-v-d99189da>${ssrInterpolate(countryDetails.value.capitalInfo.latlng[0])}</b> and <b data-v-d99189da>${ssrInterpolate(countryDetails.value.capitalInfo.latlng[1])}</b>, respectively. <br data-v-d99189da><h3 data-v-d99189da>Language and Culture</h3><b data-v-d99189da>${ssrInterpolate(countryDetails.value.languages.eng)}</b> is the official language of <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>, reflecting its colonial history. The <b data-v-d99189da>${ssrInterpolate(countryDetails.value.demonyms.eng.m)}</b> people, who are renowned for their warmth and hospitality. The nation celebrates a rich tapestry of cultures, with influences from <b data-v-d99189da>${ssrInterpolate(countryDetails.value.region)}</b> communities. <br data-v-d99189da><h3 data-v-d99189da>Economy and Currency</h3> The <b data-v-d99189da><b data-v-d99189da>${ssrInterpolate(countryDetails.value.currencies[Object.keys(countryDetails.value.currencies)[0]].name)}</b></b> serves as the official currency of <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>. The nation&#39;s economy is driven by industries such as <b data-v-d99189da>${ssrInterpolate(countryDetails.value.region)}</b>, with significant natural resource reserves contributing to its economic growth. <br data-v-d99189da><h3 data-v-d99189da>Government and International Relations</h3><b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> is an independent republic, recognized as a member of the United Nations and other international organizations. Governed as a <b data-v-d99189da>${ssrInterpolate(countryDetails.value.status)}</b> republic, <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> has a proud tradition of democratic governance and participation in global affairs. <br data-v-d99189da><h3 data-v-d99189da>National Symbols</h3> The flag of <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> is a striking representation of its identity. The coat of arms further embodies the nation&#39;s spirit, depicting symbols of its heritage and aspirations. <br data-v-d99189da><h3 data-v-d99189da>Transportation and Time Zone</h3><b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> follows a <b data-v-d99189da>${ssrInterpolate(countryDetails.value.car.side)}</b>-hand driving system, with vehicle registration signs displaying &quot;<b data-v-d99189da>${ssrInterpolate(countryDetails.value.car.signs[0])}</b>.&quot; The nation operates on the <b data-v-d99189da>${ssrInterpolate(countryDetails.value.timezones[0])}</b> time zone, ensuring synchronization with international standards. Visitors can explore <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>&#39;s diverse landscapes and vibrant culture through various transportation networks. <br data-v-d99189da> International Recognition and Sports <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> participates in international events such as <b data-v-d99189da>${ssrInterpolate(countryDetails.value.fifa)}</b>, representing the nation&#39;s passion for sports and competition. Its rich sporting heritage contributes to its global recognition and fosters connections with other nations. <br data-v-d99189da><h3 data-v-d99189da>Exploration and Tourism</h3><b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>&#39;s enchanting landscapes, diverse wildlife, and vibrant culture make it a destination worth exploring. Whether trekking through its pristine <b data-v-d99189da>${ssrInterpolate(countryDetails.value.region)}</b> or immersing in its rich history, visitors to <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b> are sure to be captivated by its charm and allure. <br data-v-d99189da> For more information on <b data-v-d99189da>${ssrInterpolate(countryDetails.value.name.common)}</b>, including maps and historical context, please visit the following links: <br data-v-d99189da><ul data-v-d99189da><li data-v-d99189da> Google Maps: <a href="https://goo.gl/maps/DFsme2xEeugUAsCx5" target="_blank" data-v-d99189da> Explore ${ssrInterpolate(countryDetails.value.name.common)}</a></li><li data-v-d99189da> OpenStreetMaps: <a href="https://www.openstreetmap.org/relation/287083" target="_blank" data-v-d99189da> Discover ${ssrInterpolate(countryDetails.value.name.common)}</a></li></ul></div></div><div class="col-6" data-v-d99189da><div class="grid mt-3" data-v-d99189da><div class="col-6" data-v-d99189da><div class="" data-v-d99189da><div class="" data-v-d99189da><img class="w-15rem border-1 border-200"${ssrRenderAttr("src", countryDetails.value.flags.png)}${ssrRenderAttr("alt", countryDetails.value.name.common)} data-v-d99189da></div></div></div><div class="col-6" data-v-d99189da><div class="" data-v-d99189da><div class="text-center h-full" data-v-d99189da>`);
        if (countryDetails.value.coatOfArms && countryDetails.value.coatOfArms.png) {
          _push(`<img class="h-5rem"${ssrRenderAttr("src", countryDetails.value.coatOfArms.png)}${ssrRenderAttr("alt", countryDetails.value.name.common)} data-v-d99189da>`);
        } else {
          _push(`<span class="text-xs" data-v-d99189da>No coat of arms</span>`);
        }
        _push(`</div></div></div><div class="col-12" data-v-d99189da><div class="" data-v-d99189da><iframe width="600" height="600" frameborder="0" style="${ssrRenderStyle({ "border": "0" })}"${ssrRenderAttr("src", unref(openStreetMapUrl))} allowfullscreen data-v-d99189da></iframe></div></div></div></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "centered-content",
          style: { "width": "60vw", "height": "30vh" }
        }, _attrs))} data-v-d99189da><div class="text-center" style="${ssrRenderStyle({ "margin-top": "35%" })}" data-v-d99189da> Please select a country from the list. <br data-v-d99189da><img${ssrRenderAttr("src", _imports_0)} alt="" width="50px" data-v-d99189da></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d99189da"]]);

export { Overview as default };
//# sourceMappingURL=Overview-p5IxAuJZ.mjs.map
