$(document).ready(function () {
    if (!sessionStorage.getItem('e')) {
        e = 0
    }
    else {
        e = parseInt(sessionStorage.getItem('e'))
    }
    if (!sessionStorage.getItem('stan')) {
        stan = []
        cenapo = []
        cenauk = []
        kolicina = []
    }
    else {
        stan = JSON.parse(sessionStorage.getItem('stan'))
        cenapo = JSON.parse(sessionStorage.getItem('cenapo'))
        cenauk = JSON.parse(sessionStorage.getItem('cenauk'))
        kolicina = JSON.parse(sessionStorage.getItem('kolicina'))
    }
    if (!sessionStorage.getItem('ocena')) {
        o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        ocena = 0
        cnt = 0
    }
    else {
        o = JSON.parse(sessionStorage.getItem('ocena'))
        c = JSON.parse(sessionStorage.getItem('cnt'))
        ocena = parseInt(o[$("#ind").html()])
        cnt = parseInt(c[$("#ind").html()])
    }
    if (e == 0) {
        if (ocena == 0)
            $("#avg").html("Prosecna ocena: 0.00")
        else
            $("#avg").html("Prosecna ocena: " + parseFloat(ocena / cnt).toFixed(2))
    }
    if (e == 1) {
        if (ocena == 0)
            $("#avg").html("Average rating: 0.00")
        else
            $("#avg").html("Average rating: " + parseFloat(ocena / cnt).toFixed(2))
    }
    $('#oc').click(function () {
        for (i = 1; i <= 5; i++) {
            if (document.getElementById("" + i).checked) {
                ocena += i;
                cnt++;
                o[$("#ind").html()] = ocena
                c[$("#ind").html()] = cnt
                sessionStorage.setItem('ocena', JSON.stringify(o))
                sessionStorage.setItem('cnt', JSON.stringify(c))
                if (e == 0)
                    $("#avg").html("Prosecna ocena: " + parseFloat(ocena / cnt).toFixed(2))
                if (e == 1)
                    $("#avg").html("Average rating: " + parseFloat(ocena / cnt).toFixed(2))
            }
        }
        alert("uspesno ste ocenili")
    })
    $('#dod').click(function () {
        k = $("#kol").val()
        if (k > 0) {
            cena = parseInt($("#cena").html())
            sta = $("#sta").html()
            stan.push(sta)
            cenapo.push(cena)
            cenauk.push(k * cena)
            kolicina.push(k)
            sessionStorage.setItem('stan', JSON.stringify(stan))
            sessionStorage.setItem('cenapo', JSON.stringify(cenapo))
            sessionStorage.setItem('cenauk', JSON.stringify(cenauk))
            sessionStorage.setItem('kolicina', JSON.stringify(kolicina))
            if (e == 0) {
                alert("Ubacili ste " + k + " porcija u korpu. Ukupna cena je " + k * cena)
            }
            if (e == 1) {
                alert("You added " + k + " portions in a cart. Total price is " + k * cena)
            }
        }
    })
})