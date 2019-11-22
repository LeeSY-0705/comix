$.ajax("../data/list.json")
    .then((res) => {
        var str = "";
        for (var i = 0; i < res.lists_all.length; i++) {
            str += `<div class="lists_all_img">           
                <a href="./goods_detail.html?lists_all=${res.lists_all[i].id}">
                    <h3>${res.lists_all[i].title}</h3>
                    <h4>${res.lists_all[i].msg}</h4>
                    <h5>${res.lists_all[i].price}</h5>
                    <img src="${res.lists_all[i].img}" alt="">
                </a>
            </div>`
        }
        var listsAllImgBox = $('.lists_all_imgBox');
        listsAllImgBox.append(str)

        // var str1 = ''
        // for (var i = 0; i < res.lists_F1_banner.length; i++) {
        //     str1 += `<img class="swiper-slide"
        // src="${res.lists_F1_banner[i].img}" alt="">`
        // }
        // var listsF1MoveBox = $('.lists_F1_moveBox');
        // listsF1MoveBox.append(str1)

        var str1 = ''
        for (var i = 0; i < res.lists_F1_bot_lb.length; i++) {
            str1 += `
                <div class="lists_F1_bot_lb_imgBox">
                    <img src="${res.lists_F1_bot_lb[i].img[0]}" alt="">
                    <img src="${res.lists_F1_bot_lb[i].img[1]}" alt="">
                </div>
            `
        }
        var listsF1BotLb = $('.lists_F1_bot_lb');
        listsF1BotLb.append(str1);

        var str2 = '';
        for (var i = 0; i < res.lists_F1_bot_r.length; i++) {
            str2 += `
                <div class="lists_F1_bot_r_pro">
                    <img src="${res.lists_F1_bot_r[i].img}" alt="">
                    <h3>${res.lists_F1_bot_r[i].title}</h3>
                    <h4>${res.lists_F1_bot_r[i].msg}</h4>
                    <h5>${res.lists_F1_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF1Bot_R = $('.lists_F1_bot_r');
        listsF1Bot_R.append(str2)



        var str3 = ''
        for(var i = 0 ; i < res.lists_F2_bot_lb.length ; i++){
            str3 += `
                <div class="lists_F2_bot_lb_imgBox">
                    <img src="${res.lists_F2_bot_lb[i].img[0]}" alt="">
                    <img src="${res.lists_F2_bot_lb[i].img[1]}" alt="">
                </div>
            `
        }
        var listsF2BotLb = $('.lists_F2_bot_lb');
        listsF2BotLb.append(str3)



        var str4 = ''
        for (var i = 0; i < res.lists_F2_bot_r.length; i++) {
            str4 += `
                <div class="lists_F2_bot_r_pro">
                    <img src="${res.lists_F2_bot_r[i].img}" alt="">
                    <h3>${res.lists_F2_bot_r[i].title}</h3>
                    <h4>${res.lists_F2_bot_r[i].msg}</h4>
                    <h5>${res.lists_F2_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF2Bot_R = $('.lists_F2_bot_r');
        listsF2Bot_R.append(str4)



        var str5 = ''
        for (var i = 0; i < res.lists_F3_bot_lb.length; i++) {
            str5 += `
                <div class="lists_F3_bot_lb_imgBox">
                    <img src="${res.lists_F3_bot_lb[i].img[0]}" alt="">
                    <img src="${res.lists_F3_bot_lb[i].img[1]}" alt="">
                </div>
            `
        }
        var listsF3BotLb = $('.lists_F3_bot_lb');
        listsF3BotLb.append(str5);

        var str6 = '';
        for (var i = 0; i < res.lists_F3_bot_r.length; i++) {
            str6 += `
                <div class="lists_F3_bot_r_pro">
                    <img src="${res.lists_F3_bot_r[i].img}" alt="">
                    <h3>${res.lists_F3_bot_r[i].title}</h3>
                    <h4>${res.lists_F3_bot_r[i].msg}</h4>
                    <h5>${res.lists_F3_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF3Bot_R = $('.lists_F3_bot_r');
        listsF3Bot_R.append(str6)


        var str7 = '';
        for (var i = 0; i < res.lists_F4_bot_l.length; i++) {
            str7 += `
                <img src="${res.lists_F4_bot_l[i].img}" alt="">
            `
        }
        var listsF4BotL = $('.lists_F4_bot_l');
        listsF4BotL.append(str7)



        var str8 = '';
        for (var i = 0; i < res.lists_F4_bot_r.length; i++) {
            str8 += `
                <div class="lists_F4_bot_r_pro">
                    <img src="${res.lists_F4_bot_r[i].img}" alt="">
                    <h3>${res.lists_F4_bot_r[i].title}</h3>
                    <h4>${res.lists_F4_bot_r[i].msg}</h4>
                    <h5>${res.lists_F4_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF4Bot_R = $('.lists_F4_bot_r');
        listsF4Bot_R.append(str8)




        var str9 = '';
        for (var i = 0; i < res.lists_F5_bot_l.length; i++) {
            str9 += `
                <img src="${res.lists_F5_bot_l[i].img}" alt="">
            `
        }
        var listsF5BotL = $('.lists_F5_bot_l');
        listsF5BotL.append(str9)



        var str10 = '';
        for (var i = 0; i < res.lists_F5_bot_r.length; i++) {
            str10 += `
                <div class="lists_F5_bot_r_pro">
                    <img src="${res.lists_F5_bot_r[i].img}" alt="">
                    <h3>${res.lists_F5_bot_r[i].title}</h3>
                    <h4>${res.lists_F5_bot_r[i].msg}</h4>
                    <h5>${res.lists_F5_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF5BotR = $('.lists_F5_bot_r');
        listsF5BotR.append(str10)


        var str11 = '';
        for (var i = 0; i < res.lists_F6_bot_l.length; i++) {
            str11 += `
                <img src="${res.lists_F6_bot_l[i].img}" alt="">
            `
        }
        var listsF6BotL = $('.lists_F6_bot_l');
        listsF6BotL.append(str11)



        var str12 = '';
        for (var i = 0; i < res.lists_F6_bot_r.length; i++) {
            str12 += `
                <div class="lists_F6_bot_r_pro">
                    <img src="${res.lists_F6_bot_r[i].img}" alt="">
                    <h3>${res.lists_F6_bot_r[i].title}</h3>
                    <h4>${res.lists_F6_bot_r[i].msg}</h4>
                    <h5>${res.lists_F6_bot_r[i].price}</h5>
                    <h6>标品</h6>
                </div>
            `
        }
        var listsF6BotR = $('.lists_F6_bot_r');
        listsF6BotR.append(str12)


        var str13 = '';
        for (var i = 0; i < res.lists_F7_bot.length; i++) {
            str13 += `
                <img src="${res.lists_F7_bot[i].img}" alt=""> 
            `
        }
        var listsF7Bot = $('.lists_F7_bot');
        listsF7Bot.append(str13)

    })