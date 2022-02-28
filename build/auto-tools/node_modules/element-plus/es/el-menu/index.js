import { defineComponent, openBlock, createBlock, Transition, mergeProps, toHandlers, withCtx, renderSlot, computed, ref, getCurrentInstance, watch, provide, onMounted, isRef, resolveComponent } from 'vue';
import mitt from 'mitt';
import Menubar from '../utils/menu/menu-bar';
import { addClass, removeClass, hasClass } from '../utils/dom';

var script = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    return {
      on: {
        beforeEnter(el) {
          el.style.opacity = 0.2;
        },
        enter(el, done) {
          addClass(el, "el-opacity-transition");
          el.style.opacity = 1;
          done();
        },
        afterEnter(el) {
          removeClass(el, "el-opacity-transition");
          el.style.opacity = "";
        },
        beforeLeave(el) {
          if (!el.dataset)
            el.dataset = {};
          if (hasClass(el, "el-menu--collapse")) {
            removeClass(el, "el-menu--collapse");
            el.dataset.oldOverflow = el.style.overflow;
            el.dataset.scrollWidth = el.clientWidth;
            addClass(el, "el-menu--collapse");
          } else {
            addClass(el, "el-menu--collapse");
            el.dataset.oldOverflow = el.style.overflow;
            el.dataset.scrollWidth = el.clientWidth;
            removeClass(el, "el-menu--collapse");
          }
          el.style.width = el.scrollWidth + "px";
          el.style.overflow = "hidden";
        },
        leave(el) {
          addClass(el, "horizontal-collapse-transition");
          el.style.width = el.dataset.scrollWidth + "px";
        }
      }
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, toHandlers(_ctx.on)), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}

script.render = render;
script.__file = "packages/menu/src/menu-collapse-transition.vue";

function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return mixColor(color);
    }
  });
  function calcColorChannels(c) {
    let rawColor = c.replace("#", "");
    if (/^[0-9a-fA-F]{3}$/.test(rawColor)) {
      const color = rawColor.split("");
      for (let i = 2; i >= 0; i--) {
        color.splice(i, 0, color[i]);
      }
      rawColor = color.join("");
    }
    if (/^[0-9a-fA-F]{6}$/.test(rawColor)) {
      return {
        red: parseInt(rawColor.slice(0, 2), 16),
        green: parseInt(rawColor.slice(2, 4), 16),
        blue: parseInt(rawColor.slice(4, 6), 16)
      };
    } else {
      return {
        red: 255,
        green: 255,
        blue: 255
      };
    }
  }
  function mixColor(color, percent = 0.2) {
    let { red, green, blue } = calcColorChannels(color);
    if (percent > 0) {
      red *= 1 - percent;
      green *= 1 - percent;
      blue *= 1 - percent;
    } else {
      red += (255 - red) * percent;
      green += (255 - green) * percent;
      blue += (255 - blue) * percent;
    }
    return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
  }
  return menuBarColor;
}

var script$1 = defineComponent({
  name: "ElMenu",
  componentName: "ElMenu",
  components: {
    ElMenuCollapseTransition: script
  },
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    defaultActive: {
      type: String,
      default: ""
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: "hover"
    },
    collapse: Boolean,
    backgroundColor: { type: String },
    textColor: { type: String },
    activeTextColor: { type: String },
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close", "open", "select"],
  setup(props, ctx) {
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const instance = getCurrentInstance();
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const submenus = ref({});
    const alteredCollapse = ref(false);
    const rootMenuEmitter = mitt();
    const router = instance.appContext.config.globalProperties.$router;
    const hoverBackground = useMenuColor(props);
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initializeMenu = () => {
      const index = activeIndex.value;
      const activeItem = items.value[index];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      let indexPath = activeItem.indexPath;
      indexPath.forEach((index2) => {
        let submenu = submenus.value[index2];
        submenu && openMenu(index2, submenu == null ? void 0 : submenu.indexPath);
      });
    };
    const addSubMenu = (item) => {
      submenus.value[item.index] = item;
    };
    const removeSubMenu = (item) => {
      delete submenus.value[item.index];
    };
    const addMenuItem = (item) => {
      items.value[item.index] = item;
    };
    const removeMenuItem = (item) => {
      delete items.value[item.index];
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => {
          return (isRef(indexPath) ? indexPath.value : indexPath).indexOf(index2) !== -1;
        });
      }
      openedMenus.value.push(index);
    };
    const closeMenu = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const open = (index) => {
      const { indexPath } = submenus.value[index.toString()];
      indexPath.forEach((i) => openMenu(i, indexPath));
    };
    const close = (index) => {
      closeMenu(index);
    };
    const handleSubmenuClick = (submenu) => {
      const { index, indexPath } = submenu;
      let isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index);
        ctx.emit("close", index, indexPath.value);
      } else {
        openMenu(index, indexPath);
        ctx.emit("open", index, indexPath.value);
      }
    };
    const handleItemClick = (item) => {
      const { index, indexPath } = item;
      const hasIndex = item.index !== null;
      const emitParams = [index, indexPath.value, item];
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      if (!hasIndex) {
        return;
      }
      if (props.router && router) {
        let route = item.route || item.index;
        const routerResult = router.push(route).then((navigationResult) => {
          if (!navigationResult) {
            activeIndex.value = item.index;
          }
          return navigationResult;
        });
        ctx.emit("select", ...emitParams.concat(routerResult));
      } else {
        activeIndex.value = item.index;
        ctx.emit("select", ...emitParams);
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
        initializeMenu();
      } else {
        if (!alteredCollapse.value) {
          activeIndex.value = null;
        } else {
          alteredCollapse.value = false;
        }
      }
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(items.value, () => {
      updateActiveIndex();
    });
    watch(() => props.collapse, (value, prev) => {
      if (value !== prev) {
        alteredCollapse.value = true;
      }
      if (value)
        openedMenus.value = [];
      rootMenuEmitter.emit("rootMenu:toggle-collapse", Boolean(props.collapse));
    });
    provide("rootMenu", {
      props,
      openedMenus,
      items,
      submenus,
      hoverBackground,
      activeIndex,
      isMenuPopup,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on
    });
    provide(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu
    });
    onMounted(() => {
      initializeMenu();
      rootMenuEmitter.on("menuItem:item-click", handleItemClick);
      rootMenuEmitter.on("submenu:submenu-click", handleSubmenuClick);
      if (props.mode === "horizontal") {
        new Menubar(instance.vnode.el);
      }
    });
    return {
      hoverBackground,
      isMenuPopup,
      props,
      open,
      close
    };
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_menu_collapse_transition = resolveComponent("el-menu-collapse-transition");
  return _ctx.props.collapseTransition ? (openBlock(), createBlock(_component_el_menu_collapse_transition, { key: 0 }, {
    default: withCtx(() => [
      (openBlock(), createBlock("ul", {
        key: +_ctx.props.collapse,
        role: "menubar",
        style: { backgroundColor: _ctx.props.backgroundColor || "" },
        class: {
          "el-menu": true,
          "el-menu--horizontal": _ctx.mode === "horizontal",
          "el-menu--collapse": _ctx.props.collapse
        }
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6))
    ]),
    _: 3
  })) : (openBlock(), createBlock("ul", {
    key: +_ctx.props.collapse,
    role: "menubar",
    style: { backgroundColor: _ctx.props.backgroundColor || "" },
    class: {
      "el-menu": true,
      "el-menu--horizontal": _ctx.mode === "horizontal",
      "el-menu--collapse": _ctx.props.collapse
    }
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6));
}

script$1.render = render$1;
script$1.__file = "packages/menu/src/menu.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};
const _Menu = script$1;

export default _Menu;
