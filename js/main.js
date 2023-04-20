class DataFromApi {
    data;

    async GetData() {
        await fetch("./data/data.json").then(function (response) {
            return response.json();
        }).then((data) => {
            this.data = data.episodes;
        });
        return this.data;
    }
}

class Header {
    placeToRenderHeader;
    header;
    headerFigure;
    headerImage;
    headerHeading;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.header = document.createElement("header");
        this.header.classList = ("header");

        this.headerFigure = document.createElement("figure");
        this.headerFigure.classList = ("header__figure");

        //voeg source aan img element toe
        this.headerImage = document.createElement("img");
        this.headerImage.classList = ("header__image");
        this.headerImage.src = "./images/mouse.webp"

        this.headerHeading = document.createElement("h1");
        this.headerHeading.classList = ("header__title");
        this.headerHeading.innerHTML = "Collection of Happiness";

        this.render();
    }

    render() {
        this.placeToRenderHeader.appendChild(this.header);
        this.header.appendChild(this.headerFigure);
        this.header.appendChild(this.headerHeading);
        this.headerFigure.appendChild(this.headerImage);
    }
}

class Main {
    placeToRenderMain;
    element;
    articleMain

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.element = document.createElement("main");
        this.element.classList = ("main");

        this.articleMain = document.createElement("section");
        this.articleMain.classList = ("Happiness")

        this.render();
    }
    render() {
        this.placeToRenderMain.appendChild(this.element);
        this.element.appendChild(this.articleMain);
    }
}

class LeftPanel {
    placeToRenderLLeftPanel;
    articleLeft;
    ulLeftrticle;
    grouperElement1;
    grouperElement2;
    ArticlesShowFromRight

    constructor(placeToRenderLLeftPanel, ArticlesShowFromRight) {
        this.ArticlesShowFromRight = ArticlesShowFromRight;
        this.placeToRenderLLeftPanel = placeToRenderLLeftPanel;

        this.articleLeft = document.createElement("artcile");
        this.articleLeft.classList = ("leftpanel");

        this.ulLeftrticle = document.createElement("ul");
        this.ulLeftrticle.classList = ("leftpanel__ul");
    } 
    makeCardsFromData(data) {
        let randomnummer1 = Math.floor(Math.random() * 4);
        let randomnummer2 = randomnummer1 + 4;
        // Object.entries(data).forEach((entry) => {
        for (let i = randomnummer1; i < randomnummer2; i++) {

            this.listLeftArticle = document.createElement("li");
            this.listLeftArticle.classList = "leftpanel__li";

            this.listLeftImageArticle = document.createElement("img");
            this.listLeftImageArticle.classList = "leftpanel__image";

            this.datumLeftArticle = document.createElement("p");
            this.datumLeftArticle.classList = "leftpanel__datum";

            this.titleLeftArticle = document.createElement("h3");
            this.titleLeftArticle.classList = "leftpanel__title";

            this.datumLeftArticle.innerHTML = data[i]["date (dd-mm-yyyy)"];
            this.titleLeftArticle.innerHTML = data[i]["title"];
            this.listLeftImageArticle.src = data[i]["image"];

            this.ulLeftrticle.appendChild(this.listLeftArticle);
            this.listLeftArticle.appendChild(this.listLeftImageArticle);
            this.listLeftArticle.appendChild(this.datumLeftArticle);
            this.listLeftArticle.appendChild(this.titleLeftArticle);

            this.listLeftArticle.onclick = () => {
                this.ArticlesShowFromRight.titleDetail.innerHTML = data[i]["title"];
                this.ArticlesShowFromRight.datumDetail.innerHTML = data[i]["date (dd-mm-yyyy)"];
                this.ArticlesShowFromRight.imageDetail.src = data[i]["image"];
                this.ArticlesShowFromRight.paragraphDetail.innerHTML = data[i]["summary"];
                this.ArticlesShowFromRight.link.href = data[i]["url"];
                this.ArticlesShowFromRight.audio.src = data[i]["audio"];
            };
        }

        this.render();
    }

    render() {
        this.placeToRenderLLeftPanel.appendChild(this.articleLeft);

        this.articleLeft.appendChild(this.ulLeftrticle);
    }

}

class RightSection {
    placeToRenderRightPanel;
    rightArticle;
    detailRightArticle;
    datumDetail;
    titleDetail;
    paragraphDetail;
    imageDetail;
    buttonDetail;
    audio;
    link;
    constructor(placeToRenderRightPanel) {
        this.placeToRenderRightPanel = placeToRenderRightPanel;

        this.rightArticle = document.createElement("article");
        this.rightArticle.classList = "rightpanel";

        this.detailRightArticle = document.createElement("div");
        this.detailRightArticle.classList = "rightpanel__div";

        this.imageDetail = document.createElement("img");
        this.imageDetail.classList = "rightpanel__detailImage";

        this.datumDetail = document.createElement("h3");
        this.datumDetail.classList = "rightpanel__detaildatum";

        this.titleDetail = document.createElement("h3");
        this.titleDetail.classList = "rightpanel__detailtitle";

        this.paragraphDetail = document.createElement("p");
        this.paragraphDetail.classList = "rightpanel__detailtext";

        this.buttonDetail = document.createElement("div");
        this.buttonDetail.classList = "rightpanel__detailbuttonWrap";

        this.audio = document.createElement("audio");
        this.audio.classList = "rightpanel__audio";
        this.audio.setAttribute("controls", true)

        this.link = document.createElement("a");
        this.link.classList = ("rightpanel__link");
        

        this.render();
    }

    render() {
        this.placeToRenderRightPanel.appendChild(this.rightArticle);

        this.rightArticle.appendChild(this.detailRightArticle);
        this.rightArticle.appendChild(this.paragraphDetail);
        this.rightArticle.appendChild(this.buttonDetail);

        this.detailRightArticle.appendChild(this.imageDetail);
        this.detailRightArticle.appendChild(this.datumDetail);
        this.detailRightArticle.appendChild(this.titleDetail);

        this.buttonDetail.appendChild(this.audio);
        this.buttonDetail.appendChild(this.link);
    }

    Contentrender(data) {
        //header
        this.imageDetail.src = data[0]["image"];
        this.datumDetail.innerHTML = data[0]["date (dd-mm-yyyy)"];
        this.titleDetail.innerHTML = data[0]["title"];
        //text
        this.paragraphDetail.innerHTML = data[0]["summary"];
        //audio
        this.audio.src = data[0]["audio"];
        //link
        this.link.innerHTML = "source";
        this.link.href = data[0]["url"];
    }

}

class Footer {
    placeToRenderFooter;
    footer;
    footerParagraph;

    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = placeToRenderFooter;

        this.footer = document.createElement("footer");
        this.footer.classList = ("footer");

        this.footerParagraph = document.createElement("p");
        this.footerParagraph.classList = ("footer__p")
        this.footerParagraph.innerHTML = "gemaakt door - Abdi Abdikarim SD2C Media-Gay-College Amsterdam";

        this.render();
    }

    render() {
        this.placeToRenderFooter.appendChild(this.footer);
        this.footer.appendChild(this.footerParagraph);
    }

}




class App {
    DataFromApiClass;
    headerClass;
    mainClass;
    leftpanelClass;
    rightPanelClass;
    footerClass;

    constructor() {
        this.DataFromApiClass = new DataFromApi();
        this.headerClass = new Header("body");
        this.mainClass = new Main("body");
        this.rightpanelClass = new RightSection(this.mainClass.articleMain);
        this.leftpanelClass = new LeftPanel(this.mainClass.articleMain, this.rightpanelClass);
        this.footerClass = new Footer(this.mainClass.element);

        this.DataFromApiClass.GetData().then(
            () => {
                this.leftpanelClass.makeCardsFromData(this.DataFromApiClass.data);
                this.rightpanelClass.Contentrender(this.DataFromApiClass.data);
            }
        );
    }
}

const app = new App();