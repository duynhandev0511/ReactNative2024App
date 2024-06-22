import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { I3Dcube, Category2, GlobalSearch, Home } from 'iconsax-react-native';
import HomeNavigator from './Screens/src/routers/navigators/HomeNavigators';
import LearnNavigator from './Screens/src/routers/navigators/LearnNavigators';
import ExploreNavigator from './Screens/src/routers/navigators/ExploreNavigators';
import ContactNavigator from './Screens/src/routers/navigators/ContactNavigator';
import QuizzScreen from './Screens/QuizzSplashScreen';
import Devteam from './Screens/Devteamlist';
import ChapterQuizz from './Screens/ChapterQuizz';
import Chapter from './Screens/Chapter';
import Matter from './Screens/lythuyet/Matter.1';
import Vatchat from './Screens/contentchapterscreen/Vatchat';
import Hoachat from './Screens/contentchapterscreen/Hoachat';
import Tinhchat from './Screens/contentchapterscreen/Tinhchathoahoc';
import Nangluong from './Screens/contentchapterscreen/Nangluong';
import Cacnangluong from './Screens/contentchapterscreen/Cacloainangluong';
import Thunhiet from './Screens/contentchapterscreen/Phanungthunhiet';
import MatterQuizz from './Screens/Quizz/MatterQuizz';
import ScoreScreen from './Screens/ScoreScreen/Matterscore';
import FlashcardItem from './Screens/FlashcardItem';
import FlashcardFlatList from './Screens/FlashcardFlatList';
import FlashcardScreen from './Screens/FlashcardScreen';
// import LoginScreen from './Screens/Login';
// import Signup from './Screens/SignupScreen';
import Phases from './Screens/lythuyet/PhasesofMatter';
import Avogadro from './Screens/contentchapterscreen/Avogadro';
import Biendoipha from './Screens/contentchapterscreen/Biendoipha';
import Boyle from './Screens/contentchapterscreen/Boyle';
import Charles from './Screens/contentchapterscreen/Charles';
import Dalton from './Screens/contentchapterscreen/Dalton';
import Dinhluatkhi from './Screens/contentchapterscreen/Dinhluatkhi';
import Graham from './Screens/contentchapterscreen/Graham';
import Khilytuong from './Screens/contentchapterscreen/Khilytuong';
import PhasesScoreScreen from './Screens/ScoreScreen/PhasesScore';
import Khi from './Screens/contentchapterscreen/Hanhvikhi';
import Gas from './Screens/contentchapterscreen/Longkhiran';
import PhasesQuizz from './Screens/Quizz/PhasesQuizz';
import MineralsFlatlist from './Screens/MineralsFlatlist';
import MineralsScreen from './Screens/MineralsScreen';
import News1 from './Screens/News/News1';
import HomeScreen from './Screens/Home';
import Tomtatlichsucuanguyentu from './Screens/Contentchapter3screen/Tomtatlichsucuanguyentu';
import Cachathacuanguyentu from './Screens/Contentchapter3screen/Cachathacuanguyentu';
import Mohinhbohrcuanguyentu from './Screens/Contentchapter3screen/Mohinhbohrcuanguyentu';
import Mohinhcosong from './Screens/Contentchapter3screen/Mohinhcosong';
import Dientuhoatrivasodocham from './Screens/Contentchapter3screen/Dientuhoatrivasodocham';
import Dientichhatnhanhieuqua from './Screens/Contentchapter3screen/Dientichhatnhanhieuqua';
import Soluongtu from './Screens/Contentchapter3screen/Soluongtu';
import Laitao from './Screens/Contentchapter3screen/Laitao';
import Ionvaquytacoctet from './Screens/Contentchapter3screen/Ionvaquytacoctet';
import Dongvi from './Screens/Contentchapter3screen/Dongvi';
import Chuong3 from './Screens/lythuyet/Matter3';
import Matter3 from './Screens/lythuyet/Matter3';

import DongIsoelectronic from './Screens/Contentchapter3screen/DongIsoelectronic';
import CacngoailedoivoiquytacOctet from './Screens/Contentchapter3screen/CacngoailedoivoiquytacOctet';
import Matter4 from './Screens/lythuyet/Matter4';
import Lichsucuabangtuanhoan from './Screens/Contentchapter4screen/Lichsucuabangtuanhoan';
import Susapxepcuabangtuanhoan from './Screens/Contentchapter4screen/Susapxepcuabangtuanhoan';
import Canbang from './Screens/Contentchapter4screen/Canbang';
import Giadinh from './Screens/Contentchapter4screen/Giadinh';
import Doamdien from './Screens/Contentchapter4screen/Doamdien';
import Nangluongionhoa from './Screens/Contentchapter4screen/Nangluongionhoa';
import Bankinhnguyentu from './Screens/Contentchapter4screen/Bankinhnguyentu';
import Bankinhion from './Screens/Contentchapter4screen/Bankinhion';
import Cackhoispdvaf from './Screens/Contentchapter4screen/Cackhoispdvaf';
import Lienketnoiphantuvalienketlienphantu from './Screens/Contentchapter5screen/Lienketnoiphantuvalienketlienphantu';
import Lienketion from './Screens/Contentchapter5screen/Lienketion';
import Lienketconghoatri from './Screens/Contentchapter5screen/Lienketconghoatri';
import Lienketsigmavalienketpi from './Screens/Contentchapter5screen/Lienketsigmavalienketpi';
import Lienketmangtinhthelienketconggiatrivaloaikimlienket from './Screens/Contentchapter5screen/Lienketmangtinhthelienketconggiatrivaloaikimlienket';
import Lucluongcucvatinhphancuccuaphantu from './Screens/Contentchapter5screen/Lucluongcucvatinhphancuccuaphantu';
import Cautrucconghuong from './Screens/Contentchapter5screen/Cautrucconghuong';
import LythuyetVSEPR from './Screens/Contentchapter5screen/LythuyetVSEPR';
import LienketHydrogen from './Screens/Contentchapter5screen/LienketHydrogen';
import Vanderwaals from './Screens/Contentchapter5screen/Vanderwaals';
import Luchutphantuion from './Screens/Contentchapter5screen/Luchutphantuion';
import Goitencachopchat from './Screens/Contentchapter5screen/Goitencachopchat';
import Xacdinhcongthuchoahoc from './Screens/Contentchapter5screen/Xacdinhcongthuchoahoc';
import PPstock from './Screens/Contentchapter5screen/PPstock';
import Matter5 from './Screens/lythuyet/Matter5';
import Congthuchoahoc from './Screens/Contentchapter6screen/Congthuchoahoc';
import Canbangphuongtrinhhoahoc from './Screens/Contentchapter6screen/Canbangphuongtrinhhoahoc';
import Tilemol from './Screens/Contentchapter6screen/Tilemol';
import Molklvaphantu from './Screens/Contentchapter6screen/Molklvaphantu';
import Thuocthuhanchevaduthua from './Screens/Contentchapter6screen/Thuocthuhanchevaduthua';
import Thanhphan from './Screens/Contentchapter6screen/Thanhphan';
import Congthucthucnghiem from './Screens/Contentchapter6screen/Congthucthucnghiem';
import Nongdovaphaloang from './Screens/Contentchapter6screen/Nongdovaphaloang';
import Thuoctinhchung from './Screens/Contentchapter6screen/Thuoctinhchung';
import Dohoatancuahopchat from './Screens/Contentchapter6screen/Dohoatancuahopchat';
import Ionthugon from './Screens/Contentchapter6screen/Ionthugon';
import Matter6 from './Screens/lythuyet/Matter.6';






const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
      },
      tabBarIcon: ({ focused, color, size }) => {

  if (route.name === 'Trang chủ') {
      return <Home size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Ôn thi') {
      return <I3Dcube size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Khám phá') {
      return <GlobalSearch size={size} color={focused ? 'coral' : '#676767'} />;
  } else if (route.name === 'Tiện ích') {
      return <Category2 size={size} color={focused ? 'coral' : '#676767'} />;
  }
      },
})}>
      <Tab.Screen name={'Trang chủ'} component={HomeNavigator} />
      <Tab.Screen name={'Ôn thi'} component={LearnNavigator} />
      <Tab.Screen name={'Khám phá'} component={ExploreNavigator} />
      <Tab.Screen name={'Tiện ích'} component={ContactNavigator} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
        <Stack.Screen name="QuizzScreen" component={QuizzScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contactteam" component={Devteam} options={{ headerShown: false }} />
        <Stack.Screen name="ChapterQuizz" component={ChapterQuizz} options={{ headerShown: false }} />
        <Stack.Screen name="Chapter" component={Chapter} options={{ headerShown: false }} />
        <Stack.Screen name="MatterScreen" component={Matter} options={{ headerShown: false }} />
        <Stack.Screen name="PhasesScreen" component={Phases} options={{ headerShown: false }} />
        <Stack.Screen name="VatchatScreen" component={Vatchat} options={{ headerShown: false }} />
        <Stack.Screen name="HoachatScreen" component={Hoachat} options={{ headerShown: false }} />
        <Stack.Screen name="TinhchatScreen" component={Tinhchat} options={{ headerShown: false }} />
        <Stack.Screen name="NangluongScreen" component={Nangluong} options={{ headerShown: false }} />
        <Stack.Screen name="CacnangluongScreen" component={Cacnangluong} options={{ headerShown: false }} />
        <Stack.Screen name="ThunhietScreen" component={Thunhiet} options={{ headerShown: false }} />
        <Stack.Screen name="MatterquizzScreen" component={MatterQuizz} options={{ headerShown: false }} />
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FlashcardItemScreen" component={FlashcardItem} options={{ headerShown: false }} />
        <Stack.Screen name="FlashcardScreen" component={FlashcardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FlashcardFlatListScreen" component={FlashcardFlatList} options={{ headerShown: false }} />
        <Stack.Screen name="LongkhiranScreen" component={Gas} options={{ headerShown: false }} />
        <Stack.Screen name="AvogadroScreen" component={Avogadro} options={{ headerShown: false }} />
        <Stack.Screen name="BiendoiphaScreen" component={Biendoipha} options={{ headerShown: false }} />
        <Stack.Screen name="BoyleScreen" component={Boyle} options={{ headerShown: false }} />
        <Stack.Screen name="CharlesScreen" component={Charles} options={{ headerShown: false }} />
        <Stack.Screen name="DaltonScreen" component={Dalton} options={{ headerShown: false }} />
        <Stack.Screen name="DinhluatkhiScreen" component={Dinhluatkhi} options={{ headerShown: false }} />
        <Stack.Screen name="GrahamScreen" component={Graham} options={{ headerShown: false }} />
        <Stack.Screen name="HanhvikhiScreen" component={Khi} options={{ headerShown: false }} />
        <Stack.Screen name="KhilytuongScreen" component={Khilytuong} options={{ headerShown: false }} />
        <Stack.Screen name="PhasesQuizzScreen" component={PhasesQuizz} options={{ headerShown: false }} />
        <Stack.Screen name="PhasesScoreScreen" component={PhasesScoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MineralsFlatlistScreen" component={MineralsFlatlist} options={{ headerShown: false }} />
        <Stack.Screen name="MineralsScreen" component={MineralsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="News1Screen" component={News1} options={{ headerShown: false }} />

        <Stack.Screen name="TomtatlichsucuanguyentuScreen" component={Tomtatlichsucuanguyentu} options={{ headerShown: false }} />
        <Stack.Screen name="CachathacuanguyentuScreen" component={Cachathacuanguyentu} options={{ headerShown: false }} />
        <Stack.Screen name="DongviScreen" component={Dongvi} options={{ headerShown: false }} />
        <Stack.Screen name="MohinhbohrcuanguyentuScreen" component={Mohinhbohrcuanguyentu} options={{ headerShown: false }} />
        <Stack.Screen name="MohinhcosongScreen" component={Mohinhcosong} options={{ headerShown: false }} />
        <Stack.Screen name="DientuhoatrivasodochamScreen" component={Dientuhoatrivasodocham} options={{ headerShown: false }} />
        <Stack.Screen name="DientichhatnhanhieuquaScreen" component={Dientichhatnhanhieuqua} options={{ headerShown: false }} />
        <Stack.Screen name="SoluongtuScreen" component={Soluongtu} options={{ headerShown: false }} />
        <Stack.Screen name="LaitaoScreen" component={Laitao} options={{ headerShown: false }} />
        <Stack.Screen name="IonvaquytacoctetScreen" component={Ionvaquytacoctet} options={{ headerShown: false }} />
        <Stack.Screen name="Matter3" component={Matter3} options={{ headerShown: false }} />
        <Stack.Screen name="CacngoailedoivoiquytacOctetScreen" component={CacngoailedoivoiquytacOctet} options={{ headerShown: false }} />
        <Stack.Screen name="DongIsoelectronicScreen" component={DongIsoelectronic} options={{ headerShown: false }} />

        <Stack.Screen name="Matter4" component={Matter4} options={{ headerShown: false }} />
        <Stack.Screen name="LichsucuabangtuanhoanScreen" component={Lichsucuabangtuanhoan} options={{ headerShown: false }} />
        <Stack.Screen name="CanbangScreen" component={Canbang} options={{ headerShown: false }} />
        <Stack.Screen name="DoamdienScreen" component={Doamdien} options={{ headerShown: false }} />
        <Stack.Screen name="NangluongionhoaScreen" component={Nangluongionhoa} options={{ headerShown: false }} />
        <Stack.Screen name="BankinhnguyentuScreen" component={Bankinhnguyentu} options={{ headerShown: false }} />
        <Stack.Screen name="BankinhionScreen" component={Bankinhion} options={{ headerShown: false }} />
        <Stack.Screen name="Cackhois,p,dvafScreen" component={Cackhoispdvaf} options={{ headerShown: false }} />
        <Stack.Screen name="SusapxepcuabangtuanhoanScreen" component={Susapxepcuabangtuanhoan} options={{ headerShown: false }} />
        <Stack.Screen name="GiadinhScreen" component={Giadinh} options={{ headerShown: false }} />
      
        <Stack.Screen name="LienketnoiphantuvalienketlienphantuScreen" component={Lienketnoiphantuvalienketlienphantu} options={{ headerShown: false }} />
        <Stack.Screen name="LienketionScreen" component={Lienketion} options={{ headerShown: false }} />
        <Stack.Screen name="LienketconghoatriScreen" component={Lienketconghoatri} options={{ headerShown: false }} />
        <Stack.Screen name="LienketsigmavalienketpiScreen" component={Lienketsigmavalienketpi} options={{ headerShown: false }} />
        <Stack.Screen name="LienketmangtinhthelienketconggiatrivaloaikimlienketScreen" component={Lienketmangtinhthelienketconggiatrivaloaikimlienket} options={{ headerShown: false }} />
        <Stack.Screen name="LucluongcucvatinhphancuccuaphantuScreen" component={Lucluongcucvatinhphancuccuaphantu} options={{ headerShown: false }} />
        <Stack.Screen name="CautrucconghuongScreen" component={Cautrucconghuong} options={{ headerShown: false }} />
        <Stack.Screen name="LythuyetVSEPRScreen" component={LythuyetVSEPR} options={{ headerShown: false }} />
        <Stack.Screen name="LienketHydrogenScreen" component={LienketHydrogen} options={{ headerShown: false }} />
        <Stack.Screen name="VanderwaalsScreen" component={Vanderwaals} options={{ headerShown: false }} />
        <Stack.Screen name="LuchutphantuionScreen" component={Luchutphantuion} options={{ headerShown: false }} />
        <Stack.Screen name="GoitencachopchatScreen" component={Goitencachopchat} options={{ headerShown: false }} />
        <Stack.Screen name="XacdinhcongthuchoahocScreen" component={Xacdinhcongthuchoahoc} options={{ headerShown: false }} />
        <Stack.Screen name="PPstockScreen" component={PPstock} options={{ headerShown: false }} />
        <Stack.Screen name="Matter5" component={Matter5} options={{ headerShown: false }} />

        <Stack.Screen name="MolklvaphantuScreen" component={Molklvaphantu} options={{ headerShown: false }} />
        <Stack.Screen name="TilemolScreen" component={Tilemol} options={{ headerShown: false }} />
        <Stack.Screen name="ThuocthuhanchevaduthuaScreen" component={Thuocthuhanchevaduthua} options={{ headerShown: false }} />
        <Stack.Screen name="CanbangphuongtrinhhoahocScreen" component={Canbangphuongtrinhhoahoc} options={{ headerShown: false }} />
        <Stack.Screen name="ThanhphanScreen" component={Thanhphan} options={{ headerShown: false }} />
       
        <Stack.Screen name="CongthucthucnghiemScreen" component={Congthucthucnghiem} options={{ headerShown: false }} />
        <Stack.Screen name="NongdovaphaloangScreen" component={Nongdovaphaloang} options={{ headerShown: false }} />
        <Stack.Screen name="ThuoctinhchungScreen" component={Thuoctinhchung} options={{ headerShown: false }} />
        <Stack.Screen name="DohoatancuahopchatScreen" component={Dohoatancuahopchat} options={{ headerShown: false }} />
        <Stack.Screen name="IonthugonScreen" component={Ionthugon} options={{ headerShown: false }} />
        <Stack.Screen name="CongthuchoahocScreen" component={Congthuchoahoc} options={{ headerShown: false }} />
        <Stack.Screen name="Matter6" component={Matter6} options={{ headerShown: false }} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default App;