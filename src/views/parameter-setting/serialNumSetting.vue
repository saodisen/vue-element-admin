<template>
    <div class="app-container">
        <h1 class="header-class" style="text-align:center">流水号设置</h1>
        <el-row>
            <el-col :span="4" :offset="2">
                <span class="configtitle">档案类型</span>
                <el-input placeholder="输入关键字进行过滤" v-model="filterText">
                </el-input>
                <el-tree class="filter-tree" show-checkbox :data="archivalType" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree">
                </el-tree>
            </el-col>
            <el-col :span="12" :offset="3">
                <el-transfer filterable :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }" v-model="FiledList" :render-content="renderFunc" :titles="['待选字段','分组字段']" :button-texts="['到左边', '到右边']" :data="data" @change="handleChange"></el-transfer>
                <el-button width="100" type="primary" @click="save">保 存</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`
        })
      }
      return data
    }
    return {
      filterText: '',
      data: generateData(),
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        )
      },
      archivalType: [
        {
          value: '1',
          label: '文书档案',
          children: [
            {
              value: '12',
              label: '文书档案（新）'
            },
            {
              value: '13',
              label: '文书档案（旧）'
            }
          ]
        }
      ]
    }
  },
  methods: {
    save(data) {}
  },
  handleChange(value, direction, movedKeys) {
    console.log(value, direction, movedKeys)
  }
}
</script>

<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
