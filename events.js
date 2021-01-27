module.exports = function (listen) {

    listen('create_contract', function (payload) {
        console.log(payload)
    });

    listen('update_contract', function (payload) {
        console.log(payload)
    });

}