import React, { useState } from 'react';

const CustomTabs = () => {
  // 1. State to track active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // 2. Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* 3. Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </button>
        <button
          className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
        <button
          className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </button>
      </div>

      {/* 4. Tab Content */}
      <div className="tab-content">
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default CustomTabs;
