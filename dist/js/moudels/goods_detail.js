function Nav(){
    this.aside = $('aside');
    this.navListAll = $('.nav_list_all');
    this.eventBind();
}
Nav.prototype.navShow = function(){
    this.navListAll.slideDown()
}
Nav.prototype.navHide = function(){
    this.navListAll.slideUp()
}
Nav.prototype.eventBind = function(){
    this.aside.on('mouseenter',this.navShow.bind(this))
    this.aside.on('mouseleave',this.navHide.bind(this))
}
new Nav();



// 标题栏渲染
function DetailTitle(){
    this.detailConTitle = $('.detail_con_title');  
    this.detailConMainLTop = $('.detail_con_main_l_top'); 
    this.detailConMainLBot = $('.detail_con_main_l_bot');
    this.detailConMainLText = $('.detail_con_main_l_text');
    this.detailConMainC = $('.detail_con_main_c');
    this.getData();
    this.getUrl();
}
DetailTitle.prototype.getUrl = function(){
    this.r = window.location.search.substr(1)
    this.id = this.r.split('=')[1];
    this.datatype = this.r.split('=')[0];
}
DetailTitle.prototype.getData = function(){
    let _this = this;
    $.ajax('../data/list.json',{
        type:'get',
        data:{
            id : '01'
        }
    })
    .then(function(res){  
            var str = '';
            var str1 = '';
            var str2 = '';
            var str3 = '';
            var str4 = '';
                $.each(res[_this.datatype],function(index,val){
                    // console.log(val.imgs[0])
                    if(_this.id == val.id){
                        str += `
                            <h2>${val.type}</h2>
                            <em>></em>
                            <select name="" id="">
                                <option value="">${val.option1[7]}</option>
                            </select>
                            <em>></em>
                            <select name="" id="">
                                <option value="">${val.option2[0]}</option>
                            </select>
                            <em>></em>
                            <p>${val.introduce}</p>
                        `   
                        for(var key in val.imgs[0]){
                            
                            str1 += `
                                <div class="small_box">
                                    <img src="${val.imgs[0][key][1]}" alt="" class="small_img">
                                </div>
                                <div class="big_box">
                                    <img src="${val.imgs[0][key][2]}" alt="" class="big_img">
                                </div>
                            `  
                            str2 += `
                                <div class="detail_con_main_l_bot_imgBox">
                                    <img src="${val.imgs[0][key][0]}" alt="">
                                </div>
                            `                             
                        }   
                        str3 += `
                            <p>商品编码：${val.number}</p>
                            <p><i class="fa fa-heart"></i>收藏商品</p>
                        `
                        str4 += `
                            <div class="detail_con_main_c_title">
                                ${val.introduce}
                            <div class="detail_con_main_c_price">
                                <h2>齐心价</h2>
                                <h3>${val.price}</h3>
                            </div>
                            <div class="detail_con_main_c_address">
                                <h5>发货地点</h5>
                                <select name="" id="">
                                    <option value="">全国仓</option>
                                    <option value="">京东仓</option>
                                    <option value="" selected>深圳仓</option>
                                    <option value="">广州仓</option>
                                    <option value="">上海仓</option>
                                    <option value="">北京仓</option>
                                    <option value="">成都仓</option>
                                    <option value="">沈阳仓</option>
                                    <option value="">西安仓</option>
                                    <option value="">济南仓</option>
                                    <option value="">武汉仓</option>
                                    <option value="">重庆仓</option>
                                    <option value="">汕头仓</option>
                                    <option value="">福州仓</option>
                                    <option value="">浙江仓</option>
                                    <option value="">长沙仓</option>
                                    <option value="">南昌仓</option>
                                    <option value="">郑州仓</option>
                                    <option value="">石家庄仓</option>
                                    <option value="">天津仓</option>
                                    <option value="">苏南仓</option>
                                </select>
                            </div>
                            <div class="detail_con_main_c_inventory">
                                <h5>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存</h5>
                                <h6>有货</h6>
                            </div>
                            <div class="detail_con_main_c_server">
                                <h5>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</h5>
                                <h6>由<em>齐心商城</em>销售和发货，并享受售后服务</h6>
                                <a href="">和我联系</a>
                            </div>
                            <div class="detail_con_main_c_size">
                                <h5>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</h5>
                                <h6>${val.color}</h6>
                            </div>
                            <div class="detail_con_main_c_number">
                                <h5>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</h5>
                                <p>
                                    <input type="text" value="1">
                                    <span>+</span>
                                    <span>-</span>
                                    台
                                </p>
                                <h6>(单笔订单满199全场，包邮)</h6>
                                
                            </div>
                            <div class="detail_con_main_c_buy">
                                <div class="buyNow">立即购买</div>
                                <div class="cart"><i class="fa fa-shopping-cart"></i>加入购物车</div>
                            </div>
                        `

                    }                    
                })

               
                _this.detailConTitle.append(str)  
                _this.detailConMainLTop.append(str1)
                _this.detailConMainLBot.append(str2)
                _this.detailConMainLText.append(str3)
                _this.detailConMainC.prepend(str4)



                _this.smallBox = $('.small_box');
                _this.detailConMainLBotImgBox = $('.detail_con_main_l_bot_imgBox');
                _this.bigBox = $('.big_box');
                _this.smallBox.eq(0).addClass('small_box_show');
                _this.bigBox.eq(0).addClass('big_box_show');
                _this.detailConMainLBotImgBox.eq(0).addClass('border_color');

              
                function ChangeClass(){
                    this.detailConMainLBotImgBox = $('.detail_con_main_l_bot_imgBox'); 
                    this.smallBox = $('.small_box');  
                    this.bigBox = $('.big_box'); 
                    this.eventBind();
                }               
                ChangeClass.prototype.eventBind = function(){
                    var a = this;                  
                    this.detailConMainLBotImgBox.on('mouseover',function(){
                        a.smallBox.eq($(this).index()).addClass('small_box_show').siblings().removeClass('small_box_show');
                        a.bigBox.eq($(this).index()).addClass('big_box_show').siblings().removeClass('big_box_show');
                        $(this).addClass('border_color').siblings().removeClass('border_color');
                   
                    })
                }
                new ChangeClass()


                // 放大镜效果
                function Glass(){
                    this.detailConMmainLTop = $('.detail_con_main_l_top');
                    this.smallBox = $('.small_box');
                    this.smallImg = $('.small_img');
                    this.bigBox = $('.big_box');
                    this.bigImg = $('.big_img');
                    this.filter = $('.filter');
                    this.eventBind()
                }
                Glass.prototype.filterMove = function(e){
                    e = e || window.event;
                    this.l = e.pageX - this.filter.width()/2 - this.smallBox.offset().left;
                    this.t = e.pageY - this.filter.height()/2 - this.smallBox.offset().top;
                    this.l = this.l <= 0 ? 0 : (this.l >= 175 ? 175 : this.l);
                    this.t = this.t <= 0 ? 0 : (this.t >= 175 ? 175 : this.t);
                    this.filter.css({'left':this.l+'px','top':this.t+'px'});
                }
                Glass.prototype.bigMove = function(e){
                    this.bigImg.css({'left':-this.l *2+'px','top':-this.t *2+'px'});
                }
                Glass.prototype.eventBind = function(){
                    this.detailConMmainLTop.on('mouseover',this.open.bind(this))
                    this.detailConMmainLTop.on('mouseout',this.close.bind(this))
                }
                Glass.prototype.show = function(){
                    this.filter.css({'display':'block'});
                    this.bigBox.css({'display':'block'})
                }
                Glass.prototype.close = function(){
                    this.filter.css({'display':'none'});
                    this.bigBox.css({'display':'none'})
                }
                Glass.prototype.open = function(){
                    this.show();
                    this.filterMove();
                    this.bigMove();
                }
                new Glass()
    })
}


new DetailTitle();



