import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/aseiro_logo.svg" // or .png if you prefer
        alt="Aseiro Industries Logo"
        width={99}         // Adjust this if needed
        height={33}
        className="object-contain"
        priority
      />
    </Link>
  );
}
