const routes = [
    //homepage
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response('Homepage')
                    .code(200);
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return h.response('Halaman ini tidak dapat diakses dengan method tersebut')
                    .code(400);
        },
    },

    //about
    {    
        method: 'GET',
        path: '/about',
        handler: (request, h) =>{
            return h.response('About Page')
                    .code(200);
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) =>{
            return h.response('Halaman ini tidak dapat diakses dengan method tersebut')
                    .code(400);
        },

    },

    //path parameter
    {
        method: 'GET',
        path: '/user/{name?}',
        handler: (request, h) => {
            const { name = "Stranger"} = request.params;
            const { lang } = request.query;

            if( lang == 'id'){
                return h.response(`Hai, ${name}`)
                        .code(201);
            }

            return h.response(`Hello, ${name}!`)
                    .code(201);
        },
    },

    //any url
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return h.response('Halaman tidak ditemukan')
                    .code(404);
        },
    },
];

module.exports = routes;