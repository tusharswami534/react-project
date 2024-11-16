// import React, { useState } from 'react';
// import Home from '../../view/Home';
// import Dashboard from '../../view/Dashboard';

// // The main Tabs component
// function Tabs({ children }) {
//   const [activeTab, setActiveTab] = useState(children[0].props.label);

//   const handleTabClick = (label) => {
//     setActiveTab(label);
//   };

//   return (
//     <div>
//       {/* Render Tab Buttons */}
//       <div className="tab-buttons">
//         {children.map((child) => {
//           const label = child.props.label;
//           return (
//             <button
//               key={label}
//               onClick={() => handleTabClick(label)}
//               className={label === activeTab ? 'active' : ''}
//             >
//               {label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Render Tab Content */}
//       <div className="tab-content">
//         {children.map((child) =>
//           child.props.label === activeTab ? child.props.children : undefined
//         )}
//       </div>
//     </div>
//   );
// }

// // Individual Tab Component
// function Tab({ children }) {
//   return <>{children}</>;
// }

// // Using the Tabs component
// function App() {
//   return (
//     <Tabs>
//       <Tab label="Home"><Home/></Tab>
//       <Tab label="Profile"><Dashboard/></Tab>
//       <Tab label="Settings">This is the Settings Tab</Tab>
//     </Tabs>
//   );
// }

// export default App;
