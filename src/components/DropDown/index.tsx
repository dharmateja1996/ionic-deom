import styled from 'styled-components';
import {IonCol, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

import React from "react";
import './index.css'

// const dummyData = {
//   title: "Title",
//   data: [
//     { id: 1, value: "One" },
//     { id: 2, value: "Two" },
//     { id: 3, value: "Three" },
//     { id: 4, value: "Four" },
//     { id: 5, value: "Five" },
//   ],
// };
// interface data {
//   id:number,
//   value:string
// }

interface detailsProp {
   details: {
    title: string;
    data: {
        id: number;
        value: string;
    }[];
}
}




const DropDown: React.FC<any> = (props) => {

  



  console.log(props.details.title);
  
   
  return (
    <IonItemCustom className="ion-item-container">
      
      <IonLabelCustom >{props.details.title}</IonLabelCustom>
    
      <IonSelectCustom   interface='popover' value={props.details.data[0].value} placeholder="Select One" onIonChange={(e) => console.log(e.detail.value)}> 
        {props.details.data.map((each) => (
          <IonSelectOption key={each.id} value={each.value}>{each.value}</IonSelectOption>
        ))}
      </IonSelectCustom>
    </IonItemCustom>
  
   )
};

export default DropDown;


export const IonItemCustom = styled(IonCol)`
display: flex;
flex-direction: column;
justify-content: center;

`
export const IonLabelCustom = styled(IonLabel)`
font-size: 20px;
font-weight: 600;

`
  
export const IonSelectCustom = styled(IonSelect)`
padding-left: 0px;
border: 0.3px solid #aaadab;
width: 100%;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
 
`
