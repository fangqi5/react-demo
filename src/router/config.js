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

const Echarts = Loadable({
    loader: () => import("CONTAINERS/Echarts/index"),
    loading: Loading,
    timeout,
})

const LearnReact = Loadable({
    loader: () => import("CONTAINERS/learnreact/index"),
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

const routerConfig=[{
    path: "/",
    component: Home, // 2019.9.19 - xx
    exact: true,
},
{
    path: "/antv",
    component: Antv,
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
}]

export default routerConfig;