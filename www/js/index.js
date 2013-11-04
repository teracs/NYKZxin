var nykzuser;
$("body").on("click","#btn_login",function(){
  var d = $("#form_login").serializeJson();//{userid,password}
  nykzuser = new NYKZuser(d.userid,d.password,"http://dev-nykz4.scaret.in");
  nykzuser.login(function(callback){
    if(nykzuser.isloggedin){
      nykzuser.boardIndex(function(boards){
        window.boards = boards;
        var content = renderHome(nykzuser.drupaluser);
        pageStack.push(content);
      });
    }
    else{
      alert("登录失败！");
    }
  });
});

function doPost(boardName,returnpageid){
  var content = renderCreatePost(boardName,returnpageid);
  pageStack.push(content);
}

function gotoBoard(boardName,start){
    nykzuser.showBoard(boardName,start,function(posts){
        var content = renderBoard(posts);
        //$("#" + pageid).trigger("pagecreate");
        pageStack.push(content);
    });
}

function gotoPost(boardName,filename,returnpageid){
  nykzuser.showPost(boardName,filename,function(post){
    var content = renderPost(post,returnpageid);
    window.currentPost = post;
    console.log(content);
    pageStack.push(content);
  });
}

function onAjaxAutoFailStart(){
  $.mobile.loading( "show" );
}

function onAjaxAutoFailStop(){
  $.mobile.loading( "hide" );
}
