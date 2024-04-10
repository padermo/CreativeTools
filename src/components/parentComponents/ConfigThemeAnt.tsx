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
            itemBg: 'transparent',
            itemHeight: 20,
            itemBorderRadius: 0,
            colorSplit: 'transparent',
            padding: 0,
            dropdownWidth: 100
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
            colorPrimary: '#DB4CFE',
            colorPrimaryActive: '#DA63FF',
            colorPrimaryHover: '#E681FF'
          },
          Input: {
            boxShadow: 'none',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5',
            hoverBorderColor: '#9337A5',
            activeBorderColor: '#D000FA',
            activeShadow: 'none'
          },
          Select: {
            colorPrimary: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5',
          },
          Radio: {
            colorPrimary: '#B323CF',
            colorPrimaryActive: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorBgContainer: theme === 'dark' ? '#444' : '#fff',
            colorBorder: theme === 'dark' ? '#555' : '#c5c5c5',
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
