
<style lang="postcss" module>

.container {
  max-width: 1680px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background-color: gray;
  padding-left: 20px;
  padding-right: 20px;
}


@media (min-width: 521px) {
  .container {
    padding-left: 45px;
    padding-right: 45px;
  }
}


</style>


<template>
  <div :class="$style.container">
    <StageTeaserSwiper />
  </div>
</template>

<script>
import StageTeaserSwiper from '@/components/Teaser/StageTeaser/StageTeaserSwiper';

export default {
  components:{
    StageTeaserSwiper
  }
}
</script>
