// counter
$('.countfect').each(function(){var $this=$(this),countTo=$this.attr('data-num');delayTo=$this.attr('delay');if(!delayTo){delayTo=2000}$({countNum:$this.text()}).animate({countNum:countTo},{duration:delayTo,easing:'linear',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});

//navbar

const hamburger=document.querySelector('.nav-right-toggle');
const mid=document.querySelector('.nav-mid');
const hero=document.querySelector('.hero-section');
let isOpen=false;

hamburger.addEventListener('click',()=>{
    if(!isOpen){
        hamburger.src='./img/x.svg';
        isOpen=true;
        mid.style.display="block";
        mid.style.position="absolute";
        mid.style.display="flex";
        mid.style.flexDirection="column";
        hero.style.marginTop="100px";
        mid.style.top="70px";
        mid.style.left="200px";
        mid.style.fontSize="2rem";
        mid.style.fontWeight="500";

    }else{
        hamburger.src='./img/menu.svg';
        isOpen=false;
        hero.style.marginTop="0px";
        mid.style.display="none";
    }
    
});