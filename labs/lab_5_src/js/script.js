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

    const appleTab = new Tab('.tab__container', iphones, 'tabcontent');
    const phoneTabs = [appleTab];

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