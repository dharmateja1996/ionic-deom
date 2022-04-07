import styled from "styled-components";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DropDown from "../components/DropDown";

import "./Home.css";

const Home: React.FC = () => {
  const dummyDataBranch = {
    title: "Branch",
    data: [
      { id: 1, value: "One" },
      { id: 2, value: "Two" },
      { id: 3, value: "Three" },
      { id: 4, value: "Four" },
      { id: 5, value: "Five" },
    ],
  };

  const dummyDataDistrict = {
    title: "District",
    data: [
      { id: 1, value: "One" },
      { id: 2, value: "Two" },
      { id: 3, value: "Three" },
      { id: 4, value: "Four" },
      { id: 5, value: "Five" },
    ],
  };

  const dummyDataBlock = {
    title: "Block",
    data: [
      { id: 1, value: "One" },
      { id: 2, value: "Two" },
      { id: 3, value: "Three" },
      { id: 4, value: "Four" },
      { id: 5, value: "Five" },
    ],
  };

  return (
    <IonPage>
      <IonHeader color="red">
        <IonToolbar>
          <IonTitle >Village Survey</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid>
          <CustomCard>
            <IonCol size="12">
              <DropDown details={dummyDataBranch} />
            </IonCol>
          </CustomCard>
          <CustomCard>
            <IonCol size="6">
              <DropDown details={dummyDataDistrict} />
            </IonCol>
            <IonCol size="6">
              <DropDown details={dummyDataBlock} />
            </IonCol>
          </CustomCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

const CustomCard = styled(IonRow)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

  margin-bottom: 20px;
  border-radius: 10px;

  -webkit-box-shadow: -5px 10px 14px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 10px 14px -4px rgba(0, 0, 0, 0.75);
  box-shadow: -5px 10px 14px -4px rgba(0, 0, 0, 0.75);
`;
