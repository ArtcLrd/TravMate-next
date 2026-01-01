import dynamic from "next/dynamic";

const TrailMap = dynamic(() => import("@/components/features/map/TrailMap"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      Loading Map...
    </div>
  ),
});

export default function TrailPage() {
  return (
    <div className="h-screen w-screen">
      <TrailMap />
    </div>
  );
}
