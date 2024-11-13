"use client";
import { useState } from "react";

import { Accordion } from "@/components/ui/accordion";
import Filter from "./Filter";

export default function FilterBar() {
    const [filter, setFilter] = useState({
        categories: ["development"],
        price: ["free"],
        sort: "",
    });
    return (
        <Accordion defaultValue={["price"]} type="multiple">
            <Filter
                type="categories"
                filter={filter}
                OPTIONS={CATEGORY_OPTIONS}
            />
            <Filter type="price" filter={filter} OPTIONS={PRICE_OPTIONS} />
        </Accordion>
    );
}

const PRICE_OPTIONS = [
    { label: "Free", value: "free" },
    { label: "Paid", value: "paid" },
];
const CATEGORY_OPTIONS = [
    {
        id: 1,
        label: "Design",
        value: "design",
    },

    {
        id: 3,
        label: "Development",
        value: "development",
    },
];
