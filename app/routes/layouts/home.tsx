import { Outlet } from "react-router";
import Hero from "~/components/Hero";


const HomeLayout = () => {
    return ( 
        <>
            <Hero name="Opalo" />
            <section className="max-w-7xl mx-auto px-6 my-8">
                <Outlet />
            </section>
        </>
     );
}
 
export default HomeLayout;