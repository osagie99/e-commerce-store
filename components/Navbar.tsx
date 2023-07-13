import { FC } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "@/components/NavbarActions";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative sm:px-6 px-4 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl text-center">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
