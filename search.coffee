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
    http.get options, (res)->
        pageData = ""
        res.setEncoding('utf8')
        res.on('data',(chunk) -> pageData += chunk)

        res.on('end', ()-> console.log(pageData))
        console.log(param)
        c++
        send()

i = 0

send = ()->
    while false 
        if s - c > 10000 then break
        query i++
    query i++

send()
