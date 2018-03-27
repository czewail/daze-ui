export default {
  guides: {
    'quick-start': require('./quick-start').default,
    theme: require('./theme').default,
    'customize-theme': require('./customize-theme').default,
  },
  components: {
    basic: {
      container: require('./container').default,
      icon: require('./icon').default,
      button: require('./button').default,
      'white-space': require('./white-space').default,
      'side-space': require('./side-space').default,
    },
    layouts: {
      grid: require('./grid').default,
      flex: require('./flex').default,
    },
    forms: {
      switch: require('./switch').default,
      switchIOS: require('./switch-ios').default,
    },
  },
}
