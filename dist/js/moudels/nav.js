function NavShow(){
    this.navListAllLi = $('.nav_list_all_li');
    this.navList = $('.nav_list');
    this.navListLi = $('.nav_list ul li');
    this.navListMain= $('.nav_list main');
    this.eventBind();

}

NavShow.prototype.eventBind = function(){
    this.navListAllLi.mouseover(function(){
        $(this).css({background : '#fff'})
        $(this).find('.nav_list').show()
    })
    this.navListAllLi.mouseout(function(){
        $(this).css({'background' : ''})
        $(this).find('.nav_list').hide()
    })
    this.navListLi.mouseover(function(){
        $(this).find('a').css({'borderBottom' : '1px solid red'})
        $(this).find('em').css({'borderBottom' : '1px solid red'})
    })
    this.navListLi.mouseout(function(){
        $(this).find('a').css({'borderBottom' : '0'})
        $(this).find('em').css({'borderBottom' : '0'})
    })
    this.navListMain.mouseover(function(){
        $(this).find('h4').css({'borderBottom' : '1px solid red'})
        $(this).find('em').css({'borderBottom' : '1px solid red'})
    })
    this.navListMain.mouseout(function(){
        $(this).find('h4').css({'borderBottom' : '0'})
        $(this).find('em').css({'borderBottom' : '0'})
    })
}

new NavShow()