import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SORT_OPTIONS = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
];

export default function SortByPrice() {
    return (
        <>
            <Select>
                <SelectTrigger className="w-[90px] sm:w-[180px] border-none !border-b focus:ring-0 focus:ring-offset-0  overflow-hidden">
                    <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sorted By Price</SelectLabel>
                        {SORT_OPTIONS.map((option) => (
                            <SelectItem
                                className="cursor-pointer"
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}
