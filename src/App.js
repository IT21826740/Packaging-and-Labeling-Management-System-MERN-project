import './PLApp.css';
import AddMtaretial from './components/MaterialsManage/AddMaterial';
import AddOrder from './components/OrderProcess/AddOrder';
import AllMatirials from './components/MaterialsManage/AllMaterials';
import PendingOrders from './components/OrderProcess/PendingOrders';
import Header from './components/header';
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import CompleteOrder from './components/OrderProcess/CompleteOrder';
import Timer from './components/Reward/Timer';
import PrintList from './components/MaterialsManage/PrintMaterial';
import GenerateLabel from './components/Labeling/Lebeling';
import PrintLabel from './components/Labeling/PrintLabel';
import File from './components/Reward/File';
import FileUpload from './components/Reward/FileUpload';
import Links from './components/Reward/links';
import PendingOrdersF from './components/testing/pendinorderFil';
import InvetoryFile from './components/Inventory/InventoryFile';
import InventoryFileUpload from './components/Inventory/InventoryFileUpload';








function App() {


  return (
 
      <div>
         <Header/>
        

         <BrowserRouter>
         <Routes>
             <Route path='AddMaterial'exact element={<AddMtaretial/>}/>
             <Route path='Timer'exact element={<Timer/>}/>
             <Route path='AllMaterials'exact element={<AllMatirials/>}/>
             <Route path='PendingOrders' exact element={<PendingOrders/>}/>
             <Route path='AddOrder' exact element={<AddOrder/>}/>
             <Route path='CompleteOrder' exact element={<CompleteOrder/>}/>            
             <Route path='PrintList' exact element={<PrintList/>}/>
             <Route path='GenerateLabel' exact element={<GenerateLabel/>}/>
             <Route path='PrintLabel' exact element={<PrintLabel/>}/>                 
             <Route path='File' exact element={<File/>}/>
             <Route path='FileUpload'exact element={<FileUpload/>}/>
             <Route path='Links' exact element={<Links/>}/>
             <Route path= 'PendingOrdersF'exact element={<PendingOrdersF/>}/> 
             <Route path ='InvetoryFile' exact element={<InvetoryFile/>}/>
             <Route path ='InventoryFileUpload' exact element={<InventoryFileUpload/>}/>
             
            
         </Routes>
         </BrowserRouter>

    </div>
   
  );
}

export default App;
