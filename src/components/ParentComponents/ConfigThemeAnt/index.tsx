'use client';
import { ConfigProvider } from 'antd';

// types
import type { Children } from '@/types/generals.types';

export default function ConfigThemeAnt({ children }: Children) {
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
            colorPrimary: '#1b1b1b',
            colorPrimaryHover: '#2b2b2b',
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
            colorFillSecondary: '#bdbdbd',
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
            colorBgContainer: '#444',
            colorBorder: '#555',
            optionActiveBg: '#666',
            optionSelectedBg: '#666',
            optionSelectedColor: '#fff',
            colorTextPlaceholder: '#fff',
            colorText: '#fff',
            controlOutline: 'none',
          },
          Radio: {
            colorPrimary: '#B323CF',
            colorPrimaryActive: '#9337A5',
            colorPrimaryHover: '#D000FA',
            colorBgContainer: '#444',
            colorBorder: '#555',
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
