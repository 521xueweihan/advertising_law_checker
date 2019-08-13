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
      // 返回结果，这是一个二维数组，第一维为行，第二维为节点对象列表
      let translated = [];
      // 拆分各行
      let list = action.value.split('\n');
      // 遍历各行
      for (let line of list) {
        // 节点储存变量
        let nodes = [];
        // 对每个关键词进行枚举遍历
        for (let word of state.pages.main.words) {
          // 扫描生成一份坐标列表
          let points = [];
          for (let p = line.indexOf(word); p != -1; points.push(p), p = line.indexOf(word, p + 1));
          // 转换坐标表为完整的坐标
          points = points.map(p => ({ from: p, to: p + word.length, word }));
          // 进行冲突检查
          points = points.filter(p => {
            let success = true;
            for (let node of nodes) {
              if (node.form <= p.from && p.from < node.to || node.form <= p.to && p.to < node.to) {
                success = false;
                break;
              }
            }
            return success;
          });
          // 合并入节点列表
          nodes = nodes.concat(points);
        }

        // 整理节点列表，进行排序
        nodes.sort((l, r) => {
          if (l.from < r.from) return -1;
          if (l.from > r.from) return 1;

          // 理论上，下头这些都不应当执行得到
          console.warn("执行到了不该执行到的地方！QAQ");
          if (l.to < r.to) return -1;
          if (l.to > r.to) return 1;
          throw new Error("不允许存在相等的填充坐标！");
        });

        // 填充节点，将非关键词部分也作为节点填充进节点列表
        // 待完成
        
        translated.push(nodes);
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