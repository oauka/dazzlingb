var comlist = ''
$.ajax({
    type : 'GET',
    url : 'js/commodity.json',
    timeout : 3000,
    beforeSend : function(xhr){
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType('application/json')
        }
    },
    dataType : 'json',
    success : function(data){
        comlist = data
        dataPrint()
    },
    error : function(xhr){
        alert(xhr.status + '/' + xhr.errorText)
    }
})

function dataPrint() {
    var list = '';
    for (var i in comlist) {
        var price = comlist[i].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        list += `<li><div class="imgBox"><img src="${comlist[i].Photo}" onerror="this.src='img/noimage.jpg'" alt=""></div>`
        list += `<div class="txtBox"><h3>${comlist[i].Title}</h3>`
        list += `<p>설명 : ${comlist[i].Details}</p>`
        list += `<strong>가격 : &#8361;${price}원</strong></div><div class="comdel"><button type="button">삭제</button></div></li>`

    }
    $('.combox').append(`<ul class="list">${list}</ul>`)
}

$('.combox').on('click', 'ul.list li button', function(e){
    e.preventDefault()
    var index = $(this).parent().index()
    comlist.splice(index, 1)
    $('.combox ul.list').remove()
    dataPrint()
})

$('.combox .pushBtn button').on('click', function(e){
    e.preventDefault()
    $('.formBox').css({display:'block'})
})

$('.combox').on('click', '.formBox button[type=submit]', function(e){
    e.preventDefault()
    if (  $('#title').val()==='' && $('#details').val()==='' ) {
        return false
    }
    var last = {
        Title : $('#title').val(),
        Details: $('#details').val(),
        Price: $('#price').val(),        
        Photo: $('#imgsrc').val()
    }
    comlist.push(last)
    $('.combox ul.list').remove()
    dataPrint()        
})

$('.combox').on('click', '.formBox button[type=reset]', function(){
    $('.formBox').css({display:'none'})
})