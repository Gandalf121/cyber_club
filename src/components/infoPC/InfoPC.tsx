import {CardPCComponent} from "./CardPCComponent.tsx";

const infoPCCompanents = [
    {
        img: "src/components/infoPC/pc/Rectangle407.png",
        title: "\n" +
            "\n" +
            "Intel Core i5-12400 (Oem) (4.4/2.5Ghz, 6 ядер, 18МВ, 117W, LGA1700)\n" +
            "\n" +
            "Deepcool PK650D (R-PK650D-FA0B-E) 650W, APFC, 80 Plus BRONZE\n" +
            "\n" +
            "Asus RTX 3060 V2 0C Edition 12GB GDDR6 192bit (DUAL-RTX3060-O12G-V2)\n" +
            "\n" +
            "DDR4 16Gb KiTof2 PC-25600 3200MHz Kingston FURY Beast (KF-432C16BBK2/16) CL16\n"
    },
    {
        img: "src/components/infoPC/pc/Rectangle408.png",
        title: "\n" +
            "\n" +
            "Диагональ: 24.5\"\n" +
            "\n" +
            "Матрица: TN+Film\n" +
            "\n" +
            "Частота обновления экрана:\n" +
            "\n" +
            "240 Гц (HDMI 2.0, DP)\n"
    },
    {
        img: "src/components/infoPC/pc/Rectangle409.png",
        title: "\n" +
            "\n" +
            "HyperX Pulsefire Haste\n" +
            "\n" +
            "HyperX Alloy Origins Core\n" +
            "\n" +
            "HyperX Cloud Alpha\n" +
            "\n" +
            "HyperX Pulsefire Mat XL\n"
    },
    {
        img: "src/components/infoPC/pc/Rectangle410.png",
        title: "TV Harper\n" +
            "\n" +
            "75\"\n" +
            "\n" +
            "3840x2160 (4K UHD"
    },
    {
        img: "src/components/infoPC/pc/Rectangle411.png",
        title: "\n" +
            "\n" +
            "Консоль\n" +
            "\n" +
            "3 геймпада\n" +
            "\n" +
            "ТВ\n"
    },
]

export function InfoPC() {
    return (
        <section>
            <div className="section__wrapper">
                <div className="section__container">
                    <div className="section__title" style={{marginTop:"3rem"}}>
                        <h2>наше железо</h2>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <CardPCComponent img={infoPCCompanents[0].img} title={infoPCCompanents[0].title}/>
                        <div style={{display:"flex",flexDirection: "column"}}>
                            <div style={{display: "flex", justifyContent: "space-between" , margin: "1rem"}}>
                                <CardPCComponent img={infoPCCompanents[1].img} title={infoPCCompanents[1].title}/>
                                <CardPCComponent img={infoPCCompanents[2].img} title={infoPCCompanents[2].title}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", margin: "1rem"}}>
                                <CardPCComponent img={infoPCCompanents[3].img} title={infoPCCompanents[3].title}/>
                                <CardPCComponent img={infoPCCompanents[4].img} title={infoPCCompanents[4].title}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}