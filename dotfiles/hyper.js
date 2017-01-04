module.exports = {
  config: {
    fontSize: 13,
    fontFamily: 'Hasklig, Menlo, monospace',
    cursorColor: '#F81CE5',
    foregroundColor: '#fff',
    backgroundColor: '#222',
    borderColor: '#333',
    padding: '12px 14px',
    css: '',
    termCSS: `
        x-screen x-row {
            font-variant-ligatures: initial;
        }
    `,

    colors: [
      '#000000',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#d0d0d0',
      '#808080',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#ffffff'
    ]
  },

  plugins: [
    "hypercwd",
    "hyperlinks",
    "hyperterm-paste",
    "hyperterm-alternatescroll",
    "hyperterm-tabs",
    "hyper-statusline"
  ],

  localPlugins: []
};
