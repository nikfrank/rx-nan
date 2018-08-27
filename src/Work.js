import React, {Component} from 'react';
import Modal from 'react-modal';
import typewriter from './typewriter.jpg';

const modalStyle = {
  display: 'flex',
  maxWidth: '30%',
  maxHeight: '15%',
  top: '30%',
  left: '35%',
  borderRadius: '5px',
  maxWidth: '200px',
  height: '250px',
  ocacity: 1,
}

const website_design = 1;

class Work extends Component {

  state = {
    readMore: false,
  };
  
   setReadMore = (website_design) => {  
    this.setState((state) => ({
      readMore: website_design || false,    
    }) )
  };

  
  render() {
    console.log(this.state)
    return(
      <div className='page'>

        <img src={typewriter} onClick={()=>this.setReadMore(true)}/>
        
        <Modal
          style={this.modalStyle}
          shouldCloseOnOverlayClick={true}
          onRequestClose={()=>this.setReadMore()}
          isOpen={!!this.state.readMore}>
          <div>
            <button className='btn btn-default'
                    onClick={()=>this.setReadMore()}>Close</button>
          </div>
        </Modal>
        
      </div>

    );
  }
}
export default Work;
