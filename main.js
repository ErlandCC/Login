function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("clave").value;
i=1;
usr="Raul";
cl="12345";
       if (u == usr && c==cl )
        {
             document.write("Bienvenido al sistema")
             i=4;
        }
        else {
          document.getElementById('result').innerHTML = ("¡Contraseña e Usuario incorrecto!")

        }
        

} 