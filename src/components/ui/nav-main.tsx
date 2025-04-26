"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    isGroup?: boolean
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const t = useTranslations('menu');
  

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-2">
        {items.map((item) => item.isGroup ? (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={t(item.title)}>
                  {item.icon && <item.icon />}
                  <span>{t(item.title)}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent
                className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
              >
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={t(subItem.title)}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{item.title == 'product-service' ? "- " + t(subItem.title) : t(subItem.title)}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ) : (
          <Link key={item.title} href={item.url}>
            <SidebarMenuButton tooltip={t(item.title)}>
              <span>{t(item.title)}</span>
            </SidebarMenuButton>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
