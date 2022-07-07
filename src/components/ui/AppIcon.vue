<template>
  <div class="logo-wrapper">
    <inline-svg
      :src="theme.logo.src"
      @loaded="handleLogoLoad"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component({})
export default class AppIcon extends Vue {
  @Watch('theme')
  onTheme () {
    this.setData()
  }

  get theme () {
    return this.$store.getters['config/getTheme']
  }

  handleLogoLoad () {
    this.setData()
  }

  setData () {
    const supportedQueries = [
      { query: '.color-primary', color: this.theme.currentTheme.primary },
      { query: '.color-primary-offset', color: this.theme.currentTheme.primaryOffset },
      { query: '.our-company-logo', color: this.theme.currentTheme.primary },
    ]

    // If this logo should not change with theme, then set it based on
    // our base theme being dark or light.
    if (!this.theme.logo.dynamic) {
      supportedQueries.forEach((query) => {
        const dark = this.theme.logo.colorDark || '#000000'
        const light = this.theme.logo.colorLight || '#ffffff'
        query.color = (this.theme.isDark) ? light : dark
      })
    }

    supportedQueries.forEach((query) => {
      this.$el.querySelectorAll(query.query).forEach((e) => {
        if (
          (e.tagName === 'path' ||
          e.tagName === 'polygon' ||
          e.tagName === 'g') &&
          query.query !== '.our-company-logo'
        ) {
          const path = e as SVGPathElement
          path.style.fill = query.color
        }

        // 设置我们公司logo的黑白主题
        if (e.tagName === 'path' && query.query === '.our-company-logo') {
          const path = e as SVGPathElement
          path.style.fill = this.theme.isDark ? '#ffffff' : '#000000'
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .logo-wrapper {
    display: flex;
  }
</style>
