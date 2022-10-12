<template>
  <div class="main-container">
    <el-form ref="addMeetingFormRef" :model="addMeetingForm" label-position="left" :rules="rules">
      <el-form-item label="会议主题" prop="meetingTitle" label-width="110px">
        <el-input v-model="addMeetingForm.meetingTitle" placeholder="请输入会议名称"></el-input>
      </el-form-item>
      <!-- <el-form-item label="会议开始时间" prop="meetingTime" label-width="100px">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="会议预计时长" prop="meetingDuration" label-width="100px">
        <el-input></el-input>
      </el-form-item> -->
      <el-form-item label="会议开始时间" label-width="110px" prop="meetingDay">
        <el-col :span="6">
          <el-form-item class="inner" prop="meetingDay">
            <el-date-picker type="date" placeholder="选择日期" v-model="addMeetingForm.meetingDay" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <!-- <el-col class="separate" :span="2">-</el-col> -->
        <el-col :span="1"></el-col>
        <el-col :span="6">
          <el-form-item class="inner" prop="meetingTime">
            <el-time-picker placeholder="选择时间" v-model="addMeetingForm.meetingTime" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="会议预计时长" label-width="110px" prop="meetingDuration">
        <el-input-number v-model="addMeetingForm.meetingDuration" :min="1" :max="10"></el-input-number>
        <span> * 0.5小时</span>
        <span> 合计 {{0.5*addMeetingForm.meetingDuration}} 小时</span>
      </el-form-item>
      <el-form-item label="会议室ID" label-width="110px" prop="roomID">
        <el-select v-model="addMeetingForm.roomID" placeholder="请选择">
          <el-option v-for="item in roomInfo" :key="item.id" :label="item.id" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会议发起人" prop="meetingHolder" label-width="110px">
        <el-input v-model="addMeetingForm.meetingHolder" placeholder="请输入会议发起人姓名"></el-input>
      </el-form-item>
      <!-- <el-form-item label="会议室申请人" prop="meetingAsker" label-width="100px">
        <el-input>
        </el-input>
      </el-form-item> -->

      <el-form-item>
        <el-button class="one" type="primary" @click="submitForm">添加会议</el-button>
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
        meetingHolder: '',
        roomAsker: '',
        roomID: ''
      },
      // 后端接受的数据展示可选的会议室
      roomInfo: [
        { id: 201, occupied: false },
        { id: 202, occupied: false },
        { id: 203, occupied: false }
      ],
      rules: {
        meetingTitle: [
          { required: true, message: '请输入会议名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在1-15字之间', trigger: 'blur' }
        ],
        meetingDay: [{ type: 'date', required: true, message: '请选择会议日期', trigger: 'change' }],
        meetingTime: [{ type: 'date', required: true, message: '请选择会议日期', trigger: 'change' }],
        meetingDuration: [{ type: 'number', required: true, message: '请输入会议预计时长', trigger: 'change' }],
        roomID: [{ required: true, message: '请选择会议室', trigger: 'change' }],
        meetingHolder: [{ required: true, message: '请输入会议发起人姓名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      // 验证表单
      this.$refs.addMeetingFormRef.validate(valid => {
        if (valid) {
          console.log(this.addMeetingForm)
          // 从这个地方向后端发送数据addMeetingForm内容

          this.$message.success('添加成功')
        } else {
          return this.$message.error('添加失败，请先完善信息')
        }
      })
      // 发送添加会议的数据
      // this.$emit('workSectionDone', false)
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
  .inner {
    margin: 0 !important;
  }
  .el-form-item {
    margin: 18px 0;
    // .separate {
    //   z-index: 999;
    //   margin: 0;
    //   padding: 0;
    //   // position: relative;
    //   // left: 5%;
    // }
    span {
      color: #606266;
    }
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
      margin-left: 160px;
    }
    .two {
      margin-left: 20px;
    }
  }
}
</style>