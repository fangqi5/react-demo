import React, { Component } from 'react'
import ReactDOMServer from 'react-dom'
import Canvas from './canvas'
// import PropTypes from 'prop-types'

setTimeout(() => {
    ReactDOMServer.hydrate(<Canvas/>, document.getElementById('root'))
}, 3000);