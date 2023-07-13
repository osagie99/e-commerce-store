import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductsLists from "@/components/ProductsLists";
import Container from "@/components/ui/Container";

const Homepage = async () => {
  const billboard = await getBillboard("4c8c711c-f7f0-43bc-97f1-360cb117a835");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsLists title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
