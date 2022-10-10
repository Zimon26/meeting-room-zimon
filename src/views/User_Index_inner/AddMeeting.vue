<template>
  <div class="main-container">
    <el-form ref="addMeetingFormRef" :model="addMeetingForm" label-position="left">
      <el-form-item label="会议主题" prop="meetingTitle" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <!-- <el-form-item label="会议开始时间" prop="meetingTime" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议预计时长" prop="meetingDuration" label-width="100px">
        <el-input></el-input>
      </el-form-item> -->
      <el-form-item label="活动时间" label-width="100px">
        <el-col :span="6">
          <el-form-item prop="meetingTimeStart">
            <el-date-picker type="date" placeholder="选择日期" v-model="addMeetingForm.meetingDay" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <!-- <el-col class="separate" :span="2">-</el-col> -->
        <el-col :span="1"></el-col>
        <el-col :span="6">
          <el-form-item prop="meetingTimeEnd">
            <el-time-picker placeholder="选择时间" v-model="addMeetingForm.meetingTime" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="会议预计时长" prop="meetingDuration" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议发起人" prop="meetingHolder" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议室申请人" prop="meetingAsker" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议室ID" prop="roomID" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="one" type="primary" @click="submitForm('addMeetingFormRef')">添加会议</el-button>
        <el-button class="two" type="info" @click="quitAddMeeting">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddMeeting',
  data() {
    return {
      addMeetingForm: {
        meetingTitle: '',
        meetingDay: null,
        meetingTime: null,
        meetingDuration: 0,
        meeingHolder: '',
        roomAsker: '',
        roomID: 0
      }
    }
  },
  methods: {
    submitForm(formRef) {
      // 验证表单上传服务器
      // this.$ref[formRef].validate(valid => {})
      this.$emit('workSectionDone', false)
    },
    quitAddMeeting() {
      this.$emit('workSectionDone', false)
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  box-sizing: border-box;
  width: 700px;
  // height: 500px;
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: burlywood;
  .el-form-item {
    margin: 10px 0;
    // .separate {
    //   z-index: 999;
    //   margin: 0;
    //   padding: 0;
    //   // position: relative;
    //   // left: 5%;
    // }
    .el-input {
      width: 60%;
      margin-left: 50px;
    }
    .el-button {
      width: 15%;
      margin: 10px 0;
    }
    .one {
      margin-left: 150px;
    }
    .two {
      margin-left: 20px;
    }
  }
}
</style>