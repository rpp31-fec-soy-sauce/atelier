import React from "react";
import { ModalStar, Compare, Products, Row } from "../styles/Card";

const Modal = ({showModal, setShowModal, modalData}) => {

  console.log('THIS IS MODAL DATA: ', modalData)

  return (
    <>
    {showModal ? (<div style={{width: '400px'}}>
                  <Compare>Comparing</Compare>
                  <Products>
                    <div>{modalData.currentProduct.name}</div>
                    <div>{modalData.clickedProduct.name}</div>
                  </Products>
                  <div>
                    <Row>
                      {modalData.currentProduct.rating > modalData.clickedProduct.rating ?
                        <>
                          <div>&#10003;</div>
                          <div>Higher Rating</div>
                          <div></div>
                        </>
                      :
                        <>
                          <div>Higher Rating</div>
                          <div>&#10003;</div>
                          <div></div>
                        </>
                      }
                    </Row>
                  </div>
                </div>) : null}
    </>
  );
};

export default Modal;