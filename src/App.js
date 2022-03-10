import Card from "./components/Card";

function App() {
    return (
        <main className='container'>
            <section className="grid">
                <Card
                    thumbnail="./assets/ventilador1.jpg"
                    title="Ventilador de Coluna Mallory Delfos TS+ 3 Velocidades..."
                    price="R$ 209,28"
                    feels="em 1x no cartão de créditos"
                />
                <Card
                    thumbnail="./assets/ventilador2.jpg"
                    title="Ventilador de Coluna Mallory Air Timer TS+ com Controle..."
                    price="R$ 247,66"
                    feels="em 1x no cartão de crédito"
                />
                <Card
                    thumbnail="./assets/ventilador3.jpg"
                    title="Ventilador de Coluna 40cm Mallory Delfos TS+..."
                    price="R$ 179,99"
                />
                <Card
                    thumbnail="./assets/ventilador4.jpg"
                    title="Ventilador De Coluna Turbo 50cm Preto Ventisol"
                    price="R$ 212,04"
                    feels="em até 2x s/ juros no cartão"
                />
                <Card
                    thumbnail="./assets/ventilador5.jpg"
                    title="Ventilador De Coluna Preto 40cm Turbo 6 Pás Oscilante..."
                    price="R$ 369,90"
                    feels="em até 3x s/ juros no cartão"
                />
            </section>

            <section className="cards2">
                <div className="patrocinio">
                    <h3>produtos patrocinados</h3>
                </div>
                <div className="grid">
                    <Card
                        thumbnail="./assets/ventilador1.jpg"
                        title="Ventilador de Coluna Mallory Delfos TS+ 3 Velocidades..."
                        price="R$ 209,28"
                        feels="em 1x no cartão de créditos"
                    />
                    <Card
                        thumbnail="./assets/ventilador2.jpg"
                        title="Ventilador de Coluna Mallory Air Timer TS+ com Controle..."
                        price="R$ 247,66"
                        feels="em 1x no cartão de crédito"
                    />
                    <Card
                        thumbnail="./assets/ventilador3.jpg"
                        title="Ventilador de Coluna 40cm Mallory Delfos TS+..."
                        price="R$ 179,99"
                    />
                    <Card
                        thumbnail="./assets/ventilador4.jpg"
                        title="Ventilador De Coluna Turbo 50cm Preto Ventisol"
                        price="R$ 212,04"
                        feels="em até 2x s/ juros no cartão"
                    />
                    <Card
                        thumbnail="./assets/ventilador5.jpg"
                        title="Ventilador De Coluna Preto 40cm Turbo 6 Pás Oscilante..."
                        price="R$ 369,90"
                        feels="em até 3x s/ juros no cartão"
                    />
                </div>
            </section>
        </main>
    );
}

export default App;

