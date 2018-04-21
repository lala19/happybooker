let async = require('async');
let request = require('request');
let cheerio = require('cheerio');
let charset = require('superagent-charset'); //解决乱码问题:
let superagent = require('superagent'); //发起请求
var createConnection = require("../createConnection.js")
charset(superagent);
request.post({
    url: 'http://localhost:9000/getdata/getdata4',
}, function optionalCallback(err, httpResponse, body) {
    var arr = JSON.parse(body);
    for (var i = 0; i < arr.length; i++) {
        //var self=arr[i];
        console.log(arr[i].link)
        superagent
            .get(arr[i].link)
            .charset('utf-8') //取决于网页的编码方式
            .end(function (err, res) {
                let $ = cheerio.load(res.text);
                var book_id_curr = $(".mod-tit1").find(".order-by").attr('href').split("?")[0].split("book/")[1];
                    //书 图片
                    var book_img=$(".book-img").children(".book-cover").children("img").attr("src");
                   var li= $(".book-chapter-list").find("li");
                   var sectionarr=[];
                    for(var j=0; j<li.length; j++){
                       var obj={
                           chapter:$(li[j]).children("a").text().replace(/'+/g,'').replace(/"+/g,""),
                           chapter_link:$(li[j]).children("a").attr("href")
                       }
                       sectionarr.push(obj);
                    }
                    //章节列表
                    var section_list=JSON.stringify(sectionarr);

                    var typeobj={
                        type1:$(".breakcrumb").children("a").eq(1).text(),
                        type2:$(".breakcrumb").children("a").eq(2).text(),
                    }
                    //类型
                    var book_type=JSON.stringify(typeobj);

                    var book_readlink=$(".book-operating").children("li").eq(0).find("a").attr("href");
                    var book_info=$(".book-cnt").html();
                    //作品信息
                    var book_name=$(".book-title").find("h1").text();
                    var anthor=$(".book-title").find("a").text();
                    //console.log(book_readlink)
                   
                    createConnection(`insert into book_info set book_id_curr='${book_id_curr}',book_img='${book_img}',section_list='${section_list}',book_type='${book_type}',book_info='${book_info}',book_readlink='${book_readlink}',book_name='${book_name}',anthor='${anthor}'`,function(results){
                        console.log(111)
                    })
            });
    }
})