import React from 'react';
import './imageLinkForm.css'

const ImageLinkForm = ()=>{
	return (                             //because tacyon center is margin : 0 auto , so the inner div will resize to smaller one
		<div>
			<p className='f3'>
				{'This magic brain will detect face in picture , give it a try'}
			</p> 
			<div className=' center'>
				<div className=' form br3 pa4 shadow-5 center'>
					<input className='f4 pa2 w-70 ' type='tex'/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;