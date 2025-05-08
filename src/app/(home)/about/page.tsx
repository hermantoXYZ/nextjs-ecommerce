import { Card } from "@/components/ui/card";

const Page = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-5 text-left">About Our Store</h1>
            <div className="mb-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-3">Quality</h3>
                        <p className="text-gray-700">We carefully select each product in our inventory to ensure it meets our high standards for performance and durability.</p>
                    </Card>
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-3">Customer Service</h3>
                        <p className="text-gray-700">Our dedicated support team is always ready to assist you with any questions or concerns about your purchase.</p>
                    </Card>
                    <Card className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-3">Innovation</h3>
                        <p className="text-gray-700">We stay ahead of trends to bring you the latest and most innovative products on the market.</p>
                    </Card>
                </div>
            </div>
            

        </div>
    );
};

export default Page;