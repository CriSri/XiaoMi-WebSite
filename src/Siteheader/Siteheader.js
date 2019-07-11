import React ,{Component} from 'react'
import "./Siteheader.css"
function Siteheader(){
   
   return (
       <div className="SiteTopbar">

    
            <div className="wrap">
              <div className="topbar">
                <div className="left">
                    <a href="#">小米商城</a>
                    <span className="seq">|</span>
                    <a href="#">MIUI</a>
                    <span className="seq">|</span>
                    <a href="#">IoT</a>
                    <span className="seq">|</span>
                    <a href="#">云服务</a>
                    <span className="seq">|</span>
                    <a href="#">金融</a>
                    <span className="seq">|</span>
                    <a href="#">有品</a>
                    <span className="seq">|</span>
                    <a href="#">小爱开放平台</a>
                    <span className="seq">|</span>
                    <a href="#">企业团购</a>
                    <span className="seq">|</span>
                    <a href="#">资质证照</a>
                    <span className="seq">|</span>
                    <a href="#">协议规则</a>
                    <span className="seq">|</span>
                    <a href="#">下载app</a>
                    <span className="seq">|</span>
                    <a href="#">Select  Region</a>
                </div>
                <div className="right">
                    <div className="userInfo">
                        <a href="#">登录</a>
                        <span className="seq">|</span>
                        <a href="#">注册</a>
                        <span className="seq">|</span>
                        <a href="#">消息通知</a>
                    </div>
                    <div className="Cart">

                    </div>
                </div>
        </div>
       </div>
            <div className="nav_category">
                <div className="headerLogo">
                    <a href="#" className="iconfont">&#xe60e;</a>
                </div>
                <ul className="nav_container">
                    <li className="blank"></li>
                    <li className="nav_item">小米手机</li>
                    <li className="nav_item">Redmi 红米</li>
                    <li className="nav_item">电视</li>
                    <li className="nav_item">笔记本</li>
                    <li className="nav_item">家电</li>
                    <li className="nav_item">路由器</li>
                    <li className="nav_item">智能硬件</li>
                    <li className="nav_item">服务</li>
                    <li className="nav_item">社区</li>
                </ul>
                <div className="search">
                    <form action="">
                        <input className="search_text" type="text"/>
                        <input className="search_btn iconfont" type="submit" value="&#xe653;"/>
                    </form>
                </div>
            </div>
       </div>
    )
}

export default Siteheader