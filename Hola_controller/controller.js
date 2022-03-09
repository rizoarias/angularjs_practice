var app = angular.module('Hola_controller', []);
app.controller('FirstController', function($scope) {
    $scope.nombre = "Brian";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "brian"
        },
        {
            comentario: "Me gusto mucho",
            username: "juan"
        }
    ];
    $scope.agregarComentario = function(comentario) {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});
