import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

export default function Filter({ type, filter, OPTIONS }) {
    return (
        <AccordionItem value={type}>
            <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium capitalize text-gray-900">
                    {type}
                </span>
            </AccordionTrigger>

            <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                    {OPTIONS.map((option, optionIdx) => (
                        <li key={option.value} className="flex items-center">
                            <Checkbox
                                type="checkbox"
                                id={`${type}-${optionIdx}`}
                                onCheckedChange={() => {
                                    applyArrayFilter({
                                        type,
                                        value: option.value,
                                    });
                                }}
                                checked={filter[type].includes(option.value)}
                            />
                            <label
                                htmlFor={`${type}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600 cursor-pointer"
                            >
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </AccordionContent>
        </AccordionItem>
    );
}
