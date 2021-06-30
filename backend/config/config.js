function Config(){
    switch(process.env.NODE_ENV){
        case 'staging':
            return { 
                DB_HOST: '',
                DB_PORT: 5432
            };

        case 'production':
            return { 
                DB_HOST: '',
                DB_PORT: 5432
            };
        
        default:
            return { 
                DB_HOST: '',
                DB_PORT: 15432
            };
    }
};

module.exports = Config();