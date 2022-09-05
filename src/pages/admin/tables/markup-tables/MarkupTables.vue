//刷新后再填一项新闻表示新的汇总刷新
<template>
  <div class="markup-tables flex">
    <va-card class="flex mb-4">
      <va-card-title>{{ t('tables.basic') }}</va-card-title>
      <va-card-content>
        <div class="table-wrapper">
          <table class="va-table va-table--striped va-table--hoverable">
            <thead>
              <tr>
                <th>{{ t('tables.headings.name') }}</th>
                <th>{{ t('tables.headings.title') }}</th>
                <th>{{ t('tables.headings.time') }}</th>
                <th>{{ t('tables.headings.status') }}</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.title }}</td>
                <td>{{ user.time }}</td>
                <td>
                  <va-badge :text="user.status" :color="getStatusColor(user.status)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </va-card-content>
    </va-card>

  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import data from '../../../../data/tables/markup-table/data.json'

  const { t } = useI18n()

  const users = ref(data.slice(0,30))

  function getStatusColor(status: string) {
    if (status === 'pass') {
      return 'success'
    }

    if (status === 'processing') {
      return 'info'
    }

    return 'danger'
  }
</script>

<style lang="scss">
  .markup-tables {
    .table-wrapper {
      overflow: auto;
    }

    .va-table {
      width: 100%;
    }
  }
</style>
