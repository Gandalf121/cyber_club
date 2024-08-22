const PC = [
    {
        tariff: "4 BYN",
        price: "1 час"
    },
    {
        tariff: "15 BYN",
        price: "5 часов"
    },
    {
        tariff: "20 BYN",
        price: "ночь (23:00 - 08:00)"
    },
    {
        tariff: "5 BYN",
        price: "VIP 1 час"
    },
    {
        tariff: "20 BYN",
        price: "VIP 5 часов"
    },
    {
        tariff: "30 BYN",
        price: "VIP ночь (23:00 до 08:00)"
    },

]

export function Tariffs() {
    return (
        <section>
            <div className="section__wrapper">
                <div className="section__container">
                    <div className="section__title">
                        <h2>Тарифы</h2>
                    </div>
                    <div className="section__tariffs tariffs">
                        <div className="tariffs__item">
                            {PC.map((item, index) => {
                                return (
                                    <div key={index} className="tariffs__info">
                                        <span>{item.tariff}</span>
                                        <span>{item.price}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
    ;
}

