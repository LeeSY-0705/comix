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




function Pagintion(){
    this.goods_list_pro = $('.goods_list_pro');
    this.btnList = $('.btnList');
    this.next = $('.next');
    this.prev = $('.prev');
    this.count = 1;
    this.getData()

}
Pagintion.prototype.getData = function(){
    let _this = this;
    
    this.r = window.location.search.substr(1);
    // console.log(window.location.search)
    this.keyWord = this.r.split('=')[1];
    // console.log(this.keyWord)
    
    $.ajax('../data/goods_list.json')
    .then( (res) => {
        // _this.run(res)
        // console.log(res)
        // console.log(res[_this.keyWord])
        _this.pageNum = Math.ceil(res[_this.keyWord].length / 30);
        console.log(_this.pageNum)
        for(let i = 0 ; i < _this.pageNum ; i++){
            createTag = document.createElement('a');
            $(createTag).text(i+1);
            $(createTag).insertBefore(this.next,null);
            $(createTag).addClass('page')
        }   
        
        _this.btnList.css({'width' : _this.pageNum * 52 + 200})
        _this.render(res,1)

        this.aBtn = $('.btnList .page');
        // console.log(this.aBtn)
        this.aBtn.eq(0).addClass('btn_color')
        this.aBtn.click(function(){
            _this.render(res,$(this).text());
        //更改count的值
            _this.count = $(this).text();
            $(this).addClass('btn_color').siblings().removeClass('btn_color')
        })

        this.prev.click(function(){
            
            if(_this.count <= 1){
                _this.count = 1;
            }else{
                _this.count--;
            }
            // console.log(_this.count)
            _this.render(res,_this.count)
            _this.aBtn.eq(_this.count-1).addClass('btn_color').siblings().removeClass('btn_color')
        })
        this.next.click(function(){
            if(_this.count >= _this.pageNum){
                _this.count = _this.pageNum;
                console.log(_this.pageNum)
            }else{
                _this.count++;
            }
            _this.render(res,_this.count)
            // console.log(_this.count)
            _this.aBtn.eq(_this.count-1).addClass('btn_color').siblings().removeClass('btn_color')
        })

    })
}
Pagintion.prototype.render = function(res,n){
    // 每次调用先清空，防止累加
    this.goods_list_pro.html('') ;
    // console.log($(this))
    var str = ''
    for(let i = (n - 1) * 30 ; i < Math.min(res[this.keyWord].length,30 * n) ; i++){
        str += `
            <div class="goods_list_pro_list">
                <img src="${res[this.keyWord][i].img}" alt="">
                <div class="goods_list_pro_list_title">
                    <p><em>${res[this.keyWord][i].brand}</em>${res[this.keyWord][i].title}</p>
                </div>
                <h6>￥${res[this.keyWord][i].price}</h6>
                <span>标品</span>
            </div>
        `
    }
    this.goods_list_pro.append(str)
}
new Pagintion()

