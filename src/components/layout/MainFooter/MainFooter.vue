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
  title: '确定删除测试指标',
  to: '/QDSCCSZB',
},{
  title: '测试指标删除完成',
  to: '/CSZBSCWC',
},{
  title: '测试用例查询',
  to: '/CSYLCX',
},{
  title: '测试步骤查看',
  to: '/CSBZCK',
},{
  title: '测试用例修改完成',
  to: '/CSYLXGWC',
},{
  title: '测试步骤修改完成',
  to: '/CSBZXGWC',
},{
  title: '确定删除测试用例',
  to: '/QDSCCSYL',
},{
  title: '测试步骤删除完成',
  to: '/CSBZSCWC',
},{
  title: '测试文档查询',
  to: '/CSWDCX',
},{
  title: '确定修改文档信息',
  to: '/QDXGWDXX',
},{
  title: '测试文档修改完成',
  to: '/CSWDXGWC',
},{
  title: '确定删除文档',
  to: '/QDSCWD',
},{
  title: '测试文档删除完成',
  to: '/CSWDSCWC',
},{
  title: '用户查询',
  to: '/YHCX',
},{
  title: '确定修改用户信息',
  to: '/QDXGYHXX',
},{
  title: '用户信息修改完成',
  to: '/YHXXXGWC',
},{
  title: '确定删除用户',
  to: '/QDSCYH',
},{
  title: '用户删除完成',
  to: '/YHSCWC',
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
