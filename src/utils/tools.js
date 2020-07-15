/*eslint-disable*/
import qs from 'qs'

export function trimLeft(str) {
    return str.replace(/(^\s*)/g, "");
}
export function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
export function type(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object\s(\w+)\]$/,'$1');
}
export function resetUrl(path,o={}) {
    if(type(path)!=='String'||!Object.keys(o).length) return path
    const hashReg=/#[^?]*/
    const url=path.replace(hashReg,'')
    if(url.indexOf('?')===-1){
        return path+'?'+qs.stringify(o)
    }
    const splitArr=url.split('?')
    const q=qs.parse(splitArr[1])
    const hash=(()=>{
        const hashReg=/#[^?]*/
        const hashMatch=path.match(hashReg)
        if(hashMatch){
            return hashMatch[0]
        }
        return ''
    })()
    return splitArr[0]+hash+'?'+qs.stringify(Object.assign(q,o))
}
export function replaceObjKey( val , fieldNames ){
  return JSON.parse( JSON.stringify( val ).replace( /title/g , fieldNames.label ).replace( /value/g , fieldNames.value ) );
}
//过滤对象 , flag表示排除还是包含
export function filterObj(obj={},propsArray,flag){
    if (typeof (obj) !== "object" || !Array.isArray(propsArray)) {
        throw new Error("参数格式不正确");
    }
    const result = {};
    Object.keys(obj).filter(key => {
        return flag ? !propsArray.includes(key) : propsArray.includes(key);
	}).forEach(key => {
        result[key] = obj[key];
    });
    return result;
}
export function isEmptyObj(obj){
    return JSON.stringify(obj) === '{}';
}

function arrIndexOf(arr,v){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==v){
            return i;
        }
    }
    return -1;
}
export function getLength(val) {
    let len = 0;
    for (let i = 0; i < val.length; i++) {
        let length = val.charCodeAt(i);
        if(length>=0&&length<=128){
            len += .5;
        }else{
            len += 1;
        }
    }
    return len;
}
export function getScrollTop(el) {
    if(el&&el!==document.body){
        return el.scrollTop
    }
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
export function getElementToPageDistance(el) {
    if(el.offsetParent) {
        const {top,left}=getElementToPageDistance(el.offsetParent)
        return {
            top:el.offsetTop+top,
            left:el.offsetLeft+left
        }
    }
    return {top:el.offsetTop,left:el.offsetLeft}
}
export function isParent (target,parent){
    while (target!==document.body){
        if (target === parent){
            return true;
        }
        target = target.parentNode;
    }
    return false;
}
export function contains (container,target){
    while (target!==document.body){
        if (target === container){
            return true;
        }
        target = target.parentNode;
    }
    return false;
}
export function getClassName(...arg) {
    const classList=arg.filter(item=>item&&type(item)==='String')
    return classList.join(' ')
}
export function addClass(el,className) {
    if(!className) return
    const str=el.className
    if(str.indexOf(className)===-1){
        el.className=trim(str+' '+className)
    }
}
export function removeClass(el,className) {
    el.className=trim(el.className.replace(className,''))
}
export function debounce(fn, wait) {
    let timeout = null;
    return function(...arg) {
        if(timeout !== null){
            clearTimeout(timeout);
        }
        const context = this;
        timeout = setTimeout(()=>{
            fn.apply(context, arg);
        }, wait);
    }
}
export function throttle(func, delay) {
    let prev = Date.now();
    return function() {
        const context = this;
        const args = arguments;
        const now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
export function css(target,style) {
    if(!target){
        return
    }
    if(target instanceof Node){
        for(let key in style){
            target.style[key]=style[key]
        }
    }else if(target.length){
        for(let o of target){
            css(o,style)
        }
    }
}
export function isIE() {
    if(!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
    }
    return false;
}
export function getWindowScrollTop() {
    return document.documentElement.scrollTop||document.body.scrollTop
}
export function getWindowScrollLeft() {
    return document.documentElement.scrollLeft||document.body.scrollLeft
}