/**
 * Created by guilherme on 14/04/16.
 */
window.app.factory('PersonAPI',function(PersonDB,host,$http){


    var roles = ["palestrante","moderador","participante"];

    return {
        insert: function(user){
            return new Promise(function(resolve,reject){
                var data = {
                    client_name: user.name,
                    client_photo: user.photo,
                    user : user.user_id
                };




                var config = {
                    url: host.url+"/api/client",
                    data: JSON.stringify(data),
                    method: "POST",
                    headers: {
                        'Authorization' : user.access_token,
                        'Content-Type'  : 'application/json'
                    }

                };

                $http(config)
                .success(function(d){
                    resolve(d);
                })
                .error(function(e){
                    reject(e);
                });
            });
        }
    }
});
