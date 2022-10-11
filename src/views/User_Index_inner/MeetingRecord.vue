<template>
  <div class="record-container">
    <el-table :data="meetingData" stripe>
      <el-table-column label="会议主题" prop="meetingTitle" width="200" align="center"></el-table-column>
      <el-table-column label="会议时间" prop="meetingTimeAll" width="200" align="center"></el-table-column>
      <el-table-column label="会议时长(小时)" prop="meetingDuration" width="200" align="center"></el-table-column>
      <el-table-column label="会议室ID" prop="roomID" width="200" align="center"></el-table-column>
      <el-table-column label="会议发起人" prop="meetingHolder" width="200" align="center"></el-table-column>
    </el-table>
    <el-button type="primary" @click="meetingDataConfirm">确认</el-button>
  </div>
</template>

<script>
export default {
  name: 'MeetingRecord',
  data() {
    return {
      meetingData: [
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
    meetingDataConfirm() {
      this.$emit('workSectionDone', false)
    }
  }
}
</script>

<style lang="less" scoped>
.record-container {
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