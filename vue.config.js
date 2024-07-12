module.exports = {
  pwa: {
    name: 'My PWA App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000, // Puedes cambiar el puerto si lo deseas
    disableHostCheck: true, // Esto deshabilita la verificación del host, útil para redes locales
  }
}
