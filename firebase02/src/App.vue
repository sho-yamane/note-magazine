<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*! Shitaji.CSS v4.5.0 CC0 by Qrac */*,::after,::before{margin:0;box-sizing:inherit;background-repeat:no-repeat;font-size:1em;font-family:inherit;font-weight:inherit}::after,::before{vertical-align:inherit;text-decoration:inherit}html{box-sizing:border-box;font-family:sans-serif;overflow-y:scroll;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}a{background-color:transparent;color:inherit;text-decoration:none;-webkit-text-decoration-skip:objects}b,strong{font-weight:bolder}small{font-size:80%}ol,ul{padding:0;list-style:none}dfn{font-style:italic}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}mark{background-color:#ff0;color:#000}sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}audio,canvas,video{display:inline-block}audio,canvas,iframe,img,svg,video{vertical-align:middle}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}audio:not([controls]){display:none;height:0}input{border-radius:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}address{font-style:normal}textarea{overflow:auto;resize:vertical}legend{display:table;max-width:100%;padding:0;box-sizing:border-box;color:inherit;white-space:normal}progress{display:inline-block;vertical-align:baseline}summary{display:list-item}table{border-collapse:collapse}hr{height:0;box-sizing:content-box;overflow:visible}template{display:none}[tabindex],a,area,button,input,label,select,textarea{-ms-touch-action:manipulation;touch-action:manipulation}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}[hidden][aria-hidden=false]{clip:rect(0,0,0,0);display:inherit;position:absolute}[hidden][aria-hidden=false]:focus{clip:auto}

#app {
  font-family: -apple-system, 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'メイリオ', Sans-Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

html {
  background-image: url(./assets/background.jpg);
  background-repeat: repeat;
}

body {
  max-width: 414px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-left: 6px solid #1a1a1a;
  border-right: 6px solid #1a1a1a;
  box-shadow: 0 10px 20px rgba(123,138,147,.25);
  background: #fff;
}

img {
  max-width: 100%;
  height: auto;
}

</style>
