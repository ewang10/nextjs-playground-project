const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'ericwang',
                mongodb_password: '5fLl8Dwf3hkPhBKa',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        };
    } 

    return {
        env: {
            mongodb_username: 'ericwang',
            mongodb_password: '5fLl8Dwf3hkPhBKa',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    };
}
