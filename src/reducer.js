import initStore from './initStore';

export default (state = initStore, action) => {
  switch (action.type) {
    /* views.dialog */
    case 'views.dialog.reset':
      return {
        ...state,
        views: {
          ...state.views,
          dialog: {
            ...state.views.dialog,
            show: ''
          }
        }
      };
    /* views.drawer */
    case 'views.drawer.toggleDialog':
      return {
        ...state,
        views: {
          ...state.views,
          dialog: {
            ...state.views.dialog,
            show: action.name
          },
          drawer: {
            ...state.views.drawer,
            open: false
          }
        }
      };
    case 'views.drawer.toggleDrawer':
      return {
        ...state,
        views: {
          ...state.views,
          drawer: {
            ...state.views.drawer,
            open: !state.views.drawer.open
          }
        }
      };
    /* views.theme */
    case 'views.theme.color.changePrimary':
      return {
        ...state,
        views: {
          ...state.views,
          theme: {
            ...state.views.theme,
            color: {
              ...state.views.theme.color,
              primary: action.color
            }
          }
        }
      }
    case 'views.theme.color.changeSecondary':
      return {
        ...state,
        views: {
          ...state.views,
          theme: {
            ...state.views.theme,
            color: {
              ...state.views.theme.color,
              secondary: action.color
            }
          }
        }
      }
    case 'views.theme.toggleNative':
      return {
        ...state,
        views: {
          ...state.views,
          theme: {
            ...state.views.theme,
            native: !state.views.theme.native
          }
        }
      }
    /* pages.main */
    case 'pages.main.changeValue':
      let list = action.value.split('\n');
      let translated = [];
      for (let line of list) {
        for (let word of state.pages.main.words) {
          let points = [];
          for(let p = line.indexOf(word); p != -1; points.push(p), p = line.indexOf(word, p + 1));
        }
      }
      return {
        ...state,
        pages: {
          ...state.pages,
          main: {
            ...state.pages.main,
            value: action.value,
            valueTranslated: translated
          }
        }
      };
    default:
      return state;
  }
};