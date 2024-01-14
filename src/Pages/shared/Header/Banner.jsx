
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
              
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )




    return (
        <div className=" ">
           
            <div>
            <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <img className="w-full" src="web.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
            <img className="w-full" src="video.jepg.jpg" alt="" />
        </div>
        
       
      </div>
            </div>
        </div>
    );
};

export default Banner;