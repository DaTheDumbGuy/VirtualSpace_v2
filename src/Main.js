import Section from "./components/Section"
import content from "./content";

export default function Main() {
    return (
        <main>
            {content.map(data => (
                <Section key={data.key} section={data} />
            ))}
        </main>
    );
}