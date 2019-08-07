import React from 'react';
import Css from '../../../assets/css/home/index/index.css'
import Swiper from '../../../assets/js/libs/swiper.min';
//import config from '../../../assets/js/conf/config'
//import {request} from '../../../assets/js/libs/request'
import '../../../assets/css/common/swiper.min.css'
export default class IndexComponent extends React.Component{
    constructor(){
        super();
        this.state={
            aSwiper:[]

        }
    }
    componentDidMount() {

        this.getSwiper();

    }
    getSwiper(){
        fetch("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f").then(res=>{
            return res.json();
        }).then(res=>{
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
        /*console.log(config);
        request(config.baseUrl+"/api/home/index/slide?token="+config.token).then(res=>{
            if (res.code===200){
                this.setState({aSwiper:res.data},()=>{

                });
            }
        })*/
    }

    render() {
        return(
            <div className={Css['page']}>
                <div className={Css['search-header']}>
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
                                    <div key={index} className="swiper-slide"><a href="http://www.baidu.com" target="_blank" ref="noopener noreferrer" ><img
                                        src={item.image} alt={item.title}/></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={Css['quick-nav']}>
                    {/*{
                        this.state.aNav!=null?
                        this.state.aNav.map((item,index)=>{
                            return(
                                <ul key={index} className={Css['item']}>
                                    <li className={Css['item-img']}>
                                        <img src={item.image} alt={item.title}/>
                                    </li>
                                    <li className={Css['item-text']}>{item.title}</li>
                                </ul>
                            )
                        }):""
                    }*/}
                </div>
                <div className={Css['goods-level-wrap']}>
                    <div className={Css['classify-title']+" "+Css['color1']}>-- 潮流女装 --</div>
                    <div className={Css['goods-level1-wrap']}>
                        <div className={Css['goods-level1-item0']}>
                            <div className={Css['goods-title']}>高跟鞋女2019新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['goods-text']}>精品打折</div>
                            <div className={Css['goods-price1']}>128元</div>
                            <div className={Css['goods-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""/>
                            </div>
                        </div>
                        <div className={Css['goods-level1-item1']}>
                            <div className={Css['goods-row']}>
                                <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女鞋外穿2019新款绸缎面细跟凉拖鞋穆勒鞋</div>
                                <div className={Css['goods-row-text']}>品质精挑</div>
                                <div className={Css['goods-row-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt=""/></div>
                            </div>
                            <div className={Css['goods-row']}>
                                <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女鞋外穿2019新款绸缎面细跟凉拖鞋穆勒鞋</div>
                                <div className={Css['goods-row-text']}>品质精挑4折起</div>
                                <div className={Css['goods-row-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt=""/></div>
                            </div>

                        </div>
                    </div>
                    <div className={Css['goods-List-wrap']}>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                    </div>
                </div>
                <div className={Css['goods-level-wrap']}>
                    <div className={Css['classify-title']+" "+Css['color2']}>-- 品牌男装 --</div>
                    <div className={Css['goods-level1-wrap']}>
                        <div className={Css['goods-level1-item0']}>
                            <div className={Css['goods-title2']}>高跟鞋女2019新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['goods-text2']}>火爆开售</div>
                            <div className={Css['goods-img2']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""/>
                            </div>
                        </div>
                        <div className={Css['goods-level1-item0']}>
                            <div className={Css['goods-title2']}>高跟鞋女2019新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['goods-text2']}>火爆开售</div>
                            <div className={Css['goods-img2']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""/>
                            </div>
                        </div>

                    </div>
                    <div className={Css['goods-List-wrap']}>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                    </div>
                </div>
                <div className={Css['goods-level-wrap']}>
                    <div className={Css['classify-title']+" "+Css['color3']}>-- 电脑办公 --</div>
                    <div className={Css['goods-level1-wrap']}>
                        <div className={Css['goods-level1-item0']}>
                            <div className={Css['goods-title']}>高跟鞋女2019新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                            <div className={Css['goods-text']}>精品打折</div>
                            <div className={Css['goods-price1']}>128元</div>
                            <div className={Css['goods-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt=""/>
                            </div>
                        </div>
                        <div className={Css['goods-level1-item1']}>
                            <div className={Css['goods-row']}>
                                <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女鞋外穿2019新款绸缎面细跟凉拖鞋穆勒鞋</div>
                                <div className={Css['goods-row-text']}>品质精挑</div>
                                <div className={Css['goods-row-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt=""/></div>
                            </div>
                            <div className={Css['goods-row']}>
                                <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女鞋外穿2019新款绸缎面细跟凉拖鞋穆勒鞋</div>
                                <div className={Css['goods-row-text']}>品质精挑4折起</div>
                                <div className={Css['goods-row-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt=""/></div>
                            </div>

                        </div>
                    </div>
                    <div className={Css['goods-List-wrap']}>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                        <div className={Css['goods-List']}>
                            <div className={Css['title']}>小白鞋女2019春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt=""/>
                            </div>
                            <div className={Css['price']}>￥288</div>
                            <div className={Css['unprice']}>￥388</div>
                        </div>
                    </div>
                </div>
                <div className={Css['reco-title-wrap']}>
                    <div className={Css['line']}></div>
                    <div className={Css['reco-text-wrap']}>
                        <div className={Css['reco-icon']}></div>
                        <div className={Css['reco-text']}>为您推荐</div>
                        </div>
                    <div className={Css['line']}></div>
                </div>
                <div className={Css['reco-item-wrap']}>
                    <div className={Css['reco-item']}>
                        <div className={Css['image']}>
                            <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt=""/>
                        </div>
                        <div className={Css['title']}>ONLY冬装新品雪纺拼接流苏腰带长款连衣裤女哈哈哈哈哈哈</div>
                        <div className={Css['price']}>￥399</div>
                    </div>
                    <div className={Css['reco-item']}>
                        <div className={Css['image']}>
                            <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt=""/>
                        </div>
                        <div className={Css['title']}>ONLY冬装新品雪纺拼接流苏腰带长款连衣裤女哈哈哈哈哈哈</div>
                        <div className={Css['price']}>￥399</div>
                    </div>
                    <div className={Css['reco-item']}>
                        <div className={Css['image']}>
                            <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt=""/>
                        </div>
                        <div className={Css['title']}>ONLY冬装新品雪纺拼接流苏腰带长款连衣裤女哈哈哈哈哈哈</div>
                        <div className={Css['price']}>￥399</div>
                    </div>
                </div>
            </div>
        );
    }
}