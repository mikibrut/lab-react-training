import React from 'react';
import './App.css';
import IdCard from "./components/IdCard";
import Greeting from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  return (
    <>
      <div className="App">
      {/* ------ ITERATION 1 ----------- */}
      <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
<hr></hr>{/* ------ ITERATION 2 ----------- */}
      <div>
        <Greeting language="fr">François</Greeting>
        <Greeting language="de">Ludwig</Greeting>
      </div>
<hr></hr>{/* ------ ITERATION 3 ----------- */}
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
<hr></hr>{/* ------ ITERATION 4 ----------- */}
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
<hr></hr>{/* ------ ITERATION 5 ----------- */}
      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
<hr></hr>{/* ------ ITERATION 6 ----------- */}
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
<hr></hr>{/* ------ ITERATION 7 ----------- */}
      <div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      </div>
<hr></hr>{/* ------ ITERATION 8 ----------- */}
      <div>
        <LikeButton/>
      </div>
<hr></hr>{/* ------ ITERATION 9 ----------- */}
      <div>
        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />
      </div>
<hr></hr>{/* ------ ITERATION 10 ----------- */}
      <div>
        <Dice/>
      </div>
<hr></hr>{/* ------ ITERATION 11 ----------- */}
      <div>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>
<hr></hr>{/* ------ ITERATION 12 ----------- */}
      <div>
        <NumbersTable limit={12} />
      </div>
<hr></hr>{/* ------ ITERATION 13/14 ----------- */}
      <div>
        <Facebook />
      </div>
<hr></hr>{/* ------ ITERATION 15 ----------- */}
      <div>
        <SignupPage/>
      </div>
<hr></hr>{/* ------ ITERATION 16 ----------- */}
      <div>
        <RGBColorPicker/>
      </div>
    </div>
    </>
  );
}

export default App;
