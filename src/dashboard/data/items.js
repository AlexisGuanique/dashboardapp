// URLS QUE VAN A LA PETICION
export const items = [
    'breakingbadapi.com/api/quotes',
    'jsonplaceholder.typicode.com/posts',
    'pokeapi.co/api/v2/pokemon/',
    'pokeapi.co/api/v2/pokemo/',
    'pokeapi.co/api/v2/pokemn/',
    'nplaceholder.typicode.com/posts',
    'onplaceholder.typicode.com/posts',
    'api.covidtracking.com/v1/status.json',
];

// COLUMNAS PARA CONFIGURAR LA TABLA

export const columnas = [
    {
        title: "Servicio",
        dataIndex: "servicio",
        key: "servicio",
    },
    {
        title: "Dirección",
        dataIndex: "direccion",
        key: "direccion",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        sorter: (a, b) => a.status - b.status,
    },
    {
        title: "Última actualización positiva",
        dataIndex: "fecha",
        key: "fecha"
    },
    {
        title: "State",
        dataIndex: "state",
        key: "state"
    },
    {
        title: "StatusText",
        dataIndex: "statustext",
        key: "statustext"
    },
];


export const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
};