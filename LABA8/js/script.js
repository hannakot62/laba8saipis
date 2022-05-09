function resetCalc() {
    for (var i = 1; i < 3; i++) {
        for (var j = 1; j < 4; j++) {
            document.getElementById('markEZ' + i + j).value = '';
            document.getElementById('action' + j).innerText = '';
            document.getElementById('res' + j).innerText = '';
        }
        document.getElementById('coef' + i).value = '';
        document.getElementById('wres' + i).innerText = '';
        document.getElementById('r' + i).innerText = '';
        document.getElementById('rr' + i).innerText = '';
    }
    document.getElementById('res').innerText = '';
}

function totalCount() {
    let r1 = document.getElementById('coef1').value;
    r1 = Number(r1);
    document.getElementById('r1').innerText = r1;
    let r2 = document.getElementById('coef2').value;
    r2 = Number(r2);
    document.getElementById('r2').innerText = r2;
    let rr = r1 + r2;

    let wr1 = r1 / rr;
    let wr2 = r2 / rr;

    document.getElementById('rr1').innerText = '/' + rr + '= ';
    document.getElementById('wres1').innerText = wr1;

    document.getElementById('rr2').innerText = '/' + rr + '= ';
    document.getElementById('wres2').innerText = wr2;

    ///////////////////////////////////////////////////////////////////

    let ez11 = document.getElementById('markEZ11').value;
    let ez21 = document.getElementById('markEZ21').value;

    let ez12 = document.getElementById('markEZ12').value;
    let ez22 = document.getElementById('markEZ22').value;

    let ez13 = document.getElementById('markEZ13').value;
    let ez23 = document.getElementById('markEZ23').value;

    document.getElementById('action1').innerText = ez11 + '*' + wr1 + '+' + ez21 + '*' + wr2 + '= ';
    document.getElementById('action2').innerText = ez12 + '*' + wr1 + '+' + ez22 + '*' + wr2 + '= ';
    document.getElementById('action3').innerText = ez13 + '*' + wr1 + '+' + ez23 + '*' + wr2 + '= ';

    let res1 = ez11 * wr1 + ez21 * wr2;
    let res2 = ez12 * wr1 + ez22 * wr2;
    let res3 = ez13 * wr1 + ez23 * wr2;

    document.getElementById('res1').innerText = res1;
    document.getElementById('res2').innerText = res2;
    document.getElementById('res3').innerText = res3;

    /////////////////////////////////////////////////////////////////////////

    let result = Math.max(res1, res2, res3);
    let output = '';
    if (result == res1) {
        output = ' Z1';
    }
    if (result == res2) {
        if (output != '') {
            output += ', Z2'
        }
        else output = ' Z2';
    }
    if (result == res3) {
        if (output != '') {
            output += ', Z3'
        }
        else output = ' Z3';
    }

    document.getElementById('res').innerText = output;
}
