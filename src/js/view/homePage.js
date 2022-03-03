import ImagePreload from "../help/imagePreload";
import View from "./view";

export default class HomePage extends View {
    constructor(params){
        super(params);
        const title = this.langValue === 'en' ? 'home' : 'главная';
        this.setTitle(`art-quiz. - ${title}.`);
    }

    async mounted() {
        const imagesSrc = ['../../assets/Logo.png'];
        const preloader = new ImagePreload(imagesSrc);
        await preloader.preloadImages();
    
        this.translatePage();
    }

    render() {
        return `
        <header>
            <div class="container">
                <div class="header header-home">
                <a href="settings" class="header-home__nav header__nav header__nav--right btn" data-link>
                    <ion-icon name="settings"></ion-icon>
                </a>
                </div>
            </div>
        </header>
    
        <main class="main">
            <div class="container">
                <div class="home">
                <div class="home-logo image-loading"></div>
                <div class="home-types">
                    <a class="home-types__type" href="/categories/artists" data-link>
                    <div class="home-types__image artist image-loading"></div>
                    <div class="home-types__text" data-langkey="artists-quiz">artists quiz</div>
                    </a>
                    <a class="home-types__type" href="/categories/pictures" data-link>
                    <div class="home-types__image pictures image-loading"></div>
                    <div class="home-types__text" data-langkey="pictures-quiz">pictures quiz</div>
                    </a>
                </div>
                </div>
            </div>
        </main>
        
        <footer>
            <div class="container">
                <div class="footer">
                <a class="footer__github" href="https://github.com/viktorelenich">Viktor Elenich</a>
                <div class="footer__year">© 2021</div>
                <a class="footer__school" href="https://rs.school/js/" title="Rolling Scopes School"></a>
                </div>
            </div>
        </footer>
        `
    }
}