import Link from "next/link";

export default function MenuBar() {
    return (
        <div className="md:flex gap-6 hidden">
            <Link
                href="https://docucraft-sol.vercel.app/"
                className="menu-tems"
            >
                Documentation
            </Link>
            <Link href="/pricing" className="menu-tems">
                Pricing
            </Link>
            <Link href="#" className="menu-tems">
                Blog
            </Link>
        </div>
    );
}
