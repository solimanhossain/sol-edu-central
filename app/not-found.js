import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-[calc(100vh-15%)] w-full flex-center">
            <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-32 lg:pt-40 grainy">
                <div className="container flex max-w-[32rem] flex-col items-center gap-4 text-center relative isolate">
                    <Image
                        src="/images/404.png"
                        alt="404"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                    <h1>Not found!</h1>
                    <div className="bg-slate-100 p-4 rounded-sm shadow-sm">
                        <Link href="/">Go back to Home</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
