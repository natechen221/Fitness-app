import React from 'react';
import '../styles/daySelect.css'
// import woman from "../Assets/woman.jpg"

export default function DaySelectContainer(props) {
  return (
    <div className="">
      <div className="infoText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor a libero vel ultricies. Donec mollis tellus id consequat ultrices. Nullam a pretium sem, a venenatis mi. Proin maximus, velit vel tincidunt aliquet, sem lacus tempor sapien, non porta risus libero at nulla. Integer scelerisque nisl non fermentum eleifend. Ut condimentum nunc a ligula 
      </div>
      <div className="tabs is-centered is-fullwidth is-boxed">
      <ul>
        {props.daysOfWeekList.map( (dayOfWeekListItem, index) => (
          <li
            key={index}
            className={props.dayOfWeek === dayOfWeekListItem ? "is-active" : null}
            onClick={() => props.setDayOfWeek(dayOfWeekListItem)}
          >
            <a>{dayOfWeekListItem.substring(0,3)}</a>
          </li>
        ))}
      </ul>
    </div>
    
    </div>

    
  );
}