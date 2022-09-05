<template>
  <div style="">
    <div class="row row-equal">
      <div class="flex xl6 xs12">
        <div class="column">
          <div v-for="(info, idx) in infoTiles" :key="idx" class="flex xs12 sm4">
            <va-card class="mb-4" :color="info.color">
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
    VaImage,
  } from 'vuestic-ui'

  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()

  const infoTiles = ref([
    {
      color: 'success',
      value: '803',
      text: 'commits',
      icon: '',
    },
    {
      color: 'danger',
      value: '57',
      text: 'components',
      icon: '',
    },
    {
      color: 'info',
      value: '5',
      text: 'teamMembers',
      icon: '',
    },
  ])

  const modal = ref(false)
  const currentImageIndex = ref(0)
  const images = ref([
    'https://i.imgur.com/qSykGko.jpg',
    'https://i.imgur.com/jYwT08D.png',
    'https://i.imgur.com/9930myH.jpg',
    'https://i.imgur.com/2JxhWD6.jpg',
    'https://i.imgur.com/MpiOWbM.jpg',
  ])

  const theme = computed(() => getGlobalConfig().colors)

  function showModal() {
    modal.value = true
  }
</script>

<style lang="scss" scoped>
  .display-2 {
    margin: 0;
    line-height: 1;
  }
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
