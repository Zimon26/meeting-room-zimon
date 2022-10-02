<template>
  <div class="user-container">
    <!-- <h1>我是user</h1> -->
    <el-container class="main-container">
      <!-- 头部导航栏 -->
      <el-header>
        <div class="title-div"><span class="span-container"><span class="bold">智能</span><span>会议室</span></span></div>
        <div class="function-bar">
          <!-- <i class="el-icon-finished left-function-icons"></i> -->
          <div class="right-function-icons">
            <i class="el-icon-message"></i>
            <i class="el-icon-bell"></i>
            <i class="el-icon-s-flag"></i>
          </div>
        </div>
      </el-header>
      <!-- 内容主体区域 -->
      <el-container class="after-header-container">
        <!-- 左侧侧边栏 -->
        <el-aside width="200px">
          <!-- <div class="aside-userinfo">
            <img src="../assets/logo.png" alt="">
            <div class="user-status">
              <div class="username">
                <i class="el-icon-user"></i>
                <span>Zimon</span>
              </div>
              <div class="line-status">
                <i class="el-icon-s-promotion"></i>
                <span>在线</span>
              </div>
            </div>
          </div> -->
          <!-- 用户信息区域 -->
          <div class="aside-userinfo">
            <div class="userinfo">
              <div class="image-container">
                <img src="../assets/logo.png" alt="">
              </div>
              <div class="user-status">
                <div class="username">
                  <span>Zimon</span>
                </div>
                <div class="user-line">
                  <span><i class="el-icon-check"></i>在线</span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-notice">
            <!-- <i class="el-icon-menu"></i> -->
            菜单
          </div>
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="index">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 已经设计了第二个hash地址是meetings -->
            <el-menu-item index="meetings">
              <i class="el-icon-menu"></i>
              <span slot="title">我的会议</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主要内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  // 这个解决方法并不好
  border: 0;
}
.user-container {
  height: 100%;
  background-color: pink;
  .main-container {
    height: 100%;
    .el-header {
      height: 20%;
      background-color: #605ca8;
      .title-div {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 100%;
        background-color: #555299;
        // text-align: center;
        .span-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          font-family: 'Microsoft YaHei';
          letter-spacing: 2px;
          color: #eee;
        }
        .bold {
          font-weight: 700;
        }
      }
      .function-bar {
        display: inline-block;
        // margin-left: 200px;
        .left-function-icons {
          font-size: 20px;
          color: #eee;
          transform: translate(10px, -25px);
        }
        .right-function-icons {
          float: right;
          i {
            font-size: 20px;
            color: #eee;
            margin: 0 15px;
            transform: translate(1540px, -20px);
          }
        }
      }
    }
    .after-header-container {
      height: 80%;
      .el-aside {
        height: 100%;
        background-color: #545c64;
        .aside-userinfo {
          .userinfo {
            // margin: 200px auto;
            height: 60px;
            width: 100%;
            // border: 1px solid black;
            background-color: #666;
          }

          .image-container {
            display: inline-block;
            box-sizing: border-box;
            // padding: 20px;
            /* margin-top: 10%; */
            border-radius: 50%;
            border: 1px solid transparent;
            // width: 40%;
            height: 100%;
            overflow: hidden;
            background-color: #fff;
          }

          img {
            height: 100%;
          }

          .user-status {
            display: inline-block;
            // border: 1px solid pink;
            height: 100%;
            width: 100px;
            vertical-align: top;
            // margin-left: 5px;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Microsoft YaHei';
            color: #eee;
          }

          .username {
            position: relative;
            box-sizing: border-box;
            height: 50%;
            // background-color: aquamarine;
          }

          .username span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .user-line {
            position: relative;
            box-sizing: border-box;
            height: 50%;
            // background-color: chocolate;
          }

          .user-line span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // color: green !important;
            i {
              margin-right: 5px;
              color: #62e884;
            }
          }
        }
        .menu-notice {
          height: 20px;
          line-height: 20px;
          padding: 8px;
          // border-top: 5px solid #666666;
          border-bottom: 2px solid #666666;
          color: rgba(200, 200, 200, 0.6);
          font-size: 14px;
        }
        .el-menu-item {
          border-right: 0;
        }
      }
    }
  }
}
</style>