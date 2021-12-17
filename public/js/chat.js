$(() => {
    const url =''
    let socket = io.connect(url)

    const message = $('#message')
    const chatList = $('#chatList')

    $('#send').on('click', () => {
        if (!message.val()) return
        message.val('')
    })
})