"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"

const components1: { title: string; href: string; }[] = [
  {
    title: "aluminum",
    href: "/aluminum",
  },
  {
    title: "sandwich-panels",
    href: "/sandwich-panels",
  },
  {
    title: "door-clean-room",
    href: "/door-clean-room",
  },
  {
    title: "install-service",
    href: "/install-service",
  },
]

const components2: { title: string; href: string; }[] = [
  {
    title: "menu-aluminum.angle-l",
    href: "/aluminum#section-1",
  },
  {
    title: "menu-aluminum.angle-cover-revet",
    href: "/aluminum#section-2",
  },
  {
    title: "menu-aluminum.u-cap",
    href: "/aluminum#section-3",
  },
  {
    title: "menu-aluminum.u-cap-cover-revet",
    href: "/aluminum#section-4",
  },
  {
    title: "menu-aluminum.beam",
    href: "/aluminum#section-5",
  },
  {
    title: "menu-aluminum.h",
    href: "/aluminum#section-6",
  },
  {
    title: "menu-aluminum.door-frame",
    href: "/aluminum#section-7",
  },
]

const components3: { title: string; href: string; }[] = [
  {
    title: "menu-sandwich-panels.EPS-Foam",
    href: "/sandwich-panels#section-1",
  },
  {
    title: "menu-sandwich-panels.PU-Foam",
    href: "/sandwich-panels#section-2",
  },
  {
    title: "menu-sandwich-panels.PIR-Foam",
    href: "/sandwich-panels#section-3",
  },
  {
    title: "menu-sandwich-panels.Rockwool",
    href: "/sandwich-panels#section-4",
  },
]

const components4: { title: string; href: string; }[] = [
  {
    title: "menu-door.h-1",
    href: "/door-clean-room#section-1",
  },
  {
    title: "menu-door.h-2",
    href: "/door-clean-room#section-2",
  },
]

const components5: { title: string; href: string; }[] = [
  {
    title: "menu-technical-information.h-1",
    href: "/technical-information#section-1",
  },
  {
    title: "menu-technical-information.h-2",
    href: "/technical-information#section-2",
  },
  {
    title: "menu-technical-information.h-3",
    href: "/technical-information#section-3",
  },
  {
    title: "menu-technical-information.h-4",
    href: "/technical-information#section-4",
  },
  {
    title: "menu-technical-information.h-5",
    href: "/technical-information#section-5",
  },
]

const components6: { title: string; href: string; }[] = [
  {
    title: "menu-install-service.h-1",
    href: "/install-service#section-1",
  },
  {
    title: "menu-install-service.h-2",
    href: "/install-service#section-2",
  },
  {
    title: "menu-install-service.h-3",
    href: "/install-service#section-3",
  },
  {
    title: "menu-install-service.h-4",
    href: "/install-service#section-4",
  },
  {
    title: "menu-install-service.h-5",
    href: "/install-service#section-5",
  },
]

export function NavigationMenuDemo() {
  const t = useTranslations('menu');

  return (
    <div className="w-full flex justify-between px-4">
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem className="">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t('home')}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('product-service')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid p-2 md:w-[200px]">
                {components1.map((component) => (
                  <ListItem
                    key={component.title}
                    title={'- ' + t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('aluminum')}</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid p-2 md:w-[300px]">
                {components2.map((component) => (
                  <ListItem
                    key={component.title}
                    title={t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('sandwich-panels')}</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid p-2 md:w-[200px]">
                {components3.map((component) => (
                  <ListItem
                    key={component.title}
                    title={t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('door-clean-room')}</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid p-2 md:w-[185px]">
                {components4.map((component) => (
                  <ListItem
                    key={component.title}
                    title={t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('technical-information')}</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid p-2 md:w-[170px]">
                {components5.map((component) => (
                  <ListItem
                    key={component.title}
                    title={t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t('install-service')}</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid p-2 md:w-[300px]">
                {components6.map((component) => (
                  <ListItem
                    key={component.title}
                    title={t(component.title)}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="hidden xl:block">
        <NavigationMenuList className="">
          <NavigationMenuItem className="">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t('contact')}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
