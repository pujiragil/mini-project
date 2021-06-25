const input = document.querySelectorAll('.jumlah');
const btnBuy = document.querySelectorAll('.btn');
const jumlah = [null, null, null, null];
const buyNow = document.querySelector('.buynow');
// first btn
btnBuy[0].addEventListener('click', () => {
    if(input[0].value.length == 0) {
        swal({
            text: "Mohon isi jumlah item",
            icon: "warning"
        });
    }else {
        jumlah[0] = parseInt(input[0].value);
        input[0].disabled = true;
        input[0].style.backgroundColor = "#eee";
        input[0].style.border = "2px solid #eee";
        swal({
            text: "Pesanan telah ditambahkan",
            icon: "success"
        });
    }
});



// second btn
btnBuy[1].addEventListener('click', () => {
    if(input[1].value.length == 0) {
        swal({
            text: "Mohon isi jumlah item",
            icon: "warning"
        });
    }else {
        jumlah[1] = parseInt(input[1].value);
        input[1].disabled = true;
        input[1].style.backgroundColor = "#eee";
        input[1].style.border = "2px solid #eee";
        swal({
            text: "Pesanan telah ditambahkan",
            icon: "success"
        });
    }
});

// third btn
btnBuy[2].addEventListener('click', () => {
    if(input[2].value.length == 0) {
        swal({
            text: "Mohon isi jumlah item",
            icon: "warning"
        });
    }else {
        jumlah[2] = parseInt(input[2].value);
        input[2].disabled = true;
        input[2].style.backgroundColor = "#eee";
        input[2].style.border = "2px solid #eee";
        swal({
            text: "Pesanan telah ditambahkan",
            icon: "success"
        });
    }
});

// fourth btn
btnBuy[3].addEventListener('click', () => {
    if(input[3].value.length == 0) {
        swal({
            text: "Mohon isi jumlah item",
            icon: "warning"
        });
    }else {
        jumlah[3] = parseInt(input[3].value);
        input[3].disabled = true;
        input[3].style.backgroundColor = "#eee";
        input[3].style.border = "2px solid #eee";
        swal({
            text: "Pesanan telah ditambahkan",
            icon: "success"
        });
    }
});

// Beli sekarang
buyNow.addEventListener('click', () => {
    const hotDog = jumlah[0] != null ? jumlah[0] * 10000 : '';
    const burger = jumlah[1] != null ? jumlah[1] * 12000 : '';
    const sushi = jumlah[2] != null ? jumlah[2] * 20000 : '';
    const pizza = jumlah[3] != null ? jumlah[3] * 15000 : '';
    const total = !null ? hotDog + burger + sushi + pizza : '';
    console.log(hotDog, burger, sushi, pizza, total);
    swal({
        text: "Pesanan berhasil dijumlahkan",
        icon: "success"
    });

    const one = jumlah[0] != undefined ? 'x'+jumlah[0] : '';
    const two = jumlah[1] != undefined ? 'x'+jumlah[1] : '';
    const three = jumlah[2] != undefined ? 'x'+jumlah[2] : '';
    const four = jumlah[3] != undefined ? 'x'+jumlah[3] : '';
    document.querySelector('.hasil').innerHTML = `
        <div class="bg-hasil">
            <h3>Jumlah Pembayaran</h3>
            <div class="list-item">
                <div class="source">
                    <p class="sub">item</p>
                    <p class="sub">harga</p>
                </div>
                <div class="source">
                    <p>Hot Dog ${one}</p>
                    <p>Rp. ${hotDog}</p>
                </div>
                <div class="source">
                    <p>Burger  ${two}</p>
                    <p>Rp. ${burger}</p>
                </div>
                <div class="source">
                    <p>Sushi    ${three}</p>
                    <p>Rp. ${sushi}</p>
                </div>
                <div class="source">
                    <p>Pizza    ${four}</p>
                    <p>Rp. ${pizza}</p>
                </div>
                <div class="source">
                    <p class="sub">Total</p>
                    <p>Rp. ${total}</p>
                </div>
            </div>
            <p class="foot">Terimakasih</p>
        </div>
    `; 
});