# Información de un formulario guardada con localstorage - Save data from a form using localstorage <br>

- Desde un formulario dónde hay X campos con datos introducidos, utilizamos estos campos para guardarlos usando la propiedad localstorage y creamos un login.<br>
- We have a form with X fields for data, and we are going to use the localstorage property to save it and use for a login. 


Hemos usado el código realizado anteriormente: <br>
https://github.com/AitorSantaeugenia/validation_form/blob/master/README.md

We used this code created previously: <br>
https://github.com/AitorSantaeugenia/validation_form/blob/master/README.md

<b>Ejemplo del uso localstorage y validación del login (usuario+password) - Example of the use of localstorage property and login (checks if user+password are in the localstorage):</b><br>
save_data_from_form_localstorage.js

<b>Validacion de formulario, guarda datos en localstorage y login - Form validation, saving data with localstorage property and login:</b><br>
validations_formulari_v2_with_localstorage.js

![Alt text](https://cloud.githubusercontent.com/assets/14861253/18612495/4c920ed4-7d5b-11e6-98a7-563a259ae977.png)
![Alt text](https://cloud.githubusercontent.com/assets/14861253/18612494/4c90e964-7d5b-11e6-8c9a-88c9fe9fb9b3.png)

Lo proximo?, logearse!<br>
What's next?, a login!<br>

Eso lo hacemos con la funcion <b>"function checkUser()" en la línia 47 del documento</b> "save_data_from_form_localstorage.js", en un formulario básico (nick + password), mirará si el usuario y la contraseña existen en el localstorage. <br>
That's what the function <b>"function checkUser()" does in the 47th line of the "save_data_from_form_localstorage.js" document</b>. It will check if the user+password exists in the localstorage.
