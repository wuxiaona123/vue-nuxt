
<template>
  <div class="houselist">
    <mt-header title="新房列表">
      <div slot="left">
         <mt-button icon="back">
           <nuxt-link to="/" style="color:white;">返回</nuxt-link>
         </mt-button>
      </div>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">楼盘</mt-tab-item>
      <mt-tab-item id="2">户型</mt-tab-item>
      <mt-tab-item id="3">学区</mt-tab-item>
      <mt-tab-item id="4">置业向导</mt-tab-item>
    </mt-navbar>
      
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 楼盘 -->
        <floor />
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- 户型 -->
        <apartment />
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <!-- 学区 -->
        <schooldistrict />
      </mt-tab-container-item>

      <mt-tab-container-item id="4">
        <!-- 置业向导 -->
        <guide />
      </mt-tab-container-item>

    </mt-tab-container>

  </div>
</template>
 
<script>
import logo from '@/components/logo.vue'
import floor from '@/components/houselist/floor.vue'
import apartment from '@/components/houselist/apartment.vue'
import schooldistrict from '@/components/houselist/schooldistrict.vue'
import guide from '@/components/houselist/guide.vue'
export default {
  name:"list",
  data() {
    return {
      selected:'1'
    };
  },
  components: {
    logo,floor,apartment,schooldistrict,guide,
  }
};
</script>
 
<style>
.houselist{
  width: 100%;
  height: 100%;
  background-color: cadetblue;
}
</style>


