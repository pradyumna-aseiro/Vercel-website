import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Aseiro">
      <Image
        src="/images/aseiro_logo.svg"  // change to .png if needed
        alt="Aseiro Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}
