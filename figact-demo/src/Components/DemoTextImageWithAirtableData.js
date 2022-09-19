import React from 'react'
import './DemoTextImageWithAirtableData.css'
import ImgAsset from '../public'
export default function DemoTextImageWithAirtableData () {
	return (
		<div className='DemoTextImageWithAirtableData_DemoTextImageWithAirtableData'>
			<div className='task08'>
				<div className='Group1'><div className='Ellipse1' style={{backgroundImage: `url(${ImgAsset.DemoTextImageWithAirtableData_Ellipse1})`}}/>
					<div className='Ellipse2'/>
				</div>
				<span className='name'>Username</span>
			</div>
		</div>
	)
}