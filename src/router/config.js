import React from 'react';
import Loadable from "react-loadable";

const Loading = () => <div className='loading'></div>;
const timeout = 1000;

//文件按需加载批处理
// 2019.9.19 - xx
const Home = Loadable({
	loader: () => import("CONTAINERS/home/index"),
	loading: Loading,
	timeout,
});

const Antv = Loadable({
    loader: () => import("CONTAINERS/Antv/G2/index"),
    loading: Loading,
    timeout,
})

const AntvBar = Loadable({
    loader: () => import("CONTAINERS/Antv/G2/stackedhistogram"),
    loading: Loading,
    timeout,
})


const Echarts = Loadable({
    loader: () => import("CONTAINERS/Echarts/index"),
    loading: Loading,
    timeout,
})

const LearnReact = Loadable({
    loader: () => import("CONTAINERS/learnreact/test"),
    loading: Loading,
    timeout,
})

const Promises = Loadable({
    loader: () => import("CONTAINERS/Promises/index"),
    loading: Loading,
    timeout,
})

const Pages = Loadable({
    loader: () => import("CONTAINERS/pages/index"),
    loading: Loading,
    timeout,
})

const Canvas = Loadable({
    loader: () => import("CONTAINERS/canvas/index"),
    loading: Loading,
    timeout,
})

const Sort = Loadable({
    loader: () => import("CONTAINERS/sort/index"),
    loading: Loading,
    timeout,
})

const Carousel = Loadable({
    loader: () => import("CONTAINERS/carousel/index"),
    loading: Loading,
    timeout,
})

const AboutThis = Loadable({
    loader: () => import("CONTAINERS/aboutThis/index"),
    loading: Loading,
    timeout,
})

const MockData = Loadable({
    loader: () => import("CONTAINERS/mock/index"),
    loading: Loading,
    timeout,
})

const F2chart = Loadable({
    loader: () => import("CONTAINERS/Antv/F2/index"),
    loading: Loading,
    timeout,
})

const Cinema = Loadable({
    loader: () => import("CONTAINERS/cinema/index"),
    loading: Loading,
    timeout,
})

const PPT = Loadable({
    loader: () => import("CONTAINERS/ppt/index"),
    loading: Loading,
    timeout,
})

const Video = Loadable({
    loader: () => import("CONTAINERS/video/index"),
    loading: Loading,
    timeout,
})

const Upload = Loadable({
    loader: () => import("CONTAINERS/upload/index"),
    loading: Loading,
    timeout,
})

const hooks = Loadable({
    loader: () => import("CONTAINERS/hooks/index"),
    loading: Loading,
    timeout,
})


const routerConfig=[{
    path: "/",
    component: Home, // 2019.9.19 - xx
    exact: true,
},
{
    path: "/g2",
    component: Antv,
    exact: true
},
{
    path: "/g2/bar",
    component: AntvBar,
    exact: true
},
{
    path: "/echarts",
    component: Echarts,
    exact: true
},
{
    path: "/learnReact",
    component: LearnReact,
    exact: true
},{
    path: "/promise",
    component: Promises,
    exact: true
},{
    path: "/pages",
    component: Pages,
    exact: true
},{
    path: "/canvas",
    component: Canvas,
    exact: true
},
{
    path: "/sort",
    component: Sort,
    exact: true
},
{
    path: "/carousel",
    component: Carousel,
    exact: true
},
{
    path: "/this",
    component: AboutThis,
    exact: true
},
{
    path: "/mock",
    component: MockData,
    exact: true
},
{
    path: "/f2",
    component: F2chart,
    exact: true
},
{
    path: "/cinema",
    component: Cinema,
    exact: true
},
{
    path: "/ppt",
    component: PPT,
    exact: true
},
{
    path: "/video",
    component: Video,
    exact: true
},
{
    path: "/upload",
    component: Upload,
    exact: true
},
{
    path: "/hooks",
    component: hooks,
    exact: true
}]

export default routerConfig;