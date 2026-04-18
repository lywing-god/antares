<template>
   <div class="column col-12 empty">
      <div class="empty-icon">
         <img :src="logos[currentApplicationTheme]" width="200">
      </div>
      <p class="h6 empty-subtitle">
         {{ t('application.noOpenTabs') }}
      </p>
      <div class="empty-action">
         <button class="btn btn-primary d-flex" @click="emit('new-tab')">
            <BaseIcon
               icon-name="mdiTabPlus"
               :size="24"
               class="mr-2"
            />
            {{ t('application.openNewTab') }}
         </button>
      </div>
   </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import BaseIcon from '@/components/BaseIcon.vue';
import { useSettingsStore } from '@/stores/settings';
import { useWorkspacesStore } from '@/stores/workspaces';

const { t } = useI18n();

const emit = defineEmits(['new-tab']);

const logos: Record<'light' | 'dark', string> = {
   light: require('../images/logo-light.svg') as string,
   dark: require('../images/logo-dark.svg') as string
};

const settingsStore = useSettingsStore();
const workspacesStore = useWorkspacesStore();
const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const isSystemDark = ref(systemThemeMedia.matches);

const { applicationTheme } = storeToRefs(settingsStore);
const { getSelected: selectedWorkspace } = storeToRefs(workspacesStore);

const { getWorkspace, changeBreadcrumbs } = workspacesStore;
const currentApplicationTheme = computed<'light' | 'dark'>(() => {
   if (applicationTheme.value === 'system')
      return isSystemDark.value ? 'dark' : 'light';

   return applicationTheme.value;
});
const onSystemThemeChange = (event: MediaQueryListEvent) => {
   isSystemDark.value = event.matches;
};

const workspace = computed(() => {
   return getWorkspace(selectedWorkspace.value);
});

changeBreadcrumbs({ schema: workspace.value.breadcrumbs.schema });

onMounted(() => {
   systemThemeMedia.addEventListener('change', onSystemThemeChange);
});

onUnmounted(() => {
   systemThemeMedia.removeEventListener('change', onSystemThemeChange);
});
</script>

<style lang="scss" scoped>
  .empty {
    height: 100%;
    border-radius: 0;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
