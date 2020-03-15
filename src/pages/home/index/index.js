import React from 'react';
import Css from '../../../assets/css/home/index/index.css'
import Swiper from '../../../assets/js/libs/swiper.min';
import config from '../../../assets/js/conf/config'
import {request} from '../../../assets/js/libs/request';
import {lazyImg} from "../../../assets/js/utils/util";
import '../../../assets/css/common/swiper.min.css'
export default class IndexComponent extends React.Component{
    constructor(){
        super();
        this.state={
            aSwiper:[],
            aNav:[],
            aGoods:[],
            aRecoGoods:[],
            bScroll:false

        }
        this.bScroll=true;
    }
    componentDidMount() {

        this.getSwiper();
        this.getNav();
        this.getGoodsLevel();
        this.getReco();
        window.addEventListener("scroll",this.eventScroll.bind(this),false)

    }
    componentWillUnmount() {
        this.bScroll=false;
        window.removeEventListener("scroll",this.eventScroll.bind(this))
    }

    eventScroll(){
        if (this.bScroll){
            let iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            if (iScrollTop>=80){
                this.setState({bScroll:true})
            } else {
                this.setState({bScroll:false})
            }
        }

    }
    getSwiper(){

        request(config.baseUrl+"/api/home/index/slide?token="+config.token).then(res=>{

            if (res.code===200){
                this.setState({aSwiper:res.data},()=>{
                    new Swiper("."+Css['swiper-wrap'], {
                        autoplay: 3000,//可选选项，自动滑动
                        pagination : '.swiper-pagination',
                        autoplayDisableOnInteraction : false,
                    })
                });
            }
        })
    }
    getNav(){
        request(config.baseUrl+"/api/home/index/nav?token="+config.token).then(res=>{
            if (res.code===200){
                this.setState({aNav:res.data})
            }
        })
    }

    getGoodsLevel(){
        request(config.baseUrl+"/api/home/index/goodsLevel?token="+config.token).then(res=>{
            if(res.code===200){
                this.setState({aGoods:res.data},()=>{
                    lazyImg()
                })
            }
        })
    }

    getReco(){
        request(config.baseUrl+"/api/home/index/recom?token="+config.token).then(res=>{
            if(res.code===200){
                this.setState({aRecoGoods:res.data},()=>{
                    lazyImg()
                })
            }
        })
    }

    render() {
        return(
            <div className={Css['page']}>
                <div className={this.state.bScroll?Css['search-header']+" "+Css['red-bg']:Css['search-header']}>
                    <div className={Css['classify-icon']}></div>
                    <div className={Css['search-wrap']}>
                        <div className={Css['search-icon']}></div>
                        <div className={Css['search-text']}>请输入宝贝名称</div>
                    </div>
                    <div className={Css['login-wrap']}>
                        <div className={Css['login-text']}>登录</div>
                    </div>
                </div>
                <div className={Css['swiper-wrap']}>
                    <div className="swiper-wrapper">
                        {
                            this.state.aSwiper.map((item,index)=>{
                                return(
                                    <div key={index} className="swiper-slide"><a href={item.webs} target="_blank" ref="noopener noreferrer" ><img
                                        src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title} data-echo={item.image}/></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={Css['quick-nav']}>
                    {
                        this.state.aNav!=null?
                        this.state.aNav.map((item,index)=>{
                            return(
                                <ul key={index} className={Css['item']}>
                                    <li className={Css['item-img']}>
                                        <img src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title} data-echo={item.image}/>
                                    </li>
                                    <li className={Css['item-text']}>{item.title}</li>
                                </ul>
                            )
                        }):""
                    }
                </div>
                {
                    this.state.aGoods!=null?
                    this.state.aGoods.map((item,index)=>{
                        return(
                            <div key={index} className={Css['goods-level-wrap']}>
                                <div key={index} className={Css['classify-title']+" "+Css['color'+(index+1)]}>-- {item.title} --</div>
                                {index%2===1?

                                    <div className={Css['goods-level1-wrap']}>
                                        {item.items!=null?
                                            item.items.slice(0,2).map((item2,index2)=>{
                                                return (
                                                    <div key={index2} className={Css['goods-level1-item0']}>
                                                        <div className={Css['goods-title2']}>{item2.title}</div>
                                                        <div className={Css['goods-text2']}>火爆开售</div>
                                                        <div className={Css['goods-img2']}>
                                                            <img src={require("../../../assets/images/common/lazyImg.jpg")} alt={item2.title} data-echo={item2.image}/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :""}
                                    </div>
                                    :<div className={Css['goods-level1-wrap']}>
                                        <div className={Css['goods-level1-item0']}>
                                            <div className={Css['goods-title']}>{item.items!=null?item.items[0].title:""}</div>
                                            <div className={Css['goods-text']}>精品打折</div>
                                            <div className={Css['goods-price'+(index+1)]}>{item.items!=null?item.items[0].price:""}元</div>
                                            <div className={Css['goods-img']}>
                                                <img data-echo={item.items!=null?item.items[0].image:""} src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title} alt={item.items!=null?item.items[0].title:""}/>
                                            </div>
                                        </div>
                                        <div className={Css['goods-level1-item1']}>
                                            {
                                                item.items!=null?
                                                    item.items.slice(1,3).map((item2,index2)=>{
                                                        return (
                                                            <div key={index2} className={Css['goods-row']}>
                                                                <div className={Css['goods-row-title']}>{item2.title}</div>
                                                                <div className={Css['goods-row-text']}>品质精挑</div>
                                                                <div className={Css['goods-row-img']}>
                                                                    <img src={require("../../../assets/images/common/lazyImg.jpg")} alt={item2.title} data-echo={item2.image}/></div>
                                                            </div>
                                                        )
                                                    })
                                                    :""
                                            }

                                        </div>
                                    </div>
                                }

                                <div className={Css['goods-List-wrap']}>
                                    {
                                        item.items!=null?
                                            item.items.slice(index%2===1?2:3).map((item2,index2)=>{
                                                return (
                                                    <div key={index2} className={Css['goods-List']}>
                                                        <div className={Css['title']}>{item2.title}</div>
                                                        <div className={Css['image']}>
                                                            <img src={require("../../../assets/images/common/lazyImg.jpg")} alt={item2.title} data-echo={item2.image}/>
                                                        </div>
                                                        <div className={Css['price']}>￥{item2.price}</div>
                                                        <div className={Css['unprice']}>￥{item2.price*2}</div>
                                                    </div>
                                            )}):""
                                    }
                                </div>
                            </div>
                        )

                }) : ""
                }
                <div className={Css['reco-title-wrap']}>
                    <div className={Css['line']}></div>
                    <div className={Css['reco-text-wrap']}>
                        <div className={Css['reco-icon']}></div>
                        <div className={Css['reco-text']}>为您推荐</div>
                        </div>
                    <div className={Css['line']}></div>
                </div>
                <div className={Css['reco-item-wrap']}>
                    {
                        this.state.aRecoGoods!=null?
                            this.state.aRecoGoods.map((item,index)=>{
                                return (
                                    <div key={index} className={Css['reco-item']}>
                                        <div className={Css['image']}>
                                            <img src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title} data-echo={item.image}/>
                                        </div>
                                        <div className={Css['title']}>{item.title}</div>
                                        <div className={Css['price']}>￥{item.price}</div>
                                    </div>
                                )
                            })
                            :""
                    }

                </div>
            </div>
        );
    }
}