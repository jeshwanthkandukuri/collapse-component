$(document).ready(() =>{
		// JQuery starts here
		 
		 $('.btncls').click(function(){
        // creating necessary variables
        let  para = $(this);
        let parablock = para.next('p');

        // toggle the parablock var
        parablock.slideToggle(100);

    });  //end of JQuery
}); 