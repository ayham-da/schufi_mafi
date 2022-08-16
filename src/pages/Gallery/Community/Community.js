import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import community1 from '../../../assets/gallery/Community1.jpg'
import community2 from '../../../assets/gallery/Community2.jpg'
import community3 from '../../../assets/gallery/Community3.jpg'
import community4 from '../../../assets/gallery/Community4.jpg'





function CommunityPage() {

    const communityImages = [

        {
            img: community1,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: community2,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: community3,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },
        {
            img: community4,
            title: 'community',
            description: "Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen\nTreffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle\nBiographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft\nwie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges\nKonzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie\nfolgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo\nTheaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu\nseinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.",

        },

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={communityImages}
            />
        </div>
    );
}

export default CommunityPage;
