<template>
  <div>
    <div v-show="isSelected"><slot></slot></div>
  </div>
</template>


<script>

export default {
  name: 'tab',
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    },
    icon: {
      default: ''
    },
    size: {
      default: 'small'
    }
  },
  data () {
    return {
      isSelected: this.selected,
      iconClass: 'fa-' + this.icon,
      iconSize: 'is-' + this.size
    }
  }

}

</script>


<style scoped>
div {
    text-align: left;
}
</style>
