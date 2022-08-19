<template>
  <div class="demo">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="text-form"
    >
      <el-form-item label="账 号" prop="username">
        <el-input v-model.number="form.username"></el-input>
      </el-form-item>
      <el-form-item label="昵 称" prop="nickname">
        <el-input  v-model.number="form.nickname"></el-input>
      </el-form-item>
       <el-form-item label="密 码" prop="password">
        <el-input type="password" v-model.number="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model.number="form.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>      
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')"
          >提交</el-button
        >
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule,value,callback)=>{
      //rule:password的详细信息，value：password的值，callback：如果不满足则正常提交
      if(value === ""){
        callback(new Error("请输入密码"));//输入为空的提示信息
      }else{
        if(this.form.checkPass !== ""){
          this.$refs.form.validateField("checkPass");//如果确认密码不为空，则去validatePass2这个函数
        }
        callback();
      }
    };
    var validatePass2 = (rule,value,callback) => {
      if(value === ""){
        callback(new Error("请再次输入密码"));
      }else if(value !== this.form.password){
        callback(new Error("两次密码不一致！"));
      }else{
        callback();
      }
    }
    return {
      form: {
        username:"",
        nickname:"",
        password:"",
        checkPass:""
      },
      rules: {
        username:[{required:true,message:"请输入账号",trigger:"blur"}],
        nickname:[{required:true,message:"请输入昵称",trigger:"blur"}],
        password:[{validator:validatePass,required:true, trigger:"blur"}],
        checkPass:[{validator:validatePass2,required:true,trigger:"blur"}],
      },
    };
  },
  methods:{
    submitForm(formName){
        this.$refs[formName].validate((valid) =>{
            if(valid){
                alert("提交成功！")
                window.location.href='../#/login'
            }else{
                console.log("提交失败！！")
                return false;
            }
        });
    },
    resetForm(formName){
        this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.demo{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.text-form{
  width: 400px; 
  border: 1px solid #fff;
  margin: 240px 250px;
  background-color: rgba(189, 156, 156, 0.233);
  padding: 35px;
  border-radius: 10px;  
 
}
</style>