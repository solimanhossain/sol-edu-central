"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import SearchButton from "./SearchButton";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const [courses, setCourses] = useState([]);
    const searchParams = useSearchParams();
    const route = useRouter();

    function handleSearch() {
        const params = new URLSearchParams(searchParams);
        params.set("search", search);
        route.push("/courses?" + params.toString());
        setSearch("");
    }

    const debounceSearch = useDebounce(search, 300);
    useEffect(() => {
        async function fetchData() {
            fetch(`/api/courses?search=${debounceSearch.trim()}`).then(
                (res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            setCourses(data.courses);
                        });
                    }
                }
            );
        }
        fetchData();
    }, [debounceSearch]);

    return (
        <div className="relative h-10 max-lg:w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 h-4 w-4" />
            <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search courses..."
                className="pl-8 pr-3 py-2 text-sm"
            />
            {search && (
                <SearchButton handleSearch={handleSearch} courses={courses} />
            )}
        </div>
    );
}
