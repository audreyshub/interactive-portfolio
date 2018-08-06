function submitBtnCLick() {
    $('.submit').click(event => {
        event.preventDefault();
        console.log('Btn clicked');
        const name = $('#name').val();
        console.log(name);
        $('.container').html(`<h1>Hi ${name}! :)</h1>`);
    })
};

$(submitBtnCLick);
