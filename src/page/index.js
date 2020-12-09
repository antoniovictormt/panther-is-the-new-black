import { useState } from 'react';

import {
  SideBar,
  HeaderBar,
  Banner,
  InfoSection
} from '../components';
import { homeObjOne } from '../components/InfoSection/data';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeaderBar toggle={toggle} />
      <Banner />
      <InfoSection {...homeObjOne} />
    </>
  )
};
