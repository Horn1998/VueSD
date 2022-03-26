<template>
  <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <div :class="[contained ? 'container' : 'container-fluid']">
      <div class="row">
        <ul class="nav">
          <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
            <d-link class="nav-link" :to="item.to">{{ item.title }}</d-link>
          </li>
        </ul>
        <span class="copyright ml-auto my-auto mr-2">{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
const defaultMenuItems = [{
  title: '添加测试指标',
  to: '/TJCSZB',
}, {
  title: '测试指标查询',
  to: '/CSZBCX',
}, {
  title: '测试指标关联的测试用例',
  to: '/CSZBGLDCSYL',
},  {
  title: '测试指标关联测试用例',
  to: '/CSZBGLCSYL',
},{
  title: '测试指标修改完成',
  to: '/CSZBXGWC',
},{
  title: '测试用例查询',
  to: '/CSYLCX',
},];

export default {
  name: 'main-footer',
  props: {
    /**
       * The footer menu items.
       */
    menuItems: {
      type: Array,
      default() {
        return defaultMenuItems;
      },
    },
    /**
       * The copyright information.
       */
    copyright: {
      type: String,
      default: 'Copyright © 2018 DesignRevision',
    },
    /**
       * Whether the footer should be wrapped in a container, or not.
       */
    contained: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
