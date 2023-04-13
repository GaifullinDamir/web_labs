'use strict'

window.addEventListener('DOMContentLoaded', () =>{
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tab = document.querySelector('.tabheader__items');

    class Phone{

        constructor(src, picW, picH, phoneName, memorySize, price, parentSelector, ...classes){
            this.src = src, 
            this.picW = picW,
            this.picH = picH,
            this.phoneName = phoneName,
            this.memorySize = memorySize,
            this.price = price,
            this.classes = classes,
            this.parent = document.querySelector(parentSelector);
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
                <p> <h3>${this.phoneName}<br>${this.memorySize}<br>${this.price}&#8381;</h3></p>
            `;
            return element;
        }
    }
    

        
    
    
});