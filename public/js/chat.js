$(() => {
    const url =''
    let socket = io.connect(url)

    const message = $('#message')
    const chatList = $('#chatList')

    $('#send').on('click', () => {
        if (!message.val()) return
        socket.emit('message',
            {
                message: message.val()
            }
        
        )
        message.val('')
    })
    socket.on('message', (data) => {
        console.log(data.message)
        let chatElement = $('<p>').append(data.message)
        chatList.prepend(chatElement)
    })
})