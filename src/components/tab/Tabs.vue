<template>
  <div>
    <div class="tabs" :class="[tabAlignment, tabSize, tabType, tabWidth]" >
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isSelected }" @click="selectTab(tab)" >
          <a>
            <span class="icon" :class="[tab.iconSize]" v-show="tab.icon"><i class="fa" :class="[tab.iconClass]" ></i></span>
            <span>{{ tab.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>


<script>

export default {
  name: 'tabs',
  props: {
    alignment: { default: 'left' },
    size: { default: '' },
    type: { default: '' },
    fullWidth: { default: false }
  },
  created () {
    this.tabs = this.$children
  },
  data () {
    return {
      tabs: []
    }
  },
  computed: {
    tabAlignment () {
      var types = {'center': 'is-centered', 'right': 'is-right'}
      return this.alignment in types ? types[this.alignment] : ''
    },
    tabSize () {
      var sizes = {'small': 'is-small', 'medium': 'is-medium', 'large': 'is-large'}
      return this.size in sizes ? sizes[this.size] : ''
    },
    tabType () {
      var types = {'border': 'is-boxed', 'button': 'is-toggle'}
      return this.type in types ? types[this.type] : ''
    },
    tabWidth () {
      return this.fullWidth ? 'is-fullwidth' : ''
    }
  },
  methods: {
    selectTab: function (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isSelected = tab.name === selectedTab.name
      })
    }
  }

}

</script>


<style scoped>

</style>
