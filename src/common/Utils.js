export const validatedField = (errors,fieldValue) => {
    //All fields are failing validation when not filled
    let invalid = fieldValue?true:false;
 
    if (typeof errors !== 'undefined')//Prevents compile failure
    {
        Object.values(errors).forEach(
            // if we have an error string set invalid to false
            (val) => {
                //Test if field has a value to be validated and there is no error message
                if(val.length > 0 && fieldValue){ 
                    invalid = false
                }
            }
          );
    } 

    return invalid;
  }
  export const formatTextToNumber=(textNumber)=>
  {
    return textNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }



