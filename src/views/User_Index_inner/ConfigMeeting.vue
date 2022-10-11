<template>
  <div>
    <el-form class="meeting-choice" v-if="meetingChoiceOn">
      <el-form-item>
        <el-select v-model="meetingChoice" placeholder="请选择要修改的会议">
          <el-option v-for="item in userMeetings" :key="item.meetingID" :label="`${item.meetingTitle} ${item.meetingDay} ${item.meetingTime}`" :value="item.meetingID"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="meetingChoiceDone">确定</el-button>
        <el-button type="info" @click="quit">取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 要修改的会议已经选择完毕 -->

    <el-form class="config-meeting" v-else ref="ConfigMeetingFormRef" :model="configMeetingForm" label-position="left">
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
            <el-date-picker type="date" placeholder="选择日期" v-model="configMeetingForm.meetingDay" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <!-- <el-col class="separate" :span="2">-</el-col> -->
        <el-col :span="1"></el-col>
        <el-col :span="6">
          <el-form-item prop="meetingTimeEnd">
            <el-time-picker placeholder="选择时间" v-model="configMeetingForm.meetingTime" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="会议预计时长" label-width="100px">
        <el-input-number v-model="configMeetingForm.meetingDuration" :min="1" :max="10" label="会议持续时间"></el-input-number>
        <span> * 0.5小时</span>
        <span> 合计 {{0.5*configMeetingForm.meetingDuration}} 小时</span>
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
        <el-button class="one" type="primary" @click="submitForm('configMeetingFormRef')">修改会议</el-button>
        <el-button class="two" type="info" @click="quit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ConfigMeeting',
  data() {
    return {
      userMeetings: [
        {
          meetingID: 0,
          meetingTitle: '综合设计',
          meetingDay: '2022-10-11',
          meetingTime: '10:00'
        },
        {
          meetingID: 1,
          meetingTitle: '综合设计',
          meetingDay: '2022-10-11',
          meetingTime: '10:00'
        },
        {
          meetingID: 2,
          meetingTitle: '综合设计',
          meetingDay: '2022-10-11',
          meetingTime: '10:00'
        }
      ],
      meetingChoice: '',
      meetingChoiceOn: true,
      // 接下来是修改会议的部分，从configMeetingForm被加载进来的时候修改原装数据
      configMeetingForm: {
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
    meetingChoiceDone() {
      console.log(this.meetingChoice)
      this.meetingChoiceOn = false
    },
    quit() {
      console.log('quit')
      this.$emit('workSectionDone', false)
    },
    submitForm(formRef) {
      // 验证表单上传服务器
      // this.$ref[formRef].validate(valid => {})
      // 发送添加会议的数据
      this.$emit('workSectionDone', false)
    }
  }
  // watch: {
  //   meetingChoice: {
  //     handler(newVal) {

  //     }
  //   }
  // }
}
</script>

<style lang="less" scoped>
.el-form {
  margin-left: 10px;
}
.meeting-choice {
  // width: 300px;
  .el-select {
    width: 400px;
  }
}
.config-meeting {
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