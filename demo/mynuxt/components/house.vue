
<template>
  <div class="house">
    <!-- banner -->
    <div class="housenav">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in swipedata" :key="item">
          <img class="navimg" :src="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>


    <!-- 推荐列表 -->
    <div class="listtitle">
      <div class="one">
        <h4>全部楼盘</h4>
        <span>真房源 真价格 放心楼盘供您选择</span>
      </div>

      <div class="two">
          <nuxt-link to="/list">
            更多
            <img :src="more" alt="">
          </nuxt-link>
      </div>
    </div>
    <div class="housecont">
      <div v-for="item in contdata" :key="item.id">
        <!-- 上 -->
        <div class="conttop" :style="{backgroundImage: 'url(' + item.houseimg + ')', backgroundSize:'contain'}">
          <div class="recommend">推荐</div>
          <div class="address">
            <img :src="addressurl" alt="">
            {{item.address}}
          </div>
        </div>
        <!-- 下 -->
        <div class="contdown">
          <div>{{item.title}}</div>
          <div>
            <span class="average">均价:</span><span class="Price">{{item.Price}}元/m²</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      selected:"房子",
      swipedata:[
        "http://trenda.fangfangfang.com/userfiles/image/20190225/251438175926af065a8962_1920_758.jpg",
        "http://trenda.fangfangfang.com/userfiles/image/20181218/1812444542594474868060_1920_610.4.jpg",
        "http://trenda.fangfangfang.com/userfiles/image/20181214/14182739bc069c46b47145_1920_610.jpg",
        "http://trenda.fangfangfang.com/userfiles/image/20181115/151135271896fbe1b92917_1920_610.jpg",
        "http://trenda.fangfangfang.com/userfiles/image/20180914/141809029297582df41051_1920_610.jpg"
      ],
      contdata:[
        {id:1,title:"紫薇西棠 [高新]",address:"[ 高新区 – 科技路 ] 科技路西延伸线富裕路与富源",Price:13500,sell:"热销",housemode:"洋房",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190117/17163309f7bffd82f65156_373_265.jpg"},
        {id:2,title:"雅荷中央广场 [城北]",address:"经济开发区凤城六路与未央路十字西北角",Price:12500,sell:"现房",housemode:"综合体",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190111/11095752607e358a537981_373_265.jpg"},
        {id:3,title:"锦绣府 [周边]",address:"西安市蓝田县蓝关镇向阳路西段（县汽车站斜对",Price:6300,sell:"热销",housemode:"普通住宅",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190103/03123029ff1d87a8b24810_373_265.jpg"},
        {id:4,title:"当代嘉宝公园悦",address:"[ 西咸新区 - 沣东新城 ] 西三环与红光路十字向东",Price:10900,sell:"热销",housemode:"普通住宅",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190103/0311112356bd35519f3151_373_265.jpg"},
        {id:5,title:"鼎诚馥桂园 [城西]",address:"西安市莲湖区枣园南路与枣园西路十字向南100米",Price:10800,sell:"热销",housemode:"普通住宅",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20181221/2117062580eb1d8d893980_373_265.jpg"},
        {id:6,title:"华润置地未来城市",address:"浐灞西安奥体中心南侧",Price:12926,sell:"热销",housemode:"普通住宅",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20181219/19123655ccd4cc14694899_373_265.jpg"},
        {id:7,title:"紫薇西棠 [高新]",address:"[ 高新区 – 科技路 ] 科技路西延伸线富裕路与富源",Price:13500,sell:"热销",housemode:"洋房",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190117/17163309f7bffd82f65156_373_265.jpg"},
        {id:8,title:"雅荷中央广场 [城北]",address:"经济开发区凤城六路与未央路十字西北角",Price:12500,sell:"现房",housemode:"综合体",houseimg:"http://trenda.fangfangfang.com/userfiles/image/20190111/11095752607e358a537981_373_265.jpg"},        
      ],
      addressurl: require('~/assets/imgs/address.png'),   
      more: require('~/assets/imgs/more.png'),   
    };
  }
};
</script>
 
<style>
.house{
  width: 100%;
  height: 100%;
}

/* banner*/
.housenav{
  width: 100%;
  height: 150px;
}
.navimg{
  width: 100%;
  height: 150px;
}



/* 推荐标题 */
.listtitle{
  width: 100%;
  height: 60px;
  background-color: rgb(238, 236, 236);
  padding: 10px 6px 6px 6px;
  display: flex;
}
.one{
  width: 70%;
}
.two{
  width: 30%;
  text-align: center;
  line-height: 50px;
}
.two img{
  width: 20px;
}
.listtitle h4{
  margin: 0;
  padding: 0;
}
.listtitle span{
  color: dimgray;
}
/* 推荐列表 */
.housecont{
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(238, 236, 236);
}
.housecont>div{
  width: 49%;
  height: 180px;
}
/* 上 */
.conttop{
  width: 100%;
  height: 70%;
  position: relative;
}
.recommend{
  position: absolute;
  padding: 2px;
  margin: 4px;
  background-color: rgb(194, 79, 79);
  color: aliceblue;
  font-size: 10px;
}
.address{
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  padding: 2px 5px;
  background-color: rgba(5, 0, 0, 0.3);
  color: aliceblue;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.address img{
  width: 16px;
  height: 16px;
}
/* 下 */
.contdown{
  width: 100%;
  height: 30%;
  padding: 6px 4px;
}
.average{
  color: dimgray;
  font-size: 12px;
}
.Price{
  color: rgb(194, 79, 79);
}
</style>


