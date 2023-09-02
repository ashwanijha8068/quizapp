import React from 'react';
import { useGlobalContext } from '../Context/Context';
import { FaCoins, FaShare } from 'react-icons/fa';
import trophy from './t.png';

const Modal = () => {
  const { modal, closeModal, correct, questions } = useGlobalContext();

  return (
    <>
      <div className={`modal-container ${modal ? 'isOpen' : ''}`}>
        <div className="image-container">
          <img src={trophy} alt="Trophy" />
        </div>
        <div className="modal-content">
          <h2>congrats</h2>
          <p>
            Your score<br />
            <span className="bold" style={{ color: 'green' }}>{correct}</span> / <span className="bold">{questions.length}</span>
          </p>
          <p>
            <FaCoins className="coins-icon" /> Earned Coins: <span className="coins">{((correct / questions.length) * 100 * 5).toFixed(0)}</span>
          </p>
          <div className="button-container">
          <button className="close-btn  share-btn">
            Share Your Score
            </button>
            <button className="close-btn" onClick={closeModal}>
              Play again
            </button>
            
          </div>
          </div>
          
        
      </div>
    </>
  );
};

export default Modal;
