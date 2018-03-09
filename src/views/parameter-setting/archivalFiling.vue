<template>
  <div class="app-container">
    <h1 class="header-class" style="text-align:center">立卷设置</h1>
    <el-row class="firstRow">
      <el-col class="firstCol" :span="12" :offset="3">
        <el-form :model="fillingData" class="formclass" ref="fillingData" :rules="rules" label-width="110px">
          <el-form-item label="档案库" prop="archivalType">
            <el-select v-model="fillingData.archivalType" placeholder="选择档案库">
              <el-option v-for="item in items" :value="item.value" :key="item.key" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="卷(件)内页数" prop="pageNum">
            <el-input v-model="fillingData.pageNum" placeholder="输入页数"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="fillingData.fileNumRule" placeholder="档号生成规则">
              <el-option v-for="rule in numRules" :value="rule.value" :key="rule.key" :label="rule.label"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="submitclass" align="center">
            <el-button type="primary" width="100" @click="submitFilling('fillingData')">保 存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fillingData: {
        archivalType: '',
        pageNum: '',
        fileNumRule: ''
      },
      items: [
        {
          key: 1,
          value: '1',
          label: '文书档案（新）'
        },
        {
          key: 2,
          value: '2',
          label: '文书档案（旧）'
        },
        {
          key: 3,
          value: '3',
          label: '特殊档案'
        }
      ],
      numRules: [
        {
          key: 1,
          value: '1',
          label: '文书档案（新）'
        },
        {
          key: 2,
          value: '2',
          label: '文书档案（旧）'
        },
        {
          key: 3,
          value: '3',
          label: '特殊档案'
        }
      ]
    }
  },
  methods: {
    submitFilling(data) {}
  }
}
</script>

<style>

</style>
