import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//صفحات ورود خریدار تا انتهای وارد کردن کارت تکمیل شد و در جریان  باشید که صفحات اخر متفاوت تر دیزاین میشوند
// Main Component
import FullPage from "./Components/FullPage/FullPage";

// Components
import Customer from "./Components/kharidar/Kharidar";
import Seller from "./Components/foroshande/Compo";
import Giftcardnum from "./Components/cartvarification/Giftcardnum";
import Shomarecart from "./Components/cartvarification/Shomarecart";
import QandaPage from "./Components/OtherPages/QandaPage/QandaPage";
import SellerPanel from "./Components/OtherPages/UserPage/SellerPanel/SellerPanel";
import HistoryPanel from "./Components/OtherPages/UserPage/SellerPanel/HistoryPanel";
import AmountPanel from "./Components/OtherPages/UserPage/SellerPanel/AmountPanel";
import ActivationPage from "./Components/OtherPages/UserPage/ActivationPage/ActivationPage";
import CardPage from "./Components/OtherPages/UserPage/CardPage/CardPage";
import AboutUs from "./Components/OtherPages/AboutUs/AboutUs";
import SellerOtpCode from "./Components/verificationcode/Codevorod"
import CustomerOtpCode from "./Components/verificationcode/Costumercodevorod"
import Hamkari from "./Components/HamkariBaMa/Hamkari";
// import Ershad from "./661373.txt";
function App() {
  <header>
    <Helmet>
        <title>لحظه کارت</title>
        <meta name="لحظه کارت کارت هدیه ان اف تی" content="PAGE FOR DETAIL AND SHOP GIFT CARDS lahzecard" />
        <meta name="لحظه کارت" content="لحظه کارت, لحظهکارت, گیفت,کارت هدیه,gift card,lahze,card,lahze card " />
    </Helmet>
  {/* <meta name="enamad" content="324236"/>
  <meta name="samandehi" content="338449838"/> */}
  </header>
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/>}/>
        <Route path="/coop" element={ <  Hamkari/>}/>
        <Route path="/sellerotp" element={ <  SellerOtpCode/>}/>
        <Route path="/customerotp" element={ <  CustomerOtpCode/>}/>
        <Route path="/cardnumvar" element={ <  Shomarecart/>}/>
        <Route path="/opengiftcardnumvar" element={ <  Giftcardnum/>}/>
        <Route path="/customer" element={ <  Customer/>}/>
        <Route path="/seller" element={ <  Seller/>}/>
        <Route path="/QandAPage" element={ <  QandaPage/>}/>
        <Route path="/UserPage" element={ <  SellerPanel/>}/>
        <Route path="/HistoryPanel" element={ <  HistoryPanel/>}/>
        <Route path="/AmountPanel" element={ <  AmountPanel/>}/>
        <Route path="/ActivationPage" element={ <  ActivationPage/>}/>
        <Route path="/CardPage" element={ <  CardPage/>}/>
        <Route path="/AboutUs" element={ <  AboutUs/>}/>
        {/* <Route path="/661373.txt" element={ <  Ershad/>}/> */}

        {/* Redirect */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
