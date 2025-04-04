import ProductSection from "@/components/product-section";
import VisionBoxTable from "@/components/vision-box-table";

const areaScanCameras = [
  {
    title: "CS Area Scan Camera",
    description: "Improved design and performance for enhanced general vision applications.",
    image: "/products/cs-area-scan.png",
  },
  {
    title: "CU Area Scan Camera",
    description: "Versatile industrial camera with low power consumption and stable performance.",
    image: "/products/cu-area-scan.png",
  },
  {
    title: "CH Area Scan Camera",
    description: "High-end camera supporting GigE, USB 3.0, CoaXPress and more for semiconductors.",
    image: "/products/ch-area-scan.png",
  },
];

const smartCodeReaders = [
  {
    title: "ID2000 Code Reader",
    description: "Compact barcode reader with patented lighting for short-range accuracy.",
    image: "/products/id2000.png",
  },
  {
    title: "ID3000 Code Reader",
    description: "Deep-learning-based code reader with mechanical focusing.",
    image: "/products/id3000.png",
  },
  {
    title: "ID5000 Code Reader",
    description: "High-resolution reader powered by multi-core AI processor.",
    image: "/products/id5000.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <ProductSection title="Area Scan Cameras" products={areaScanCameras} />
      <ProductSection title="Smart Code Readers" products={smartCodeReaders} />
      <VisionBoxTable />
    </>
  );
}
