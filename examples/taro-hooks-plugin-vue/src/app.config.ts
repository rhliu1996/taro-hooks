export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/useState/index',
    'pages/useEffect/index',
    'pages/useRef/index',
    'pages/useReducer/index',
    'pages/useContext/index',
    'pages/useRequest/index',
    'pages/useRequest/basic/index',
    'pages/useRequest/basic/manualRun',
    'pages/useRequest/basic/manualRunAsync',
    'pages/useRequest/basic/lifeCycle',
    'pages/useRequest/basic/refresh',
    'pages/useRequest/basic/mutate',
    'pages/useRequest/basic/params',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});