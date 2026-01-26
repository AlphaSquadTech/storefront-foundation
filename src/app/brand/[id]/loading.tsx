import LoadingUI from "@/app/components/reuseableUI/loadingUI";

export default function BrandLoading() {
  return (
    <div className="container mx-auto min-h-[100dvh] py-12 px-4 md:px-6 md:py-16 lg:py-24 lg:px-0">
      <LoadingUI className="h-[60vh]" />
    </div>
  );
}