import React from 'react';

export default class Create extends React.Component {
  render() {
    return (
      <form className=' form row justify-center align-self' action="">
      <div className="form-border row flex-direction-column text-align ">
        <div className="form-action">
          <h3>Create New Move Set</h3>
        </div>
        <div className="row flex-direction-column align-center ">
          <label htmlFor="name">Character Name:</label>
          <input
            className="name-label text-align"

            name="name"
            id="name"
          />
        </div>
        <div className="form-data row flex-direction-column align-center text-align">
          <label htmlFor="categoryId">Move Category</label>
          <select className='text-align' name="categoryId" id="categoryId">
            <option value="">Select an Option</option>
            <option value="">Basic Attacks</option>
            <option value="">Combo Attacks</option>
            <option value="">Special Moves</option>
            <option value="">Character Power</option>
          </select>
          <div className='row flex-direction-column'>
            <label htmlFor="move-name">Move Name:</label>
            <input className='text-align' id='move-name' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="input">Input:</label>
            <input className='text-align' id='input' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="move-type">Move Type:</label>
            <input className='text-align' id='move-type' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="damage">Damage:</label>
            <input className='text-align' id='damage' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="move-name">Move Name:</label>
            <input className='text-align' id='move-name' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="block-damage">Block Damage:</label>
            <input className='text-align' id='block-damage' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="start-up">Start-Up:</label>
            <input className='text-align' id='start-up' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="recover">Active:</label>
            <input className='text-align' id='recover' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="block-adv">Block Adv:</label>
            <input className='text-align' id='block-adv' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="hit-adv">Hit Adv:</label>
            <input className='text-align' id='hit-adv' />
          </div>
          <div className='row flex-direction-column'>
            <label htmlFor="cancel">Cancel:</label>
            <input className='text-align' id='cancel' />
          </div>
        </div>
        <div className='row submit-data flex-end'>
              <input type="submit" name="" id="" />
</div>
      </div>
</form>
    );
  }
}
