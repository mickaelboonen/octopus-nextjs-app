import { useEffect } from 'react';
import styles from './layout.module.scss';

export default function Tab({ tabs, tabFunction }) {
  const { tab, tab__container } = styles;
  const handleClick = (event) => {
    tabFunction(event.currentTarget.id.slice(0,1));
  }

  return (
    <div className={tab__container} id="tabs">
      {tabs.map((currentTab) => (
        <div key={currentTab.id} className={tab} onClick={handleClick} id={`${currentTab.id}-tab`}>
          <span>{currentTab.name}</span>
        </div>
      ))}
    </div>
    
  )
}