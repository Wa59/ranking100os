var JSLink = "//bao.omnize.com.br/main.js",
  JSElement = document.createElement("script");
JSElement.async = !0;
JSElement.charset = "UTF-8";
JSElement.src = JSLink;
JSElement.onload = OnceLoaded;
document.getElementsByTagName("body")[0].appendChild(JSElement);
function OnceLoaded() {
  if (typeof omzBao !== "undefined") {
    omzBao.init({ id: 14290 });
  }
}
