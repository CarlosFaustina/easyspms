let intermitenciaBrilho = (self, destroy) => {
    if (destroy) {
        $('body').removeClass('notransitions');
    }
    
    $('body').toggleClass('notransitions');  
}

export default intermitenciaBrilho;
