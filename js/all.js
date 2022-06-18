let plan=[
    [
        {people:10000, price:600},
        {people:15000, price:500},
        {people:20000, price:400},
        {people:25000, price:300},
        {people:'>25000', price:100}
    ],[
        {people:10000, price:'1,600'},
        {people:15000, price:'1,500'},
        {people:20000, price:'1,400'},
        {people:25000, price:'1,300'},
        {people:'>25000', price:'1,000'}
   ]
];

let btn = document.querySelectorAll('.program-number-btn');
let basicNumber = document.querySelector('#basicNumber');
let basicTWD = document.querySelector('#basicTWD');
let standardNumber = document.querySelector('#standardNumber');
let standardTWD = document.querySelector('#standardTWD');

if(btn.length !== 0){
    for(i=0;i<5;i++){
        let basicPeople = plan[0][i].people;
        let basicPrice = plan[0][i].price;
        let standardPeople = plan[1][i].people;
        let standardPrice = plan[1][i].price;
        btn[i].addEventListener('click',function(){
            basicNumber.innerHTML = basicPeople + `<sub class="section-equal-card-sub">位</sub>`;
            basicTWD.innerHTML = basicPrice + `<sub class="section-equal-card-TWD">TWD</sub>`;
            standardNumber.innerHTML = standardPeople + `<sub class="section-equal-card-sub">位</sub>`;
            standardTWD.innerHTML = standardPrice + `<sub class="section-equal-card-TWD">TWD</sub>`;
        })
    }
}

$(function () {
    $('#top-btn').on('click',function(){
        $('html').animate({
            scrollTop:0
        },300)
    })
    
    $('.header-logo>h1>a').attr('href','index.html')
    $('.qa-q-minus').on('click',function(){
        $('.qa-large-ans').slideToggle(100);
        $('.qa-q').toggleClass('qa-large-title')
    })

    $('.qa').on('click',function(e){
        let title = e.target.closest('.qa').childNodes[1];
        let answer = e.target.closest('.qa').childNodes[3]
        let img = $(this).find('.qa-img');
        if(img.attr('src')==='img/icon_plus.svg'){
            $(img).attr('src','img/icon_minus.svg')
        }else{
            $(img).attr('src','img/icon_plus.svg')
        }
        $(answer).slideToggle(100);
        $(title).toggleClass('qa-large-title');
    })

    $('.program-number-btn').on('click',function(e){
            $('.program-number-btn').removeClass('number-btn-active')
            $(e.target).addClass('number-btn-active')
    })
});
