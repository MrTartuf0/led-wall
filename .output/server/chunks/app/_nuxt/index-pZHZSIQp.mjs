import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
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

const _imports_0 = "" + publicAssetsURL("freespirit.svg");
const _imports_1 = "" + publicAssetsURL("start.svg");
const _imports_2 = "" + publicAssetsURL("middle.svg");
const _imports_3 = "" + publicAssetsURL("top.svg");
const _imports_4 = "" + publicAssetsURL("none.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("200px");
    ref("3rem");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center min-h-screen w-full" }, _attrs))} data-v-92f982e0><div id="0x0" class="group w-32 h-32 rounded-full bg-orange-400 flex items-center justify-center bg-black relative cursor-pointer" data-v-92f982e0><img class="absolute select-none" draggable="false"${ssrRenderAttr("src", _imports_0)} alt="" data-v-92f982e0><div id="0x0options" class="relative block hidden" data-v-92f982e0><div class="optionCircle bg-[#FFA500] deg144" data-v-92f982e0><img${ssrRenderAttr("src", _imports_1)} data-v-92f982e0></div><div class="optionCircle bg-[#03FFFF] deg108" data-v-92f982e0><img${ssrRenderAttr("src", _imports_2)} data-v-92f982e0></div><div class="optionCircle bg-[#FF00FF] deg72" data-v-92f982e0><img${ssrRenderAttr("src", _imports_3)} data-v-92f982e0></div><div class="optionCircle bg-[#101112] deg36" data-v-92f982e0><img${ssrRenderAttr("src", _imports_4)} data-v-92f982e0></div></div></div><div class="group w-32 h-32 bg-orange-400 flex items-center justify-center bg-white relative cursor-pointer" data-v-92f982e0><img class="absolute select-none" draggable="false" alt="" data-v-92f982e0></div><div id="0x1" class="group w-32 h-32 rounded-full bg-orange-400 flex items-center justify-center bg-black relative cursor-pointer" data-v-92f982e0><img class="absolute select-none" draggable="false"${ssrRenderAttr("src", _imports_0)} alt="" data-v-92f982e0><div id="0x1options" class="relative block hidden" data-v-92f982e0><div class="optionCircle bg-[#FFA500] deg144" data-v-92f982e0><img${ssrRenderAttr("src", _imports_1)} data-v-92f982e0></div><div class="optionCircle bg-[#03FFFF] deg108" data-v-92f982e0><img${ssrRenderAttr("src", _imports_2)} data-v-92f982e0></div><div class="optionCircle bg-[#FF00FF] deg72" data-v-92f982e0><img${ssrRenderAttr("src", _imports_3)} data-v-92f982e0></div><div class="optionCircle bg-[#101112] deg36" data-v-92f982e0><img${ssrRenderAttr("src", _imports_4)} data-v-92f982e0></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92f982e0"]]);

export { index as default };
//# sourceMappingURL=index-pZHZSIQp.mjs.map
