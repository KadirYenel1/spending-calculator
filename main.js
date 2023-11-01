//inputlar
//ekle butonu
//listeleyen eleman

const harcamaInput = document.querySelector('#harcama');
const fiyatInput = document.querySelector('#fiyat');
const formBtn = document.querySelector('.ekle-btn');
const list = document.querySelector('.list');
const totalInfo = document.querySelector('#total-info');
const nameInput = document.getElementById("name-input");
//console.log(tatalInfo)



formBtn.addEventListener('click', addExpense);
//console.log('addExpense')

list.addEventListener("click", handleClick);


let toplam = 0
function updateToplam(fiyatBilgisi) {
    //console.log(fiyatBilgisi)
    toplam += Number(fiyatBilgisi);

    totalInfo.innerText = toplam

}

function addExpense(e) {

    e.preventDefault()
    //console.log('addExpense')
    if (!harcamaInput.value || !fiyatInput.value) {
        alert('tüm boş alanları doldurunuz')
        return
    }
    const harcamaDiv = document.createElement('div')
    harcamaDiv.classList.add('expense')
    harcamaDiv.innerHTML = ` 
    <h2 >${harcamaInput.value}</h2>
    <h2 id='value'>${fiyatInput.value}</h2>
    <div class="buttons">
        <img src="img/pay.png" alt="">
        <img id='remove' src="img/remove.png" alt="">
    </div>`



    list.appendChild(harcamaDiv)
    //console.log(harcamaDiv)

    updateToplam(fiyatInput.value)

    harcamaInput.value = '';
    fiyatInput.value = '';

}

function handleClick(e) {
    //console.log(e.target)

    //tıklanılan eleman genel e parametresının target özelliğindeir
    //tıklanılan elemanı değişkene atyıoruz
    let tiklanilanEleman = e.target;
    //tıklanılan elemeanın silme resmi ollduğunu tespit ediyoruz
    if (tiklanilanEleman.id === "remove") {
      
        const kapsayiciElement = (tiklanilanEleman.parentElement.parentElement);
        const deletedPrice=kapsayiciElement.querySelector('#value').innerText
        updateToplam(-Number(deletedPrice))
        kapsayiciElement.remove();
    }
}
