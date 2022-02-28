<template>
  <iframe
      id="iframeId" name="iframeId" :src="url" frameborder="0" class="pc iframe" scrolling="auto"
      @load='loadfrom' ref="iframe">
    您的浏览器不支持iframe!
  </iframe>

</template>

<script>

export default {
  name: "Iframe",
  props: [
    'url', '_data',"type"
  ],
  methods: {
    loadfrom() {
      this.iframeWin = this.$refs.iframe.contentWindow;
//向iframe发送信息,大括号内是发送的内容;
      this.iframeWin.postMessage(
          {
            "data": this.$props._data,
            "url": this.$props.url,
            "type": this.$props.type
          }
      );



      function iframeAutoFit(iframeObj) {
        iframeObj.height = window.screen.height-360;
/*        setInterval(function () {
          if (!iframeObj) return;
          if (iframeObj.Document){
            iframeObj.height =iframeObj.Document.body.scrollHeight;
          }else if(iframeObj.contentDocument){

            iframeObj.height =iframeObj.contentDocument.body.offsetHeight;
          }

        }, 200)*/

      }
      iframeAutoFit(this.$refs.iframe)
    }
  }

}
</script>

<style lang='css'>
.iframe {
  width: 100%;
  background: #fff;
  overflow: hidden;
}
</style>