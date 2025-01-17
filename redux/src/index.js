import './index.css'
import React from 'react'
import {ReactDOM} from'react'
import App from './App'

import { store } from './app/store'
import {Provider} from'react-redux'

const root = ReactDOM.createRoot (document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)