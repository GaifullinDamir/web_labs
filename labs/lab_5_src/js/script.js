'use strict'

window.addEventListener('DOMContentLoaded', () =>{
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items'),
        tabContainer = document.querySelector('.tab__container');


    class Phone{

        constructor(src, picW, picH, phoneName, memorySize, price, ...classes){
            this.src = src, 
            this.picW = picW,
            this.picH = picH,
            this.phoneName = phoneName,
            this.memorySize = memorySize,
            this.price = price,
            this.classes = classes;
        }

        returnElement(){
            const element = document.createElement('div');

            if (this.classes.length === 0){
                element.classList.add('phone');
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src = ${this.src}  width = ${this.picW} height = ${this.picH} />
                <p>${this.phoneName}<br>${this.memorySize}<br>${this.price}&#8381;</p>
            `;
            return element;
        }
    }
    
    class Tab{
        constructor(parentSelector, phones, ...classes){
            this.parent = document.querySelector(parentSelector);
            this.phones = phones;
            this.classes = classes;
        }

        returnElement(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                element.classList.add('tabcontent');
            } else {
                this.classes.forEach(className => element.classList.add(className)); 
            }
            
            this.phones.forEach(phone =>{
                element.append(phone);
            })
            return element;
        }

        render(){
            this.parent.append(this.returnElement());
        }
    }

    const iphones = [
        new Phone("img\\iphone_14.jpg",
            "178px",
            "240px",
            "Apple Iphone 14",
            "128 GB",
            "72 590",
            "phone"
        ).returnElement(),

        new Phone("img\\iphone_13.jpg",
            "178px",
            "240px",
            "Apple Iphone 13",
            "128 GB",
            "75 990",
            "phone"
        ).returnElement(),

        new Phone("img\\iphone_11.jpg",
            "178px",
            "240px",
            "Apple Iphone 11",
            "64 GB",
            "42 490",
            "phone"
        ).returnElement(),

        new Phone("img\\iphone_se_2020.jpg",
            "160px",
            "250px",
            "Apple iPhone SE 2020",
            "64 GB",
            "30 995",
            "phone"
        ).returnElement()
    ];

    const samsungs = [
        new Phone("img\\samsung_galaxy_s23_ultra.jpg",
            "235px",
            "240px",
            "Samsung Galaxy S23 Ultra",
            "12/256Gb",
            "109 990",
            "phone"
        ).returnElement(),

        new Phone("img\\samsung_galazy_s23plus.png",
            "205px",
            "240px",
            "Samsung Galaxy S23+",
            "8/256GB",
            "99 990",
            "phone"
        ).returnElement(),

        new Phone("img\\samsung_galazy_zfold.jpg",
            "205px",
            "240px",
            "Samsung Galaxy Z Fold4",
            "12/256Gb",
            "152 990",
            "phone"
        ).returnElement(),

        new Phone("img\\galaxy_s20.jpg",
            "205px",
            "240px",
            "Samsung Galaxy S20 FE G780G",
            "6/128GB",
            "47 490",
            "phone"
        ).returnElement(),
    ]

    const honors = [
        new Phone("img\\honor_70.jpg",
            "180px",
            "240px",
            "HONOR 70",
            "8/256GB",
            "45 990",
            "phone"
        ).returnElement(),
        
        new Phone("img\\honor_50.jpg",
            "180px",
            "240px",
            "HONOR 50",
            "8/128GB",
            "39 990",
            "phone"
        ).returnElement(),

        new Phone("img\\honor_x8.jpg",
            "187px",
            "240px",
            "HONOR X8",
            "6/128GB",
            "19 990",
            "phone"
        ).returnElement(),

        new Phone("img\\honor_x6.jpg",
            "180px",
            "240px",
            "HONOR X6",
            "4/64GB",
            "9 990",
            "phone"
        ).returnElement(),
    ];

    const appleTab = new Tab('.tab__container', iphones, 'tabcontent');
    const samsungTab = new Tab('.tab__container', samsungs, 'tabcontent');
    const honorTab = new Tab('.tab__container', honors, 'tabcontent')

    const phoneTabs = [appleTab, samsungTab, honorTab];

    tabsParent.addEventListener('click', (e) =>{
        const target = e.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if (target == item) {
                    deleteTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    function deleteTabContent(){

        tabContainer.innerHTML = '';
        tabs.forEach(item => {
            item.classList.remove('active');
        })
    }

    function showTabContent(i = 0){
        
        tabs[i].classList.add('active');
        phoneTabs[i].render();
    }

    
});