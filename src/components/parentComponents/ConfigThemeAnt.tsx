'use client';
import { ConfigProvider } from 'antd';
import { useTheme } from '@/context/ThemeContext';

// types
import type { Children } from '@/types/generals.types';

export default function ConfigThemeAnt({ children }: Children) {
  const { theme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#B323CF',
            colorPrimaryActive: '#9337A5',
            colorPrimaryHover: '#D000FA',
            primaryShadow: 'none',
            defaultHoverBg: 'transparent'
          },
          FloatButton: {
            colorPrimary: theme === 'dark' ? '#444' : '#c5c5c5',
            colorPrimaryHover: theme === 'dark' ? '#555' : '#d5d5d5',
          },
          Switch: {
            colorPrimary: '#B323CF',
            colorPrimaryBorder: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorTextLightSolid: theme === 'dark' ? '#fff' : '#222',
            handleBg: theme === 'dark' ? '#fff' : '#222'
          },
          Menu: {
            itemHeight: 20,
            itemBorderRadius: 0,
            colorSplit: 'transparent',
            padding: 0,
            dropdownWidth: 100,
            popupBg: '#555'
          },
          Pagination: {
            itemActiveBg: 'transparent',
            colorPrimaryBorder: '#9337A5',
            colorPrimary: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorText: theme === 'dark' ? '#fff' : '#222',
            borderRadius: 50
          },
          Tag: {
            colorPrimary: '#D000FA',
            colorPrimaryActive: '#B323CF',
            colorPrimaryHover: '#D04AFA',
            colorFillSecondary: theme === 'dark' ? '#bdbdbd' : '#f2f2f2'
          },
          Input: {
            boxShadow: 'none',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5',
            colorTextPlaceholder: theme === 'dark' ? '#fff' : '#a1a1a1',
            hoverBorderColor: '#9337A5',
            activeBorderColor: '#D000FA',
            activeShadow: 'none'
          },
          Select: {
            colorPrimary: '#9337A5',
            colorPrimaryHover: '#9337A5',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5',
            optionActiveBg: theme === 'dark' ? '#666' : '#f2f2f2',
            optionSelectedBg: theme === 'dark' ? '#666' : '#c5c5c5',
            optionSelectedColor: theme === 'dark' ? '#fff' : '#222',
            colorTextPlaceholder: theme === 'dark' ? '#fff' : '#a1a1a1',
            colorText: theme === 'dark' ? '#fff' : '#222',
            controlOutline: 'none',
          },
          Radio: {
            colorPrimary: '#B323CF',
            colorPrimaryActive: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5'
          },
          Dropdown: {
            colorBgElevated: theme === 'dark' ? '#444' : '#fff',
            colorText: theme === 'dark' ? '#fff' : '#222',
            controlItemBgHover: theme === 'dark' ? '#666' : '#f2f2f2',
            controlItemBgActive: theme === 'dark' ? '#666' : '#f2f2f2'
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
