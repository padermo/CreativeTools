"use client";
import { ConfigProvider } from "antd";

// types
import type { Children } from "@/types/generals.types";

export default function ConfigThemeAnt({ children }: Children) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#00D084",
            colorPrimaryActive: "#00A868",
            colorPrimaryHover: "#33DB9B",
            primaryShadow: "none",
            defaultBg: "transparent",
            defaultColor: "#fff",
            defaultBorderColor: "#fff",
            defaultHoverBg: "transparent",
            controlHeight: 40,
          },
          FloatButton: {
            colorPrimary: "#1b1b1b",
            colorPrimaryHover: "#2b2b2b",
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
            motionDurationSlow: "0.2s",
          },
          Pagination: {
            itemActiveBg: "transparent",
            colorPrimaryBorder: "#00D084",
            colorPrimary: "#00D084",
            colorPrimaryHover: "#33DB9B",
            colorText: "#f2f2f2",
            colorTextDisabled: "#555",
            colorBgContainer: "#555",
            colorBgTextHover: "#666",
            borderRadius: 50,
          },
          Tag: {
            colorPrimary: "#1b1b1b",
            colorPrimaryActive: "#fff",
            colorPrimaryHover: "#1b1b1b",
            colorFillSecondary: "#bdbdbd",
            colorText: "#888",
          },
          Input: {
            boxShadow: "none",
            colorBgContainer: "#1b1b1b",
            colorBorder: "#222",
            colorIcon: "#666",
            colorIconHover: "#bdbdbd",
            colorText: "#fff",
            colorTextPlaceholder: "#666",
            hoverBorderColor: "#33DB9B",
            activeBorderColor: "#00A868",
            activeShadow: "none",
            controlHeight: 40,
          },
          Select: {
            colorPrimary: "#00D084",
            colorPrimaryHover: "#33DB9B",
            colorBgContainer: "#1b1b1b",
            colorBorder: "#222",
            colorBgElevated: "#1b1b1b",
            optionActiveBg: "#2b2b2b",
            optionSelectedBg: "#2b2b2b",
            optionSelectedColor: "#fff",
            colorTextPlaceholder: "#666",
            colorText: "#fff",
            colorIcon: "#666",
            controlOutline: "none",
          },
          Radio: {
            colorPrimary: "#00D084",
            colorPrimaryActive: "#00A868",
            colorPrimaryHover: "#33DB9B",
            colorBgContainer: "#1b1b1b",
            colorBorder: "#2b2b2b",
            colorText: "#fff",
          },
          Dropdown: {
            colorBgElevated: "#1b1b1b",
            colorText: "#fff",
            controlItemBgHover: "#2b2b2b",
            controlItemBgActive: "#2b2b2b",
          },
          Message: {
            contentBg: "#1b1b1b",
            colorText: "#fff",
          },
          Form: {
            itemMarginBottom: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
