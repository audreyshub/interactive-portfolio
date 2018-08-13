function submitBtnCLick() {
    $('.submit').click(event => {
        event.preventDefault();
        console.log('Btn clicked');
        const name = $('#name').val();
        console.log(name);
        $('.container').html(`
            <h1>Hello ${name} :)</h1>`);
    })
};

$(submitBtnCLick);
