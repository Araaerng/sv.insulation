"use client"
import { AlignJustify, } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  useSidebar,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';

const data = {
  navMain: [
    {
      title: "home",
      url: "/",
      isGroup: false,
    },
    {
      title: "product-service",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "aluminum",
          url: "/aluminum",
        },
        {
          title: "sandwich-panels",
          url: "/sandwich-panels",
        },
        {
          title: "door-clean-room",
          url: "/door-clean-room",
        },
        {
          title: "install-service",
          url: "/install-service",
        },
      ],
    },
    {
      title: "aluminum",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "menu-aluminum.angle-l",
          url: "/aluminum#section-1",
        },
        {
          title: "menu-aluminum.angle-cover-revet",
          url: "/aluminum#section-2",
        },
        {
          title: "menu-aluminum.u-cap",
          url: "/aluminum#section-3",
        },
        {
          title: "menu-aluminum.u-cap-cover-revet",
          url: "/aluminum#section-4",
        },
        {
          title: "menu-aluminum.beam",
          url: "/aluminum#section-5",
        },
        {
          title: "menu-aluminum.h",
          url: "/aluminum#section-6",
        },
        {
          title: "menu-aluminum.door-frame",
          url: "/aluminum#section-7",
        },
      ],
    },
    {
      title: "sandwich-panels",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "menu-sandwich-panels.EPS-Foam",
          url: "/sandwich-panels#section-1",
        },
        {
          title: "menu-sandwich-panels.PU-Foam",
          url: "/sandwich-panels#section-2",
        },
        {
          title: "menu-sandwich-panels.PIR-Foam",
          url: "/sandwich-panels#section-3",
        },
        {
          title: "menu-sandwich-panels.Rockwool",
          url: "/sandwich-panels#section-4",
        },
      ],
    },
    {
      title: "door-clean-room",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "menu-door.h-1",
          url: "/door-clean-room#section-1",
        },
        {
          title: "menu-door.h-2",
          url: "/door-clean-room#section-2",
        },
      ],
    },
    {
      title: "technical-information",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "menu-technical-information.h-1",
          url: "/technical-information#section-1",
        },
        {
          title: "menu-technical-information.h-2",
          url: "/technical-information#section-2",
        },
        {
          title: "menu-technical-information.h-3",
          url: "/technical-information#section-3",
        },
        {
          title: "menu-technical-information.h-4",
          url: "/technical-information#section-4",
        },
        {
          title: "menu-technical-information.h-5",
          url: "/technical-information#section-5",
        },
      ],
    },
    {
      title: "install-service",
      url: "#",
      isGroup: true,
      items: [
        {
          title: "menu-install-service.h-1",
          url: "/install-service#section-1",
        },
        {
          title: "menu-install-service.h-2",
          url: "/install-service#section-2",
        },
        {
          title: "menu-install-service.h-3",
          url: "/install-service#section-3",
        },
        {
          title: "menu-install-service.h-4",
          url: "/install-service#section-4",
        },
        {
          title: "menu-install-service.h-5",
          url: "/install-service#section-5",
        },
      ],
    },
    {
      title: "contact",
      url: "/contact",
      isGroup: false,
    },
  ],
}


export function AppSidebar() {
  const { toggleSidebar, isMobile } = useSidebar()
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const newPath = segments.join('/');

    startTransition(() => {
      router.replace(newPath);
    });
  };
  if (!isMobile) return null // ถ้าไม่ mobile ไม่ต้อง render อะไรเลย

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="cursor-pointer hover:bg-white/50 p-2 rounded-md"
      >
        <AlignJustify size={28} />
      </button>

      <Sidebar side="right">
        <SidebarContent className="p-4">
          <div className="flex gap-2 p-4">
            <div className="flex gap-2 cursor-pointer" onClick={() => onSelectChange('th')}>
              <Image src="/th.svg" alt="th" width={32} height={32} />
              TH
            </div>
            <div className="flex gap-2 cursor-pointer" onClick={() => onSelectChange('en')}>
              <Image src="/us.png" alt="us" className="h-6 w-[32px]" width={32} height={32} />
              EN
            </div>
          </div>
          <NavMain items={data.navMain} />
        </SidebarContent>
      </Sidebar>
    </>
  )
}
