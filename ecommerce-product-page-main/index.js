const btn = document.querySelector(".btn");
const toggle = document.querySelector(".toggle");
const togglebackground = document.querySelector(".togglebackground");
const menu = document.querySelector(".menu");
const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");
const decrease=document.querySelector('.decrease')
const increase=document.querySelector('.increase');
const value =document.getElementById('value')
const cart =document.querySelector('.cart')
const showcart=document.querySelector('.showcart')
const addtocart=document.querySelector('.addtocart');
const notempty=document.querySelector('.notempty')
const main=document.querySelector('.main')
const empty=document.querySelector('.empty')
const shadow = document.querySelector('#shadow')
const image=document.querySelectorAll('.image')
const image1=document.querySelector('.image1')
const image2=document.querySelector('.image2')
const image3 =document.querySelector('.image3')
const image4=document.querySelector('.image4')



const showcartitems=document.querySelector('.showcartitems')
// const empty=document.querySelector('.empty')
let counter = 0;

menu.addEventListener("click", () => {
  toggle.classList.add("add");
  shadow.classList.add('active')
});

btn.addEventListener("click", () => {
  toggle.classList.remove("add");
  shadow.classList.remove('active')
});

//mobile slider

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
next.addEventListener("click", () => {
  counter++;
  carousel();
});

prev.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

increase.addEventListener('click',()=>{
  let val = value.textContent
    val++
    value.textContent = val
})

decrease.addEventListener('click',()=>{
let val = value.textContent
val--
if (val<0){
  val = 0
}
value.textContent = val
    
})

cart.addEventListener('click',(e)=>{
    showcart.classList.toggle('addshow')
    e.stopPropagation()
})
const cartnumber=document.querySelector('.cartnumber')
addtocart.addEventListener('click',()=>{
  
  if(value.textContent>0) {
    let number = value.textContent
    cartnumber.innerHTML=number;
    cartnumber.classList.add('active3')
    number = parseInt(number)
    updatecart(number)
  } else {
    return
  }  
})


const updatecart=(number)=>{
  const empty=document.querySelector('.empty')
  if(empty){
    empty.remove()
    
const button=document.createElement('button');
button.innerHTML=`<p'> checkout </p>`;
button.classList.add('cartbutton');
const element=document.createElement('div')
element.classList.add('cart-not-empty');
element.innerHTML=`<article class="not-empty-items">
<img class="img" src="/ecommerce-product-page-main/images/image-product-1.jpg" alt="">
<div class="items">
  <p class='falllimited'> fall limited edition sneakers</p>
  <p>$125.00 x <span id='kza'>${number}</span>  <span class='dollarprice'> $${number*125}.00</span></p> 
</div>
<img class="delete" src="images/icon-delete.svg" alt="deletebtn">
</article>
`
notempty.appendChild(element)
notempty.appendChild(button)
value.textContent=0;

  } 
  else{
    
const old = document.querySelector('.cart-not-empty')
let a = document.querySelector('#kza').textContent.slice(1)
a = parseInt(a)
const element=document.createElement('div');
element.classList.add('cart-not-empty');
element.innerHTML=`<article class="not-empty-items">
<img class="img" src="/ecommerce-product-page-main/images/image-product-1.jpg" alt="">
<div class="items">
  <p> fall limited edition sneakers</p>
  <p>$125.00 x <span id='kza'>${a +number}</span>  <span>$${(a+number)*125}.00</span></p> 
</div>
<img class="delete" src="/ecommerce-product-page-main/images/icon-delete.svg" alt="">
</article>
`


notempty.replaceChild(element, old)
value.textContent=0

  }


}

main.addEventListener('click',(e)=>{

  if(e.target.classList.contains('delete')){
    
    notempty.innerHTML = '';
    const element = document.createElement('p')
    element.classList.add('empty')
    element.textContent = 'Your cart is empty'
    showcartitems.insertBefore(element, notempty)
    e.stopPropagation()
  }

})


window.addEventListener('click',()=>{
    showcart.classList.remove('addshow')

})

window.addEventListener('scroll',()=>{
  showcart.classList.remove('addshow')
})

shadow.addEventListener('click',()=>{
  toggle.classList.remove("add");
  shadow.classList.remove('active')
})

const divthumb=document.querySelectorAll('.divthumb img')
const thumbarray=[...divthumb]

t1=document.querySelector('.thumb1');
t2=document.querySelector('.thumb2');
t3=document.querySelector('.thumb3');
t4=document.querySelector('.thumb4');

t1.addEventListener('click',(e)=>{
  
  thumbarray.forEach((slide)=>{
    slide.classList.remove('active1')
  })
  e.target.classList.add('active1')
  image4.style.display='none'
  image2.style.display='none'
  image3.style.display='none'
  image1.style.display='block'
  
  
})

t2.addEventListener('click',(e)=>{
 
  thumbarray.forEach((slide)=>{
    slide.classList.remove('active1')
  })
  e.target.classList.add('active1')
  image1.style.display='none'
  image3.style.display='none'
  image4.style.display='none'
  image2.style.display='block'
   
})



t3.addEventListener('click',(e)=>{

  thumbarray.forEach((slide)=>{
    slide.classList.remove('active1')
  })
  
  e.target.classList.add('active1')
  image1.style.display='none'
  image2.style.display='none'
  image3.style.display='block'
  image4.style.display='none'
})

t4.addEventListener('click',(e)=>{


  thumbarray.forEach((slide)=>{
    slide.classList.remove('active1')
  })
  e.target.classList.add('active1')
  image1.style.display='none'
  image2.style.display='none'
  image3.style.display='none'
  image4.style.display='block'
})

const images=document.querySelector('.images')
images.addEventListener('click',(e,index)=>{

  modal.style.visibility='visible';
})

image.forEach((slide,index)=>{
slide.addEventListener('click',()=>{
  counter=index
  sliders.forEach((slide)=>{
    slide.style.transform=`translateX(-${counter *100}%)`
  });
  thumbsarray.forEach((slide,index)=>{
    slide.classList.remove('active1')
    if(index===counter){
      slide.classList.add('active1')
    }


  })
  
  })
  
})
const divthumbs=document.querySelectorAll('.divthumbs')
const divthumbscontainer=[...divthumbs]

const prevbtn=document.querySelector('.prevbtn');
const nextbtn=document.querySelector('.nextbtn');

prevbtn.addEventListener('click',(e)=>{
  counter--
  modalcarousel();
  thumbsarray.forEach((slide,index)=>{
    if(counter===index){
    slide.classList.add('active1')
    
    }
    if(counter!==index){
      slide.classList.remove('active1')
    }
    
    
      
      });

    
    })
  


nextbtn.addEventListener('click',(e)=>{
  counter++
  modalcarousel()
  thumbsarray.forEach((slide,index)=>{
    if(counter===index){
    slide.classList.add('active1')
    
    
    
    }
    if(counter!==index){
      slide.classList.remove('active1')
  
    }
    
    
      
      });
})

const sliders=document.querySelectorAll('.slider');

sliders.forEach((slide,index)=>{

  slide.style.left=`${index*100}%`
})

const modalcarousel =()=>{
  if(counter===sliders.length){
    counter=0
  }

  if(counter<0){
    counter=sliders.length-1;
  }

  sliders.forEach((slide)=>{
    slide.style.transform=`translateX(-${counter *100}%)`
  });
  
}

const thumbs=document.querySelectorAll('.divthumbs img')
thumbsarray=[...thumbs]

thumbsarray.forEach((slide,index)=>{
  slide.addEventListener('click',()=>{
    counter=index
    sliders.forEach((slide)=>{
      slide.style.transform=`translateX(-${counter *100}%)`
    });
  })
})


d1=document.querySelector('.thumbs1');
d2=document.querySelector('.thumbs2');
d3=document.querySelector('.thumbs3');
d4=document.querySelector('.thumbs4');


d1.addEventListener('click',(e)=>{

  d1.classList.add('active1')
  d2.classList.remove('active1')
  d3.classList.remove('active1')
  d4.classList.remove('active1')

})


d2.addEventListener('click',(e)=>{
  d2.classList.add('active1');
  d3.classList.remove('active1');
  d4.classList.remove('active1')
  d1.classList.remove('active1')
})
d3.addEventListener('click',(e)=>{
  d2.classList.remove('active1');
  d3.classList.add('active1');
  d4.classList.remove('active1')
  d1.classList.remove('active1')
})
d4.addEventListener('click',(e)=>{
 thumbsarray.forEach((slide)=>{
  slide.classList.remove('active1');
  e.target.classList.add('active1')
 })
})


const modal=document.querySelector('.modal')
const closemodal=document.querySelector('.closemodal');
closemodal.addEventListener('click',()=>{
modal.style.visibility='hidden';

})

