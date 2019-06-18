<style lang="postcss" module>
  .comp {
    width: 100%;
  }
  .image {
    width: 100%;
    position: relative;
  }

  .content {

  }

  @media (min-width: 981px) {
    .content {
      position: absolute;
      width: 95%;
      left: 5%;
      top: 25%;
      text-align: left;
    }
  }

</style>
<template>
  <div :class="$style.comp">
    <div :class="$style.image">
      <Picture></Picture>
    </div>
    <div :class="$style.content">
      <h2 class="ds2-font-xxl">THE 3</h2>
      <h3 class="ds2-font-l">Nouvelle BMW Série 3 Touring</h3>
      <ul>
        <Button>Button Text</Button>
        <Button secondary>Button Text</Button>
      </ul>

    </div>

  </div>
</template>
