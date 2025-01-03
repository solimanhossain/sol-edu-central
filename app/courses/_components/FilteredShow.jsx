"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function FilteredShow() {
    const [filter, setFilter] = useState({
        categories: ["development"],
        price: ["free"],
        sort: "",
    });
    return (
        <div className="flex items-center gap-2 flex-wrap">
            {filter.categories.length > 0 &&
                filter.categories.map((category) => (
                    <Button
                        key={category}
                        variant="ghost"
                        className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
                        onClick={() =>
                            applyArrayFilter({
                                type: "categories",
                                value: category,
                            })
                        }
                    >
                        {category}
                        <X className="w-3 ml-2" />
                    </Button>
                ))}
            {filter.price.length > 0 &&
                filter.price.map((price) => (
                    <Button
                        key={price}
                        variant="ghost"
                        className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
                        onClick={() =>
                            applyArrayFilter({
                                type: "price",
                                value: price,
                            })
                        }
                    >
                        {price}
                        <X className="w-3 ml-2" />
                    </Button>
                ))}
        </div>
    );
}
