import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Hakaya from '../../../assets/gallery/Hakaya1.jpg'




function HakayaPage() {

    const HakayaImages = [

        {
            img: Hakaya,
            title: 'Hakaya',
            description: "Zahlreiche talentierte Schriftsteller*innen mit Fluchtgeschichte nutzen das Schreiben als bedeutsames\nWerkzeug, um ihre eigene Geschichte niederzuschreiben und das System der alten und neuen Heimat\nfrei zu kritisieren. Hakaya (Geschichten) soll der Förderung von Schriftsteller*innen und dem\ninterkulturellen Dialog dienen. Außerdem ermutigt diese Plattform Menschen mit Fluchterfahrung, ihre\neigenen Geschichten zu erzählen.\nHakaya ist eine Plattform, in der die hier lebenden Syrer*innen ihre Geschichten, Erlebnissen und\nTräume in orientalischer Atmosphäre mit euch teilen.",


        },

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={HakayaImages}
            />
        </div>
    );
}

export default HakayaPage;
