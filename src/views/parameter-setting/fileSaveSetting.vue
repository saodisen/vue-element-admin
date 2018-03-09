<template>
    <div class="app-container">
        <h1 class="header-class" style="text-align:center">文件存储设置</h1>
        <el-row class="firstrow">
            <el-col class="firstcol" :span="5" :offset="3">
                <span class="configtitle">文件存储配置：</span>
                <el-input placeholder="输入关键字进行过滤" v-model="filterText">
                </el-input>
                <el-tree class="filter-tree" show-checkbox :data="saveConfigList" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree">
                </el-tree>
            </el-col>
            <el-col class="config">
                <form class="config-form" :model="configData" :rules="rules" label-width="110px">
                    <el-form-item label="配置名:" prop="name">
                        <el-input v-model="configData.name" placeholder="请输入配置名"></el-input>
                    </el-form-item>
                    <el-form-item label="存储方式" prop="style">
                        <el-radio-group fill v-model="configData.style" class="radioclass">
                            <el-radio :label="1">本地存储</el-radio>
                            <el-radio :label="2">数据库</el-radio>
                            <el-radio :label="3">文件服务器</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="存储路径" prop="savepath">
                        <el-input v-model="configData.savepath"></el-input>
                    </el-form-item>
                    <el-form-item class="submit">
                        <el-button type="primary" @click="submitData('configData')">保存配置</el-button>
                        <el-button type="primary" @click="addData('configData')">新增配置</el-button>
                    </el-form-item>
                </form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      configData: {
        name: '',
        style: '',
        savepath: ''
      },
      saveConfigList: [
        {
          value: 'config1',
          label: '配置1'
        },
        {
          value: 'config2',
          label: '配置2'
        }
      ],
      filterText: ''
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    submitData() {},
    addData() {}
  }
}
</script>


<style scoped>
.firstcol {
  border: 1px solid #eaeefb;
  padding: 10px 20px 10px 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.radioclass {
  border: 1px solid #eaeefb;
  padding: 5px 5px 5px 5px;
}
</style>
