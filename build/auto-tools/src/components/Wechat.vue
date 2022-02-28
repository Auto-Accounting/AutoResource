<template>
  <div  style="padding: 20px;max-width: 700px;margin: 0 auto;">
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="微信数据" prop="data">
        <el-input v-model="formData.data" type="textarea" placeholder="请输入微信数据"
                  :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="微信版本" prop="version">
        <el-input v-model="formData.version" placeholder="请输入微信版本" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="领取金额" prop="money">
        <el-input v-model="formData.money" placeholder="请输入领取金额" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="总金额" prop="total">
        <el-input v-model="formData.total" placeholder="请输入总金额" clearable :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="红包数量" prop="group">
        <el-input v-model="formData.group" placeholder="请输入红包数量" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="备注信息" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入备注信息" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="发红包的人" prop="shop">
        <el-input v-model="formData.shop" placeholder="请输入发红包的人" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        data: undefined,
        version: undefined,
        money: undefined,
        total: undefined,
        group: undefined,
        remark: undefined,
        shop: undefined,
      },
      rules: {
        data: [{
          required: true,
          message: '请输入微信数据',
          trigger: 'blur'
        }],
        version: [{
          required: true,
          message: '请输入微信版本',
          trigger: 'blur'
        }],
        money: [{
          required: true,
          message: '请输入领取金额',
          trigger: 'blur'
        }],
        total: [{
          required: true,
          message: '请输入总金额',
          trigger: 'blur'
        }],
        group: [{
          required: true,
          message: '请输入红包数量',
          trigger: 'blur'
        }],
        remark: [{
          required: true,
          message: '请输入备注信息',
          trigger: 'blur'
        }],
        shop: [{
          required: true,
          message: '请输入发红包的人',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        console.log(valid);

      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
