$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 1000 });

     $("#carouselbutton").click(function(){
         if($("#carouselbutton").children("span").hasClass('fa-pause'))
         {
            $("#mycarousel").carousel('pause');
             $("#carouselbutton").children("span").removeClass('fa-pause');
             $("#carouselbutton").children("span").addClass('fa-play');
         }
         else if ($("#carouselbutton").children("span").hasClass('fa-play'))
         {
            $("#mycarousel").carousel('cycle');
            $("#carouselbutton").children("span").removeClass('fa-play');
            $("#carouselbutton").children("span").addClass('fa-pause');
         }
        });
    //Pour afficher modal login quand on clique sur login
    $("#login").click(function()
    {
        $("#loginModal").modal('show');
        $(".close").click(function()
            {
                $("#loginModal").modal('hide')
            })
    });
    //Pour afficher modal quand on clique sur reserve table
    $("#res").click(function()
    {
         $("#reserve").modal('show');
         $("#cancel").click(function(){
            $("#reserve").modal('hide');

         })
         $("#close").click(function()
         {
             $("#reserve").modal('hide')
         })
    }
    )

    
});