
<template>
  <div class="page-tabbar">
    <logo />

    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
          <house />
        </mt-tab-container-item>

        <mt-tab-container-item id="地图">
          <housemap />
        </mt-tab-container-item>

        <mt-tab-container-item id="资讯">
          <news />
        </mt-tab-container-item>
        
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我的 ' + n"  :key="n"/>
          </div>
          <nuxt-link to="#">
            <mt-button type="danger" size="large">退出</mt-button>
          </nuxt-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
 


    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="item in tabdata" :key="item.id" :id="item.id">
        <img slot="icon" :src="item.url">
        {{item.id}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
 
<script>

import logo from '@/components/logo.vue'
import house from '@/components/house.vue'
import housemap from '@/components/housemap.vue'
import news from '@/components/news.vue'

export default {
  data() {
    return {
      selected: '首页',
      tabdata: [
        {id:"首页", url: require('~/assets/imgs/house.png')},
        {id:"地图", url: require('~/assets/imgs/order.png')},
        {id:"资讯", url: require('~/assets/imgs/find.png')},
        {id:"我的", url: require('~/assets/imgs/me.png')}
      ]
    };
  },
  components: {
    house,logo,housemap,news
  },
};
</script>
 
<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
 
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding: 0 0 100px 0;
  }
 
</style>



