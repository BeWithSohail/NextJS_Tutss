import AdminHeader from "@/components/AdminHeader/AdminHeader";
import AdminFooter from "@/components/AdminFooter/AdminFooter";

export default function AdminLayout({ children }) {
    return (
        <section>
            <AdminHeader />
            {children}
            <AdminFooter />
        </section>
    )
}