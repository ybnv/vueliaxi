


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
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
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
          <el-col :span="1"><div class="table">首页</div></el-col>
          <el-col :span="20"><div class="table">&nbsp;</div></el-col>
          <el-col :span="2">
            <!-- 头像下拉菜单 -->
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
              <el-button type="success" @click="addRow(tableData)"
                >添加用户</el-button
              >
            </el-col>
          </el-row>
        </el-card>

        <!-- 用户表格 -->
        <el-table
          :data="tableData"
          style="width: 100%"
          highlight-current-row
          v-loading="listLoading"
        >
          <el-table-column type="index" label="ID" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
           <el-table-column prop="buy" label="购买量" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.buy }}</span>
            </template>
          </el-table-column>
           <el-table-column prop="consume" label="消费" width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.consume }}</span>
            </template>
          </el-table-column>
          <el-table-column label="地址" width="240">
            <template slot-scope="scope">
              <span>{{ scope.row.address }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- 放置修改、删除和分配角色按钮 -->
              <el-tooltip effect="dark" content="修改" placement="top">
                <el-button
                  @click="handleEdit(scope.$index, scope.row)"
                  type="primary"
                  icon="el-icon-edit"
                  circle
                ></el-button>
              </el-tooltip>
              <el-tooltip effect="dark" content="删除" placement="top">
                <el-button
                  @click="handleDelete(scope.$index, tableData)"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
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

       
      </el-main>
      <!-- 添加和编辑共用表单 -->
      <el-dialog
        :title="titleMap[dialogStatus]"
        :visible.sync="FormVisible"
        :close-on-click-modal="false"
        class="edit-form"
        :before-close="handleClose"
      >
        <el-form
          :model="Form"
          label-width="80px"
          :rules="editFormRules"
          ref="Form"
        >
          <el-form-item label="ID" prop="id">
            <el-input v-model="Form.id" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-input v-model="Form.date"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="Form.name"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-input v-model="Form.sex"></el-input>
          </el-form-item>
           <el-form-item label="购买量">
            <el-input v-model="Form.buy"></el-input>
          </el-form-item>
          <el-form-item label="消费">
            <el-input v-model="Form.consume"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="Form.address"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="handleCancel('Form')">取消</el-button>
          <el-button
            v-if="addBtnshow"
            type="primary"
            @click.native="confirmAdd('Form')"
            >确定</el-button
          >
          <el-button
            v-if="editBtnshow"
            type="primary"
            @click.native="confirmEdit('Form')"
            >确定</el-button
          >
        </div>
      </el-dialog>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      input:'',
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          sex: "男",
          buy:'120件',
          consume:'13900元',
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎",
          sex: "男",
          buy:'120件',
          consume:'13900元',
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王小虎",
          sex: "男",
          buy:'120件',
          consume:'13900元',
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王小虎",
          sex: "男",
          buy:'120件',
          consume:'13900元',
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      titleMap: {
        addEquipment: "新增",
        editEquipment: "编辑",
      },

      //新增和编辑弹框标题
      dialogStatus: "",
      Form: {
        id: 0,
        data: "",
        name: "",
        buy:'',
       consume:'',
        address: "",
      },

      editFormRules: {
        ID: [{ required: true, message: "请输入id", trigger: "blur" }],
        date: [{ required: true, message: "请输入日期", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
      },

      FormVisible: false,
      currentRow: [],
      ids: [],
      listLoading: "",
      addBtnshow: false,
      editBtnshow: false,
      editLoading: "",
      dialogStatus: "",
      selected: [],
      editid: "",
      searchForm: [],


      //菜单控制
      isCollapse: false,
      //头像地址
      imgUrl: require("../assets/2.jpg"),
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

    //点击新增
    addRow(tableData, event) {
      this.FormVisible = true;
      this.Form = {
        id: 0,
        date: "",
        name: "",
        sex: "",
        buy:"",
        consume:"",
        address: "",
      };
      this.dialogStatus = "addEquipment";
      this.addBtnshow = true;
      this.editBtnshow = false;
    },
    //点击确定（新增）
    confirmAdd() {
      this.tableData.push({
        id:this.Form.id,
        date: this.Form.date,
        name: this.Form.name,
        sex: this.Form.sex,
        buy:this.Form.buy,
        consume:this.Form.consume,
        address: this.Form.address,
      });
      this.FormVisible = false;
    },

    //点击编辑
    handleEdit: function (index, row) {
      this.FormVisible = true;
      this.Form = Object.assign({}, row);
      _index = index;
      console.log(index);
      console.log(_index);

      this.dialogStatus = "editEquipment";
      this.addBtnshow = false;
      this.editBtnshow = true;
    },

    //点击确定（编辑）
    confirmEdit() {
      var editdata = _index;
      console.log(editdata);
      this.tableData[editdata].id = this.Form.id;
      this.tableData[editdata].date = this.Form.date;
      this.tableData[editdata].name = this.Form.name;
      this.tableData[editdata].sex = this.Form.sex; //consume
      this.tableData[editdata].buy = this.Form.buy;
      this.tableData[editdata].consume = this.Form.consume;
      this.tableData[editdata].address = this.Form.address;
      this.FormVisible = false;
    },
    //点击关闭dialog
    handleClose(done) {
      this.FormVisible = false;
    },

    //点击取消
    hangleCancel(formName) {
      this.FormVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            // delete:row.splice(index, 1),
            type: "success",
            message: "删除成功!",
            delete: row.splice(index, 1), //splice 删除对象是数unfuntion组   如果是对象会出现错误  row.solice not is

            // url: this.$router.push('/')
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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

