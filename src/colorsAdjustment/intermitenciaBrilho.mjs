let intermitenciaBrilho = (self, destroy) => {
    $('body').toggleClass('notransitions');

    if (destroy) {
        $('body').removeClass('notransitions');
    }
}

export default intermitenciaBrilho;