<template>
  <div>
    <h2>请插入或拨出加密锁。{{isin}}</h2>
    <h3>{{devicePath}}</h3>
    <el-button @click="findPort" type="primary">查找锁</el-button>
    <el-button @click="getId" type="primary">查找锁id</el-button>
  </div>
</template>
<script>
import { getUKeyPort, getChipID, ResetOrder, getUkeyObj } from '@/assets/usbkey/utils'
import SoftKey3Wsss from '@/assets/usbkey/Syunew3'
export default {
  // created() {
  //   this.isKeyIn()
  //   console.log(this.isKeyIn())
  //   console.log('created------')
  //   console.log(this.iskeyIn)
  // },
  data() {
    return {
      isin: undefined,
      devicePath: undefined,
      bConnect: 0
    }
  },
  methods: {
    isKeyIn() {
      console.log('初始化-----')
      // 如果是IE10及以下浏览器，则跳过不处理，
      if (
        navigator.userAgent.indexOf('MSIE') > 0 &&
        !navigator.userAgent.indexOf('opera') > -1
      ) {
        // 该例子只支持HTM5的浏览器
        return
      }
      try {
        var s_pnp = new SoftKey3Wsss() // 创建UK类
        console.log('--------------')
        console.log(s_pnp)
        console.log(s_pnp.Socket_UK)
        console.log(s_pnp.u)
        console.log('--------------')
        s_pnp.Socket_UK.onopen = () => {
          this.bConnect = 1 // 代表已经连接，用于判断是否安装了客户端服务
        }

        s_pnp.Socket_UK.onmessage = function got_packet(Msg) {
          var PnpData = JSON.parse(Msg.data)
          console.log('-----------------')
          console.log(PnpData)
          if (PnpData.type === 'PnpEvent') {
            // 如果是插拨事件处理消息
            if (PnpData.IsIn) {
              alert('UKEY已被插入，被插入的锁的路径是：' + PnpData.DevicePath)
              this.isin = 1
              console.log(this.isin)
            } else {
              alert('UKEY已被拨出，被拨出的锁的路径是：' + PnpData.DevicePath)
              this.isin = 0
            }
          }
        }

        s_pnp.Socket_UK.onclose = () => { }
      } catch (e) {
        alert(e.name + ': ' + e.message)
        return false
      }
    },
    findPort() {
      console.log('findPort')
      getUKeyPort(0)
      const s = getUkeyObj()
      s.onmessage = (result) => {
        console.log(result)
        const obj = JSON.parse(result.data)
        console.log(result)
        this.devicePath = obj.return_value
        console.log(this.devicePath)
      }
      s.onclose = () => { }
      console.log(s)
    },
    getId() {
      console.log()
      getChipID(this.devicePath)
      const s = getUkeyObj()
      s.onopen = () => {
        ResetOrder()
      }
      s.onmessage = (result) => {
        const data = result.data
        console.log(result)
        console.log(data)
        // ResetOrder()
      }
    }
  }
}
</script>
