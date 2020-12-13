import './ImageLinkForm.css'

const  ImageLinkForm = ({onInputChange, onButtonSubmit}) => { 
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces and your pictures. GIve it a try!'}
            </p>
            <div className='center'>
                <div className='pa4 center br3 shadow-5 form'>
                    <input className='f4 pa2 w-70 center' type ='tex' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    > Detect</button>
                
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
