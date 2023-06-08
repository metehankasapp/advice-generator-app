$(document).ready(function () {

    var loading = true;

    const getAdviceData = () => {
        loading = true;
        $('.loading-text').css('display', 'flex');
        $('.advice-card').css('display', 'none');

        $('.advice-button').attr('disabled', true);
        fetch('https://api.adviceslip.com/advice')
            .then(response => {
                return response.json()
            }).then(data => {
                loading = false;
                $('.advice-title span').text(data.slip.id)
                $('.advice-button').attr('disabled', false);
                $('.advice-content').html(`<p>"${data.slip.advice}"</p>`);
                $('.loading-text').css('display', 'none');
                $('.advice-card').css('display', 'flex');
                return data
            })
    }

    getAdviceData();



    $('.advice-button').click(function () {
        getAdviceData();
    })
})