<div data-role="page" id="<%= pageid %>" class="dialog" data-close-btn="none">
  <div data-role="header"><%= header %></div>
  <div data-role="content">
  <input type="text" class="post_title" placeholder="在此输入标题"/>
  <textarea class="post_body" placeholder="在此输入正文"></textarea>
  <input type="button" value="发表" class="submit"/>
  </div>
  <div data-role="footer" data-position="fixed"><%= footer%></div>
</div>
<script>
  $("#<%= pageid %>").on("click",".submit",function(){
    var title = $("#<%= pageid %> .post_title").val();
    var content = $("#<%= pageid %> .post_body").val();
    console.log("即将发表文章",title,content);
    nykzuser.createPost("<%= boardName %>",title,content,null,function(){
      gotoBoard("<%= boardName %>");
    });
  });
</script>
