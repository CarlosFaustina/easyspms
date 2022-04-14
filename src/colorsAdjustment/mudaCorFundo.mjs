export default function mudaCorFundo(self, destroy) {
    
    $('.color_box').each(function(){
        $(this).on('click', function() {
            $('.color_box').removeClass('active');
            $(this).toggleClass('active');

            let color = $(this).attr('id').replace('color_box_', '');
            
            $("body").removeClass (function (index, className) {
                return (className.match (/(^|\s)fundo-\S+/g) || []).join(' ');
            });

            $('body').addClass('fundo-'+color);
        });
    });
}
