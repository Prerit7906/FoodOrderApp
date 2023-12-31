import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backdrop=props=>{
    return (<div className={classes.backdrop} onClick={props.OnCloseButton}/>);
};
const Overlay=props=>{ 
    return (
    <div className={classes.modal}>
        <div className={classes.comtent}>{props.children}</div>
    </div>
    );
};
const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop OnCloseButton={props.OnCloseButton}/>,document.getElementById('overlays'))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlays'))}
    </>
  )
}

export default Modal