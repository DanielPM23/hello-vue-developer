<script setup lang="js">
import{toRefs} from 'vue';


const props=defineProps({developerCount:{type:Number,required:true}});
const {developerCount}=toRefs(props);
</script>

<template>
<div>
  <p>
    developer registered: {{developerCount}}
  </p>

  <p>
    <b>Note:</b> Unknown developers are not counted.
  </p>
</div>
</template>

<style scoped>

</style>