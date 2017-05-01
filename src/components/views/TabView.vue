<template>
<div class="container">
    <a href="/components/" class="button is-primary">Back to component list</a>
    <h2 class="title level-left">Alignment</h2>
    <div class="columns">
        <div class="column">
            <tabs>
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <tabs alignment="center">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <tabs alignment="right">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <hr>
    <h2 class="title level-left">Icons</h2>
    <div class="columns">
        <div class="column">
            <tabs>
                <tab name="Picture" selected="true" icon="image">Picture Content</tab>
                <tab name="Music" icon="music">Music Content</tab>
                <tab name="Video" icon="film">Video Content</tab>
                <tab name="Document" icon="file-text-o">Document Content</tab>
            </tabs>
        </div>
    </div>
    <hr>
    <h2 class="title level-left">Size</h2>
    <div class="columns">
        <div class="column">
            <tabs>
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <tabs size="medium">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <tabs size="large">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <hr>
    <h2 class="title level-left">Style</h2>
    <div class="columns">
        <div class="column">
            <tabs type="border">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <tabs type="button">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>
    <hr>
    <h2 class="title level-left">Full Width</h2>
    <div class="columns">
        <div class="column">
            <tabs full-width="true">
                <tab name="Picture" selected="true">Picture Content</tab>
                <tab name="Music">Music Content</tab>
                <tab name="Video">Video Content</tab>
                <tab name="Document">Document Content</tab>
            </tabs>
        </div>
    </div>

</div>
</template>


<script>

import Tabs from '@/components/tab/Tabs'
import Tab from '@/components/tab/Tab'

export default {
  name: 'tab-view',
  data () {
    return {
      title: 'Tab'
    }
  },
  components: {
    tabs: Tabs,
    tab: Tab
  }
}

</script>


<style scoped>


</style>
