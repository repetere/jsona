export const settings = {
  application: {
    state: {
      useWindowState: true,
      useWindowDebugging: true,
      useWindowSettings: true,
    },
    props: {
      useWindowDynamicData:true,
    },
    history: {
      reactRouter: 'browserHistory', //browserHistory|hashHistory|createMemoryHistory",
    }
  },
};