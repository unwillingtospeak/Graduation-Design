<template>
  <div class="dashboard">
    <dashboard-charts />
    <div style="margin-left: 85%;margin-top: -23%;">
      <div class="row row-equal">

          <div class="column">
            <div v-for="(info, idx) in infoTiles" :key="idx" class="flex xs12 sm12">
              <va-card class="mb-12" :color="info.color">
                <va-card-content>
                  <p class="display-2" style="color: white">{{ info.value }}</p>
                  <p style="color: white">{{ t('dashboard.info.' + info.text) }}</p>
                </va-card-content>
              </va-card>
            </div>
          </div>

      </div>
    </div>


  </div>
</template>

<script setup lang="ts">


  import DashboardCharts from './DashboardCharts.vue'
  import DashboardInfoBlock from './DashboardInfoBlock.vue'
  import DashboardTabs from './DashboardTabs.vue'

  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import {
    useGlobalConfig,
    VaCarousel,
    VaModal,
    VaCard,
    VaCardContent,
    VaCardTitle,
    VaButton,
  } from 'vuestic-ui'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()

  const infoTiles = ref([
    {
      color: 'info',
      value: '19,488',
      text: 'commits',
      icon: '',
    },
    {
      color: 'success',
      value: '10,002',
      text: 'pass',
      icon: '',
    },
    {
      color: 'danger',
      value: '9,487',
      text: 'reject',
      icon: '',
    },
  ])



</script>

<style lang="scss">
</style>
