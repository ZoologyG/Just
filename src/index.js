import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
// import 'antd/dist/antd.css'; // babel-loader已配置为组件引入，不用全局引入样式，打包小
import STORE from './store';
import { addToCart, updateCart, deleteCart } from './actions/cart-actions';

console.log("initial state: ", STORE.getState());

STORE.subscribe(()=>{
	console.log('STORE.getState()', STORE.getState());
})

STORE.dispatch(addToCart('Coffee 500gm', 1, 250));
STORE.dispatch(addToCart('Flour 1kg', 2, 110));
STORE.dispatch(addToCart('Juice 2L', 1, 250));
STORE.dispatch(updateCart('Juice 2L', 10000, 20000));
STORE.dispatch(deleteCart('Juice 2L'));

const App = ()=> {
	return <Button type="primary">按钮one</Button>
}

ReactDOM.render(<App />, document.getElementById('root'));