<template>
  <div class="g-rotate-bar">
    <a href="javascript:;" @click="rotateLeft">
      <svg class="svg-icon" viewBox="0 0 481.95 481.95">
        <path d="M281.7,243.8V138.2c75.9,13.5,135.4,78.6,135.4,159.8s-59.6,146.3-135.4,159.8V512
          c105.7-13.5,189.6-102.9,189.6-214s-84-200.5-189.6-214V0L159.8,121.9L281.7,243.8z M94.8,270.9c2.7-24.4,13.5-46.1,27.1-67.7
          L84,165.2C59.6,197.8,46.1,233,40.6,270.9H94.8z M159.8,430.7l-37.9,37.9c32.5,24.4,67.7,37.9,105.7,43.3v-54.2
          C203.2,455.1,181.5,444.3,159.8,430.7z M94.8,325.1H40.6c2.7,37.9,19,73.1,43.3,105.7l37.9-37.9
          C108.4,371.1,97.5,349.5,94.8,325.1z" fill="#27ae60" />
      </svg>
    </a>
    <a href="javascript:;" @click="rotateRight">
      <svg class="svg-icon" viewBox="0 0 481.95 481.95">
      		<path d="M331.5,114.75L216.75,0v79.05C117.3,91.8,38.25,175.95,38.25,280.5s79.05,188.7,178.5,201.45v-51    C145.35,418.2,89.25,357,89.25,280.5s56.1-137.7,127.5-150.45v99.45L331.5,114.75z M443.7,255    c-5.101-35.7-17.851-68.85-40.8-99.45l-35.7,35.7c12.75,20.4,22.95,40.8,25.5,63.75H443.7z M267.75,430.95v51    c35.7-5.101,68.85-17.851,99.45-40.8l-35.7-35.7C311.1,418.2,290.7,428.4,267.75,430.95z M367.2,369.75l35.7,35.7    c22.949-30.601,38.25-63.75,40.8-99.45h-51C390.15,328.95,379.95,349.35,367.2,369.75z" fill="#27ae60"/>
      </svg>
    </a>
  </div>
</template>

<style>
.g-rotate-bar{
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    text-align: center;
}
.g-rotate-bar .svg-icon{
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin: 0 2em;
}
</style>

<script>
module.exports = {
  data() {
      return {
        rotateDegree: 0,
      }
  },

  methods: {
    rotateRight() {
      this.rotateDegree += 90;
      this.$emit('rotate', this.rotateDegree);
    },

    rotateLeft() {
      this.rotateDegree -= 90;
      this.$emit('rotate', this.rotateDegree);
    },
  }
};

</script>
