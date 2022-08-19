<template>
<!--参考网页： https://blog.csdn.net/acmman/article/details/121874353 -->
  <el-container style="height: 850px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '0']">
       <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"  @click="shouy"></i><span  @click="shouy">首页</span></template>
        </el-submenu>
        <el-submenu index="2" >
          <template slot="title">
            <i class="el-icon-s-goods" @click="tiaoz"></i><span  @click="tiaoz">商品管理</span></template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-custom" @click="User"></i><span @click="User">用户管理</span></template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-map-location"></i>其他</template>
          <el-menu-item-group>
           
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>         
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-s-grid"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-col :span="2"><div class="table">商品管理</div></el-col>
          <el-col :span="19"><div class="table">&nbsp;</div></el-col>
          <el-col :span="2">
            <el-dropdown trigger="click">
              <div class="circle">
                <el-avatar :size="50" :src="imgUrl"></el-avatar>
              </div>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
       
      <el-main>
        <el-card shadow="hover">
          <div class="userCard">
            <el-avatar :size="120" :src="imgUrl"></el-avatar>
            <div class="userInfo">
              <p class="important-font">Admin</p>
              <p class="secondary-font">管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登陆时间:2022/08/08 20:30</p>
          </div>
        </el-card>

        <el-card>
          <el-row :gutter="20">
            <!-- gutter是指定每个分栏的间隔 -->
            <el-col :span="4">
              <el-input v-model="input" placeholder="请输入内容">     
                        
              </el-input>
            </el-col>
             <el-button type="primary" icon="el-icon-search">搜索</el-button>   
          </el-row>         
        </el-card>

        <el-row>
  <el-col :span="5" style="margin-top:15px">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/3.jpg" class="image">
       
      <div style="padding: 14px;" class="font">           
        <span>韩版时尚长款西装外套</span>           
      </div>
    </el-card>
  </el-col>
  <el-col :span="5"  class="kap">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/4.jpg" class="image">
      <div style="padding: 14px;" class="font">
       <span>韩版时尚长款西装外套</span>    
      </div>
    </el-card>
  </el-col>
  <el-col :span="5"  class="kap">
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img src="../assets/5.jpg" class="image">
      <div style="padding: 14px;" class="font">
        <span>韩版时尚长款西装外套</span>    
       
      </div>
    </el-card>
  </el-col>
  <el-col :span="5" class="kap" >
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/6.jpg" class="image">
      <div style="padding: 14px;" class="font">
       <span>韩版时尚长款西装外套</span>    
        
      </div>
    </el-card>
  </el-col>

  <el-descriptions title="" direction="vertical" :column="4" border>
  <el-descriptions-item label="货品名称">长款西装外套</el-descriptions-item>
  <el-descriptions-item label="货号">1810</el-descriptions-item>
  <el-descriptions-item label="价格" :span="2">528</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">秋冬</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="库存">200件</el-descriptions-item>
  <el-descriptions-item label="操作" :span="2" > <el-button type="primary" size="small">修改</el-button></el-descriptions-item>
</el-descriptions>
  
</el-row>
<el-col :span="5" style="margin-top:15px">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/7.jpg" class="image">
      <div style="padding: 14px;" class="font">
        <span>初秋上新！气质名媛高级小香风套装</span>       
      </div>
    </el-card>
  </el-col>
  <el-col :span="5"  class="kap">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/8.jpg" class="image">
      <div style="padding: 14px;" class="font">
       <span>初秋上新！气质名媛高级小香风套装</span>       
      </div>
    </el-card>
  </el-col>
  <el-col :span="5"  class="kap">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/9.jpg" class="image">
      <div style="padding: 14px;" class="font">
       <span>初秋上新！气质名媛高级小香风套装</span>       
      </div>
    </el-card>
  </el-col>
    <el-col :span="5"  class="kap">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/11.jpg" class="image">
      <div style="padding: 14px;" class="font">
        <span>初秋上新！气质名媛高级小香风套装</span>        
      </div>
    </el-card>
  </el-col>
   <el-descriptions title="" direction="vertical" :column="4" border>
  <el-descriptions-item label="货品名称">小香风套装</el-descriptions-item>
  <el-descriptions-item label="货号">1920</el-descriptions-item>
  <el-descriptions-item label="价格" :span="2">433</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">秋季新款</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="库存">180件</el-descriptions-item>
  <el-descriptions-item label="操作" :span="2" > <el-button type="primary" size="small">修改</el-button></el-descriptions-item>
</el-descriptions>
      </el-main>
    </el-container>         
  </el-container>
  
  
  
</template>
<script>
export default {
  data() {
    return {    
      //菜单控制
      isCollapse: false,
      //头像地址
      imgUrl: require("../assets/2.jpg"),   
      
      input:''
    };
  }, 
  methods: {   
    shouy(){
       window.location.href='../#/Home'
    },
    
    tiaoz(){
      window.location.href='../#/Shangp'
    },
     User(){
       window.location.href='../#/User'
    },
  },
};
</script>
<style>  
.font{
	text-shadow: 5px 5px 5px #bab6b6;
	text-align: center;
  
}
.kap{
  margin-left: 78px;
  margin-top: 15px;
  margin-bottom: 15px;
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
.el-table {
  margin-top: 15px;
  font-size: 12px;
}
.el-card__body {
  padding: 10px;
}
.userCard {
  height: 125px;
  display: flex;
  border-bottom: 2px solid #dcdfe6;
  border-radius: 2px;
}
.userInfo {
  width: auto;
  padding: 0 0 0 6%;
}
.important-font {
  font-weight: 900;
  font-size: 25px;
}
.secondary-font {
  color: #909399;
}
.login-info {
  height: 40px;
  text-align: left;
  color: #909399;
}
.table {
  line-height: 60px;
}

.circle {
  height: 60px;
}
.el-avatar {
  margin: 5px 0 0 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

