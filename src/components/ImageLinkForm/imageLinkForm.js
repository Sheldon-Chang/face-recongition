import React from 'react';
import './imageLinkForm.css'

const ImageLinkForm = ({onInputChange,onButtonSubmit})=>{
	return (                             //because tacyon center is margin : 0 auto , so the inner div will resize to smaller one
		<div>
			<p className='f5'>
				{'This magic brain will detect face in picture , give it a try'}
			</p> 
			<div className=' center'>
				<div className=' form br3 pa4 shadow-5 center'>
					<input className='f4 pa2 w-70 ' type='tex' onChange={onInputChange}  />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
					onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);															//onchange is DOM event
}

export default ImageLinkForm;