http = require('http')
options =
    host: '10.144.3.211'
    port: 80
    path: '/'

s = 0
c = 0
query = (param) ->
    options.path = "/?" + i
    s++
    http.get options, ()->
        console.log(param)
        c++
        send()

i = 0

send = ()->
    while true
        if s - c > 10000 then break
        query i++

send()
