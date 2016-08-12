const Nightmare = require( 'nightmare' );
const nightmare = Nightmare( {show: false} );
const config = require('./config.json');

config.apps.forEach((app) => {
    nightmare
        .goto( app.url )
        .insert( app.usernameInputId, app.username )
        .insert( app.passwordInputId, app.password )
        .click( app.submitButtonId )
        .wait( app.waitELement )
        .wait( app.maxWait )
        .exists( app.targetElementId )
        .end()
        .then( ( result ) => console.log( 'We got: ' + result ))
        .catch( ( error ) => console.error( 'Search failed:', error ));
});

