<template>
  <div class="app-container">
    <h1 class="header-class" style="text-align:center">档号设置</h1>
    <el-row style="margin-top: 20px" gutter="20">
      <!-- <el-col :xs="2" :sm="2" :md="4" :lg="2" :xl="4" style="text-align:left" class="catalogtree">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <el-tree class="filter-tree" :data="catalogList" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree">
        </el-tree>
      </el-col> -->
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="12" :offset="6" class="ruletabel">
        <el-button type="success" @click="addRule">添加档号生成规则</el-button>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%;align:center">
          <el-table-column align="center" label="序号" prop="no"></el-table-column>
          <el-table-column align="center" label="档号规则" prop="rule"></el-table-column>
          <el-table-column align="center" label="创建时间" prop="createTime"></el-table-column>
          <el-table-column align="center" label="创建人" prop="createBy"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
              <el-button type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!-- <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="12">
        <el-form class="form" :model="fileNum">
          <el-form-item label="档号规则" v-model="fileNum.No">
            <el-input style="width:500px" type="text" placeholder="档号设置规则"></el-input>
            <span class="submitbutton">
              <el-button type="primary" @click="submitFileNum">添加</el-button>
            </span>
          </el-form-item>
        </el-form>
        <el-row style="margin-top:10px" class="setclass">
          <el-col :span="10" :offset="2" class="rule" style="text-align:left">
            <div class="numlist">
              <el-input placeholder="查找档号规则" v-model="numText"></el-input>
              <el-tree class="filter-tree" :data="ruleList" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2"></el-tree>
            </div>
          </el-col>
          <el-col>
            <el-select class="linkcode" ref="linkcode" placeholder="连接符" v-model="linkCode">
              <el-option v-for="item in items" :key="item.key" :value="item.value" :label="item.label"></el-option> </el-select>
          </el-col>
        </el-row> -->
    </el-row>
    <el-dialog title="添加档号生成规则" :visible.sync="dialogFormVisible">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>
      <el-tree class="filter-tree" :data="catalogList" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree">
      </el-tree>
      <el-form class="dialogForm" :model="ruleData" ref="ruleData">
        <el-form-item label="档号规则" prop="rule" label-width="120px">
          <!-- <el-input readonly="true" v-model="ruleData.rule" placeholder="请输入档号生成规则"></el-input> -->
          <el-cascader :options="addOptions" @active-item-change="handleItemChange" :props="props" :clearable="true"></el-cascader>
          <!--级联显示字段-->
        </el-form-item>
        <el-form-item label="创建人" label-width="120px">
          <el-input v-model="ruleData.createBy"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑档号生成规则" :visible.sync="dialogFormVisible2">

      <div class="filterTree">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <el-tree class="filter-tree" :data="catalogList" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree">
        </el-tree>
      </div>
      <div class="diaFormData">
        <el-form class="dialogForm" :model="ruleData" ref="ruleData">
          <el-form-item label="档号规则" prop="rule" label-width="120px">
            <el-cascader :options="editOptions" v-model="selectedOptions3" change-on-select :clearable="true"></el-cascader>
          </el-form-item>
          <el-form-item label="创建人" prop="createBy" label-width="120px">
            <el-input v-model="ruleData.createBy"></el-input>
          </el-form-item>
          <el-form-item>
            <div slot-scope="dialogscope" slot="footer" class="dialog-footer">
              <el-button type="primary" @click="handleSubmit('ruleData')">确定</el-button>
              <el-button @click="dialogFormVisible2=false">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible2: false,
      fileNum: {
        No: ''
      },
      addOptions: [
        {
          label: '全宗号',
          children: []
        },
        {
          label: '年度',
          children: []
        }
      ],
      editOptions: [
        {
          label: '全宗号',
          value: '1'
        },
        {
          label: '年度',
          value: '2'
        }
      ],
      ruleData: {
        rule: '',
        createTime: '',
        createBy: ''
      },
      tableData: [
        {
          no: 1,
          rule: '年度-分类号-案卷号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        },
        {
          no: 2,
          rule: '年度-分类号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        },
        {
          no: 3,
          rule: '年度-案卷号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        },
        {
          no: 4,
          rule: '分类号-案卷号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        },
        {
          no: 5,
          rule: '年度-件号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        },
        {
          no: 6,
          rule: '年度-分类号-案卷号-序号',
          createTime: '2018-3-9 10:00',
          createBy: '管理员'
        }
      ],
      linkCode: [
        {
          key: 1,
          value: '*',
          label: '*'
        },
        {
          key: 2,
          value: '+',
          label: '+'
        },
        {
          key: 3,
          value: '-',
          label: '-'
        },
        {
          key: 4,
          value: '/',
          label: '/'
        }
      ],
      filterText: '',
      numText: '',
      catalogList: [
        {
          value: 1,
          label: '七星关档案局',
          children: [
            {
              value: 12,
              label: '文书档案',
              children: [
                {
                  value: 121,
                  label: '文书档案（新）'
                },
                {
                  value: 122,
                  label: '文书档案（旧）'
                }
              ]
            },
            {
              value: 13,
              label: '特殊档案',
              children: [
                {
                  value: 131,
                  label: '婚姻档案'
                },
                {
                  value: 132,
                  label: '独生子女档案'
                }
              ]
            }
          ]
        }
      ],
      ruleList: [
        {
          value: 1,
          label: '档号规则',
          children: [
            {
              value: 11,
              label: '年度-件号-序号'
            },
            {
              value: 12,
              label: '年度-分类号-案卷号-序号'
            },
            {
              value: 13,
              label: '年度-分类号-序号'
            }
          ]
        }
      ]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
    numText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    addRule() {
      this.dialogFormVisible = true
    },
    handleEdit(index, row) {
      this.dialogFormVisible2 = true
      this.ruleData = row
    },
    handleDelete(index, row) {}
  }
}
</script>

<style scoped>
.ruletabel {
  border: 1px solid #eaeefb;
  padding: 10px 20px 10px 10px;
  margin-top: 20px;
  font-size: 25px;
}
.inputtitle {
  margin-top: 20px;
  font-size: 30px;
}
.catalogtree {
  border: 1px solid #eaeefb;
  padding: 5px 5px 5px 5px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.filterTree {
  border: 1px solid #eaeefb;
  padding: 10px 20px 10px 10px;
  width: 200px;
  /* float: left; */
}
.diaFormData {
  width: 300px;
}
.div {
  /* display: inline-block; */
  float: left;
}
</style>