function Header(){
    this.headerClLi = $('.header_cl li');
    this.headerCrLi = $('.header_cr li');
    this.headerCrLiImg = $('.header_cr li img');
    this.listUlWrapper = $('.list_ul_wrapper');
    this.eventBind();
    this.getCookie()
    
}
Header.prototype.headerClShow = function(){
    this.headerClLi.eq(3).find('.address').css({'display':'block'})
    this.headerClLi.eq(3).css({'background':'#fff'})
}
Header.prototype.headerClHid = function(){
    this.headerClLi.eq(3).find('.address').css({'display':'none'})
    this.headerClLi.eq(3).css({'background':'#f2f2f2'})
}
Header.prototype.headerCrShow = function(){
    this.headerCrLi.eq(4).find('img').show()
}
Header.prototype.headerCrHid = function(){
    this.headerCrLi.eq(4).find('img').hide()
}
Header.prototype.headerCrShow2 = function(){
    this.listUlWrapper.show()
}
Header.prototype.headerCrHid2 = function(){
    this.listUlWrapper.hide()
}
Header.prototype.eventBind = function(){
    this.headerClLi.eq(3).on('mouseover',this.headerClShow.bind(this))
    this.headerClLi.eq(3).on('mouseout',this.headerClHid.bind(this))
    this.headerCrLi.eq(4).on('mouseover',this.headerCrShow.bind(this))
    this.headerCrLi.eq(4).on('mouseout',this.headerCrHid.bind(this))
    this.headerCrLiImg.on('mouseover',this.headerCrShow.bind(this))
    this.headerCrLiImg.on('mouseout',this.headerCrHid.bind(this))
    this.headerCrLi.eq(6).on('mouseover',this.headerCrShow2.bind(this))
    this.headerCrLi.eq(6).on('mouseout',this.headerCrHid2.bind(this))
}
Header.prototype.getCookie = function(){
    // console.log(document.cookie)
    if(document.cookie){       
       var str = document.cookie;
    //    console.log(str)
    var arr = str.split(';')
    // console.log(arr)
        for(var i = 0 ; i < arr.length ;i++){           
            if(i == arr.length -1 ){
                var str1 = arr[i].split('=');
                this.headerCrLi.eq(0).text(str1[1])
                this.headerCrLi.eq(0).css({'marginTop': 6,'color':'red','fontSize':14})
            }
        }
    }
}
new Header()
