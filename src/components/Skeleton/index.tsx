import { Skeleton } from "antd";

export default function CardSkeleton() {
  return (
    <div className="w-full h-full flex-1 grid justify-center md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-5 xl:grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-3 gap-5">
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
      <Skeleton.Avatar
        active
        size={240}
        shape="square"
        style={{ borderRadius: "2px", backgroundColor: "#111" }}
      />
    </div>
  );
}
