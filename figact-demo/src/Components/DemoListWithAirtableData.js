import React from 'react'
import './DemoListWithAirtableData.css'
import ImgAsset from '../public'
export default function DemoListWithAirtableData () {
	return (
		<div className='DemoListWithAirtableData_DemoListWithAirtableData'>
			<div className='List'>
				{[{}].map((item) => (
					<div className='_Item'>
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
							<span className='abc'>Morbius</span>
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