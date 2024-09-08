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
            defaultHoverBg: 'transparent',
            controlHeight: 40,
          },
          FloatButton: {
            colorPrimary: theme === 'dark' ? '#444' : '#c5c5c5',
            colorPrimaryHover: theme === 'dark' ? '#555' : '#d5d5d5',
          },
          Switch: {
            colorPrimary: '#1b1b1b',
            colorPrimaryHover: '#1b1b1b',
            colorTextLightSolid: '#fff',
colorTextQuaternary: '#f3e',
            handleBg: '#fff'
          },
          Menu: {
            itemBg: "transparent",
            lineWidth: 0,
            itemColor: "#888",
            horizontalItemSelectedColor: "#transparent",
            itemHoverColor: "#fff",
            itemSelectedColor: "#fff",
            itemSelectedBg: "transparent",
            itemActiveBg: "transparent",
            motionDurationMid: "0.1s",
            motionDurationSlow: "0.2s"
          },
          Pagination: {
            itemActiveBg: 'transparent',
            colorPrimaryBorder: '#9337A5',
            colorPrimary: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorText: '#f2f2f2',
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
            colorBgContainer: "#1b1b1b",
            colorBorder: "#222",
            colorIcon: "#666",
            colorIconHover: "#bdbdbd",
            colorText: "#fff",
            colorTextPlaceholder: "#666",
            hoverBorderColor: '#9337A5',
            activeBorderColor: '#D000FA',
            activeShadow: 'none',
            controlHeight: 40,
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
            colorBgElevated: '#1b1b1b',
            colorText: '#fff',
            controlItemBgHover: '#2b2b2b',
            controlItemBgActive: '#2b2b2b'
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
