import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "changeColor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full min-h-screen items-center justify-center flex-col" }, _attrs))}><h1 class="font-bold text-2xl mb-4">Select the color of the led: </h1><div class="flex gap-8"><button class="bg-magenta text-white p-2 rounded-lg"> magenta </button><button class="bg-cyan text-white p-2 rounded-lg"> cyan </button><button class="bg-yellow text-white p-2 rounded-lg"> yellow </button><button class="bg-none text-white p-2 rounded-lg"> none </button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/changeColor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=changeColor-_9y0ydxf.mjs.map
