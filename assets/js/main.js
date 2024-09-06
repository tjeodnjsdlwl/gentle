

//스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)







//메뉴버튼

$('#header .menu-area a').click(function(e){
    e.preventDefault(); 
    $('.menu-more').addClass('show');
})
$('.menu-more .close').click(function(){
    $('.menu-more').removeClass('show');
})







//텍스트스크롤
const scrollTxt = new SplitType('.sc-text-scroll .txt', { types: 'words, chars', });


  gsap.to('.sc-text-scroll .char', {
    scrollTrigger: {
      trigger: '.sc-text-scroll',
      start: '0% 0%',
      end: '300%',
      scrub: true,
      pin:true,
    },
    duration:0,
    color:'#000',
    stagger:0.1,
  });



//이미지 스크롤

const horiMotion = gsap.to('.sc-card .card-list',{
    scrollTrigger: {
        trigger: '.sc-card',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        invalidateOnRefresh: true
        // markers:true,
      },
      ease:'none',
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }
})



//컬렉션

const swiper = new Swiper('.visual-slide', {
  direction: 'horizontal', // 'horizontal' or 'vertical'
  loop: true, // 루프 모드
  autoplay: {
      delay: 2000, // 슬라이드가 자동으로 전환되는 시간 (밀리초)
  },
  allowTouchMove: false, // 터치 이동 비활성화
  simulateTouch: false, // 터치 이벤트를 마우스 이벤트로 시뮬레이션하지 않음
  draggable: false, // 드래그 비활성화
  speed: 4000,
});






//이미지뷰

 gsap.from('.sc-view .view-group > div',{
     scrollTrigger:{
         trigger:".sc-view",
         start:"0% 0%",
         end:"100% 100%",
         scrub:0,
       },
         opacity:0,
         scale:0,
         "filter":"blur(20px)",
         stagger:{
             from:"random",
             each:0.1,
         }
 })


 //스쿨
 ScrollTrigger.create({
  trigger: ".sc-school",
  pin: true, // .sc-school 섹션을 고정
  pinSpacing: true,
});

 gsap.fromTo(".chat-group", 
 {
  yPercent: 100, // 시작 위치
 }, 
 {
  yPercent: 0, // 끝 위치
   scrollTrigger: {
     trigger: ".sc-school",
     start: "bottom bottom", // .sc-school의 끝이 뷰포트의 끝에 닿을 때 시작
     toggleActions: "play none none reverse", // 스크롤에 따라 애니메이션 재생 및 역재생
   }
 })


