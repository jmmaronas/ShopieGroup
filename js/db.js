export const db =
{
    products: [
        {
            id: "1",
            title: "Business Continuity Management",
            category: "yoga",
            description: "Este curso te hará comprender la metodología de gestión integral que las organizaciones están implementando actualmente tanto en la preparación, como para la organización y control de futuros incidentes que puedan poner en peligro la estrategia.",
            skills: [
                {
                    id: "1",
                    description: "Entender en que consiste el BCM"
                },
                {
                    id: "2",
                    description: "Saber utilizar que metodología es la mejor"
                }
            ],
            units: [
                {
                    id: "1",
                    title: "Introducción"
                },
                {
                    id: "2",
                    title: "Business Continuity Management"
                },
                {
                    id: "3",
                    title: "Desarrollo, Implementacion y éxito del BCM."
                },
                {
                    id: "4",
                    title: "Finalizacion de curso "
                }
            ],
            duration: 4,
            modality: "On Line",
            img: "./assets/img/business continuity.jpg"
        },
    ],
    metodos: {
        capitalize: (string) => {
            const result = string.toLowerCase()
                .split(' ')
                .map(strWord => strWord.length > 3 ? strWord.substring(0, 1)
                    .toUpperCase() + strWord.substring(1, strWord.length) : strWord)
                .join(' ');
            return result
        },
    }
};


