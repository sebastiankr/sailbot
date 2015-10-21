var src = './src';
var dest = './build';

module.exports = {
  src: src,
  static_src: src + "/www/**",
  dest: dest,
  debug: true,
	applicationDir: __dirname + '/../src/app',
	stylesDir: '/www/styles',
  
  bundleConfigs: [{
      entries: './src/app/bootstrap.tsx',
      dest: dest,
      outputName: 'app.js'}],

  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest]
    },
    files: [dest + '/**']}
    
};
