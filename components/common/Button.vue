<style lang="postcss" module>
  .comp {
    list-style: none;
    padding: 0 15px
  }
  .button {
    font-family: "bmwTypeWebBoldAll","Arial","Helvetica",sans-serif;
    font-weight: normal;
    max-width: 285px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    display: table;
    padding: 0;
    min-width: 180px;
    height: 40px;
    letter-spacing: 0;
    margin-bottom: 10px;
    transition: background-color .25s ease;

    margin: 0 0 .625rem;
    position: relative;
    text-decoration: none;
    text-align: center;
    -webkit-appearance: none;
    -webkit-border-radius: 0;

    background-color: #1c69d4;
    border-color: #0653b6;
    color: #fff;

    &:hover,&:focus {
      padding-right: 0;
      padding-left: 0;
      width: 100%;
      background-color: #0653b6;
      cursor: pointer;
      outline: 0;
    }
  }
  .secondary {
    background-color: #4d4d4d;
    border-color: #262626;
    color: #fff;

    &:hover,&:focus {
      background-color: #262626;
    }
  }
  .text {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0 1rem;
    height: 50px;
    font-size: 1em;
    color: #fff;
  }
</style>
<template>
  <li :class="$style.comp">
    <a :class="[$style.button, {[$style.secondary]: secondary}]" href="">
      <span :class="$style.text">
        <slot />
      </span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
