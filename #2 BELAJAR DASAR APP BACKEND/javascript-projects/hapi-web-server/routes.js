const routes = [
    //homepage
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman ini tidak dapat diakses dengan method tersebut';
        },
    },

    //about
    {    
        method: 'GET',
        path: '/about',
        handler: (request, h) =>{
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) =>{
            return 'Halaman ini tidak dapat diakses dengan method tersebut';
        },

    },

    //path parameter
    {
        method: 'GET',
        path: '/user/{name?}',
        handler: (request, h) => {
            const { name = "Stranger"} = request.params;
            return `Hello, ${name}!`;
        },
    },

    //any url
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;