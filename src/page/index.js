import { useState } from 'react';

import {
  SideBar,
  HeaderBar,
  Banner,
  InfoSection
} from '../components';

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix
} from '../components/InfoSection/data';

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
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
    </>
  )
};
