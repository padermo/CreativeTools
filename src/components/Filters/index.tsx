"use client";
import { Form } from "antd";
import { useItems } from "@/context/ItemsContext";
import Category from "./Category";
import Subcategory from "./SubCategory";
import SubFilters from "./SubFilters";

export default function Filters() {
  const [form] = Form.useForm();
  const { getAllItems, handleCategory } = useItems();

  const handleResetSelect = () => {
    form.resetFields();
    getAllItems();
  };

  const handleResetCategory = (value: string) => {
    form.resetFields();
    handleCategory(value);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Category
        handleResetSelect={handleResetSelect}
        handleResetCategory={handleResetCategory}
      />
      <Form form={form} className="w-full flex gap-2 flex-wrap">
        <SubFilters />
        <Subcategory />
      </Form>
    </div>
  );
}
