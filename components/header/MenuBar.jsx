import Link from "next/link";

export default function MenuBar() {
    return (
        <>
            {items?.map((item, index) => (
                <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className="menu-tems "
                >
                    {item.title}
                </Link>
            ))}
        </>
    );
}

const items = [
    {
        title: "Documentation",
        href: "/docs",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Blog",
        href: "/blog",
    },
];
