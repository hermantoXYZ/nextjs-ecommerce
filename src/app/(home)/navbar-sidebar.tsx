import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


interface NavbarItem {
    href : string;
    children : React.ReactNode;
}

interface Props {
    items : NavbarItem[];
    open : boolean;
    onOpenChange: (open : boolean) => void;
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange,
}: Props) => {
    const pathname = usePathname();
    
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                { items.map((item) => (
                    <Link 
                        key={item.href} 
                        href={item.href} 
                        className={cn(
                            "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium",
                            pathname === item.href && "bg-black text-white"
                        )}
                        onClick={() => onOpenChange(false)}
                    >
                        {item.children}
                    </Link>
                ))}

                <div className="border-t">
                    <Link 
                        href="/sign-in" 
                        className={cn(
                            "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium",
                            pathname === "/sign-in" && "bg-black text-white"
                        )}
                        onClick={() => onOpenChange(false)}
                    >
                        Sign In
                    </Link>
                    <Link 
                        href="/sign-up" 
                        className={cn(
                            "w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium",
                            pathname === "/sign-up" && "bg-black text-white"
                        )}
                        onClick={() => onOpenChange(false)}
                    >
                        Sign Up
                    </Link>
                </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
};