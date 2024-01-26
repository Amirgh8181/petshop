import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";
import { tabsDetailstype } from '@/types';

const TabsContainer = ({ tabsDetails }: { tabsDetails: tabsDetailstype[] }) => {
  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={{
        base: "w-full",
        tabList: "w-full gap-6 relative rounded-none p-0 border-b border-divider ",
        cursor: "w-full bg-[#22d3ee]",
        tab: " flex justify-center items-center  h-12 w-[30%]",
        tabContent: "group-data-[selected=true]:text-[#06b6d4] md:text-base text-sm"
      }}
    >
      {tabsDetails.map(item =>
        <Tab
          key={item.key}
          title={
            <div className="flex items-center space-x-2">
              <span>{item.title}</span>
            </div>
          }
        >
          <div className='w-full text-left flex justify-center items-center'>
            <div className='w-[95%]'>
              {item.description}
            </div>
          </div>

        </Tab>
      )}
    </Tabs>
  )
}

export default TabsContainer