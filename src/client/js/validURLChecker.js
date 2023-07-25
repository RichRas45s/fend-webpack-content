function isValidURL (inputText) {
    console.log("::: Running checkForValidURL :::", inputText);
 

if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(inputText)) {
    alert("Thank You for entering a Valid URL !")
    } else( alert( "Hi Please Enter a valid URL "))
	}


export { isValidURL }
