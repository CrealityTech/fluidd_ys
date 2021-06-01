<template>
  <v-navigation-drawer
    app
    :value="value"
    @input="emitChange"
    :color="theme.currentTheme.drawer"
    mini-variant
  >
    <div
      :style="`height: ${$globals.HEADER_HEIGHT}px;`"
      class="app-icon"
    >
      <router-link to="/">
        <app-icon></app-icon>
      </router-link>
    </div>

    <v-divider></v-divider>

    <div class="nav-items" v-show="authenticated">
      <app-nav-item
        icon="$dash"
        exact
        to="/">
        {{ $t('app.general.title.home') }}
      </app-nav-item>

      <app-nav-item
        icon="$files"
        to="/jobs">
        {{ $t('app.general.title.jobs') }}
      </app-nav-item>

      <app-nav-item
        v-if="supportsHistory"
        icon="$history"
        to="/history">
        {{ $t('app.general.title.history') }}
      </app-nav-item>

      <app-nav-item
        icon="$tune"
        to="/tune">
        {{ $t('app.general.title.tune') }}
      </app-nav-item>

      <app-nav-item
        icon="$cogs"
        to="/configure">
        {{ $t('app.general.title.configure') }}
      </app-nav-item>

      <app-nav-item
        icon="$cog"
        to="/settings">
        {{ $t('app.general.title.settings') }}
      </app-nav-item>
    </div>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'

import StateMixin from '@/mixins/state'

@Component({})
export default class AppNavDrawer extends Mixins(StateMixin) {
  @Prop({ type: Boolean, default: true })
  value!: boolean

  get theme () {
    return this.$store.getters['config/getTheme']
  }

  get supportsHistory () {
    return this.$store.getters['server/componentSupport']('history')
  }

  get supportsVersions () {
    return this.$store.getters['server/componentSupport']('update_manager')
  }

  emitChange (e: boolean) {
    this.$emit('input', e)
  }
}
</script>

<style lang="scss" scoped>
  .app-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ::v-deep .v-navigation-drawer.no-subnav > .v-navigation-drawer__border {
     display: none;
  }
</style>