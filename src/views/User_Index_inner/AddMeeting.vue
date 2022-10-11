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
      <el-form-item label="会议开始时间" label-width="100px">
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
      <el-form-item label="会议预计时长" label-width="100px">
        <el-input-number v-model="addMeetingForm.meetingDuration" :min="1" :max="10" label="会议持续时间"></el-input-number>
        <span> * 0.5小时</span>
        <span> 合计 {{0.5*addMeetingForm.meetingDuration}} 小时</span>
      </el-form-item>
      <el-form-item label="会议室ID" label-width="100px">
        <el-select v-model="roomChoice" placeholder="请选择">
          <el-option v-for="item in roomInfo" :key="item.id" :label="item.id" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会议发起人" prop="meetingHolder" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议室申请人" prop="meetingAsker" label-width="100px">
        <el-input>
        </el-input>
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
      },
      roomInfo: [
        { id: 201, occupied: false },
        { id: 202, occupied: false },
        { id: 203, occupied: false }
      ],
      roomChoice: ''
    }
  },
  methods: {
    submitForm(formRef) {
      // 验证表单上传服务器
      // this.$ref[formRef].validate(valid => {})
      // 发送添加会议的数据
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
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
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
    .el-input-number {
      width: 30%;
      margin-left: 50px;
    }
    .el-select {
      width: 30%;
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