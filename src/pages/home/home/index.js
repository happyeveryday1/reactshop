
import React from 'react';
import Css from '../../../assets/css/home/home/index.css'

export default class HomeComponent extends React.Component{
    componentDidMount() {

    }

    render() {
        return(
            <div className={Css['bottom-nav']}>
                <ul>
                    <li className={Css['home']+" "+Css['active']}></li>
                    <li className={Css['text']+" "+Css["active"]}>首页</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}