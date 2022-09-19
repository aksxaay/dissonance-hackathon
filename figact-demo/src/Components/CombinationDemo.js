import React, { useState, useEffect } from 'react'
import './CombinationDemo.css'
import ImgAsset from '../public'
import Carousel from 'react-elastic-carousel'
export default function CombinationDemo () {
	const [CarouselState, setCarouselState] = useState('')
	const [text_Input, setText_Input] = useState('')
	return (
		<div className='CombinationDemo_CombinationDemo'>
			<div className='Frame6'>
				<div className='Frame1'>
					<span className='CATEGORY'>CATEGORY</span>
				</div>
				<div className='Frame8'>
					<span className='NATION'>NATION</span>
				</div>
				<div className='Frame9'>
					<span className='MOVIES'>MOVIES</span>
				</div>
				<div className='Frame10'>
					<span className='SERIESMOVIE'>SERIES MOVIE</span>
				</div>
				<div className='Frame11'>
					<span className='CINEMAS'>CINEMAS</span>
				</div>
				<div className='Frame12'>
					<span className='COMMINGSOON'>COMMING SOON</span>
				</div>
			</div>
			<div className='Frame4'>
				<img className='image31' src = {ImgAsset.CombinationDemo_image31} />
				<img className='image35' src = {ImgAsset.CombinationDemo_image35} />
				<img className='image23' src = {ImgAsset.CombinationDemo_image23} />
				<img className='image33' src = {ImgAsset.DemoCarouselWithAirtableData_abc} />
				<img className='image34' src = {ImgAsset.CombinationDemo_image34} />
				<span className='SonictheHedgehog2'>Sonic the Hedgehog 2</span>
				<span className='MoonKnight'>Moon Knight</span>
				<span className='SpiderManNoWayHome'>Spider-Man: No Way Home</span>
				<span className='OnePiece'>One Piece</span>
				<span className='AttackonTitan'>Attack on Titan</span>
				<span className='Batman'>Batman</span>
				<img className='image29' src = {ImgAsset.CombinationDemo_image29} />
			</div>
			<div className='Frame'>
				<img className='Vector' src = {ImgAsset.CombinationDemo_Vector} />
			</div>
			<span className='CAROUSEL'>CAROUSEL</span>
			<div className='Carousel'>
				<div className='_Left' onClick={CarouselState.slidePrev}>
					<img className='Vector_2' src = {ImgAsset.CombinationDemo_Vector_2} />
				</div>
				<div className='_Right' onClick={CarouselState.slideNext}>
					<img className='Vector_1' src = {ImgAsset.CombinationDemo_Vector_1} />
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
			<span className='LISTRIGHT'>LIST RIGHT</span>
			<img className='image30' src = {ImgAsset.CombinationDemo_image31} />
			<div className='Rectangle23'/>
			<button className='_Button' onClick={()=>console.log("Click")}>
				<span className='ReviewNow'>Review Now</span>
				<div className='Frame_1'>
					<img className='Vector_3' src = {ImgAsset.CombinationDemo_Vector_3} />
				</div>
			</button>
			<span className='SonictheHedgehog2_1'>Sonic the Hedgehog 2</span>
			<span className='Netflix'>Netflix</span>
			<div className='task08'>
				<div className='Group1'><div className='avt' style={{backgroundImage: `url(${ImgAsset.DemoTextImageWithAirtableData_Ellipse1})`}}/>
					<div className='Ellipse2'/>
				</div>
				<span className='username'>Username</span>
			</div>
			<div className='Group5'>
				<span className='ReviewFilm'>Review Film</span>
				<div className='mdigamepadcircle'>
					<img className='Vector_4' src = {ImgAsset.CombinationDemo_Vector_4} />
				</div>
			</div>
			<div className='Rectangle49'/>
			<span className='BANNER250x750'>BANNER<br/>250 x 750</span>
			<div className='Rectangle51'/>
			<span className='BANNER250x750_1'>BANNER<br/>250 x 750</span>
			<div className='Inputwithicon'>
				<div className='Frame_2'>
					<img className='Vector_5' src = {ImgAsset.CombinationDemo_Vector_5} />
				</div>
				<input className='_Input' type='text' placeholder='Search' value={text_Input} onChange={(val) => {setText_Input(val.target.value)}}/>
			</div>
			<div className='Frame13'>
			</div>
			<div className='List'>
				{[{}].map((item) => (
					<div className='_Item_1'>
						<div className='Thumbnail'>
							<div className='ThumbnailImages'>
								<div className='ThumbnailImages_1'>
									<img className='img' src = {ImgAsset.DemoListWithAirtableData_img} />
								</div>
								<div className='VideoTime'>
									<span className='VideoTime_1'>23:45</span>
								</div>
							</div>
						</div>
						<div className='VideoText'>
							<span className='abc_1'>Morbius</span>
							<div className='ChannelDesc'>
								<div className='channelName'>
									<span className='JamesGouse'>James Gouse</span>
								</div>
								<div className='Channelviews'>
									<span className='_1Mviews3yearsago'>1M views . 3 years ago</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}