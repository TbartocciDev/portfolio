import "./ContactPage.css"
import TestSection from "./TestSection"

export default function ContactPage({ data, setPage }) {
    
    setPage("contact")

    return (
        <main className="ContactPage">
            <TestSection />
        </main>
    )
}