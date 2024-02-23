<template>
  <a-config-provider :theme="{
    components: {
      Tag: {
        borderRadiusSM: 10
      },
      PageHeader: {
        borderRadiusSM: 6,
        borderRadius: 6
      }
    }
  }" component-size="middle" direction="ltr">
    <a-layout>
      <TheLayoutHeader />
      <a-layout>
        <TheLayoutSider />
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">

</script>
