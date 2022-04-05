import Vue from 'vue';
import Router from 'vue-router';

import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';
import TJCSZB from './views/child/TJCSZB.vue';
import CSZBGLDCSYL from './views/child/CSZBGLDCSYL.vue'
import CSZBGLCSYL from './views/child/CSZBGLCSYL.vue'
import CSZBXGWC from './views/child/CSZBXGWC.vue'
import QDSCCSZB from './views/child/QDSCCSZB.vue'
import CSZBSCWC from './views/child/CSZBSCWC.vue'
import CSYLCX from './views/child/CSYLCX.vue'
import CSBZCK from './views/child/CSBZCK.vue'
import CSYLXGWC from './views/child/CSYLXGWC.vue'
import CSBZXGWC from './views/child/CSBZXGWC.vue'
import QDSCCSYL from './views/child/QDSCCSYL.vue'
import CSBZSCWC from './views/child/CSBZSCWC.vue'
import CSWDCX from './views/child/CSWDCX.vue'
import QDXGWDXX from './views/child/QDXGWDXX.vue'
import CSWDXGWC from './views/child/CSWDXGWC.vue'
import QDSCWD from './views/child/QDSCWD.vue'
import CSWDSCWC from './views/child/CSWDSCWC.vue'
import YHCX from './views/child/YHCX.vue'
import QDXGYHXX from './views/child/QDXGYHXX.vue'
import YHXXXGWC from './views/child/YHXXXGWC.vue'
import QDSCYH from './views/child/QDSCYH.vue'
import YHSCWC from './views/child/YHSCWC.vue'
import TJCSYL from './views/CSZBGL/TJCSYL.vue';
import CSZBXQ from './views/CSZBGL/CSZBXQ.vue';
import CSZBCX from './views/CSZBGL/CSZBCX.vue';
import XGCSZB from './views/CSZBGL/XGCSZB.vue';
import CSYLXQ from './views/CSZBGL/CSYLXQ.vue';
import TJCSBZ from './views/CSZBGL/TJCSBZ.vue';
import XGCSYL from './views/CSZBGL/XGCSYL.vue';
import XGCSBZ from './views/CSZBGL/XGCSBZ.vue';
import CSWDXQ from './views/CSZBGL/CSWDXQ.vue';
import XZCSWD from './views/CSZBGL/XZCSWD.vue';
import XGCSWD from './views/CSZBGL/XGCSWD.vue';
import YHXQ from './views/CSZBGL/YHXQ.vue';
import XZYH from './views/CSZBGL/XZYH.vue';
import XGYHXX from './views/CSZBGL/XGYHXX.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/blog-overview',
    },
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    {
      path: '/user-profile-lite',
      name: 'user-profile-lite',
      component: UserProfileLite,
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: AddNewPost,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
   {
      path: '*',
      redirect: '/errors',
    }, {
      path: '/CSZBGLDCSYL',
      name: 'CSZBGLDCSYL',
      component: CSZBGLDCSYL,
    },{
      path: '/CSZBGLCSYL',
      name: 'CSZBGLCSYL',
      component: CSZBGLCSYL,
    },{
      path: '/CSZBXGWC',
      name: 'CSZBXGWC',
      component: CSZBXGWC,
    },{
      path: '/QDSCCSZB',
      name: 'QDSCCSZB',
      component: QDSCCSZB,
    },{
      path: '/CSZBSCWC',
      name: 'CSZBSCWC',
      component: CSZBSCWC,
    },{
      path: '/CSYLCX',
      name: 'CSYLCX',
      component: CSYLCX,
    },{
      path: '/CSBZCK',
      name: 'CSBZCK',
      component: CSBZCK,
    },{
      path: '/CSYLXGWC',
      name: 'CSYLXGWC',
      component: CSYLXGWC,
    },{
      path: '/CSBZXGWC',
      name: 'CSBZXGWC',
      component: CSBZXGWC,
    },{
      path: '/QDSCCSYL',
      name: 'QDSCCSYL',
      component: QDSCCSYL,
    },{
      path: '/CSBZSCWC',
      name: 'CSBZSCWC',
      component: CSBZSCWC,
    },{
      path: '/CSWDCX',
      name: 'CSWDCX',
      component: CSWDCX,
    },{
      path: '/QDXGWDXX',
      name: 'QDXGWDXX',
      component: QDXGWDXX,
    },{
      path: '/CSWDXGWC',
      name: 'CSWDXGWC',
      component: CSWDXGWC,
    },{
      path: '/QDSCWD',
      name: 'QDSCWD',
      component: QDSCWD,
    },{
      path: '/CSWDSCWC',
      name: 'CSWDSCWC',
      component: CSWDSCWC,
    },{
      path: '/YHCX',
      name: 'YHCX',
      component: YHCX,
    },{
      path: '/QDXGYHXX',
      name: 'QDXGYHXX',
      component: QDXGYHXX,
    },{
      path: '/YHXXXGWC',
      name: 'YHXXXGWC',
      component: YHXXXGWC,
    },{
      path: '/QDSCYH',
      name: 'QDSCYH',
      component: QDSCYH,
    },{
      path: '/YHSCWC',
      name: 'YHSCWC',
      component: YHSCWC,
    }, {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    }, {
      path: '*',
      redirect: '/errors',
    }, {
      path: '/TJCSZB',
      name: 'TJCSZB',
      component: TJCSZB,
    }, {
      path: '/CSZBCX',
      name: 'CSZBCX',
      component: CSZBCX,
    }, {
      path: '/TJCSYL',
      name: 'TJCSYL',
      component: TJCSYL,
    },
    {
      path: '/CSZBXQ',
      name: 'CSZBXQ',
      component: CSZBXQ,
    },
    {
      path: '/XGCSZB',
      name: 'XGCSZB',
      component: XGCSZB,
    },
    {
      path: '/CSYLXQ',
      name: 'CSYLXQ',
      component: CSYLXQ,
    },
    {
      path: '/TJCSBZ',
      name: 'TJCSBZ',
      component: TJCSBZ,
    },
    {
      path: '/XGCSYL',
      name: 'XGCSYL',
      component: XGCSYL,
    },
    {
      path: '/XGCSBZ',
      name: 'XGCSBZ',
      component: XGCSBZ,
    },
    {
      path: '/CSWDXQ',
      name: 'CSWDXQ',
      component: CSWDXQ,
    },
    {
      path: '/XZCSWD',
      name: 'XZCSWD',
      component: XZCSWD,
    },
    {
      path: '/XGCSWD',
      name: 'XGCSWD',
      component: XGCSWD,
    },
    {
      path: '/YHXQ',
      name: 'YHXQ',
      component: YHXQ,
    },
    {
      path: '/XZYH',
      name: 'XZYH',
      component: XZYH,
    },
    {
      path: '/XGYHXX',
      name: 'XGYHXX',
      component: XGYHXX,
    },
  ],
});
