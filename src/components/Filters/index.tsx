"use client";
import { Form } from "antd";
import { useItems } from "@/context/ItemsContext";
import Category from "./Category";
import Subcategory from "./SubCategory";
import SubFilters from "./SubFilters";

export default function Filters() {
  const [form] = Form.useForm();
  const { getAllItems } = useItems();

  const handleResetSelect = () => {
    form.resetFields();
    getAllItems();
  };
  return (
    <div className="w-full flex flex-col gap-2">
      <Category getAllItems={handleResetSelect} />
      <Form form={form} className="w-full flex gap-2 flex-wrap">
        <SubFilters />
        <Subcategory />
      </Form>
    </div>
  );
}
