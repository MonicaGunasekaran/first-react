import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./assets/data"
import Location_icon from "./assets/Location_icon.png"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}