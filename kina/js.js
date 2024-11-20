$(document).ready(function () {
    if (!sessionStorage.getItem('e')) {
        e = 0
    }
    else {
        e = parseInt(sessionStorage.getItem('e'))
    }
    if (!sessionStorage.getItem('ocena')) {
        o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    else {
        o = JSON.parse(sessionStorage.getItem('ocena'))
        c = JSON.parse(sessionStorage.getItem('cnt'))
    }
    ind = [0, 1, 2]
    max1 = -1
    for (i = 0; i < 9; i++) {
        if (parseInt(o[i])/parseInt(c[i]) > max1 && o[i]!=0) {
            max1 = parseInt(o[i])/parseInt(c[i])
            ind[0] = i
        }
    }
    max2 = -1
    for (i = 0; i < 9; i++) {
        if (parseInt(o[i])/parseInt(c[i]) > max2 && ind[0] != i && o[i]!=0) {
            max2 =parseInt(o[i])/parseInt(c[i])
            ind[1] = i
        }
    }

    max3 = -1
    for (i = 0; i < 9; i++) {
        if (parseInt(o[i])/parseInt(c[i]) > max3 && ind[0] != i && ind[1] != i && o[i]!=0) {
            max3 = parseInt(o[i])/parseInt(c[i])
            ind[2] = i
        }
    }
    console.log(o)
    console.log(c)
    for (i = 0; i <= 2; i++) {
        string = 'pohslad'
        switch (ind[i]) {
            case 0:
                string = 'krompir'
                if (e==0)
                    opis='Peceni krompir sa sirom'
                if(e==1)
                    opis='Baked Potatoes with Cheese'
                break;

            case 1:
                string = 'rolnice'
                if (e==0)
                    opis='Kozice u rizinom papiru'
                else
                    opis='Shrimp in Rice Paper'
                break;
            case 2:
                string = 'kuglice'
                if(e==0)
                    opis='Kuglice sa sirom i slaninom'
                else
                    opis='Cheese and bacon balls'
                break;
            case 3:
                string = 'piletina'
                if(e==0)
                    opis='Piletina u sosu od ostriga'
                else
                    opis='Chicken in oyster sauce'
                break;

            case 4:
                string = 'lignje'
                if(e==0)
                    opis='Pohovane lignje u kiselom sosu'
                else
                    opis='Breaded squid in sour sauce'
                break;
            case 5:
                string = 'racici'
                if(e==0)
                    opis='Racici u secuan sosu'
                else
                    opis='Shrimps in spicy sauce'
                break;
            case 6:
                string = 'pohslad'
                if(e==0)
                    opis='Pohovani sladoled'
                else    
                    opis='Fried ice cream'
                break;

            case 7:
                string = 'cok'
                if(e==0)
                    opis='Pohovana cokolada'
                else    
                    opis='Fried chocolate'
                break;
            case 8:
                string = 'banana'
                if(e==0)
                    opis='Rolnice sa bananom'
                else
                    opis='Banana Rolls'
                break;
            default:
                string = 'krompir'
                break;

        }
        $("#has" + i + " img").attr("src",string+".jpeg")
        $("#has" + i + " a").attr("href",string+".html")
        $("#has"+i+" h5").html(opis)
        if(o[ind[i]]==0){
            oc='0.00'
        }
        else {
            oc=parseFloat(o[ind[i]] / c[ind[i]]).toFixed(2)
        }
        $("#has"+i+" p").html("Ocena: "+oc)
    }
})