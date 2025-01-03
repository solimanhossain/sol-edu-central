import Image from "next/image";
import Link from "next/link";

export default function SearchButton({ handleSearch, courses }) {
    return (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 mt-2 rounded-lg overflow-hidden">
            <ul className="cursor-pointer">
                {courses?.map((course) => (
                    <li
                        key={course.id}
                        className="px-4 py-2 hover:bg-gray-100 my-1"
                    >
                        <Link
                            className="flex items-center gap-2"
                            href={"/courses/" + course.id}
                        >
                            <Image
                                src={course.thumbnail}
                                alt={course.title}
                                width={50}
                                height={50}
                                className="w-10 h-10 object-cover rounded-full"
                            />
                            <p className="text-sm">{course.title}</p>
                        </Link>
                    </li>
                ))}
                <li className="px-4 py-2 font-medium border-t hover:bg-gray-100">
                    <button
                        onClick={handleSearch}
                    >{`See all results ->`}</button>
                </li>
            </ul>
        </div>
    );
}
