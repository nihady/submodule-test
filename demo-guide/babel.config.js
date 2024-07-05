module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@shared': '../shared/src/components'
          }
        }
      ]
    ]
  };
  