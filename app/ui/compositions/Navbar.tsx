import { ReactNode } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarHeader,
} from '@/components/ui/sidebar';

import { Home, Create, Explore, Logo, Profile, Liked, New } from '@/icons';
import { IconText } from '@/app/ui/components/IconText';
import { Button } from '@/app/ui/components/Button';

interface NavbarProps {
  children?: ReactNode;
}

const Primary = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
    id: 1,
  },
  {
    title: 'Create',
    url: '#',
    icon: Create,
    id: 2,
  },
  {
    title: 'Explore',
    url: '#',
    icon: Explore,
    id: 3,
  },
];

const Library = [
  {
    title: 'Home',
    url: '#',
    icon: Profile,
    id: 1,
  },
  {
    title: 'Liked',
    url: '#',
    icon: Liked,
    id: 2,
  },
  {
    title: 'New Playlist',
    url: '#',
    icon: New,
    id: 3,
  },
];

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="bg-primary-400">
          <IconText icon={Logo} text="MusicGPT" />
        </SidebarHeader>
        <SidebarContent className="bg-primary-400">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {Primary.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <Button icon={item.icon}>{item.title}</Button>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-300">
              Library
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Library.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <Button icon={item.icon}>{item.title}</Button>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
