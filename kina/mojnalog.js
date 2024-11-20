$(document).ready(function () {
    if (!sessionStorage.getItem('e')) {
        e = 0
    }
    else {
        e = parseInt(sessionStorage.getItem('e'))
    }
    function updateCart() {
        if (!sessionStorage.getItem('stan') || JSON.parse(sessionStorage.getItem('stan')).length == 0) {
            if(e==0)
                $(".main").html("<h3>NEMATE NISTA U KORPI</h3>")
            if(e==1)
                $(".main").html("<h3>EMPTY CART</h3>")
        } else {
            $(".main").html('<table></table>')
            $('table').append('<tr><td class="td1"></td><td class="td2"></td><td class="td3"></td><td class="td4"></td><td class="td5"></td><td class="td6"></td></tr>')
            if (e == 0) {
                $('.td1').html('slika')
                $('.td2').html('jelo')
                $('.td3').html('cena')
                $('.td4').html('kolicina')
                $('.td5').html('cena ukupno')
                $('.td6').html('')
            }
            if (e == 1) {
                $('.td1').html('image')
                $('.td2').html('code')
                $('.td3').html('price')
                $('.td4').html('quantity')
                $('.td5').html('total price')
                $('.td6').html('')
            }
            let stan = JSON.parse(sessionStorage.getItem('stan'))
            let cenapo = JSON.parse(sessionStorage.getItem('cenapo'))
            let cenauk = JSON.parse(sessionStorage.getItem('cenauk'))
            let kolicina = JSON.parse(sessionStorage.getItem('kolicina'))
            uk = 0
            for (let i = 0; i < stan.length; i++) {
                $('table').append('<tr><td class="td1' + i + '"></td><td class="td2' + i + '"></td><td class="td3' + i + '"></td><td class="td4' + i + '"></td><td class="td5' + i + '"></td><td class="td6' + i + '"></td></tr>')
                $('.td1' + i).html('<img src="' + stan[i] + '.jpeg" alt="">')
                $('.td2' + i).html(stan[i])
                $('.td3' + i).html(cenapo[i])
                $('.td4' + i).html(kolicina[i])
                $('.td5' + i).html(cenauk[i])
                if(e==0)
                    $('.td6' + i).html('<div class="btn" id="' + i + '">Obrisi</div>')
                if(e==1)
                    $('.td6' + i).html('<div class="btn" id="' + i + '">Remove</div>')
                uk += cenauk[i]
            }
            if(e==0)
                $('.main').append('<h3>Ukupan iznos: ' + uk + '</h3>')
            if(e==1)
                $('.main').append('<h3>Total price: ' + uk + '</h3>')
        }
    }

    updateCart();

    // Event delegation
    $(".main").on("click", ".btn", function () {
        let ind = parseInt($(this).attr('id'))
        let stan = JSON.parse(sessionStorage.getItem('stan'))
        let cenapo = JSON.parse(sessionStorage.getItem('cenapo'))
        let cenauk = JSON.parse(sessionStorage.getItem('cenauk'))
        let kolicina = JSON.parse(sessionStorage.getItem('kolicina'))
        stan.splice(ind, 1)
        cenapo.splice(ind, 1)
        cenauk.splice(ind, 1)
        kolicina.splice(ind, 1)
        sessionStorage.setItem('stan', JSON.stringify(stan))
        sessionStorage.setItem('cenapo', JSON.stringify(cenapo))
        sessionStorage.setItem('cenauk', JSON.stringify(cenauk))
        sessionStorage.setItem('kolicina', JSON.stringify(kolicina))
        updateCart();
    })
})