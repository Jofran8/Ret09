import React from 'react'
import {Carousel} from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://static.euronews.com/articles/stories/06/42/37/28/1440x810_cmsv2_59ffdc01-1de6-5ef0-b0e3-f3b730d88777-6423728.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://imagenes.elpais.com/resizer/Cf9ToA08jg5E9YkFGxQ5ZpiM_8o=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IH5KVCMBONHHNPSDU2ESSNMZYY.jpg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static4.abc.es/media/ciencia/2020/04/15/pilares-creacion-kPxC--1248x698@abc.jpg"
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
                
            </Carousel>
        </>
    )
}

export default HeroSlider