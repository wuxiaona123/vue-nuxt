<template>
  <div class="news">
      <!-- 标题 -->
      <div class="titlefa">
          <div class="newstitle">
            {{selected}}
        </div>
      </div>
      <!-- 资讯 -->
      <div class="evernews" v-for="item in newslist" :key="item.id">
          <div class="newsimg">
              <img :src="item.imgs" alt="">
          </div>
          <div class="newscont">
              <div><h4>{{item.title}}</h4></div>
              <div class="describe">描述:{{item.describe}}</div>
              <div class="tt">
                  <div class="more">查看更多 >></div>
                  <div>{{item.time}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '新房资讯',
      newslist:[
          {id:1,title:"金地西沣公元一期二期底商在售",time:"2019-02-28",describe:"金地西沣公元，项目一期二期底商在售，参考价格10000-35000元/平，面积84-310平，金地西沣公元项目三期住宅新品待推，时间待定，具体信息待定。以上信息仅供参考，详情可致电售楼部咨询，项目位于西沣路与西部大道交汇东北角。",imgs:"http://trenda.fangfangfang.com/userfiles/image/20190228/2816345243591bd59f1737_210_140.jpg"},
          {id:2,title:"中铁缤纷南郡后期加推房源信息待定",time:"2019-03-28",describe:"中铁缤纷南郡后期加推房源信息待定，详情请持续关注",imgs:"http://trenda.fangfangfang.com/userfiles/image/20190228/28154800424e9412eb6674_210_140.jpg"},
          {id:3,title:"万科翡翠天誉后期加推房源信息待定",time:"2019-04-28",describe:"万科翡翠天誉后期加推房源信息待定",imgs:"http://trenda.fangfangfang.com/userfiles/image/20190228/281500284b40355b898824_210_140.jpg"},
          {id:4,title:"国宾中央区新推信息待定",time:"2019-05-28",describe:"国宾中央区，一期住宅已售完，二期万科翡翠国宾新推信息待定，目前接受咨询中，项目位于丈八北路，横跨科技6路、科技7路、科技8路.",imgs:"http://trenda.fangfangfang.com/userfiles/image/20190228/281446033bb0408f605267_210_140.jpg"},
          {id:5,title:"绿地国际花都后期加推房源信息待定",time:"2019-06-28",describe:"绿地国际花都后期加推房源信息待定，详情请咨询售楼处",imgs:"http://trenda.fangfangfang.com/userfiles/image/20190228/2814481732e470052a8525_210_140.jpg"},
          ] 
    };
  },
};
</script>
<style>
.news{
    width: 100%;
    height: 100%;
}
/* 标题 */
.titlefa{
    border-bottom: 0.3px solid black;
}
.newstitle{
    width: 100px;
    height: 60px;
    line-height:60px;
    text-align: center;
    border-bottom: 4px solid #33b5ae;
}
/* 资讯 */
.evernews{
    width: 100%;
    height: 120px;
    font-size: 14px;
    padding: 5px;
    background-color: rgb(243, 253, 253);
    border-bottom: 0.1px solid gray;
    display: flex;
}
.newsimg{
    width:50%;
}
.newsimg img{
    width: 100%;
    height: 100%;
}
.newscont{
    width:50%;
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.tt{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.describe{
    white-space:nowrap; 
    text-overflow:ellipsis; 
    -o-text-overflow:ellipsis; 
    overflow: hidden;
}
.more{
    color: dimgray;
}
</style>
