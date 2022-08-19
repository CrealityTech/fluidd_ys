<template>
  <app-btn-collapse-group>
    <div>
      <app-btn
        v-if="printerPrinting || printerPaused"
        :loading="hasWait([$waits.onPrintCancel, currentCancelMacroWait])"
        :disabled="hasWait([$waits.onPrintCancel, $waits.onPrintResume, $waits.onPrintPause, currentCancelMacroWait])"
        small
        class="ma-1"
        @click="cancelPrint()"
      >
        <v-icon
          small
          left
        >
          $cancelled
        </v-icon>
        <span>{{ $t('app.general.btn.cancel') }}</span>
      </app-btn>

      <app-btn
        v-if="printerPrinting && !printerPaused"
        :loading="hasWait($waits.onPrintPause)"
        :disabled="printerPaused || hasWait([$waits.onPrintCancel, $waits.onPrintResume, $waits.onPrintPause, currentCancelMacroWait])"
        small
        class="ma-1"
        @click="pausePrint()"
      >
        <v-icon
          small
          left
        >
          $pause
        </v-icon>
        <span>{{ $t('app.general.btn.pause') }}</span>
      </app-btn>

      <app-btn
        v-if="printerPaused"
        :loading="hasWait($waits.onPrintResume)"
        :disabled="printerPrinting || hasWait([$waits.onPrintCancel, $waits.onPrintResume, $waits.onPrintPause, currentCancelMacroWait])"
        small
        class="ma-1"
        @click="resumePrint()"
      >
        <v-icon
          small
          left
        >
          $resume
        </v-icon>
        <span>{{ $t('app.general.btn.resume') }}</span>
      </app-btn>

      <app-btn
        v-if="!printerPrinting && !printerPaused && filename"
        small
        class="ma-1"
        @click="resetFile()"
      >
        <v-icon
          small
          left
        >
          $refresh
        </v-icon>
        <span>{{ $t('app.general.btn.reset_file') }}</span>
      </app-btn>

      <app-btn
        v-if="!supportsHistoryComponent && !printerPrinting && !printerPaused && filename"
        small
        class="ma-1"
        @click="$emit('print', filename)"
      >
        <v-icon
          small
          left
        >
          $reprint
        </v-icon>
        <span>{{ $t('app.general.btn.reprint') }}</span>
      </app-btn>
    </div>
  </app-btn-collapse-group>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import StateMixin from '@/mixins/state'
import { SocketActions } from '@/api/socketActions'
import JobHistoryItemStatus from '@/components/widgets/history/JobHistoryItemStatus.vue'
import { Macro } from '@/store/macros/types'

@Component({
  components: {
    JobHistoryItemStatus
  }
})
export default class StatusControls extends Mixins(StateMixin) {
  get filename () {
    return this.$store.state.printer.printer.print_stats.filename
  }

  get supportsHistoryComponent () {
    return this.$store.getters['server/componentSupport']('history')
  }
  
  get macros () {
    const categoryList:any[] = []
    const macros:any[] = this.$store.getters['macros/getVisibleMacros']
    macros.forEach(element => {
      if (element.category) {
        element.category.forEach((item:any) => {
          categoryList.push(item)
        })
      }
    })
    return categoryList
  }

  get uncategorizedMacros () {
    const macros = this.$store.getters['macros/getMacrosByCategory']()
    return macros.filter((macro: Macro) => macro.visible)
  }

  get macrosList () {
    if (this.uncategorizedMacros && this.uncategorizedMacros.length > 0) {
      return this.macros.concat(this.uncategorizedMacros)
    } else {
      return this.macros
    }
  }

  // 当前取消宏指令
  get currentCancelPrint () {
    return this.macrosList.filter((item) => {
      return item.name.toLowerCase() === 'cancel_print'
    })
  } 

  // 当前取消宏的wait
  get currentCancelMacroWait () {
    if (this.currentCancelPrint.length) {
      const macro = this.currentCancelPrint[0]
      return `${this.waits.onMacro}${macro.name}`
    } else {
      return ''
    }
  }

  cancelPrint () {
    this.$tc('app.general.simple_form.msg.confirm')
    this.$confirm(
      this.currentCancelPrint.length ? this.$tc('app.general.simple_form.msg.confirm') : this.$tc('app.customize_string.cancel_print_tip'),
      { 
        title: this.$tc('app.general.label.confirm'), 
        color: 'card-heading', 
        icon: '$error',
        buttonTrueText: this.$tc('app.customize_string.confirm_text'),
        buttonTrueColor: 'primary',
        buttonFalseText: this.$tc('app.general.btn.cancel') }
      )
      .then(res => {
        if (res) {
          if (this.currentCancelPrint.length) { // 通过宏取消
            const macro = this.currentCancelPrint[0]
            this.sendGcode(macro.name, `${this.waits.onMacro}${macro.name}`)
          } else {
            SocketActions.printerPrintCancel()
            this.addConsoleEntry('CANCEL_PRINT')
          }
        }
      })
  }

  pausePrint () {
    SocketActions.printerPrintPause()
    this.addConsoleEntry('PAUSE')
  }

  resumePrint () {
    SocketActions.printerPrintResume()
    this.addConsoleEntry('RESUME')
  }

  resetFile () {
    this.sendGcode('SDCARD_RESET_FILE')
  }
}
</script>
