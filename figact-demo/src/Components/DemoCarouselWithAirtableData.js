import React, { useState, useEffect } from 'react'
import './DemoCarouselWithAirtableData.css'
import ImgAsset from '../public'
import Carousel from 'react-elastic-carousel'
export default function DemoCarouselWithAirtableData () {
	const [CarouselState, setCarouselState] = useState('')
	const [Carousel_1State, setCarousel_1State] = useState('')
	return (
		<div className='DemoCarouselWithAirtableData_DemoCarouselWithAirtableData'>
			<div className='Carousel'>
				<div className='_Left' onClick={CarouselState.slidePrev}>
					<img className='Vector_1' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_1} />
				</div>
				<div className='_Right' onClick={CarouselState.slideNext}>
					<img className='Vector' src = {ImgAsset.DemoCarouselWithAirtableData_Vector} />
				</div>
					<Carousel pagination={true} showArrows={false} ref={ref => (setCarouselState(ref))} itemsToShow={4}>{[{}].map((item) => (
						<div className='_Item'>
							<span className='film_name'>Spider-Man: No Way Home</span>
							<span className='Youtube'>Disney+</span>
							<img className='abc' src = {ImgAsset.DemoCarouselWithAirtableData_abc} />
						</div>
					))}
				</Carousel>
			</div>
			<span className='CAROUSELWITHPAGINATION'>CAROUSEL WITH PAGINATION</span>
			<div className='Carousel_1'>
				<div className='_Left_1' onClick={Carousel_1State.slidePrev}>
					<img className='Vector_3' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_3} />
				</div>
				<div className='_Right_1' onClick={Carousel_1State.slideNext}>
					<img className='Vector_2' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_2} />
				</div>
					<Carousel pagination={false} showArrows={false} ref={ref => (setCarousel_1State(ref))} itemsToShow={4}>{[{}].map((item) => (
						<div className='_Item_1'>
							<span className='film_name_1'>Spider-Man: No Way Home</span>
							<span className='Youtube_1'>Disney+</span>
							<img className='abc_1' src = {ImgAsset.DemoCarouselWithAirtableData_abc} />
						</div>
					))}
				</Carousel>
			</div>
			<span className='CAROUSELWITHOUTPAGINATION'>CAROUSEL WITHOUT PAGINATION</span>
		</div>
	)
}