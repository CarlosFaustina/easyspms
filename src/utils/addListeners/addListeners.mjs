import invoke from "./invoke.mjs";

export default function addListeners(self) {
    $('._access-menu').each(function() {
        let el = $(this);
        $(this).on(
            'click',
            {el: el, self: self},
            function() {
                invoke(self, el.attr('data-access-action'));
                window.event.stopImmediatePropagation();
            }
        );
    });
}
