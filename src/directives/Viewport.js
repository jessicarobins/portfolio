import Vue from 'vue'
import scrollMonitor from 'scrollmonitor'

export default {
  bind: function (el, binding) {
    const elementWatcher = scrollMonitor.create(el, {top: 5});
    elementWatcher.enterViewport(function() {
      if(binding.value.onEnter) {
        binding.value.onEnter()
      }
    });
    elementWatcher.exitViewport(function() {
      if (binding.value.onExit) {
        binding.value.onExit()
      }
    });
  }
}