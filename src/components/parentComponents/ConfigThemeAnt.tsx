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
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
