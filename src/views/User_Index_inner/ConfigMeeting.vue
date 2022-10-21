<template>
  <div>
    <el-form v-if="meetingChoiceOn" ref="meetingChoiceFormRef" class="meeting-choice" :model="meetingChoiceForm"
      :rules="rulesChoice">
      <el-form-item prop="meetingChoice">
        <el-select v-model="meetingChoiceForm.meetingChoice" placeholder="请选择要修改的会议">
          <el-option v-for="item in userMeetings" :key="item.indexID"
            :label="`${item.meetingTitle} ${item.meetingDay} ${item.meetingTime}`" :value="item.indexID"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="meetingChoiceDone">确定</el-button>
        <el-button type="info" @click="quit">取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 要修改的会议已经选择完毕 -->

    <el-form v-else class="config-meeting" ref="configMeetingFormRef" :model="configMeetingForm" label-position="left"
      :rules="rules">
      <el-form-item label="会议主题" prop="meetingTitle" label-width="110px">
        <el-input v-model="configMeetingForm.meetingTitle" placeholder="请输入会议名称"></el-input>
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
            <el-date-picker type="date" placeholder="选择日期" v-model="configMeetingForm.meetingDay" style="width: 100%;">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <!-- <el-col class="separate" :span="2">-</el-col> -->
        <el-col :span="1"></el-col>
        <el-col :span="6">
          <el-form-item class="inner" prop="meetingTime">
            <el-time-select placeholder="选择时间" v-model="configMeetingForm.meetingTime" style="width: 100%;"
              :picker-options="{start: '08:30',step: '00:15',end: '21:30'}"></el-time-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="会议预计时长" label-width="110px" prop="meetingDuration">
        <el-input-number v-model="configMeetingForm.meetingDuration" :min="1" :max="10"></el-input-number>
        <span> * 0.5小时</span>
        <span> 合计 {{0.5*configMeetingForm.meetingDuration}} 小时</span>
      </el-form-item>
      <el-form-item label="会议室ID" label-width="110px" prop="roomID">
        <el-select v-model="configMeetingForm.roomID" placeholder="请选择">
          <el-option v-for="item in roomInfo" :key="item.id" :label="item.id" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会议发起人" prop="meetingHolder" label-width="110px">
        <el-input v-model="configMeetingForm.meetingHolder" placeholder="请输入会议发起人姓名"></el-input>
      </el-form-item>
      <!-- <el-form-item label="会议室申请人" prop="meetingAsker" label-width="100px">
        <el-input>
        </el-input>
      </el-form-item> -->

      <el-form-item>
        <el-button class="one" type="primary" @click="submitForm">修改会议</el-button>
        <el-button class="two" type="info" @click="quit">取消</el-button>
        <el-button class="two" type="danger" @click="deleteMeeting">删除会议</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ConfigMeeting',
  data() {
    return {
      // 用户先选择要修改的会议
      // 这个地方用数组的id可能有一些问题
      userMeetings: [
        // {
        //   meetingID: 0,
        //   meetingTitle: '综合设计',
        //   meetingDay: '2022-10-11',
        //   meetingTime: '10:00',
        //   meetingDuration: 3,
        //   meetingHolder: 'Zimon',
        //   roomID: '204'
        // },
        // {
        //   meetingID: 1,
        //   meetingTitle: '综合设计',
        //   meetingDay: '2022-10-11',
        //   meetingTime: '10:00',
        //   meetingDuration: 3,
        //   meetingHolder: 'Zimon',
        //   roomID: '204'
        // },
        // {
        //   meetingID: 2,
        //   meetingTitle: '综合设计',
        //   meetingDay: '2022-10-11',
        //   meetingTime: '10:00',
        //   meetingDuration: 3,
        //   meetingHolder: 'Zimon',
        //   roomID: '204'
        // }
      ],
      meetingChoiceForm: {
        meetingChoice: ''
      },
      meetingChoiceOn: true,
      rulesChoice: {
        meetingChoice: [{ required: true, message: '请选择要修改的会议', trigger: 'change' }]
      },
      // 接下来是修改会议的部分，从configMeetingForm被加载进来的时候修改原装数据
      configMeetingForm: {
        meetingTitle: '',
        meetingDay: null,
        meetingTime: null,
        meetingDuration: 0,
        meetingHolder: '',
        roomID: ''
      },
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
        meetingDay: [{ required: true, message: '请选择会议日期', trigger: 'change' }],
        meetingTime: [{ required: true, message: '请选择会议日期', trigger: 'change' }],
        meetingDuration: [{ type: 'number', required: true, message: '请输入会议预计时长', trigger: 'change' }],
        roomID: [{ required: true, message: '请选择会议室', trigger: 'change' }],
        meetingHolder: [{ required: true, message: '请输入会议发起人姓名', trigger: 'blur' }]
      },
      username: 'Zimon'
    }
  },
  methods: {
    meetingChoiceDone() {
      this.$refs.meetingChoiceFormRef.validate(valid => {
        if (valid) {
          // console.log(this.meetingChoiceForm)
          //这个地方要把用户选中的数据装载到configMeetingForm
          console.log('this is' + this.meetingChoiceForm.meetingChoice)
          let id = this.meetingChoiceForm.meetingChoice
          this.configMeetingForm = this.userMeetings[id]
          // this.configMeetingForm.meetingTitle = this.userMeetings[id].meetingTitle
          // this.configMeetingForm.meetingDay = this.userMeetings[id].meetingDay
          // this.configMeetingForm.meetingTime = this.userMeetings[id].meetingTime
          // this.configMeetingForm.meetingDuration = this.userMeetings[id].meetingDuration
          // this.configMeetingForm.meetingHolder = this.userMeetings[id].meetingHolder
          // this.configMeetingForm.roomID = this.userMeetings[id].roomID
          this.meetingChoiceOn = false
        } else {
          return this.$message.error('请先选择要修改的会议')
        }
      })
    },
    quit() {
      this.$emit('workSectionDone', false)
    },
    submitForm() {
      // 验证表单
      this.$refs.configMeetingFormRef.validate(async valid => {
        if (valid) {
          // console.log(this.configMeetingForm)
          // 从这个地方向后端发送数据addMeetingForm内容
          console.log('我是分割线')
          console.log(this.configMeetingForm)
          const { data: res } = await this.http.post('/addMeeting', { addMeetingForm: this.configMeetingForm, type: 1 })
          if (res.message === 'conflict') return this.$message.error('修改失败，与其他已预定会议冲突，请重新选择会议室或更换时间')
          this.$message.success('修改成功')
          this.$emit('workSectionDone', false)
        } else {
          return this.$message.error('修改失败，请先完善信息')
        }

      })
      // 发送添加会议的数据
      // this.$emit('workSectionDone', false)
    },
    async deleteMeeting() {
      // 发送type=2的删除信息
      const { data: res } = await this.http.post('/addMeeting', { addMeetingForm: this.configMeetingForm, type: 2 })
      console.log(res)
      if (res.message === 'ok') {
        this.$message.success('删除成功')
        return this.$emit('workSectionDone', false)
      }
    }
  },
  async created() {
    const { data: res } = await this.http.get('/meetingRecord', {
      params: {
        meetingHolder: this.username
      }
    })
    res.forEach((item, index) => {
      item.indexID = index
    })
    this.userMeetings = res
    console.log(this.userMeetings)
  }
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
  background-color: #d9ecff;

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
      margin-left: 160px;
    }

    .two {
      margin-left: 20px;
    }
  }
}
</style>