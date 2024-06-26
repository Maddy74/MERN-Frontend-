import './App.css';
import Preloader from './Components/Preloader/Preloader';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Sports from './Pages/Sports';
import Beauty from './Pages/Beauty';
import Watches from './Pages/Watches';
// import Wishlist from './components/Wishlist';
// product details 
import Productdetails from './Pages/Productdetailssingle/Productdetails';
import Womenproductdetails from './Pages/Productdetailssingle/Womenproductdetails';
import Kidsproductdetails from './Pages/Productdetailssingle/Kidsproductdetails';

import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext'; 

// Men Page
import Tshirt from './Pages/Menpage/Tshirt';
import Hoodies from './Pages/Menpage/Hoodies';
import Jackets from './Pages/Menpage/Jackets';
import Football from './Pages/Menpage/Football';
import Cricket from './Pages/Menpage/Cricket';
import Casual from './Pages/Menpage/Casual';
import Formal from './Pages/Menpage/Formal';
import Jeans from './Pages/Menpage/Jeans';
import Trousers from './Pages/Menpage/Trousers';
import Shorts from './Pages/Menpage/Shorts';
import Joggers from './Pages/Menpage/Joggers';
import Running from './Pages/Menpage/Running';
import Sneakers from './Pages/Menpage/Sneakers';
import Sandals from './Pages/Menpage/Hiking';
import Walking from './Pages/Menpage/Walking';
import Caps from './Pages/Menpage/Caps';
import Socks from './Pages/Menpage/Socks';
import Gloves from './Pages/Menpage/Gloves';
import Headwear from './Pages/Menpage/Headwear';
import Backpacks from './Pages/Menpage/Backpacks';
import Hiking from './Pages/Menpage/Hiking';

// Women Page
import Tops from './Pages/Womenpage/Tops';
import Polos from './Pages/Womenpage/Polos';
import Womenjackets from './Pages/Womenpage/Womenjackets';
import Womenfootball from './Pages/Womenpage/Womenfootball';
import Womencricket from './Pages/Womenpage/Womencricket';
import Sweatshirts from './Pages/Womenpage/Sweatshirts';
import Womenhoodies from './Pages/Womenpage/Womenhoodies';
import Womenjeans from './Pages/Womenpage/Womenjeans';
import Pants from './Pages/Womenpage/Pants';
import Leggings from './Pages/Womenpage/Leggings';
import Tracksuits from './Pages/Womenpage/Tracksuits';
import Homewear from './Pages/Womenpage/Homewear';
import Kurtas from './Pages/Womenpage/Kurtas';
import Sarees from './Pages/Womenpage/Sarees';
import Kurtis from './Pages/Womenpage/Kurtis';
import Skirts from './Pages/Womenpage/Skirts';
import Palazzos from './Pages/Womenpage/Palazzos';
import Womensocks from './Pages/Womenpage/Womensocks';
import Womengloves from './Pages/Womenpage/Womengloves';
import Womengym from './Pages/Womenpage/Womengym';
import Womenfacecovers from './Pages/Womenpage/Womenfacecovers';
import Womenheadwear from './Pages/Womenpage/Womenheadwear';

// Kids Page
// boys
import Bags from './Pages/Kidspage/Boys/Bags';
import Shirt from './Pages/Kidspage/Boys/Shirt';
import Hoodiessweatshirts from './Pages/Kidspage/Boys/Hoodiessweatshirts';
import Pantsshorts from './Pages/Kidspage/Boys/Pantsshorts';
import Bjackets from './Pages/Kidspage/Boys/Bjackets';
import Casualshoe from './Pages/Kidspage/Boys/Casualshoe';
import Sportsshoe from './Pages/Kidspage/Boys/Sportsshoe';
import Scandals from './Pages/Kidspage/Boys/Scandals';
import School from './Pages//Kidspage/Boys/School';

// Girls page
import Gbags from './Pages/Kidspage/Girls/Gbags';
import Gshirt from './Pages/Kidspage/Girls/Gshirt';
import Ghoodies from './Pages/Kidspage/Girls/Ghoodies';
import Gpants from './Pages/Kidspage/Girls/Gpants';
import Gjackets from './Pages/Kidspage/Girls/Gjackets';
import Gcasualshoe from './Pages/Kidspage/Girls/Gcasualshoe';
import Gsportsshoe from './Pages/Kidspage/Girls/Gsportsshoe';
import Gscandals from './Pages/Kidspage/Girls/Gscandals';
import Gschoolshoe from './Pages/Kidspage/Girls/Gschoolshoes';

// Sports page
// Football
import Turftrainers from './Pages/Sportspage/Football/Turftrainers';
import Footballaccessories from './Pages/Sportspage/Football/Footballacessories';
import Manchester from './Pages/Sportspage/Football/Manchester';
import Bvb from './Pages/Sportspage/Football/Bvb';
import Pursuitpack from './Pages/Sportspage/Football/Pursuitpack';
// cricket
import Cricketrubber from './Pages/Sportspage/Cricket/Cricketrubber';
import Cricketspike from './Pages/Sportspage/Cricket/Cricketspike';
import Cricketgear from './Pages/Sportspage/Cricket/Cricketgear';
import Pumarcb from './Pages/Sportspage/Cricket/Pumarcb';
// Gym & Training
import Gymshoes from './Pages/Sportspage/Gym/Gymshoes';
import Gymwear from './Pages/Sportspage/Gym/Gymwear';
import Gymbags from './Pages/Sportspage/Gym/Gymbags';
import Yoga from './Pages/Sportspage/Gym/Yoga';
// Running
import Everydayrun from './Pages/Sportspage/Running/Everdayrun';
import Longdistance from './Pages/Sportspage/Running/Longdistance';
import Raccessories from './Pages/Sportspage/Running/Raccessories';
import Nitrocollection from './Pages/Sportspage/Running/Nitrocollections';
import Firstmile from './Pages/Sportspage/Running/Firstmile';

// Beauty
import Lipstick from './Pages/Beautypage/Makeup/Lipstick';
import Lipgloss from './Pages/Beautypage/Makeup/Lipgloss';
import Lipliner from './Pages/Beautypage/Makeup/Lipliner';
import Nailcare from './Pages/Beautypage/Makeup/Nailcare';
import Eyeliner from './Pages/Beautypage/Makeup/Eyeliner';

// Fragrances
import Perfumes from './Pages/Beautypage/Fragrances/Perfumes';
import Deodrants from './Pages/Beautypage/Fragrances/Deodrants';
import Spray from './Pages/Beautypage/Fragrances/Spray';

// hair care 
import Shampoo from './Pages/Beautypage/Haircare/Shampoo';
import Conditioner from './Pages/Beautypage/Haircare/Conditioner';
import Hairoil from './Pages/Beautypage/Haircare/Hairoil';
import Haircolor from './Pages/Beautypage/Haircare/Haircolor';
import Hairstyling from './Pages/Beautypage/Haircare/Hairstyling';

// men grooming 
// import Shaving from './Pages/Beautypage/Mengrooming/Shaving';
// import Beardessentials from './Pages/Beautypage/Mengrooming/Beardessentials';
// import Mdeodrants from './Pages/Beautypage/Mengrooming/Mdeodrants';

// Watch Page
// Men
import Manalogwatch from './Pages/Watchespage/Menwatches/Manalogwatch';
import Msmartwatch from './Pages/Watchespage/Menwatches/Msmartwatch';
import Mfitnesswatch from './Pages/Watchespage/Menwatches/Mfitnesswatch'

// women
import Wanalogwatch from './Pages/Watchespage/Womenwatches/Wanalogwatch';
import Wsmartwatch from './Pages/Watchespage/Womenwatches/Wsmartwatch';
import Wfitnesswatch from './Pages/Watchespage/Womenwatches/Wfitnesswatch';

// kids
import Unisexwatch from './Pages/Watchespage/Kidswatches/Unisexwatch';
import Boyswatch from './Pages/Watchespage/Kidswatches/Unisexwatch';

// right menu
import Cart from './Components/Navbar/Cart';
import Profile from './Components/Navbar/Profile';
import Wishlist from './Components/Navbar/Wishlist';

// home page
import Home from './Components/Home/Home';
import Register from './Components/Navbar/Register';
import Forgotpwd from './Components/Navbar/Forgotpwd';

// payment
import Paymentsuccess from './Components/Paymentsucces&fail/Paymentsuccess';

import toast,{Toaster} from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
// import {ProtectedRoute} from 'protected-react-router';
function App() {
  window.addEventListener('contextmenu', e =>{
    e.preventDefault();
  });

  const {isAuthenticated, user, message,error} = useSelector(state=>state.user);

  const dispatch = useDispatch();
  useEffect(()=>{
    if (error){
      toast.error(error);
      dispatch({type: 'clearError'});
    }
    if (message){
      toast.success(message);
      dispatch({type: 'clearMessage'});
    }
  },[dispatch, error,message ]);


  useEffect(()=>{
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
    <CartProvider>
    <WishlistProvider>
    <Router>  
    <Preloader />
      <Nav isAuthenticated={isAuthenticated} user={user}/>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/watches' element={<Watches />} />

        {/* product details route */}
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/product/women/:id" element={<Womenproductdetails />} />
        <Route path="/product/kids/:id" element={<Kidsproductdetails />} />

        {/* Men page */}
        <Route path='/tshirt' element={<Tshirt category="tshirt"/>} />
        <Route path='/hoodies' element={<Hoodies/>} />
        <Route path='/jackets' element={<Jackets/>} />
        <Route path='/football' element={<Football/>} />
        <Route path='/cricket' element={<Cricket/>} />
        <Route path='/casual' element={<Casual/>} />
        <Route path='/formal' element={<Formal/>} />
        <Route path='/jeans' element={<Jeans/>} />
        <Route path='/trousers' element={<Trousers/>} />
        <Route path='/shorts' element={<Shorts/>} />
        <Route path='/joggers' element={<Joggers/>} />
        <Route path='/running' element={<Running/>} />
        <Route path='/sneakers' element={<Sneakers/>} />
        <Route path='/sandals' element={<Sandals/>} />
        <Route path='/hiking' element={<Hiking/>} />
        <Route path='/walking' element={<Walking/>} />
        <Route path='/caps' element={<Caps/>} />
        <Route path='/socks' element={<Socks/>} />
        <Route path='/gloves' element={<Gloves/>} />
        <Route path='/headwear' element={<Headwear/>} />
        <Route path='/backpacks' element={<Backpacks/>} />
        {/*Women Page */}
         <Route path='/tops' element={<Tops/>} />
        <Route path='/polos' element={<Polos/>} />
        <Route path='/jacketss' element={<Womenjackets/>} />
        <Route path='/fjerseys' element={<Womenfootball/>} />
        <Route path='/cjerseys' element={<Womencricket/>} />
        <Route path='/sweatshirts' element={<Sweatshirts/>} />
        <Route path='/whoodies' element={<Womenhoodies/>} />
        <Route path='/wjeans' element={<Womenjeans/>} />
        <Route path='/wshorts' element={<Shorts/>} />
        <Route path='/wpants' element={<Pants/>} />
        <Route path='/leggings' element={<Leggings/>} />
        <Route path='/tracksuits' element={<Tracksuits/>} />
        <Route path='/homewear' element={<Homewear/>} />
        <Route path='/kurtas' element={<Kurtas/>} />
        <Route path='/sarees' element={<Sarees/>} />
        <Route path='/kurtis' element={<Kurtis/>} />
        <Route path='/skirts' element={<Skirts/>} />
        <Route path='/palazzos' element={<Palazzos/>} />
        <Route path='/wsocks' element={<Womensocks/>} />
        <Route path='/wgloves' element={<Womengloves/>} />
        <Route path='/wgym' element={<Womengym/>} />
        <Route path='/wfacecovers' element={<Womenfacecovers/>} />
        <Route path='/wheadwear' element={<Womenheadwear/>} />
        {/* Kids page */}
        {/* boys page */}
        <Route path='/bags' element={<Bags/>} />
        <Route path='/shirt' element={<Shirt/>} />
        <Route path='/bhoodies' element={<Hoodiessweatshirts/>} />
        <Route path='/bpants' element={<Pantsshorts/>} />
        <Route path='/bjackets' element={<Bjackets/>} />
        <Route path='/bpants' element={<Casualshoe/>} />
        <Route path='/bsports' element={<Sportsshoe/>} />
        <Route path='/bscandals' element={<Scandals/>} />
        <Route path='/bschool' element={<School/>} />
        {/* girls page */}
        <Route path='/gbags' element={<Gbags/>} />
        <Route path='/gshirt' element={<Gshirt/>} />
        <Route path='/ghoodies' element={<Ghoodies/>} />
        <Route path='/gpants' element={<Gpants/>} />
        <Route path='/gjackets' element={<Gjackets/>} />
        <Route path='/gcasual' element={<Gcasualshoe/>} />
        <Route path='/gsports' element={<Gsportsshoe/>} />
        <Route path='/gscandals' element={<Gscandals/>} />
        <Route path='/gschool' element={<Gschoolshoe/>} />
        {/* Sports page */}
        {/* Football */}
        <Route path='/turf' element={<Turftrainers/>} />
        <Route path='/footballaccessories' element={<Footballaccessories/>} />
        <Route path='/manchester' element={<Manchester/>} />
        <Route path='/bvb' element={<Bvb/>} />
        <Route path='/pursuitpack' element={<Pursuitpack/>} />
        {/* Cricket */}
        <Route path='/rubber' element={<Cricketrubber/>} />
        <Route path='/spike' element={<Cricketspike/>} />
        <Route path='/gear' element={<Cricketgear/>} />
        <Route path='/rcb' element={<Pumarcb/>} />
        {/* Gym & Training */}
        <Route path='/gymshoe' element={<Gymshoes/>} />
        <Route path='/gymwear' element={<Gymwear/>} />
        <Route path='/gymbags' element={<Gymbags/>} />
        <Route path='/yoga' element={<Yoga/>} />
        {/* Running */}
        <Route path='/run' element={<Everydayrun/>} />
        <Route path='/long' element={<Longdistance/>} />
        <Route path='/raccessories' element={<Raccessories/>} />
        <Route path='/nitro' element={<Nitrocollection/>} />
        <Route path='/mile' element={<Firstmile/>} />

        {/* Beauty */}
        {/* makeup */}
        <Route path='/lipstick' element={<Lipstick/>} />
        <Route path='/lipgloss' element={<Lipgloss/>} />
        <Route path='/lipliner' element={<Lipliner/>} />
        <Route path='/nailcare' element={<Nailcare/>} />
        <Route path='/eyeliner' element={<Eyeliner/>} />
        {/* frnagrances */}
        <Route path='/perfumes' element={<Perfumes/>} />
        <Route path='/deodrants' element={<Deodrants/>} />
        <Route path='/spray' element={<Spray/>} />
        {/* hair care */}
        <Route path='/shampoo' element={<Shampoo/>} />
        <Route path='/conditioner' element={<Conditioner/>} />
        <Route path='/hairoil' element={<Hairoil/>} />
        <Route path='/haircolor' element={<Haircolor/>} />
        <Route path='/hairstyling' element={<Hairstyling/>} />
        {/* men grooming */}
        {/* <Route path='/shaving' element={<Shaving/>} />
        <Route path='/beardessentials' element={<Beardessentials/>} />
        <Route path='/mdeodrants' element={<Mdeodrants/>} /> */}
        {/* Watch */}
        {/* Men */}
        <Route path='/manalog' element={<Manalogwatch/>} />
        <Route path='/msmart' element={<Msmartwatch/>} />
        <Route path='/mfitness' element={<Mfitnesswatch/>}/> 
        {/* Women */}
        <Route path='/wanalog' element={<Wanalogwatch/>} />
        <Route path='/wsmart' element={<Wsmartwatch/>} />
        <Route path='/wfitness' element={<Wfitnesswatch/>} />
        {/* Kids */}
        <Route path='/unisexwatch' element={<Unisexwatch/>} />
        <Route path='/boyswatch' element={<Boyswatch/>} />

        {/* Right menu */}
        {/* Wishlist, cart, profile */}
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpassword' element={<Forgotpwd/>} />


        {/* payment success and fail */}
        <Route path='/Paymentsuccess' element={<Paymentsuccess />}/>
      </Routes>
      <Footer />
      <Toaster/>
      </Router>
      </WishlistProvider>
      </CartProvider>
    </>
  );
}

export default App;
