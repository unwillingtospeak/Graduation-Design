<template>
  <va-card>
    <va-card-content>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="编辑方式" name="first">
          <va-card-content class="d-flex flex-center">
            <va-medium-editor @initialized="handleEditorInitialization">
            <h1 style="padding: 32px;  color: #6b778c;  font-size: 32px;  font-weight: 600;">Write Your News Here.</h1>

                  <!-- <p>
                    You enter into your favorite local bar looking
                    <span class="default-selection"><b>good</b></span> as hell, but you know the only heads you want to
                    turn—spicy & stylish alpha bitches — are heavily fixated on the D. The hot girl talks to you, but she
                    only wants to be your best friend. Her nonthreatening and attentive best friend. Receiver of sexy
                    selfies, listener of stories. Meanwhile, you attract unwanted attention from straight men, pudgy and
                    greasy moths to your emotionally distant flame.
                  </p>

                  <p>
                    Read the full article on
                    <a href="https://medium.com/@dorn.anna/girl-no-you-dont-2e21e826c62c">Medium</a>
                  </p> -->
            </va-medium-editor>
          </va-card-content>
        </el-tab-pane>
        <el-tab-pane label="上传方式" name="second">
          <va-card-content>
            <va-file-upload v-model="advancedList" dropzone />
          </va-card-content>
        </el-tab-pane>
      </el-tabs>

      <div class="submit1">
        <el-button
            v-loading.fullscreen.lock="fullscreenLoading"
            type="primary"
            @click="openFullScreen1"
          >
            提交
          </el-button>
      </div>
    </va-card-content>
  </va-card>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import type { TabsPaneContext } from 'element-plus'
import type MediumEditor from 'medium-editor'
import VaMediumEditor from '../../../../components/va-medium-editor/VaMediumEditor.vue'
import { ElLoading } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
const { t } = useI18n()
const advancedList = ref([])
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {//方式导航栏
  console.log(tab, event)
}

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {//加载蒙版
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false

    ElMessageBox.alert('该新闻检测状态：不通过。原因： 迷信欺诈', '检测结果', {//不通过。原因： 迷信欺诈    “合格”，“涉政”，“色情”，“暴力”，“迷信欺诈”，“种族、性别歧视”
        confirmButtonText: '确认',
        draggable: true,
        callback: (action: Action) => {
          ElMessage({
            type: 'error',//error
            message: `action: ${action}`,
          })
          location.reload()//没通过的删除该函数
        },
      })
  }, 1000)

}
//编辑器脚本
function handleEditorInitialization(editor: typeof MediumEditor) {
    nextTick(() => highlightSampleText(editor))
  }
function highlightSampleText(editor: typeof MediumEditor) {
    const sampleText = document.getElementsByClassName('default-selection')[0] as HTMLElement
    editor.selectElement(sampleText)
}

</script>
<style>
.submit1{
  display: flex;
  justify-cont