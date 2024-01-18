
//gsap loop animation for experience logo circles

let experiencetl = gsap.timeline({repeat: -1,});
experiencetl.to(".logo-wrap img:nth-child(1)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 1,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(4)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 1,
        },0)
experiencetl.to(".logo-wrap img:nth-child(2)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 3,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(5)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 3,
        },0)
experiencetl.to(".logo-wrap img:nth-child(3)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 5,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(6)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 5,
        },0)
experiencetl.to(".logo-wrap img:nth-child(4)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 7,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(7)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 7,
        },0)
experiencetl.to(".logo-wrap img:nth-child(5)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 9,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(8)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 9,
        },0)
experiencetl.to(".logo-wrap img:nth-child(6)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 11,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(9)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 11,
        },0)
experiencetl.to(".logo-wrap img:nth-child(7)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 13,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(10)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 13,
        },0)
experiencetl.to(".logo-wrap img:nth-child(8)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 15,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(11)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 15,
        },0)
experiencetl.to(".logo-wrap img:nth-child(9)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 17,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(12)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 17,
        },0)
experiencetl.to(".logo-wrap img:nth-child(10)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 19,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(13)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 19,
        },0)
experiencetl.to(".logo-wrap img:nth-child(11)", {
  width: '0vw', height: '0vw', ease: "power4.inOut", duration: 1, delay: 21,
  },0)
      experiencetl.to(".logo-wrap img:nth-child(14)", {
        width: '12vw', height: '12vw', ease: "power4.inOut", duration: 1, delay: 21,
        },0)
;




<div class="experience-logos">

<div class="logo-wrap">

  <img src="assets/logos/Nike.svg" alt="" style="background-color: #202121;">
  <img src="assets/logos/Guernsey Electricity.svg" alt="" style="background-color: #002F6B;">
  <img src="assets/logos/Aurigny.svg" alt="" style="background-color: #FFD100;">
  <img class="shrunk" src="assets/logos/We Are Social.svg" alt="" style="background-color: #FF0029;">
  <img class="shrunk" src="assets/logos/Now.svg" alt="" style="background-color: #006D74;">
  <img class="shrunk" src="assets/logos/Trust Corporation Intl.svg" alt="" style="background-color: #0078C6;">
  <img class="shrunk" src="assets/logos/HSBC.svg" alt="" style="background-color: #F00000;">
  <img class="shrunk" src="assets/logos/Starbucks.svg" alt="" style="background-color: #006638;">
  <img class="shrunk" src="assets/logos/Close Finance.svg" alt="" style="background-color: #0069B9;">
  <img class="shrunk" src="assets/logos/Electric Living.svg" alt="" style="background-color: #00C586;">
  <img class="shrunk" src="assets/logos/Coreix.svg" alt="" style="background-color: #47CAC9;">

  <img class="shrunk" src="assets/logos/Nike.svg" alt="" style="background-color: #202121;">
  <img class="shrunk" src="assets/logos/Guernsey Electricity.svg" alt="" style="background-color: #002F6B;">
  <img class="shrunk" src="assets/logos/Aurigny.svg" alt="" style="background-color: #FFD100;">
  

</div>

</div>



<style>
.experience-cycle, .experience-logos {
  flex: 50%;
  height: 400px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0,0);
}

.experience-logos {
  display: none;
}

.experience-logos img {
  flex: 0 1 12vw;
  width: 12vw;
  height: 12vw;
  border-radius: 400px;
  background-color: rgba(0,0,0,0)!important;
}

.experience-logos img.shrunk {
  width: 0vw;
  height: 0vw;
}

.logo-wrap {
  display: flex;
  overflow: hidden;
  width: 36vw;
  height: 12vw;
  border-radius: 400px;
  align-items: center;
}

</style>