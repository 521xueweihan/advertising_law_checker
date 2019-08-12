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
      console.log('List:', list);
      // 遍历各行
      for (let line of list) {
        // 节点储存变量
        let nodes = [];
        // 对每个关键词进行枚举遍历
        for(let word of state.pages.main.words) {
          // 开火车，对每一个与当前关键字同长度的子字符串进行比较
          for(let i = 0, j = word.length; j <= line.length; ++i, ++j) {
            let splited = line.substr(i, j);
            if(splited == word) {
              // 匹配成功，检查占位冲突
              let success = true;
              for(let node of nodes) {
                if(node.form <= i && i < node.to || node.form <= j && j < node.to) {
                  success = false;
                  break;
                }
              }
              if(success) {
                // 占位检测通过，将自己的占位信息写入 nodes
                nodes.push({
                  from: i,
                  to: j,
                  word
                })
              }
            }
          }
        }

        // 整理节点列表，进行排序
        nodes.sort((l, r) => {
          if(l.from < r.from) return -1;
          if(l.from > r.from) return 1;

          // 理论上，下头这些都不应当执行得到
          console.warn("执行到了不该执行到的地方！QAQ");
          if(l.to < r.to) return -1;
          if(l.to > r.to) return 1;
          throw new Error("不允许存在相等的填充坐标！");
        });
        console.log('Nodes:', nodes);

        // 填充节点并加进返回值中
        if(nodes[0] && nodes[0].from != 0) nodes.unshift({ from: 0, to: nodes[0].to - 1 });
        translated.push(nodes.reduce((prev, next) => {
          // 空数组检查
          if(prev.length < 1) return [next];

          // 空隙检查
          if(prev[prev.length - 1].to + 1 < next.from) prev.push({
            from: prev[prev.length - 1].to + 1,
            to: next.from - 1,
            text: line.substr(prev[prev.length - 1].to + 1, next.from - 1)
          }), console.log('!', prev[prev.length - 1]);

          prev.push(next);
          return prev;
        }, []));
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