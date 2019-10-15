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
    loader: () => import("CONTAINERS/Antv/index"),
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
}]

export default routerConfig;