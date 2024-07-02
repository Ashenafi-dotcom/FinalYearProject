import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNotice from './admincomponets/addnotice';
import { Toaster } from 'react-hot-toast';
import './App.css';
import './styles/adminsidebar.css';
import './styles/assetform.css';
import './styles/tailwind.css';
import AssetManager from './admincomponets/AssetManager';
import Manageproduct from './admincomponets/manageproduct';
import Dashboard from './admincomponets/dashboard';
import Feedback from './admincomponets/feedback';
import ProductForm from './admincomponets/addproduct';
import Header from './admincomponets/header';
import Sidebar from './admincomponets/sidebar';
import AddAsset from './admincomponets/AddAsset';
const App = () => {
  return (
    <Router>
      <div>
        <Toaster />
        <Header />
        <Sidebar />
        <div className="ml-80 mt-20 p-4">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/Addnotice" element={<AddNotice />} />
            <Route path="/addassets" element={<AddAsset />} />
            <Route path="/manageassets" element={<AssetManager />} />
            <Route path="/manageproduct" element={<Manageproduct />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/productform" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
