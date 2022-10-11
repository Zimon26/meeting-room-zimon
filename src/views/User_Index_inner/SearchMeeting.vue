<template>
  <div>
    <el-form v-if="!searchDone" class="search-meeting" ref="searchMeetingFormRef" :model="searchMeetingForm">
      <el-form-item class="one" prop="roomID">
        <el-select v-model="searchMeetingForm.roomID" placeholder="请选择会议室ID">
          <el-option v-for="item in room_All" :key="item.roomID" :label="item.roomID" :value="item.roomID"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="two" prop="meetingDay">
        <el-date-picker type="date" placeholder="请选择会议日期" v-model="searchMeetingForm.meetingDay"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="meetingChoiceDone">查询</el-button>
        <el-button type="info" @click="clearAll">清空</el-button>
        <el-button type="danger" @click="quit">退出</el-button>
      </el-form-item>
    </el-form>
    <div v-else class="ret-container">
      <el-table :data="retMeetingInfo" stripe>
        <el-table-column label="会议主题" prop="meetingTitle" width="200" align="center"></el-table-column>
        <el-table-column label="会议时间" prop="meetingTimeAll" width="200" align="center"></el-table-column>
        <el-table-column label="会议时长(小时)" prop="meetingDuration" width="200" align="center"></el-table-column>
        <el-table-column label="会议室ID" prop="roomID" width="200" align="center"></el-table-column>
        <el-table-column label="会议发起人" prop="meetingHolder" width="200" align="center"></el-table-column>
      </el-table>
      <el-button type="primary" @click="retMeetingConfirm">确认</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SearchMeeting',
  data() {
    return {
      searchMeetingForm: {
        meetingDay: null,
        roomID: ''
      },
      // 这个地方应该是后端返回的可供选择的会议数据
      room_All: [{ roomID: 101 }, { roomID: 102 }, { roomID: 103 }, { roomID: 104 }],
      searchDone: false,
      // 假数据代替
      retMeetingInfo: [
        {
          meetingTitle: '综合设计',
          meetingTimeAll: '2022-10-11 22:00',
          meetingDuration: '3',
          meetingHolder: 'Zimon',
          roomID: '228'
        },
        {
          meetingTitle: '综合设计',
          meetingTimeAll: '2022-10-11 22:00',
          meetingDuration: '3',
          meetingHolder: 'Zimon',
          roomID: '228'
        },
        {
          meetingTitle: '综合设计',
          meetingTimeAll: '2022-10-11 22:00',
          meetingDuration: '3',
          meetingHolder: 'Zimon',
          roomID: '228'
        }
      ]
    }
  },
  methods: {
    meetingChoiceDone() {
      // 向后端发送用户的查询条件，返回结果展示到表格
      this.searchDone = true
    },
    clearAll() {
      this.searchMeetingForm.meetingDay = ''
      this.searchMeetingForm.roomID = ''
    },
    quit() {
      this.$emit('workSectionDone', false)
    },
    retMeetingConfirm() {
      this.searchDone = false
    }
  }
}
</script>

<style lang="less" scoped>
.search-meeting {
  margin-left: 10px;
  // 这个地方有点问题
  .one .two .el-select .el-option .el-date-picker {
    // margin: 0;
    // padding: 0;
    width: 250px;
  }
}
.ret-container {
  margin-left: 10px;
  width: 1000px;
  .el-table {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 1000px;
  }
  .el-button {
    margin: 5px 0;
  }
}
</style>