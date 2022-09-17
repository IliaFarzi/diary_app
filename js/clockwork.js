function clockwork() {
    $('.done').click(addPara)
    $('.tool').click(monitoring)
    $(".textarea").toTextarea({allowHTML: true})
    timing()
}

//
function addPara() {
    zoneCount++
    $('.center').append('    <div class="zone" id="zone-0">\n' +
        '        <div class="bar">\n' +
        '            <form action=""><input type="time"></form>\n' +
        '            <button class="clear">clear</button>\n' +
        '        </div>\n' +
        '           <div class="textarea" spellcheck="false" contenteditable="true" id="text-' + zoneCount + '"><span class="' + color + font +'" contenteditable="true" spellcheck="false">...</span></div>\n' +
        '        <div class="br"></div>\n' +
        '    </div>')
    $('.zone:last-child').get(0).id = "zone-" + zoneCount
    $(".textarea").toTextarea({allowHTML: true})
    $('.clear').click(function () {
        $(this).parent().parent().remove()
        zoneCount--
    })
}

//
function monitoring() {
    if (this.id !== color && this.id !== font) {
        $('#' + this.id).hasClass('font') ? fontChange(this) : colorChange(this)
    }
}

//
function fontChange(_clicked) {
    $('.font.select').removeClass('select')
    $('#' + _clicked.id).addClass('select')
    font = _clicked.id
    newFormat()
}

//
function colorChange(_clicked) {
    $('.color.select').removeClass('select')
    $('#' + _clicked.id).addClass('select')
    color = _clicked.id
    newFormat()
}

//
function newFormat() {
    $('.textarea *').each(function () {
        if($(this).text() === '...' || $(this).text() === ''){
            $(this).remove()
        }
    })
    $('.textarea').append(`<span class="${color} ${font}" contenteditable="true" spellcheck="false">...</span>`)
} 
//
function timing() {
    for (var i=hereAndNow ; i>=zeroPoint ; i-- ){
        $('.side-left').append('<div class="time-box">'+i+'</div>')
    }
}
//
var zoneCount = 0
//
var color = 'gold', font = 'normal'
//
var zeroPoint = 6512 , zeroPointUTC = 18975 , hereAndNow = Math.floor(Date.now()/86400000) - zeroPointUTC + zeroPoint
