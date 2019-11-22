function Top(){
    this.topCon = $('.top_con');
    this.topMove = $('.top_move');
    this.imgBox = $('.imgBox')
    this.count = 0;
    this.timer = null;
    this.init();
    this.autoPlay();

}
Top.prototype.init = function(){
    this.topMove.css({'height' : this.imgBox.height() * this.imgBox.length})
}
Top.prototype.move = function(){
    this.topMove.animate({
        top:-this.imgBox.height()*this.count
    })
}
Top.prototype.next = function(){
    if(this.count == this.imgBox.length - 1){
        this.topMove.css({'top' : 0})
        this.count = 1;
    }else{
        this.count++;
    }
    this.move()
}
Top.prototype.autoPlay = function(){
    clearInterval(this.timer)
    var _this = this;
    this.timer = setInterval(function(){
        _this.next()
    },3000)
}

new Top()