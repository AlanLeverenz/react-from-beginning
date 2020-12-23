import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {bindActionCreators} from 'redux';
import './Modal.css';
import openModal from '../../actions/openModal';

function Modal(props){

    const dispatch = useDispatch();
    // const content = useSelector(state => state.siteModal.content);
    const siteModal = useSelector(state => state.siteModal);

    // const closeModal = ()=> {
    //     props.openModal('closed','');
    // }
    // in place of line 32:
    // <span onClick={this.closeModal} className="close">&times;</span>

        let modalInlineStyle;
        if(siteModal.openClose === "open"){
        // if(props.siteModal.openClose === "open"){
            modalInlineStyle = {display: 'block'}
        }else if(siteModal.openClose === "closed"){
        // }else if(props.siteModal.openClose === "closed"){
            modalInlineStyle = {display: 'none'};
        }

        return(
            <div className="site-modal" style={modalInlineStyle}>
                <div className="modal-content">
                    <div className="col right">
                        <span onClick={()=>dispatch(openModal('closed',''))} className="close">&times;</span>

                    </div>
                    <div className="">
                        {siteModal.content}
                    </div>
                </div>
            </div>
        )
    }


// function mapStateToProps(state){
//     return{
//         siteModal: state.siteModal
//     }
// }

// function mapDispatchToProps(dispatcher){
//     return bindActionCreators({
//         openModal: openModal
//     },dispatcher)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Modal)

export default Modal;
