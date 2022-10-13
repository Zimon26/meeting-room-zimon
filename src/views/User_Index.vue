<template>
  <div>
    <h3>我的会议</h3>
    <div class="meeting-info">
      <div class="meeting-card" v-for="item in meetingInfo" :key="item.id">
        <p>
          <span class="meeting-time">{{item.time}}</span>
        </p>
        <p>
          <span class="meeting-title">主题：{{item.title}}</span>
        </p>
        <p>
          <span class="meeting-holder">会议发起人：{{item.holder}}</span>
        </p>
      </div>
    </div>
    <h3>工作面板{{operation}}</h3>
    <div v-if="!workSectionOn">
      <div class="work-section">
        <div class="work-section-card first" @click="addMeetingClick">
          <div class="work-section-content">
            <img src="@/assets/icon-add.png" alt="">
            <p>添加会议</p>
          </div>
        </div>
        <div class="work-section-card" @click="configMeetingClick">
          <div class="work-section-content">
            <img src="@/assets/icon-config.png" alt="">
            <p>修改会议</p>
          </div>
        </div>
        <div class="work-section-card" @click="searchMeetingClick">
          <div class="work-section-content">
            <img src="@/assets/icon-search.png" alt="">
            <p>查询会议</p>
          </div>
        </div>
        <div class="work-section-card" @click="meetingRecordClick">
          <div class="work-section-content">
            <img src="@/assets/icon-record.png" alt="">
            <p>会议记录</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <component :is="workSectionChoice" @workSectionDone="workSectionDoneHandler"></component>
    </div>

  </div>
</template>

<script>
import AddMeeting from '@/views/User_Index_inner/AddMeeting.vue'
import ConfigMeeting from '@/views/User_Index_inner/ConfigMeeting.vue'
import MeetingRecord from '@/views/User_Index_inner/MeetingRecord.vue'
import SearchMeeting from '@/views/User_Index_inner/SearchMeeting.vue'
export default {
  name: 'User_Index',
  data() {
    return {
      operation: '',
      meetingInfo: [
        // { id: 100, time: '2022-10-6', title: '综合设计', holder: 'Zimon' },
        // { id: 101, time: '2022-10-6', title: '综合设计', holder: 'Zimon' },
        // { id: 102, time: '2022-10-6', title: '综合设计', holder: 'Zimon' }
      ],
      workSectionChoice: '',
      workSectionOn: false
    }
  },
  methods: {
    // 负责点击功能面板的四个跳转
    addMeetingClick() {
      this.workSectionChoice = AddMeeting
      this.operation = ' > 添加会议'
      this.workSectionOn = true
    },
    configMeetingClick() {
      this.workSectionChoice = ConfigMeeting
      this.operation = ' > 修改会议'
      this.workSectionOn = true
    },
    searchMeetingClick() {
      this.workSectionChoice = SearchMeeting
      this.operation = ' > 查询会议'
      this.workSectionOn = true
    },
    meetingRecordClick() {
      this.workSectionChoice = MeetingRecord
      this.operation = ' > 会议记录'
      this.workSectionOn = true
    },
    workSectionDoneHandler(e) {
      this.workSectionOn = e
      this.operation = ''
    }
  },
  async created() {
    const { data: res } = await this.http.get('/meetingInfo')
    this.meetingInfo = res
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin: 10px;
}
.meeting-info {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .meeting-card {
    margin: 5px 0;
    margin-left: 10px;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    background-color: aqua;
    padding-left: 12px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    p {
      margin: 5px 0;
    }
  }
}
.work-section {
  display: flex;
  justify-content: flex-start;
  .first {
    margin-left: 10px !important;
  }
  .work-section-card {
    position: relative;
    margin: 5px 0;
    margin-left: 25px;
    width: 200px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    .work-section-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 50px;
        height: 50px;
      }
      p {
        display: block;
      }
    }
  }
}
</style>