var fs = require("fs");
var data = '';
var readerStream = fs.createReadStream('./html/test.html');
var cheerio = require('cheerio');
var createConnection = require("../createConnection.js")
readerStream.on('data', function(chunk) {
	data += chunk;
});
readerStream.on('end', function() {
    //console.log(data)
    var $=cheerio.load(data)
    // var li=$(".first-col").find("ul").eq(1).children("li");
    // for(var i=0; i<li.length;i++){
    //     var img=$(li[i]).children("a").children('img').attr("data-original");
    //     var str=$(li[i]).children("a").children('.info').html()
    //     var link=$(li[i]).children("a").attr("href");
    //     createConnection(`insert into index_banner set imgsrc='${img}',link='${link}',type='banner_right',html='${str}'`,function(res){
    //         console.log(res);
    //     })
    // }
    // var li=$(".bossrx").find(".book-list").eq(0).children("li");
    // for(var i=0; i<li.length;i++){
    //     var imgsrc=$(li[i]).children("a").children('img').attr("data-original");
    //     var headpic=$(li[i]).children("a").children('.info').find("img").attr("data-original");
    //     var title=$(li[i]).children("a").children('.info').children(".t").text();
    //     var link=$(li[i]).children("a").attr("href");
    //     var info=$(li[i]).children("a").children('.info').children(".n").text();
    //     var html=$(li[i]).children(".info").html();
    //     var bookname=$(li[i]).children(".title").children("a").html();
    //     var starnum=$(li[i]).children("a").children('.info').children(".num").text();
    //     console.log(starnum)
    //     //console.log(imgsrc)
    //     //console.log(headpic)
    //     //console.log(title)
    //     //console.log(link)
    //     //console.log(info)
    //     //console.log(html)
    //     // console.log(starnum)

    //     createConnection(`insert into index_booklist set imgsrc='${imgsrc}',bookname='${bookname}',type='BOSS任性推荐',html='${html}',info="${info}",link='${link}',headpic='${headpic}',title='${title}',starnum='${starnum}'`,function(res){
    //         console.log(res);
    //     })
    //}
    // var li=$(".bzwtj").find("li");
    // for(var i=0; i<li.length;i++){
    //     var imgsrc=$(li[i]).children("a").attr("href");
    //     var link=$(li[i]).children("a").find("img").attr("data-original");
      
    //     //console.log(title)
    //     //console.log(link)
    //     //console.log(info)
    //     //console.log(html)
    //     // console.log(starnum)

    //     createConnection(`insert into autoplay set imgsrc='${imgsrc}',link='${link}',type='同人推荐'`,function(res){
    //         console.log(res);
    //     })
    // }


    // var li=$(".topt").find("li");
    // for(var i=0; i<li.length;i++){
    //     var link=$(li[i]).children("a").attr("href"); 
    //     var imgsrc=$(li[i]).children("a").children("img").attr("data-original")
    //     var num=$(li[i]).children("a").find(".num").html();
    //     var anthor=$(li[i]).children("a").find(".author").text();
    //     var top=$(li[i]).children("a").find(".icon-top").text();
    //     var title=$(li[i]).children("a").text();      
    //     var title1=$(li[i]).children("a").find(".t").text();
    //     // console.log(link)
    //     // console.log(imgsrc)
    //     // console.log(num)
    //     // console.log(anthor)
    //     // console.log(top)
    //     // console.log(title)
    //     // console.log(title1)
    //     if(imgsrc){
    //         console.log(111);
    //         createConnection(`insert into index_top set link='${link}',imgsrc='${imgsrc}',anthor='${anthor}',title='${title1}',top='${top}',num='${num}',type='往期BOSS推荐'`,function(res){
    //             console.log(res);
    //         })
    //     }else{
            
    //         createConnection(`insert into index_top set link='${link}',title='${title}',num='${num}',top='${top}',type='往期BOSS推荐'`,function(res){
    //             console.log(res);
    //         })
    //     }

        
    // }
    // var li=$("tr");
    // // console.log(li)
    // for(var i=0; i<li.length;i++){
    //     var top=$(li[i]).find(".code").text(); 
    //     var classfiy=$(li[i]).find(".type").text();
    //     var bookname=$(li[i]).find(".name").text();
    //     var section=$(li[i]).find(".name").children("span").text();
    //     var vip=$(li[i]).find(".name").children("i").text();
    //     var link=$(li[i]).find(".name").children("a").attr("href");
    //     var anthor=$(li[i]).find(".author").children("a").text();
    //     var time=$(li[i]).find(".date").text();
    //     var wordnum=$(li[i]).find(".num").text();
    //     // console.log(link)
    //     // console.log(imgsrc)
    //     // console.log(num)
    //     // console.log(anthor)
    //     // console.log(top)
    //     // console.log(title)
    //     // console.log(title1)
    //     //console.log(111);
    //         createConnection(`insert into index_lately_update set top='${top}',classfiy='${classfiy}',bookname='${bookname}',section='${section}',vip='${vip}',link='${link}',anthor='${anthor}',time='${time}',wordnum='${wordnum}'`,function(res){
    //             console.log(res);
    //         })

        
    // }

    var str='"\'" asdsadsa "\'"'
    console.log(str.replace(/'+/g,'').replace(/"+/g,""))

});