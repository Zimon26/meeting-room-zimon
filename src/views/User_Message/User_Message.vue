<template>
  <div class="main-container">
    <h3>会议消息通知</h3>
    <div class="table-container">
      <el-table :data="meetingManage">
        <el-table-column prop="meetingID" label="会议号" align="center"></el-table-column>
        <el-table-column prop="meetingTitle" label="会议主题" align="center"></el-table-column>
        <el-table-column prop="meetingStatus" label="会议状态" align="center"></el-table-column>
        <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
        <el-table-column prop="reason" label="备注" align="center"></el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'User_Message',
  data() {
    return {
      meetingManage: [{
        meetingID: 1,
        meetingTitle: '综合设计',
        meetingStatus: '取消',
        operator: '管理员',
        reason: '请选择其他时间'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
h3,
.table-container {
  margin-left: 10px;

  .el-table {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 1000px;
  }
}
</style>